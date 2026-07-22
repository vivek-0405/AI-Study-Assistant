# AI Study Assistant

## Overview

AI Study Assistant is an AI-powered web application that helps students learn smarter by transforming notes or topics into interactive study materials. It generates flashcards, quizzes, summaries, revision notes, and key concepts, making studying more engaging and efficient.

The application provides a modern, responsive interface with AI-powered content generation, progress tracking, and an interactive learning experience.

---

##  Features

### Core Features

* AI-powered study material generation
* Generate summaries from notes or topics
* Interactive flashcards for active recall
* Multiple quiz formats:
  * Multiple Choice Questions (MCQs)
  * True / False
  * Fill in the Blanks
  * Short Answer Questions
* Key concepts extraction
* AI-generated revision notes
* Study progress dashboard
* Light & Dark mode support
* Celebration animations after quiz completion
* Fully responsive modern UI

---

##  Architecture

```text
src/
├── animations/                 # Framer Motion variants
│   └── variants.js
│
├── components/
│   ├── Common/                 # Shared components
│   │   ├── Badge.jsx
│   │   ├── EmptyState.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── FloatingBlobs.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ProgressRing.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── Concepts/               # Key concepts
│   ├── Dashboard/              # Sidebar navigation
│   ├── Flashcards/             # Flashcards
│   ├── Landing/                # Landing page
│   ├── Layout/                 # Header & layout
│   ├── Progress/               # Progress dashboard
│   ├── Quiz/                   # Quiz components
│   ├── Revision/               # Revision notes
│   └── Summary/                # Summary section
│
├── constants/                  # App constants
│
├── hooks/
│   ├── useKeyboardShortcuts.js
│   ├── useStudyGeneration.js
│   └── useTimer.js
│
├── pages/
│   ├── LandingPage.jsx
│   └── StudyDashboard.jsx
│
├── schemas/
│   └── studySchema.js
│
├── services/
│   ├── aiProviders.js
│   ├── aiService.js
│   └── promptBuilder.js
│
├── store/
│   ├── studyStore.js
│   └── themeStore.js
│
├── styles/
│   └── globals.css
│
└── utils/
    ├── confetti.js
    ├── parseAIResponse.js
    └── textUtils.js
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| Vite | Build Tool |
| JavaScript (ES6+) | Programming Language |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Zustand | State Management |
| Zod | Runtime Validation |
| Lucide React | Icons |
| React Hot Toast | Notifications |
| React Router DOM | Routing |
| React Dropzone | File Upload |
| Canvas Confetti | Celebration Effects |

---

##  How It Works

1. User enters a study topic or uploads notes.
2. AI processes the content.
3. The application generates:
   - Summary
   - Flashcards
   - Quizzes
   - Revision Notes
   - Key Concepts
4. Users practice using flashcards and quizzes.
5. Progress is tracked throughout the learning session.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-Study-Assistant.git
```

### 2. Navigate to the Project Folder

```bash
cd AI-Study-Assistant
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_AI_PROVIDER=openai
```

---

### 5. Run the Development Server

```bash
npm run dev
```

---

## Study Workflow

The AI Study Assistant helps students by generating:

- AI Summary
- Flashcards
- Interactive Quiz
- Key Concepts
- Revision Notes
- Learning Progress

---

## Future Improvements

* User authentication
* Cloud storage for study sessions
* AI-powered personalized study plans
* Voice-based learning assistant
* PDF & DOCX note upload
* Study streak tracking
* Leaderboards and achievements
* Export flashcards to PDF
* Multi-language support
* Mobile application

---

##  Author

**Vivek Kumar**

B.Tech (Artificial Intelligence & Machine Learning)

---

## License

This project is developed for educational and learning purposes.
