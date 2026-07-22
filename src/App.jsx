import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'
import LandingPage from '@/pages/LandingPage'
import StudyDashboard from '@/pages/StudyDashboard'
import PageTransition from '@/components/Common/PageTransition'

export default function App() {
  const { theme } = useThemeStore()
  const location = useLocation()

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950 transition-colors duration-300">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <LandingPage />
              </PageTransition>
            }
          />
          <Route
            path="/study"
            element={
              <PageTransition>
                <StudyDashboard />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}