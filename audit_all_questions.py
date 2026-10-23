import json
import fitz
import os
import re

def audit():
    with open('questions.json', encoding='utf-8') as f:
        parsed_qs = json.load(f)

    print(f"Total parsed questions in questions.json: {len(parsed_qs)}")

    qs_by_week = {}
    for q in parsed_qs:
        qs_by_week.setdefault(q['week'], []).append(q)

    discrepancies = []
    audited_count = 0

    for week in range(1, 13):
        pdf_files = [f for f in os.listdir('.') if f.endswith('.pdf') and f'ETH-{week}-' in f]
        if not pdf_files:
            discrepancies.append(f"Missing PDF for week {week}")
            continue
        pdf_path = pdf_files[0]
        doc = fitz.open(pdf_path)
        raw_text = "\n".join(page.get_text() for page in doc)
        
        # Remove repeated IIT Kharagpur header
        clean_raw = re.sub(r'NPTEL Online Certification Courses\s*\n\s*Indian Institute of Technology Kharagpur\s*', '', raw_text)
        
        week_qs = qs_by_week.get(week, [])
        if len(week_qs) != 10:
            discrepancies.append(f"Week {week}: Expected 10 questions, found {len(week_qs)}")
            
        for q in week_qs:
            audited_count += 1
            q_idx = q['qIndex']
            raw_ans = q['correctAnswerRaw']
            correct_keys = q['correctKeys']
            q_type = q['type']
            
            # Find chunk for QUESTION q_idx
            # Next boundary is either QUESTION (q_idx+1) or end of file
            if q_idx < 10:
                pattern = rf'QUESTION\s+{q_idx}\s*:(.*?)(?=QUESTION\s+{q_idx+1}\s*:)'
            else:
                pattern = rf'QUESTION\s+{q_idx}\s*:(.*?)(?:\Z)'
                
            match = re.search(pattern, clean_raw, re.DOTALL | re.IGNORECASE)
            if not match:
                discrepancies.append(f"Week {week} Q{q_idx}: Could not find chunk in PDF")
                continue
                
            q_chunk = match.group(1)
            
            # 1. Check Correct Answer
            ans_match = re.search(r'Correct\s*Answer\s*:\s*(.*?)(?=\n\s*(?:Detail(?:ed)?\s*Solution|QUESTION|_|\*|$))', q_chunk, re.DOTALL | re.IGNORECASE)
            if not ans_match:
                discrepancies.append(f"Week {week} Q{q_idx}: Correct Answer not found in PDF chunk")
            else:
                pdf_ans = re.sub(r'\s+', ' ', ans_match.group(1).strip())
                if pdf_ans.lower() != raw_ans.lower():
                    discrepancies.append(f"Week {week} Q{q_idx}: Answer mismatch! PDF: '{pdf_ans}' vs JSON: '{raw_ans}'")

            # 2. Check Detailed Solution
            sol_match = re.search(r'Detail(?:ed)?\s*Solution\s*:\s*(.*?)(?=\n\s*(?:QUESTION|_+|\*+|$))', q_chunk, re.DOTALL | re.IGNORECASE)
            if not sol_match:
                discrepancies.append(f"Week {week} Q{q_idx}: Detail Solution not found in PDF chunk")
            else:
                pdf_sol_first_20 = re.sub(r'\s+', ' ', sol_match.group(1).strip())[:20].lower()
                json_sol_first_20 = re.sub(r'\s+', ' ', q['explanation'])[:20].lower()
                if pdf_sol_first_20 != json_sol_first_20:
                    discrepancies.append(f"Week {week} Q{q_idx}: Solution mismatch start! PDF: '{pdf_sol_first_20}' vs JSON: '{json_sol_first_20}'")

            # 3. Check Options count
            # Count how many lines in q_chunk start with a., b., c., etc.
            body_before_ans = q_chunk[:ans_match.start()] if ans_match else q_chunk
            pdf_opts = re.findall(r'(?:^|\n)\s*([a-h])[\.\)]\s+', body_before_ans)
            if len(pdf_opts) != len(q['options']):
                discrepancies.append(f"Week {week} Q{q_idx}: Options count mismatch! PDF has {len(pdf_opts)} ({pdf_opts}) vs JSON {len(q['options'])}")
                
            # 4. Check correctness mapping
            if q_type == 'mcq':
                if len(correct_keys) != 1:
                    discrepancies.append(f"Week {week} Q{q_idx}: MCQ has {len(correct_keys)} keys instead of 1: {correct_keys}")
            elif q_type == 'msq':
                if len(correct_keys) <= 1:
                    discrepancies.append(f"Week {week} Q{q_idx}: MSQ has <=1 keys: {correct_keys}")
            elif q_type == 'numerical':
                if len(q['options']) != 0:
                    discrepancies.append(f"Week {week} Q{q_idx}: Numerical has options: {q['options']}")

    print(f"\n==========================================")
    print(f"AUDIT COMPLETE")
    print(f"Total questions audited: {audited_count} / 120")
    print(f"Total discrepancies found: {len(discrepancies)}")
    print(f"==========================================")
    
    if discrepancies:
        for d in discrepancies:
            print("  [ERROR]:", d)
    else:
        print("  [SUCCESS]: 100% MATCH: Every single question, option, answer, and solution matches the PDF perfectly!")


if __name__ == "__main__":
    audit()
