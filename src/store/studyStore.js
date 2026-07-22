import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialProgress = {
  flashcardsCompleted: 0,
  flashcardsTotal: 0,
  quizScore: 0,
  quizTotal: 0,
  trueFalseScore: 0,
  trueFalseTotal: 0,
  fillBlanksScore: 0,
  fillBlanksTotal: 0,
  shortAnswersCompleted: 0,
  shortAnswersTotal: 0,
  timeStarted: null,
  timeSpent: 0,
  studyStreak: 0,
}

export const useStudyStore = create(
  persist(
    (set) => ({
      // State
      studyData: null,
      rawNotes: '',
      status: 'idle', // idle | loading | success | error
      error: null,
      activeTab: 'summary',
      progress: initialProgress,
      favorites: [],
      bookmarks: [],
      weakTopics: [],
      studyHistory: [],
      recentNotes: [],
      incorrectQuestions: [],
      incorrectTrueFalse: [],
      apiProvider: 'gemini',
      apiKeys: { gemini: '', openai: '', claude: '' },

      // Actions
      setStudyData: (data) =>
        set({
          studyData: data,
          status: 'success',
          error: null,
          progress: {
            ...initialProgress,
            flashcardsTotal: data?.flashcards?.length || 0,
            quizTotal: data?.quiz?.length || 0,
            trueFalseTotal: data?.trueFalse?.length || 0,
            fillBlanksTotal: data?.fillBlanks?.length || 0,
            shortAnswersTotal: data?.shortQuestions?.length || 0,
            timeStarted: Date.now(),
          },
        }),

      setRawNotes: (notes) => set({ rawNotes: notes }),

      setStatus: (status) => set({ status }),

      setError: (error) => set({ error, status: 'error' }),

      setActiveTab: (tab) => set({ activeTab: tab }),

      resetStudy: () =>
        set({
          studyData: null,
          status: 'idle',
          error: null,
          activeTab: 'summary',
          progress: initialProgress,
          incorrectQuestions: [],
          incorrectTrueFalse: [],
        }),

      updateFlashcardProgress: (completed) =>
        set((state) => ({
          progress: { ...state.progress, flashcardsCompleted: completed },
        })),

      updateQuizProgress: (score, total, incorrectIndices) =>
        set((state) => ({
          progress: { ...state.progress, quizScore: score, quizTotal: total },
          incorrectQuestions: incorrectIndices,
        })),

      updateTrueFalseProgress: (score, total, incorrectIndices) =>
        set((state) => ({
          progress: {
            ...state.progress,
            trueFalseScore: score,
            trueFalseTotal: total,
          },
          incorrectTrueFalse: incorrectIndices,
        })),

      updateFillBlanksProgress: (score, total) =>
        set((state) => ({
          progress: {
            ...state.progress,
            fillBlanksScore: score,
            fillBlanksTotal: total,
          },
        })),

      updateShortAnswerProgress: (completed) =>
        set((state) => ({
          progress: {
            ...state.progress,
            shortAnswersCompleted: completed,
          },
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((f) => f !== id)
            : [...state.favorites, id],
        })),

      toggleBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((b) => b !== id)
            : [...state.bookmarks, id],
        })),

      addToRecentNotes: (note) =>
        set((state) => ({
          recentNotes: [
            { text: note, timestamp: Date.now(), id: Date.now() },
            ...state.recentNotes.slice(0, 4),
          ],
        })),

      addToHistory: (entry) =>
        set((state) => ({
          studyHistory: [entry, ...state.studyHistory.slice(0, 9)],
        })),

      updateTimeSpent: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            timeSpent: state.progress.timeStarted
              ? Math.floor((Date.now() - state.progress.timeStarted) / 1000)
              : 0,
          },
        })),

      setApiProvider: (provider) => set({ apiProvider: provider }),

      setApiKey: (provider, key) =>
        set((state) => ({
          apiKeys: { ...state.apiKeys, [provider]: key },
        })),
    }),
    {
      name: 'study-assistant-data',
      partialize: (state) => ({
        recentNotes: state.recentNotes,
        favorites: state.favorites,
        bookmarks: state.bookmarks,
        studyHistory: state.studyHistory,
        apiProvider: state.apiProvider,
        apiKeys: state.apiKeys,
      }),
    }
  )
)