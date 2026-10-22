import json

with open('questions.json', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total questions in JSON: {len(data)}")
types_count = {}
issues = []

for q in data:
    t = q['type']
    types_count[t] = types_count.get(t, 0) + 1
    
    if not q['question'].strip():
        issues.append(f"Empty question text: {q['id']}")
    if t in ['mcq', 'msq']:
        if len(q['options']) < 2:
            issues.append(f"Low option count ({len(q['options'])}): {q['id']}")
        if not q['correctKeys']:
            issues.append(f"No correct keys: {q['id']} (raw: {q['correctAnswerRaw']})")
    if not q['explanation'].strip():
        issues.append(f"Empty explanation: {q['id']}")

print("Type breakdown:", types_count)
print("Total issues found:", len(issues))
for iss in issues:
    print("  ->", iss)

# Sample a few questions of each type to inspect
print("\n--- SAMPLE MCQ ---")
sample_mcq = next(q for q in data if q['type'] == 'mcq')
print(json.dumps(sample_mcq, indent=2))

print("\n--- SAMPLE MSQ ---")
sample_msq = next(q for q in data if q['type'] == 'msq')
print(json.dumps(sample_msq, indent=2))

print("\n--- ALL NUMERICAL QUESTIONS ---")
for q in data:
    if q['type'] == 'numerical':
        print(f"Week {q['week']} Q{q['qIndex']}: answer = '{q['correctAnswerRaw']}'")

