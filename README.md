# 🛡️ NPTEL Ethical Hacking - Quick Quiz & Revision App

A fast, interactive, and mobile-friendly quiz website built for rapid revision of all **12 Weeks (120 Questions & Solutions)** of the **NPTEL Ethical Hacking** course (IIT Kharagpur).

---

## ⚡ Quick Start (Run Locally)

You have multiple zero-friction options:

### Option 1: Direct Double-Click (No server needed!)
- Simply double-click **`index.html`** in your file explorer to open it in your web browser (Chrome, Edge, Firefox, Safari).
- Everything works offline — no internet, Node.js, or server setup required!

### Option 2: Run with Local Server
```bash
# Using Node / npx
npm start
# or: npx serve .

# Or using Python
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Easy 1-Click Deployment to Vercel

This repository is pre-configured with `vercel.json` and a clean static Jamstack architecture.

### Method A: Deploy via GitHub & Vercel Dashboard (Easiest)
1. Push this folder to a new repository on [GitHub](https://github.com).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Import your GitHub repository.
5. Leave all build settings at their defaults (no build command needed — it is pure static).
6. Click **"Deploy"**! Your site is live in under 5 seconds with a free `.vercel.app` URL and global CDN.

### Method B: Deploy using Vercel CLI
Run the following in this folder:
```bash
npx vercel
```
Follow the 3 prompt questions (press Enter to accept defaults). To deploy directly to production:
```bash
npx vercel --prod
```

---

## 🎯 Features

1. **Complete Assignment Coverage (Weeks 1 to 12)**:
   - All 120 official assignment questions from IIT Kharagpur.
   - Verified official answers and step-by-step detailed explanations.
   - Supports **Single-Choice MCQs**, **Multi-Select MSQs** ("Select all that apply"), and **Numerical / Fill-in-the-blank** questions (with range matching).

2. **4 Powerful Study Modes**:
   - **🎯 Practice Quiz Mode**: Question-by-question drill with instant visual feedback (green/red highlights), explanation reveals, and jump slider.
   - **⚡ Flashcards Mode**: Rapid-fire memorization mode! Question on front, tap to flip and reveal answer + reasoning. Mark as "Mastered" or "Needs Review".
   - **⏱️ Timed Mock Exam Simulator**: Real exam simulator! Choose 10, 25, 50, or all 120 questions, set a countdown timer, use the interactive question palette (Answered, Flagged, Unvisited), and view a full scorecard with performance breakdown.
   - **📚 Question Bank Master List**: Searchable master sheet with expandable IIT Kharagpur solutions for last-minute cramming.

3. **Smart Filters & Instant Search**:
   - Filter by Week (W1 to W12 or All).
   - Filter by Question Type (MCQ, MSQ, Numerical).
   - Filter by Status (Unattempted, Correct, Incorrect / Needs Revision, Starred ⭐).
   - Real-time search: Type any keyword (e.g. `RSA`, `Diffie-Hellman`, `OSPF`, `CIA`, `nmap`, `buffer overflow`, `XSS`) to instantly filter matching questions.
   - Randomize / Shuffle order with one click.

4. **Offline Audio & Tactile Feedback**:
   - Built with the native HTML5 Web Audio API — zero external MP3s, zero network delays.
   - Subtle pleasant chime for correct answers, soft low buzz for mistakes (can be muted anytime).

5. **Keyboard Shortcuts**:
   - `A` - `D` or `1` - `4`: Pick options
   - `Enter`: Submit answer or advance
   - `→` / `←`: Next / Previous question
   - `Space`: Flip flashcard
   - `S`: Star / Bookmark question
   - `E`: Toggle detailed explanation
   - `?`: View shortcuts dialog

6. **Local Persistence**:
   - Progress, accuracy score, dark/light theme preference, and bookmarked questions automatically save to your browser's `localStorage`.
   - "Reset Progress" button available if you want to take the quiz fresh.

---

## 📁 Repository Structure
```
├── index.html           # Main semantic HTML5 single-page application
├── styles.css           # Modern responsive design system (dark/light themes)
├── app.js               # Application logic, audio synthesis, mock exam engine
├── data.js              # Complete 120-question bank loaded into window.QUIZ_DATA
├── questions.json       # JSON export of all parsed questions, answers & solutions
├── parse_questions.py   # Python parser that extracted all data from the official PDFs
├── vercel.json          # Vercel deployment configuration
├── package.json         # Project metadata and quick npm scripts
└── Assignment-ETH-*.pdf # Original NPTEL assignment PDFs (Weeks 1 to 12)
```
