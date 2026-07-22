export const APP_NAME = import.meta.env.VITE_APP_NAME || 'AI Study Assistant'
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0'

export const STUDY_TABS = [
  { id: 'summary', label: 'Summary' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'truefalse', label: 'True / False' },
  { id: 'fillblanks', label: 'Fill Blanks' },
  { id: 'short', label: 'Short Answer' },
  { id: 'concepts', label: 'Key Concepts' },
  { id: 'revision', label: 'Revision Notes' },
  { id: 'progress', label: 'Progress' },
]

export const DIFFICULTY_LEVELS = {
  easy: { label: 'Easy', color: 'green' },
  medium: { label: 'Medium', color: 'yellow' },
  hard: { label: 'Hard', color: 'red' },
}

export const MAX_NOTES_LENGTH = 10000
export const MIN_NOTES_LENGTH = 10
export const REQUEST_TIMEOUT = 60000
export const MAX_RETRIES = 2