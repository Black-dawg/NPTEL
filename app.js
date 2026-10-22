/**
 * NPTEL Ethical Hacking Assignment Quiz & Revision Engine
 * Single-Page Web App for Fast Revision & Mock Exams
 */

(function () {
  'use strict';

  // --- STATE ---
  const state = {
    allQuestions: [],
    filteredQuestions: [],
    currentIndex: 0,
    activeMode: 'practice', // 'practice', 'flashcards', 'mock', 'review'
    selectedWeek: 'all',
    selectedType: 'all',
    selectedStatus: 'all',
    searchQuery: '',
    isShuffled: false,
    
    // User progress (saved in LocalStorage)
    userAnswers: {},  // { [qId]: { userAns: [], isCorrect: bool, submitted: bool } }
    starred: new Set(),
    theme: 'dark',
    soundEnabled: true,
    
    // Mock Exam State
    mock: {
      questions: [],
      currentIndex: 0,
      userAnswers: {}, // { [qId]: [] }
      flagged: new Set(),
      timerSeconds: 1800,
      initialSeconds: 1800,
      timerInterval: null,
      isFinished: false
    }
  };

  // --- AUDIO SYNTHESIZER (Web Audio API - Zero External Dependencies) ---
  const audioCtx = (function () {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      return new AudioContext();
    } catch (e) {
      return null;
    }
  })();

  function playSound(type) {
    if (!state.soundEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'correct') {
        // Cheerful major chord arpeggio
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        // Soft low buzz
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.setValueAtTime(174.61, now + 0.1); // F3
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'click') {
        // Gentle click
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      // Audio playback failed silently
    }
  }

  // --- LOCAL STORAGE PERSISTENCE ---
  const STORAGE_KEYS = {
    ANSWERS: 'nptel_eth_answers_v1',
    STARRED: 'nptel_eth_starred_v1',
    THEME: 'nptel_eth_theme_v1',
    SOUND: 'nptel_eth_sound_v1'
  };

  function loadSavedState() {
    try {
      const savedAns = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      if (savedAns) state.userAnswers = JSON.parse(savedAns);

      const savedStarred = localStorage.getItem(STORAGE_KEYS.STARRED);
      if (savedStarred) state.starred = new Set(JSON.parse(savedStarred));

      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme) {
        state.theme = savedTheme;
        document.body.setAttribute('data-theme', savedTheme);
      }

      const savedSound = localStorage.getItem(STORAGE_KEYS.SOUND);
      if (savedSound !== null) {
        state.soundEnabled = JSON.parse(savedSound);
      }
    } catch (e) {
      console.warn('Could not load stored data from localStorage:', e);
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(state.userAnswers));
      localStorage.setItem(STORAGE_KEYS.STARRED, JSON.stringify([...state.starred]));
    } catch (e) {
      console.warn('Could not save progress to localStorage:', e);
    }
    updateHeaderStats();
  }

  // --- INIT DATA ---
  function initData() {
    if (window.QUIZ_DATA && Array.isArray(window.QUIZ_DATA)) {
      state.allQuestions = window.QUIZ_DATA;
      applyFilters();
      renderApp();
    } else {
      // Fallback: fetch questions.json
      fetch('questions.json')
        .then(res => res.json())
        .then(data => {
          state.allQuestions = data;
          applyFilters();
          renderApp();
        })
        .catch(err => {
          console.error('Failed to load questions:', err);
          document.getElementById('quizCardWrapper').innerHTML = `
            <div class="solution-box incorrect">
              <h3>Error loading question bank</h3>
              <p>Please check that data.js or questions.json is present in the folder.</p>
            </div>
          `;
        });
    }
  }

  // --- FILTERING & SEARCH ---
  function applyFilters() {
    let list = [...state.allQuestions];

    // Filter by Week
    if (state.selectedWeek !== 'all') {
      const w = parseInt(state.selectedWeek, 10);
      list = list.filter(q => q.week === w);
    }

    // Filter by Type
    if (state.selectedType !== 'all') {
      list = list.filter(q => q.type === state.selectedType);
    }

    // Filter by Status
    if (state.selectedStatus !== 'all') {
      if (state.selectedStatus === 'starred') {
        list = list.filter(q => state.starred.has(q.id));
      } else if (state.selectedStatus === 'unattempted') {
        list = list.filter(q => !state.userAnswers[q.id] || !state.userAnswers[q.id].submitted);
      } else if (state.selectedStatus === 'correct') {
        list = list.filter(q => state.userAnswers[q.id] && state.userAnswers[q.id].isCorrect);
      } else if (state.selectedStatus === 'incorrect') {
        list = list.filter(q => state.userAnswers[q.id] && state.userAnswers[q.id].submitted && !state.userAnswers[q.id].isCorrect);
      }
    }

    // Filter by Search Query
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase().trim();
      list = list.filter(q => {
        const inQ = q.question.toLowerCase().includes(query);
        const inOpts = q.options.some(o => o.text.toLowerCase().includes(query));
        const inSol = q.explanation.toLowerCase().includes(query);
        const inAns = q.correctAnswerRaw.toLowerCase().includes(query);
        return inQ || inOpts || inSol || inAns;
      });
    }

    // Shuffle if enabled
    if (state.isShuffled) {
      list = shuffleArray([...list]);
    }

    state.filteredQuestions = list;

    // Adjust currentIndex bounds
    if (state.currentIndex >= state.filteredQuestions.length) {
      state.currentIndex = Math.max(0, state.filteredQuestions.length - 1);
    }

    updateFilteredCount();
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function updateFilteredCount() {
    const el = document.getElementById('filteredCount');
    if (!el) return;
    el.textContent = `Showing ${state.filteredQuestions.length} of ${state.allQuestions.length} questions`;
  }

  // --- HEADER STATS ---
  function updateHeaderStats() {
    const total = state.allQuestions.length;
    let attempted = 0;
    let correct = 0;

    for (const q of state.allQuestions) {
      const ans = state.userAnswers[q.id];
      if (ans && ans.submitted) {
        attempted++;
        if (ans.isCorrect) correct++;
      }
    }

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    const progEl = document.getElementById('statProgress');
    const accEl = document.getElementById('statAccuracy');
    const starEl = document.getElementById('statStarred');

    if (progEl) progEl.textContent = `${attempted}/${total}`;
    if (accEl) accEl.textContent = `${accuracy}% (${correct}/${attempted})`;
    if (starEl) starEl.textContent = `⭐ ${state.starred.size}`;
  }

  // --- CHECK ANSWER LOGIC ---
  function checkAnswer(question, selectedAnswers) {
    if (!selectedAnswers) return false;

    if (question.type === 'mcq') {
      const target = question.correctKeys[0].toLowerCase();
      const user = (selectedAnswers[0] || '').toLowerCase();
      return user === target;
    } else if (question.type === 'msq') {
      const targetSet = new Set(question.correctKeys.map(k => k.toLowerCase()));
      const userSet = new Set(selectedAnswers.map(k => k.toLowerCase()));
      if (targetSet.size !== userSet.size) return false;
      for (const k of targetSet) {
        if (!userSet.has(k)) return false;
      }
      return true;
    } else if (question.type === 'numerical') {
      const userVal = (selectedAnswers[0] || '').trim().toLowerCase();
      const rawAns = question.correctAnswerRaw.toLowerCase().trim();

      // Check direct equality
      if (userVal === rawAns) return true;

      // Check numeric value or range e.g. "120 to 130"
      const rangeMatch = rawAns.match(/(\d+(?:\.\d+)?)\s*(?:to|-)\s*(\d+(?:\.\d+)?)/);
      if (rangeMatch) {
        const low = parseFloat(rangeMatch[1]);
        const high = parseFloat(rangeMatch[2]);
        const num = parseFloat(userVal);
        if (!isNaN(num) && num >= low && num <= high) {
          return true;
        }
      }

      // Check single number equivalence e.g. "20"
      const numTarget = parseFloat(rawAns);
      const numUser = parseFloat(userVal);
      if (!isNaN(numTarget) && !isNaN(numUser) && numTarget === numUser) {
        return true;
      }

      return false;
    }
    return false;
  }

  // ==========================================================================
  // PRACTICE VIEW RENDERING
  // ==========================================================================

  function renderPracticeCard() {
    const container = document.getElementById('quizCardWrapper');
    if (!container) return;

    if (state.filteredQuestions.length === 0) {
      container.innerHTML = `
        <div class="quiz-card" style="text-align: center; padding: 3rem 1rem;">
          <h3 style="margin-bottom: 0.5rem;">🔍 No Questions Match Your Filter</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try clearing the search query or selecting "All Weeks" / "All Types".</p>
          <button class="btn btn-primary" id="resetFilterQuickBtn">Reset Filters</button>
        </div>
      `;
      document.getElementById('resetFilterQuickBtn')?.addEventListener('click', () => {
        resetAllFilters();
      });
      updateNavControls();
      return;
    }

    const q = state.filteredQuestions[state.currentIndex];
    const userState = state.userAnswers[q.id] || { userAns: [], isCorrect: false, submitted: false };
    const isStarred = state.starred.has(q.id);

    // Badges
    const typeLabel = q.type === 'mcq' ? 'MCQ (Single Choice)' : q.type === 'msq' ? 'MSQ (Multi-Select)' : 'Numerical / Fill-in';
    const typeBadgeClass = q.type;

    let optionsHtml = '';

    if (q.type === 'mcq' || q.type === 'msq') {
      optionsHtml = `
        <div class="options-list" role="group" aria-label="Question options">
          ${q.options.map(opt => {
            const isSelected = userState.userAns.includes(opt.key);
            let stateClass = isSelected ? 'selected' : '';

            if (userState.submitted) {
              const isTarget = q.correctKeys.includes(opt.key);
              if (isTarget) {
                stateClass += ' is-correct';
              } else if (isSelected && !isTarget) {
                stateClass += ' is-wrong';
              }
            }

            return `
              <div class="option-item ${stateClass}" data-key="${opt.key}" tabindex="0" role="${q.type === 'mcq' ? 'radio' : 'checkbox'}" aria-checked="${isSelected}">
                <span class="option-key">${opt.key.toUpperCase()}</span>
                <span class="option-text">${escapeHtml(opt.text)}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      // Numerical Input
      const val = userState.userAns[0] || '';
      optionsHtml = `
        <div class="numerical-input-box">
          <input type="text" 
                 class="numerical-input" 
                 id="numericalInput" 
                 placeholder="Type your answer here..." 
                 value="${escapeHtml(val)}" 
                 ${userState.submitted ? 'disabled' : ''}
                 autocomplete="off" />
          <span style="font-size: 0.85rem; color: var(--text-muted);">(Press Enter to submit)</span>
        </div>
      `;
    }

    // Explanation Box (shown if submitted OR manually revealed)
    let explanationHtml = '';
    if (userState.submitted || userState.revealed) {
      const isCorrect = userState.isCorrect;
      explanationHtml = `
        <div class="solution-box ${userState.submitted ? (isCorrect ? 'correct' : 'incorrect') : ''}">
          <div class="solution-header">
            <span>
              ${userState.submitted 
                ? (isCorrect ? '🎉 Correct Answer!' : '❌ Incorrect') 
                : '💡 Solution & Explanation'}
            </span>
            <span class="badge ${isCorrect ? 'success' : 'danger'}">
              Accepted Answer: <strong>${escapeHtml(q.correctAnswerRaw)}</strong>
            </span>
          </div>
          <div class="solution-body">${formatExplanation(q.explanation)}</div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="quiz-card" data-qid="${q.id}">
        <div class="card-header-row">
          <div class="badges-group">
            <span class="badge week">Week ${q.week} · Question ${q.qIndex}</span>
            <span class="badge ${typeBadgeClass}">${typeLabel}</span>
            ${userState.submitted ? (userState.isCorrect ? '<span class="badge success">Passed ✓</span>' : '<span class="badge danger">Needs Review ✗</span>') : ''}
          </div>
          <button class="star-btn ${isStarred ? 'active' : ''}" id="starToggleBtn" title="Star / Bookmark Question (S)">
            ⭐
          </button>
        </div>

        <div class="question-text">${escapeHtml(q.question)}</div>

        ${optionsHtml}

        <div class="card-actions-row">
          <div class="action-buttons-left">
            ${!userState.submitted ? `
              <button class="btn btn-primary" id="checkAnsBtn">
                ✓ Check Answer <kbd>Enter</kbd>
              </button>
            ` : `
              <button class="btn btn-secondary" id="retryAnsBtn">
                🔄 Try Again
              </button>
            `}
            <button class="btn btn-secondary" id="revealSolBtn">
              💡 ${userState.submitted || userState.revealed ? 'Hide Explanation' : 'Show Explanation'} <kbd>E</kbd>
            </button>
          </div>
          <div>
            <span style="font-size: 0.82rem; color: var(--text-muted);">
              ${q.type === 'msq' ? 'Select all options that apply' : 'Select one option'}
            </span>
          </div>
        </div>

        ${explanationHtml}
      </div>
    `;

    attachPracticeEventListeners(q);
    updateNavControls();
  }

  function attachPracticeEventListeners(question) {
    const card = document.querySelector('.quiz-card');
    if (!card) return;

    // Star Toggle
    const starBtn = document.getElementById('starToggleBtn');
    starBtn?.addEventListener('click', () => {
      toggleStar(question.id);
      starBtn.classList.toggle('active', state.starred.has(question.id));
    });

    // Options selection
    const optionItems = card.querySelectorAll('.option-item');
    optionItems.forEach(item => {
      item.addEventListener('click', () => {
        handleOptionClick(question, item.getAttribute('data-key'));
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleOptionClick(question, item.getAttribute('data-key'));
        }
      });
    });

    // Check Answer Button
    const checkBtn = document.getElementById('checkAnsBtn');
    checkBtn?.addEventListener('click', () => {
      submitPracticeAnswer(question);
    });

    // Retry Button
    const retryBtn = document.getElementById('retryAnsBtn');
    retryBtn?.addEventListener('click', () => {
      delete state.userAnswers[question.id];
      saveProgress();
      renderPracticeCard();
    });

    // Reveal Solution Button
    const revealBtn = document.getElementById('revealSolBtn');
    revealBtn?.addEventListener('click', () => {
      const uState = state.userAnswers[question.id] || { userAns: [], isCorrect: false, submitted: false };
      uState.revealed = !uState.revealed;
      state.userAnswers[question.id] = uState;
      renderPracticeCard();
    });

    // Numerical Input Keydown
    const numInput = document.getElementById('numericalInput');
    numInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitPracticeAnswer(question);
      }
    });
  }

  function handleOptionClick(question, key) {
    const uState = state.userAnswers[question.id] || { userAns: [], isCorrect: false, submitted: false };
    if (uState.submitted) return; // Prevent changing after submission

    playSound('click');

    if (question.type === 'mcq') {
      uState.userAns = [key];
    } else if (question.type === 'msq') {
      const idx = uState.userAns.indexOf(key);
      if (idx > -1) {
        uState.userAns.splice(idx, 1);
      } else {
        uState.userAns.push(key);
      }
    }

    state.userAnswers[question.id] = uState;
    renderPracticeCard();
  }

  function submitPracticeAnswer(question) {
    let uState = state.userAnswers[question.id] || { userAns: [], isCorrect: false, submitted: false };

    if (question.type === 'numerical') {
      const numInput = document.getElementById('numericalInput');
      const val = numInput ? numInput.value.trim() : '';
      if (!val) {
        alert('Please enter an answer before checking.');
        return;
      }
      uState.userAns = [val];
    } else {
      if (uState.userAns.length === 0) {
        alert('Please choose an answer before checking.');
        return;
      }
    }

    const isCorrect = checkAnswer(question, uState.userAns);
    uState.isCorrect = isCorrect;
    uState.submitted = true;
    uState.revealed = true;

    state.userAnswers[question.id] = uState;
    saveProgress();

    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('wrong');
    }

    renderPracticeCard();
  }

  function toggleStar(qid) {
    if (state.starred.has(qid)) {
      state.starred.delete(qid);
    } else {
      state.starred.add(qid);
      playSound('click');
    }
    saveProgress();
  }

  function updateNavControls() {
    const total = state.filteredQuestions.length;
    const current = total > 0 ? state.currentIndex + 1 : 0;

    const jumpText = document.getElementById('jumpText');
    const jumpSlider = document.getElementById('jumpSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (jumpText) jumpText.textContent = `Question ${current} of ${total}`;
    if (jumpSlider) {
      jumpSlider.min = total > 0 ? 1 : 0;
      jumpSlider.max = total;
      jumpSlider.value = current;
      jumpSlider.disabled = total <= 1;
    }

    if (prevBtn) prevBtn.disabled = state.currentIndex <= 0 || total === 0;
    if (nextBtn) nextBtn.disabled = state.currentIndex >= total - 1 || total === 0;
  }

  // ==========================================================================
  // FLASHCARDS VIEW RENDERING
  // ==========================================================================

  function renderFlashcard() {
    const fc = document.getElementById('flashcard');
    if (!fc || state.filteredQuestions.length === 0) return;

    // Reset flip state
    fc.classList.remove('flipped');

    const q = state.filteredQuestions[state.currentIndex];
    const isStarred = state.starred.has(q.id);

    // Front elements
    document.getElementById('fcWeekBadge').textContent = `Week ${q.week} · Q${q.qIndex}`;
    document.getElementById('fcTypeBadge').textContent = q.type.toUpperCase();
    document.getElementById('fcQuestionText').textContent = q.question;

    const fcStarBtn = document.getElementById('fcStarBtn');
    if (fcStarBtn) {
      fcStarBtn.classList.toggle('active', isStarred);
      fcStarBtn.onclick = (e) => {
        e.stopPropagation();
        toggleStar(q.id);
        fcStarBtn.classList.toggle('active', state.starred.has(q.id));
      };
    }

    // Preview options on front if MCQ/MSQ
    const optsPreview = document.getElementById('fcOptionsPreview');
    if (optsPreview) {
      if (q.options.length > 0) {
        optsPreview.innerHTML = q.options.map(o => `
          <div><strong>${o.key.toUpperCase()}.</strong> ${escapeHtml(o.text)}</div>
        `).join('');
      } else {
        optsPreview.innerHTML = '<div style="font-style: italic; color: var(--text-muted);">(Numerical / Short Answer)</div>';
      }
    }

    // Back elements
    document.getElementById('fcCorrectAnswer').textContent = q.correctAnswerRaw;
    document.getElementById('fcSolutionText').innerHTML = formatExplanation(q.explanation);

    const fcStarBtnBack = document.getElementById('fcStarBtnBack');
    if (fcStarBtnBack) {
      fcStarBtnBack.classList.toggle('active', isStarred);
      fcStarBtnBack.onclick = (e) => {
        e.stopPropagation();
        toggleStar(q.id);
        fcStarBtnBack.classList.toggle('active', state.starred.has(q.id));
      };
    }

    // Counter
    document.getElementById('fcCounter').textContent = `Card ${state.currentIndex + 1} / ${state.filteredQuestions.length}`;
  }

  function flipFlashcard() {
    const fc = document.getElementById('flashcard');
    if (fc) {
      fc.classList.toggle('flipped');
      playSound('click');
    }
  }

  // ==========================================================================
  // TIMED MOCK EXAM ENGINE
  // ==========================================================================

  function startMockExam() {
    const countVal = parseInt(document.querySelector('input[name="mockCount"]:checked').value, 10);
    const scopeVal = document.getElementById('mockWeekScope').value;
    const timeMins = parseInt(document.querySelector('input[name="mockTime"]:checked').value, 10);

    // Pick question candidates
    let pool = [...state.allQuestions];
    if (scopeVal === 'first-half') {
      pool = pool.filter(q => q.week <= 6);
    } else if (scopeVal === 'second-half') {
      pool = pool.filter(q => q.week > 6);
    } else if (scopeVal === 'current' && state.selectedWeek !== 'all') {
      pool = pool.filter(q => q.week === parseInt(state.selectedWeek, 10));
    }

    // Shuffle and slice count
    pool = shuffleArray(pool);
    state.mock.questions = pool.slice(0, Math.min(countVal, pool.length));
    state.mock.currentIndex = 0;
    state.mock.userAnswers = {};
    state.mock.flagged = new Set();
    state.mock.isFinished = false;

    // Timer setup
    if (timeMins > 0) {
      state.mock.timerSeconds = timeMins * 60;
      state.mock.initialSeconds = timeMins * 60;
      startMockTimer();
    } else {
      state.mock.timerSeconds = 0;
      state.mock.initialSeconds = 0;
      const tEl = document.getElementById('mockTimer');
      if (tEl) tEl.innerHTML = '⏱️ Untimed';
    }

    // Show active screen
    document.getElementById('mockSetupScreen').style.display = 'none';
    document.getElementById('mockActiveScreen').style.display = 'flex';
    document.getElementById('mockResultScreen').style.display = 'none';

    const pCountEl = document.getElementById('mockPaletteCount');
    if (pCountEl) pCountEl.textContent = `1-${state.mock.questions.length}`;

    renderMockCurrentQuestion();
    renderMockPalette();
  }

  function startMockTimer() {
    if (state.mock.timerInterval) clearInterval(state.mock.timerInterval);

    updateTimerDisplay();

    state.mock.timerInterval = setInterval(() => {
      state.mock.timerSeconds--;
      updateTimerDisplay();

      if (state.mock.timerSeconds <= 0) {
        clearInterval(state.mock.timerInterval);
        alert('⏰ Time is up! Submitting your mock exam.');
        finishMockExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = document.getElementById('mockTimer');
    if (!el || state.mock.initialSeconds === 0) return;

    const m = Math.floor(state.mock.timerSeconds / 60);
    const s = state.mock.timerSeconds % 60;
    const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    el.innerHTML = `⏳ <span>${str}</span>`;

    if (state.mock.timerSeconds < 120) {
      el.classList.add('urgent');
    } else {
      el.classList.remove('urgent');
    }
  }

  function renderMockCurrentQuestion() {
    const qArea = document.getElementById('mockQuestionArea');
    if (!qArea || state.mock.questions.length === 0) return;

    const q = state.mock.questions[state.mock.currentIndex];
    const userAns = state.mock.userAnswers[q.id] || [];

    document.getElementById('mockProgressText').textContent = `Question ${state.mock.currentIndex + 1} of ${state.mock.questions.length}`;

    let optionsHtml = '';
    if (q.type === 'mcq' || q.type === 'msq') {
      optionsHtml = `
        <div class="options-list">
          ${q.options.map(opt => {
            const isSelected = userAns.includes(opt.key);
            return `
              <div class="option-item ${isSelected ? 'selected' : ''}" data-mock-key="${opt.key}">
                <span class="option-key">${opt.key.toUpperCase()}</span>
                <span class="option-text">${escapeHtml(opt.text)}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      const val = userAns[0] || '';
      optionsHtml = `
        <div class="numerical-input-box">
          <input type="text" 
                 class="numerical-input" 
                 id="mockNumInput" 
                 placeholder="Type your numerical answer..." 
                 value="${escapeHtml(val)}" />
        </div>
      `;
    }

    qArea.innerHTML = `
      <div class="card-header-row">
        <div class="badges-group">
          <span class="badge week">Week ${q.week} · Q${q.qIndex}</span>
          <span class="badge ${q.type}">${q.type.toUpperCase()}</span>
        </div>
        ${state.mock.flagged.has(q.id) ? '<span class="badge" style="background:var(--color-warning); color:#fff;">🚩 Flagged</span>' : ''}
      </div>
      <div class="question-text">${escapeHtml(q.question)}</div>
      ${optionsHtml}
    `;

    // Attach click events
    qArea.querySelectorAll('.option-item').forEach(item => {
      item.addEventListener('click', () => {
        const key = item.getAttribute('data-mock-key');
        handleMockOptionClick(q, key);
      });
    });

    const numInp = document.getElementById('mockNumInput');
    numInp?.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val) {
        state.mock.userAnswers[q.id] = [val];
      } else {
        delete state.mock.userAnswers[q.id];
      }
      renderMockPalette();
    });

    // Update flag button text
    const flagBtn = document.getElementById('mockFlagBtn');
    if (flagBtn) {
      flagBtn.textContent = state.mock.flagged.has(q.id) ? '🚩 Unflag' : '🚩 Flag for Review';
    }

    // Update prev/next disabled states
    document.getElementById('mockPrevBtn').disabled = state.mock.currentIndex === 0;
    document.getElementById('mockNextBtn').disabled = state.mock.currentIndex === state.mock.questions.length - 1;

    renderMockPalette();
  }

  function handleMockOptionClick(question, key) {
    playSound('click');
    let ans = state.mock.userAnswers[question.id] || [];

    if (question.type === 'mcq') {
      ans = [key];
    } else if (question.type === 'msq') {
      const idx = ans.indexOf(key);
      if (idx > -1) {
        ans.splice(idx, 1);
      } else {
        ans.push(key);
      }
    }

    if (ans.length > 0) {
      state.mock.userAnswers[question.id] = ans;
    } else {
      delete state.mock.userAnswers[question.id];
    }

    renderMockCurrentQuestion();
  }

  function renderMockPalette() {
    const palette = document.getElementById('mockPaletteGrid');
    if (!palette) return;

    palette.innerHTML = state.mock.questions.map((q, idx) => {
      const isCurrent = idx === state.mock.currentIndex;
      const isAnswered = !!state.mock.userAnswers[q.id];
      const isMarked = state.mock.flagged.has(q.id);

      let cls = 'palette-btn';
      if (isCurrent) cls += ' current';
      if (isAnswered) cls += ' answered';
      else if (isMarked) cls += ' marked';

      return `<button class="${cls}" data-mock-idx="${idx}">${idx + 1}</button>`;
    }).join('');

    palette.querySelectorAll('.palette-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.mock.currentIndex = parseInt(btn.getAttribute('data-mock-idx'), 10);
        renderMockCurrentQuestion();
        if (window.innerWidth <= 768) {
          document.getElementById('mockPaletteSidebar')?.classList.remove('mobile-open');
        }
      });
    });
  }

  function finishMockExam() {
    if (state.mock.timerInterval) clearInterval(state.mock.timerInterval);
    state.mock.isFinished = true;

    // Calculate score
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    const breakdown = state.mock.questions.map(q => {
      const userAns = state.mock.userAnswers[q.id];
      let isCorrect = false;
      let status = 'unattempted';

      if (userAns && userAns.length > 0) {
        isCorrect = checkAnswer(q, userAns);
        status = isCorrect ? 'correct' : 'wrong';
        if (isCorrect) correctCount++;
        else wrongCount++;

        // Also record in global userAnswers for permanent mastery tracking!
        state.userAnswers[q.id] = { userAns, isCorrect, submitted: true, revealed: true };
      } else {
        unattemptedCount++;
      }

      return { question: q, userAns, isCorrect, status };
    });

    saveProgress();

    const total = state.mock.questions.length;
    const pct = Math.round((correctCount / total) * 100);

    // Switch view
    document.getElementById('mockActiveScreen').style.display = 'none';
    const resScreen = document.getElementById('mockResultScreen');
    resScreen.style.display = 'block';

    resScreen.innerHTML = `
      <div class="result-score-hero">
        <div class="result-circle">
          <span class="result-pct">${pct}%</span>
          <span class="result-lbl">${pct >= 75 ? 'Excellent 🎉' : pct >= 50 ? 'Good Effort 👍' : 'Needs Practice 📖'}</span>
        </div>
        <h2>Exam Report & Score Breakdown</h2>
        <p style="color:var(--text-secondary);">Here is how you performed on this simulation of NPTEL Ethical Hacking.</p>
      </div>

      <div class="result-summary-grid">
        <div class="result-card-stat green">
          <div class="lbl">Correct Answers</div>
          <div class="val">${correctCount} / ${total}</div>
        </div>
        <div class="result-card-stat red">
          <div class="lbl">Incorrect Answers</div>
          <div class="val">${wrongCount}</div>
        </div>
        <div class="result-card-stat purple">
          <div class="lbl">Unattempted</div>
          <div class="val">${unattemptedCount}</div>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <button class="btn btn-primary" id="retakeMockBtn">🔄 Retake Another Mock</button>
      </div>

      <h3 style="text-align: left; margin-bottom: 1rem;">Detailed Question Breakdown</h3>
      <div class="review-list">
        ${breakdown.map((item, i) => {
          const q = item.question;
          const statusBadge = item.status === 'correct' 
            ? '<span class="badge success">Correct ✓</span>' 
            : item.status === 'wrong' 
            ? '<span class="badge danger">Wrong ✗</span>' 
            : '<span class="badge">Unattempted</span>';

          return `
            <div class="review-item">
              <div class="review-item-header">
                <div class="badges-group">
                  <span class="badge week">Q${i + 1} · Week ${q.week}</span>
                  ${statusBadge}
                </div>
                <span style="font-size:0.85rem; font-weight:700; color:var(--color-success);">
                  Correct: ${escapeHtml(q.correctAnswerRaw)}
                </span>
              </div>
              <div class="review-item-question">${escapeHtml(q.question)}</div>
              ${item.userAns ? `
                <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom: 0.5rem;">
                  Your answer: <strong>${escapeHtml(item.userAns.join(', '))}</strong>
                </div>
              ` : ''}
              <div class="review-sol-drawer open">
                <strong>Solution:</strong> ${formatExplanation(q.explanation)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    document.getElementById('retakeMockBtn')?.addEventListener('click', () => {
      resScreen.style.display = 'none';
      document.getElementById('mockSetupScreen').style.display = 'block';
    });
  }

  // ==========================================================================
  // ALL QUESTIONS MASTER REVIEW LIST
  // ==========================================================================

  function renderReviewList() {
    const container = document.getElementById('reviewList');
    if (!container) return;

    if (state.filteredQuestions.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
          No questions found matching current filter.
        </div>
      `;
      return;
    }

    container.innerHTML = state.filteredQuestions.map(q => {
      const isStarred = state.starred.has(q.id);
      const userState = state.userAnswers[q.id];

      let optsHtml = '';
      if (q.options.length > 0) {
        optsHtml = `
          <div class="review-item-options">
            ${q.options.map(o => {
              const isCorrectOpt = q.correctKeys.includes(o.key);
              return `
                <div class="review-opt ${isCorrectOpt ? 'correct' : ''}">
                  <strong>${o.key.toUpperCase()}.</strong>
                  <span>${escapeHtml(o.text)}</span>
                  ${isCorrectOpt ? '<span style="margin-left:auto; color:var(--color-success); font-weight:700;">✓ Correct</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      return `
        <div class="review-item" data-qid="${q.id}">
          <div class="review-item-header">
            <div class="badges-group">
              <span class="badge week">Week ${q.week} · Q${q.qIndex}</span>
              <span class="badge ${q.type}">${q.type.toUpperCase()}</span>
              ${userState && userState.submitted ? (userState.isCorrect ? '<span class="badge success">Passed</span>' : '<span class="badge danger">Mistake</span>') : ''}
            </div>
            <button class="star-btn ${isStarred ? 'active' : ''}" data-star-id="${q.id}">⭐</button>
          </div>

          <div class="review-item-question">${escapeHtml(q.question)}</div>

          ${optsHtml}

          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:0.75rem;">
            <div style="font-size:0.9rem;">
              <strong>Correct Answer:</strong> <span style="color:var(--color-success); font-weight:700;">${escapeHtml(q.correctAnswerRaw)}</span>
            </div>
            <button class="review-expand-btn" data-toggle-sol="${q.id}">
              <span>View Solution</span> ▼
            </button>
          </div>

          <div class="review-sol-drawer" id="solDrawer_${q.id}">
            <strong>Detailed Solution:</strong>
            ${formatExplanation(q.explanation)}
          </div>
        </div>
      `;
    }).join('');

    // Attach drawer toggles and star buttons
    container.querySelectorAll('[data-toggle-sol]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-toggle-sol');
        const drawer = document.getElementById(`solDrawer_${qid}`);
        if (drawer) {
          const isOpen = drawer.classList.toggle('open');
          btn.innerHTML = isOpen ? '<span>Hide Solution</span> ▲' : '<span>View Solution</span> ▼';
        }
      });
    });

    container.querySelectorAll('[data-star-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-star-id');
        toggleStar(qid);
        btn.classList.toggle('active', state.starred.has(qid));
      });
    });
  }

  // ==========================================================================
  // NAVIGATION & MODE SWITCHING
  // ==========================================================================

  function switchMode(mode) {
    state.activeMode = mode;

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const target = document.getElementById(`${mode}View`);
    if (target) target.classList.add('active');

    // Filter toolbar is visible for Practice, Flashcards, and Review, hidden in Mock active
    const toolbar = document.getElementById('filterToolbar');
    if (toolbar) {
      toolbar.style.display = (mode === 'mock') ? 'none' : 'flex';
    }

    renderCurrentMode();
  }

  function renderCurrentMode() {
    if (state.activeMode === 'practice') {
      renderPracticeCard();
    } else if (state.activeMode === 'flashcards') {
      renderFlashcard();
    } else if (state.activeMode === 'review') {
      renderReviewList();
    }
  }

  function nextQuestion() {
    if (state.currentIndex < state.filteredQuestions.length - 1) {
      state.currentIndex++;
      renderCurrentMode();
    }
  }

  function prevQuestion() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentMode();
    }
  }

  function resetAllFilters() {
    state.selectedWeek = 'all';
    state.selectedType = 'all';
    state.selectedStatus = 'all';
    state.searchQuery = '';
    state.isShuffled = false;
    state.currentIndex = 0;

    // Reset UI controls
    document.querySelectorAll('.week-pills .pill-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-week') === 'all');
    });
    const typeF = document.getElementById('typeFilter');
    if (typeF) typeF.value = 'all';
    const statF = document.getElementById('statusFilter');
    if (statF) statF.value = 'all';
    const sInput = document.getElementById('searchInput');
    if (sInput) sInput.value = '';
    const clr = document.getElementById('clearSearch');
    if (clr) clr.style.display = 'none';

    applyFilters();
    renderCurrentMode();
  }

  // ==========================================================================
  // UTILITIES & FORMATTING
  // ==========================================================================

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatExplanation(text) {
    if (!text) return 'No detailed solution provided.';
    const escaped = escapeHtml(text);
    return escaped.replace(/\n/g, '<br>');
  }

  // ==========================================================================
  // EVENT LISTENERS & SETUP
  // ==========================================================================

  function setupEventListeners() {
    // Mode Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchMode(btn.getAttribute('data-mode'));
      });
    });

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn?.addEventListener('click', () => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      state.theme = newTheme;
      document.body.setAttribute('data-theme', newTheme);
      themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    });

    // Sound Toggle
    const soundBtn = document.getElementById('soundToggle');
    soundBtn?.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      soundBtn.textContent = state.soundEnabled ? '🔊' : '🔇';
      localStorage.setItem(STORAGE_KEYS.SOUND, JSON.stringify(state.soundEnabled));
    });

    // Reset Progress
    const resetBtn = document.getElementById('resetBtn');
    resetBtn?.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all your quiz answers and progress? Bookmarks will be kept.')) {
        state.userAnswers = {};
        saveProgress();
        renderCurrentMode();
      }
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    searchInput?.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearSearch) clearSearch.style.display = state.searchQuery ? 'block' : 'none';
      state.currentIndex = 0;
      applyFilters();
      renderCurrentMode();
    });

    clearSearch?.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearch.style.display = 'none';
      state.currentIndex = 0;
      applyFilters();
      renderCurrentMode();
    });

    // Week Selector Pills
    document.querySelectorAll('.week-pills .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.week-pills .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedWeek = btn.getAttribute('data-week');
        state.currentIndex = 0;
        applyFilters();
        renderCurrentMode();
      });
    });

    // Type and Status Selects
    document.getElementById('typeFilter')?.addEventListener('change', (e) => {
      state.selectedType = e.target.value;
      state.currentIndex = 0;
      applyFilters();
      renderCurrentMode();
    });

    document.getElementById('statusFilter')?.addEventListener('change', (e) => {
      state.selectedStatus = e.target.value;
      state.currentIndex = 0;
      applyFilters();
      renderCurrentMode();
    });

    // Shuffle Button
    const shuffleBtn = document.getElementById('shuffleBtn');
    shuffleBtn?.addEventListener('click', () => {
      state.isShuffled = !state.isShuffled;
      shuffleBtn.classList.toggle('active', state.isShuffled);
      shuffleBtn.style.color = state.isShuffled ? 'var(--accent-primary)' : '';
      applyFilters();
      renderCurrentMode();
    });

    // Practice Nav Buttons
    document.getElementById('prevBtn')?.addEventListener('click', prevQuestion);
    document.getElementById('nextBtn')?.addEventListener('click', nextQuestion);

    const jumpSlider = document.getElementById('jumpSlider');
    jumpSlider?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val) && val >= 1 && val <= state.filteredQuestions.length) {
        state.currentIndex = val - 1;
        renderPracticeCard();
      }
    });

    // Flashcard Controls
    const fc = document.getElementById('flashcard');
    fc?.addEventListener('click', flipFlashcard);
    document.getElementById('fcFlipBtn')?.addEventListener('click', flipFlashcard);
    document.getElementById('fcPrevBtn')?.addEventListener('click', prevQuestion);
    document.getElementById('fcNextBtn')?.addEventListener('click', nextQuestion);

    document.getElementById('fcMasteredBtn')?.addEventListener('click', () => {
      if (state.filteredQuestions.length === 0) return;
      const q = state.filteredQuestions[state.currentIndex];
      state.userAnswers[q.id] = { userAns: q.correctKeys, isCorrect: true, submitted: true, revealed: true };
      playSound('correct');
      saveProgress();
      nextQuestion();
    });

    document.getElementById('fcReviewBtn')?.addEventListener('click', () => {
      if (state.filteredQuestions.length === 0) return;
      const q = state.filteredQuestions[state.currentIndex];
      state.userAnswers[q.id] = { userAns: [], isCorrect: false, submitted: true, revealed: true };
      playSound('wrong');
      saveProgress();
      nextQuestion();
    });

    // Mock Exam Controls
    document.getElementById('startMockBtn')?.addEventListener('click', startMockExam);
    document.getElementById('mockPrevBtn')?.addEventListener('click', () => {
      if (state.mock.currentIndex > 0) {
        state.mock.currentIndex--;
        renderMockCurrentQuestion();
      }
    });
    document.getElementById('mockNextBtn')?.addEventListener('click', () => {
      if (state.mock.currentIndex < state.mock.questions.length - 1) {
        state.mock.currentIndex++;
        renderMockCurrentQuestion();
      }
    });
    document.getElementById('mockFlagBtn')?.addEventListener('click', () => {
      const q = state.mock.questions[state.mock.currentIndex];
      if (state.mock.flagged.has(q.id)) {
        state.mock.flagged.delete(q.id);
      } else {
        state.mock.flagged.add(q.id);
      }
      renderMockCurrentQuestion();
    });

    document.getElementById('submitMockEarlyBtn')?.addEventListener('click', () => {
      const answeredCount = Object.keys(state.mock.userAnswers).length;
      const total = state.mock.questions.length;
      if (confirm(`You have answered ${answeredCount} of ${total} questions. Are you sure you want to finish the exam now?`)) {
        finishMockExam();
      }
    });

    // Mobile Mock Exam Palette Toggle
    const paletteSidebar = document.getElementById('mockPaletteSidebar');
    document.getElementById('togglePaletteBtn')?.addEventListener('click', () => {
      paletteSidebar?.classList.toggle('mobile-open');
    });
    document.getElementById('closePaletteMobileBtn')?.addEventListener('click', () => {
      paletteSidebar?.classList.remove('mobile-open');
    });

    // Touch Swipe gestures for Flashcards Mode
    let touchStartX = 0;
    const flashcardEl = document.getElementById('flashcard');
    flashcardEl?.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    flashcardEl?.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) {
          nextQuestion(); // swipe left -> next card
        } else {
          prevQuestion(); // swipe right -> previous card
        }
      }
    }, { passive: true });


    // Expand / Collapse All in Review List
    document.getElementById('expandAllBtn')?.addEventListener('click', () => {
      document.querySelectorAll('.review-sol-drawer').forEach(d => d.classList.add('open'));
      document.querySelectorAll('[data-toggle-sol]').forEach(b => b.innerHTML = '<span>Hide Solution</span> ▲');
    });

    document.getElementById('collapseAllBtn')?.addEventListener('click', () => {
      document.querySelectorAll('.review-sol-drawer').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('[data-toggle-sol]').forEach(b => b.innerHTML = '<span>View Solution</span> ▼');
    });

    // Shortcuts Modal
    const shortcutsModal = document.getElementById('shortcutsModal');
    document.getElementById('shortcutsBtn')?.addEventListener('click', () => {
      shortcutsModal.style.display = 'flex';
    });
    document.getElementById('closeShortcutsModal')?.addEventListener('click', () => {
      shortcutsModal.style.display = 'none';
    });
    shortcutsModal?.addEventListener('click', (e) => {
      if (e.target === shortcutsModal) shortcutsModal.style.display = 'none';
    });

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Don't trigger if user is typing in a search bar or text input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') document.activeElement.blur();
        return;
      }

      if (e.key === '?') {
        shortcutsModal.style.display = 'flex';
        return;
      }

      if (e.key === 'Escape') {
        shortcutsModal.style.display = 'none';
        return;
      }

      // Flashcards Mode Keys
      if (state.activeMode === 'flashcards') {
        if (e.key === ' ' || e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === 'ArrowRight') {
          nextQuestion();
        } else if (e.key === 'ArrowLeft') {
          prevQuestion();
        }
        return;
      }

      // Practice Mode Keys
      if (state.activeMode === 'practice' && state.filteredQuestions.length > 0) {
        const q = state.filteredQuestions[state.currentIndex];

        // Arrow navigation
        if (e.key === 'ArrowRight') {
          nextQuestion();
          return;
        }
        if (e.key === 'ArrowLeft') {
          prevQuestion();
          return;
        }

        // Toggle Star
        if (e.key === 's' || e.key === 'S') {
          toggleStar(q.id);
          renderPracticeCard();
          return;
        }

        // Toggle Explanation
        if (e.key === 'e' || e.key === 'E') {
          const uState = state.userAnswers[q.id] || { userAns: [], isCorrect: false, submitted: false };
          uState.revealed = !uState.revealed;
          state.userAnswers[q.id] = uState;
          renderPracticeCard();
          return;
        }

        // Submit on Enter
        if (e.key === 'Enter') {
          const uState = state.userAnswers[q.id];
          if (!uState || !uState.submitted) {
            submitPracticeAnswer(q);
          } else {
            nextQuestion();
          }
          return;
        }

        // Options Selection A-H or 1-8
        if (q.type === 'mcq' || q.type === 'msq') {
          const keyMap = {
            'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f',
            '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f'
          };
          const pressed = e.key.toLowerCase();
          if (keyMap[pressed]) {
            const optKey = keyMap[pressed];
            if (q.options.some(o => o.key === optKey)) {
              handleOptionClick(q, optKey);
            }
          }
        }
      }
    });
  }

  function renderApp() {
    updateHeaderStats();
    renderCurrentMode();
  }

  // Startup
  loadSavedState();
  setupEventListeners();
  initData();

})();
