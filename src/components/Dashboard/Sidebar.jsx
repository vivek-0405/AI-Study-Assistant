import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  CreditCard,
  HelpCircle,
  ToggleLeft,
  PenLine,
  MessageSquare,
  BookOpen,
  FileText,
  TrendingUp,
} from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'

const tabs = [
  { id: 'summary', label: 'Summary', icon: LayoutDashboard },
  { id: 'flashcards', label: 'Flashcards', icon: CreditCard },
  { id: 'quiz', label: 'Quiz', icon: HelpCircle },
  { id: 'truefalse', label: 'True / False', icon: ToggleLeft },
  { id: 'fillblanks', label: 'Fill Blanks', icon: PenLine },
  { id: 'short', label: 'Short Answer', icon: MessageSquare },
  { id: 'concepts', label: 'Key Concepts', icon: BookOpen },
  { id: 'revision', label: 'Revision Notes', icon: FileText },
  { id: 'progress', label: 'Progress', icon: TrendingUp },
]

export default function Sidebar({ studyData }) {
  const { activeTab, setActiveTab, progress } = useStudyStore()

  const getCount = (tabId) => {
    const map = {
      flashcards: studyData?.flashcards?.length,
      quiz: studyData?.quiz?.length,
      truefalse: studyData?.trueFalse?.length,
      fillblanks: studyData?.fillBlanks?.length,
      short: studyData?.shortQuestions?.length,
      concepts: studyData?.keyConcepts?.length,
      revision: studyData?.revisionNotes?.length,
    }
    return map[tabId]
  }

  const getCompletion = (tabId) => {
    const map = {
      flashcards: progress.flashcardsTotal
        ? Math.round((progress.flashcardsCompleted / progress.flashcardsTotal) * 100)
        : 0,
      quiz: progress.quizTotal
        ? Math.round((progress.quizScore / progress.quizTotal) * 100)
        : 0,
      truefalse: progress.trueFalseTotal
        ? Math.round((progress.trueFalseScore / progress.trueFalseTotal) * 100)
        : 0,
    }
    return map[tabId]
  }

  return (
    <nav
      className="flex flex-col gap-1 w-full"
      aria-label="Study sections navigation"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        const count = getCount(tab.id)
        const completion = getCompletion(tab.id)

        return (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-200 group ${
              isActive
                ? 'bg-brand-600 text-white shadow-glow'
                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <tab.icon
              className={`w-4 h-4 flex-shrink-0 ${
                isActive ? 'text-white' : 'text-surface-400 dark:text-surface-500 group-hover:text-brand-500'
              }`}
            />
            <span className="flex-1 truncate">{tab.label}</span>

            {/* Count badge */}
            {count !== undefined && (
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 rounded-md ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400'
                }`}
              >
                {count}
              </span>
            )}

            {/* Completion indicator */}
            {completion !== undefined && completion > 0 && (
              <div
                className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                  isActive ? 'bg-white/30' : 'bg-surface-200 dark:bg-surface-700'
                } overflow-hidden`}
              >
                <div
                  className={`h-full rounded-full ${
                    isActive ? 'bg-white' : 'bg-brand-500'
                  }`}
                  style={{ width: `${completion}%` }}
                />
              </div>
            )}
          </motion.button>
        )
      })}
    </nav>
  )
}