export const buildStudyPrompt = (notes) => {
  return `You are an expert study assistant. Analyze the study material below and generate comprehensive study content.

CRITICAL RULES:
- You MUST return ONLY a valid JSON object
- Do NOT include any markdown formatting
- Do NOT wrap in code blocks or backticks
- Do NOT add any text before or after the JSON
- Start your response with { and end with }
- Every string must be properly quoted and escaped
- You MUST generate exactly:
  * 20 items in the "flashcards" array
  * 20 items in the "quiz" array
  * 10 items in the "trueFalse" array
  * 10 items in the "fillBlanks" array
  * 10 items in the "shortQuestions" array
  * 10 items in the "keyConcepts" array
  * 10 items in the "revisionNotes" array

STUDY MATERIAL:
"""
${notes.slice(0, 6000)}
"""

Return EXACTLY this JSON structure with real educational content:

{
  "title": "Topic title here",
  "summary": "2-3 sentence overview of the topic",
  "detailedSummary": "4-6 sentence detailed explanation covering main ideas",
  "keyPoints": [
    "Key point 1",
    "Key point 2",
    "Key point 3",
    "Key point 4",
    "Key point 5"
  ],
  "importantDefinitions": [
    {"term": "Term 1", "definition": "Definition of term 1"},
    {"term": "Term 2", "definition": "Definition of term 2"},
    {"term": "Term 3", "definition": "Definition of term 3"}
  ],
  "flashcards": [
    {"question": "Question 1?", "answer": "Answer 1", "difficulty": "easy", "hint": "hint text"},
    {"question": "Question 2?", "answer": "Answer 2", "difficulty": "medium", "hint": "hint text"},
    {"question": "Question 3?", "answer": "Answer 3", "difficulty": "hard", "hint": "hint text"},
    {"question": "Question 4?", "answer": "Answer 4", "difficulty": "easy"},
    {"question": "Question 5?", "answer": "Answer 5", "difficulty": "medium"},
    {"question": "Question 6?", "answer": "Answer 6", "difficulty": "hard"},
    {"question": "Question 7?", "answer": "Answer 7", "difficulty": "medium"},
    {"question": "Question 8?", "answer": "Answer 8", "difficulty": "easy"}
  ],
  "quiz": [
    {
      "question": "Quiz question 1?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option A",
      "explanation": "Why Option A is correct",
      "difficulty": "easy"
    },
    {
      "question": "Quiz question 2?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option B",
      "explanation": "Why Option B is correct",
      "difficulty": "medium"
    },
    {
      "question": "Quiz question 3?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option C",
      "explanation": "Why Option C is correct",
      "difficulty": "hard"
    },
    {
      "question": "Quiz question 4?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option A",
      "explanation": "Why Option A is correct",
      "difficulty": "medium"
    },
    {
      "question": "Quiz question 5?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option D",
      "explanation": "Why Option D is correct",
      "difficulty": "easy"
    },
    {
      "question": "Quiz question 6?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option B",
      "explanation": "Why Option B is correct",
      "difficulty": "hard"
    }
  ],
  "trueFalse": [
    {"statement": "True statement about the topic.", "answer": true, "explanation": "Explanation why this is true"},
    {"statement": "False statement about the topic.", "answer": false, "explanation": "Explanation why this is false"},
    {"statement": "Another true statement.", "answer": true, "explanation": "Explanation"},
    {"statement": "Another false statement.", "answer": false, "explanation": "Explanation"},
    {"statement": "True statement number 5.", "answer": true, "explanation": "Explanation"},
    {"statement": "False statement number 6.", "answer": false, "explanation": "Explanation"}
  ],
  "fillBlanks": [
    {"question": "The ____ is responsible for managing processes.", "answer": "operating system", "hint": "Think about system software"},
    {"question": "Memory is divided into ____ for virtual memory.", "answer": "pages", "hint": "Think about memory units"},
    {"question": "The ____ algorithm gives equal time to each process.", "answer": "Round Robin", "hint": "Think about fairness"},
    {"question": "A ____ is a program in execution.", "answer": "process", "hint": "Think about running programs"},
    {"question": "The ____ manages file storage on disk.", "answer": "file system", "hint": "Think about storage management"}
  ],
  "shortQuestions": [
    {"question": "Explain the main concept in your own words.", "sampleAnswer": "A comprehensive sample answer explaining the concept clearly.", "points": 5},
    {"question": "What are the key components and how do they relate?", "sampleAnswer": "The key components are... and they relate by...", "points": 5},
    {"question": "Compare and contrast two important aspects.", "sampleAnswer": "The comparison shows that...", "points": 4},
    {"question": "Why is this topic important in real-world applications?", "sampleAnswer": "This is important because...", "points": 3}
  ],
  "keyConcepts": [
    {"term": "Concept 1", "definition": "Clear definition of concept 1", "example": "Example of concept 1 in use", "difficulty": "easy"},
    {"term": "Concept 2", "definition": "Clear definition of concept 2", "example": "Example of concept 2 in use", "difficulty": "medium"},
    {"term": "Concept 3", "definition": "Clear definition of concept 3", "example": "Example of concept 3 in use", "difficulty": "hard"},
    {"term": "Concept 4", "definition": "Clear definition of concept 4", "example": "Example of concept 4 in use", "difficulty": "medium"},
    {"term": "Concept 5", "definition": "Clear definition of concept 5", "example": "Example of concept 5 in use", "difficulty": "easy"}
  ],
  "revisionNotes": [
    "Important revision point 1",
    "Important revision point 2",
    "Important revision point 3",
    "Important revision point 4",
    "Important revision point 5",
    "Important revision point 6",
    "Important revision point 7",
    "Important revision point 8"
  ],
  "studyTips": [
    "Study tip 1 for this topic",
    "Study tip 2 for this topic",
    "Study tip 3 for this topic"
  ],
  "difficultConcepts": [
    "Difficult concept 1 that needs more focus",
    "Difficult concept 2 that needs more focus",
    "Difficult concept 3 that needs more focus"
  ],
  "examTips": [
    "Exam tip 1",
    "Exam tip 2",
    "Exam tip 3"
  ],
  "formulaSheet": [
    "Important formula or fact 1",
    "Important formula or fact 2",
    "Important formula or fact 3"
  ],
  "memoryTricks": [
    "Memory trick or mnemonic 1",
    "Memory trick or mnemonic 2"
  ],
  "faqs": [
    {"question": "Frequently asked question 1?", "answer": "Clear answer to FAQ 1"},
    {"question": "Frequently asked question 2?", "answer": "Clear answer to FAQ 2"},
    {"question": "Frequently asked question 3?", "answer": "Clear answer to FAQ 3"}
  ]
}

IMPORTANT: Replace ALL placeholder text above with REAL content based on the study material provided. Return ONLY the JSON object with no extra text.`
}