import os
import re
import json
import fitz

def clean_paragraph_text(text):
    if not text:
        return ""
    # Replace non-breaking spaces or weird spaces
    text = text.replace('\xa0', ' ').replace('\u200b', '')
    # Replace curly quotes / apostrophes with standard clean quotes
    text = text.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    text = text.replace('–', '-').replace('—', '-')
    
    # Split into paragraphs by double newlines or explicit breaks
    paragraphs = text.split('\n\n')
    cleaned_paras = []
    for para in paragraphs:
        lines = [l.strip() for l in para.split('\n') if l.strip()]
        if not lines:
            continue
        # Check if lines look like a list or calculation step (starts with bullet, digit, or math)
        is_list = any(re.match(r'^[\d\*\-\•]\s+', l) or '=' in l for l in lines)
        if is_list:
            cleaned_paras.append("\n".join(lines))
        else:
            # Join lines with a single space
            joined = " ".join(lines)
            joined = re.sub(r'\s+', ' ', joined)
            cleaned_paras.append(joined)
            
    return "\n\n".join(cleaned_paras).strip()

def parse_week(week_num, pdf_path):
    doc = fitz.open(pdf_path)
    full_text = ""
    for page in doc:
        full_text += page.get_text() + "\n"
    
    # Remove recurring NPTEL headers
    full_text = re.sub(
        r'NPTEL Online Certification Courses\s*\n\s*Indian Institute of Technology Kharagpur\s*',
        '',
        full_text
    )
    full_text = re.sub(r'Course Name:\s*ETHICAL HACKING\s*', '', full_text)
    full_text = re.sub(r'Assignment-\s*Week\s*\d+\s*', '', full_text)
    full_text = re.sub(r'TYPE OF QUESTION:.*?\n', '', full_text)
    full_text = re.sub(r'Number of questions:.*?\n', '', full_text)
    full_text = re.sub(r'Total marks:.*?\n', '', full_text)

    # Split by QUESTION <num>:
    q_splits = re.split(r'QUESTION\s+(\d+)\s*:', full_text)
    
    questions = []
    for i in range(1, len(q_splits), 2):
        q_num = int(q_splits[i])
        chunk = q_splits[i+1].strip()
        
        # Split chunk into: Question + Options, Correct Answer, Detailed Solution
        ans_match = re.search(r'Correct\s*Answer\s*:\s*(.*?)(?=\n\s*(?:Detail(?:ed)?\s*Solution|QUESTION|_|\*|$))', chunk, re.DOTALL | re.IGNORECASE)
        ans_raw = ans_match.group(1).strip() if ans_match else ""
        
        sol_match = re.search(r'Detail(?:ed)?\s*Solution\s*:\s*(.*?)(?=\n\s*(?:QUESTION|_+|\*+|$))', chunk, re.DOTALL | re.IGNORECASE)
        sol_raw = sol_match.group(1).strip() if sol_match else ""
        
        ans_clean = re.sub(r'\s+', ' ', ans_raw).strip()
        sol_clean = clean_paragraph_text(sol_raw.strip().rstrip('_*'))
        
        body = chunk[:ans_match.start()].strip() if ans_match else chunk
        
        lines = body.splitlines()
        opt_start_idx = -1
        for line_idx, line in enumerate(lines):
            stripped = line.strip()
            if re.match(r'^[a-h][\.\)]\s+', stripped):
                opt_start_idx = line_idx
                break
        
        question_text = ""
        options = []
        
        if opt_start_idx != -1:
            raw_q = "\n".join(lines[:opt_start_idx]).strip()
            question_text = clean_paragraph_text(raw_q)
            opts_raw_text = "\n".join(lines[opt_start_idx:])
            
            opt_matches = list(re.finditer(r'(?:^|\n)\s*([a-h])[\.\)]\s+(.*?)(?=(?:\n\s*[a-h][\.\)]\s+)|\Z)', opts_raw_text, re.DOTALL))
            for om in opt_matches:
                key = om.group(1).lower()
                val = clean_paragraph_text(om.group(2).strip())
                val = re.sub(r'\s+', ' ', val)
                options.append({
                    "key": key,
                    "text": val
                })
        else:
            question_text = clean_paragraph_text(body.strip())

        clean_keys = [k.strip().lower() for k in re.findall(r'[a-h]', ans_clean.lower())]
        
        if len(options) == 0:
            q_type = 'numerical'
            correct_keys = [ans_clean]
        elif len(clean_keys) > 1:
            q_type = 'msq'
            correct_keys = clean_keys
        else:
            q_type = 'mcq'
            correct_keys = clean_keys if clean_keys else [ans_clean.lower()]

        questions.append({
            "id": f"w{week_num}_q{q_num}",
            "week": week_num,
            "qIndex": q_num,
            "type": q_type,
            "question": question_text,
            "options": options,
            "correctAnswerRaw": ans_clean,
            "correctKeys": correct_keys,
            "explanation": sol_clean
        })
        
    return questions

def main():
    all_data = []
    for week in range(1, 13):
        candidates = [f for f in os.listdir('.') if f.endswith('.pdf') and f'ETH-{week}-' in f]
        if not candidates:
            print(f"ERROR: No PDF for week {week}")
            continue
        fname = candidates[0]
        qs = parse_week(week, fname)
        all_data.extend(qs)

    print(f"Total parsed: {len(all_data)} questions.")
    
    with open("questions.json", "w", encoding="utf-8") as f:
        json.dump(all_data, f, indent=2, ensure_ascii=False)
        
    with open("data.js", "w", encoding="utf-8") as f:
        f.write("// NPTEL Ethical Hacking - Assignments Week 1 to 12 Question Bank\n")
        f.write("window.QUIZ_DATA = " + json.dumps(all_data, indent=2, ensure_ascii=False) + ";\n")
        
    print("Regenerated questions.json and data.js successfully with cleaned text!")

if __name__ == "__main__":
    main()
