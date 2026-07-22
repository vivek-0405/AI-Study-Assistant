import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Brain, ArrowLeft, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '@/components/Common/ThemeToggle'
import { useStudyStore } from '@/store/studyStore'

export default function Header({ showBack = false, title = null }) {
  const navigate = useNavigate()
  const { studyData, resetStudy } = useStudyStore()
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  const handleBack = () => {
    resetStudy()
    navigate('/')
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : '-100%', opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 z-50 glass border-b border-surface-200/80 dark:border-surface-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          {showBack ? (
            <button
              onClick={handleBack}
              className="btn-ghost p-2 rounded-xl"
              aria-label="Go back to home"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : null}

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-glow">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-surface-900 dark:text-surface-50 text-sm">
                {title ||
                  import.meta.env.VITE_APP_NAME ||
                  'AI Study Assistant'}
              </span>
              {studyData?.title && (
                <p className="text-xs text-surface-500 dark:text-surface-400 leading-tight mt-0.5 truncate max-w-[300px]">
                  {studyData.title}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {showBack && studyData && (
            <button
              onClick={handleBack}
              className="btn-secondary text-xs px-3 py-2"
              aria-label="Start new study session"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Session</span>
            </button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}