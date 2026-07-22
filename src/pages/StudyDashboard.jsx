import { Suspense, lazy, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AlertTriangle, RefreshCw, Menu, X } from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Dashboard/Sidebar'
import ErrorBoundary from '@/components/Common/ErrorBoundary'
import FloatingBlobs from '@/components/Common/FloatingBlobs'
import { DashboardLoadingSkeleton } from '@/components/Common/LoadingSkeleton'

// Lazy load sections
const SummarySection = lazy(() => import('@/components/Summary/SummarySection'))
const FlashcardSection = lazy(() => import('@/components/Flashcards/FlashcardSection'))
const QuizSection = lazy(() => import('@/components/Quiz/QuizSection'))
const TrueFalseSection = lazy(() => import('@/components/Quiz/TrueFalseSection'))
const FillBlanksSection = lazy(() => import('@/components/Quiz/FillBlanksSection'))
const ShortAnswerSection = lazy(() => import('@/components/Quiz/ShortAnswerSection'))
const ConceptsSection = lazy(() => import('@/components/Concepts/ConceptsSection'))
const RevisionSection = lazy(() => import('@/components/Revision/RevisionSection'))
const ProgressSection = lazy(() => import('@/components/Progress/ProgressSection'))

const TAB_COMPONENTS = {
  summary: SummarySection,
  flashcards: FlashcardSection,
  quiz: QuizSection,
  truefalse: TrueFalseSection,
  fillblanks: FillBlanksSection,
  short: ShortAnswerSection,
  concepts: ConceptsSection,
  revision: RevisionSection,
  progress: ProgressSection,
}

function SectionSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton h-24 rounded-2xl" />
      ))}
    </div>
  )
}

export default function StudyDashboard() {
  const navigate = useNavigate()
  const { studyData, status, error, activeTab, resetStudy } = useStudyStore()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (status === 'idle' && !studyData) {
      navigate('/', { replace: true })
    }
  }, [status, studyData, navigate])

  if (status === 'loading') {
    return <DashboardLoadingSkeleton />
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <FloatingBlobs />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-50 mb-2">
              Something went wrong
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-md">
              {error || 'Failed to generate study material. Please try again.'}
            </p>
          </div>
          <button
            onClick={() => {
              resetStudy()
              navigate('/')
            }}
            className="btn-primary"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!studyData) return null

  const ActiveComponent = TAB_COMPONENTS[activeTab]

  return (
    <div className="relative min-h-screen">
      <FloatingBlobs />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header showBack title={studyData.title} />

        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <Sidebar studyData={studyData} />
            </div>
          </aside>

          {/* Mobile sidebar overlay */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
                <motion.aside
                  initial={{ x: -280 }}
                  animate={{ x: 0 }}
                  exit={{ x: -280 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="fixed left-0 top-0 bottom-0 z-50 w-72 glass border-r border-surface-200 dark:border-surface-800 p-6 pt-20 lg:hidden"
                >
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="absolute top-4 right-4 btn-ghost p-2 rounded-xl"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <Sidebar studyData={studyData} />
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Mobile menu button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="btn-secondary px-4 py-2 text-sm"
              >
                <Menu className="w-4 h-4" />
                Navigation
              </button>
            </div>

            <ErrorBoundary>
              <Suspense fallback={<SectionSkeleton />}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {ActiveComponent && (
                      <ActiveComponent data={studyData} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Suspense>
            </ErrorBoundary>
          </main>
        </div>

        <footer className="text-center py-4 text-xs text-surface-400 dark:text-surface-600 border-t border-surface-200 dark:border-surface-800">
          AI Study Assistant — All content AI-generated and validated
        </footer>
      </div>
    </div>
  )
}