import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, RotateCcw, ThumbsUp, ThumbsDown, SkipForward } from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'
import { triggerConfetti } from '@/utils/confetti'
import ProgressRing from '@/components/Common/ProgressRing'
import { staggerContainer, staggerItem, scaleIn } from '@/animations/variants'

export default function TrueFalseSection({ data }) {
  const { updateTrueFalseProgress } = useStudyStore()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(null)
  const [results, setResults] = useState([])
  const [isComplete, setIsComplete] = useState(false)

  const questions = data.trueFalse
  const total = questions.length
  const current = questions[currentIndex]

  const handleAnswer = useCallback((userAnswer) => {
    if (answered !== null) return

    const isCorrect = userAnswer === current.answer
    setAnswered(userAnswer)

    setScore((s) => (isCorrect ? s + 1 : s))
    setResults((prev) => [...prev, { isCorrect, userAnswer, correct: current.answer }])
  }, [answered, current])

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= total) {
      updateTrueFalseProgress(score, total, [])
      if (score / total >= 0.8) triggerConfetti()
      setIsComplete(true)
    } else {
      setAnswered(null)
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex, total, score, updateTrueFalseProgress])

  const handleReset = () => {
    setCurrentIndex(0)
    setScore(0)
    setAnswered(null)
    setResults([])
    setIsComplete(false)
  }

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  if (isComplete) {
    return (
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center gap-6 py-8"
      >
        <div className="text-5xl">
          {percentage >= 80 ? '🎉' : percentage >= 60 ? '📚' : '💪'}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-50">
            True/False Complete!
          </h3>
          <p className="text-surface-500 dark:text-surface-400 mt-1">
            {percentage >= 80 ? 'Excellent!' : 'Keep practicing!'}
          </p>
        </div>
        <ProgressRing
          progress={percentage}
          size={110}
          strokeWidth={8}
          color={percentage >= 80 ? '#10b981' : '#6366f1'}
          label={`${percentage}%`}
          sublabel={`${score}/${total}`}
        />
        <div className="flex gap-3">
          {results.map((r, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                r.isCorrect
                  ? 'bg-green-100 dark:bg-green-950 text-green-600'
                  : 'bg-red-100 dark:bg-red-950 text-red-600'
              }`}
            >
              {r.isCorrect ? '✓' : '✗'}
            </div>
          ))}
        </div>
        <button onClick={handleReset} className="btn-primary">
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      <motion.div variants={staggerItem} className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-surface-900 dark:text-surface-50">
            True / False
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            {currentIndex + 1} of {total} • Score: {score}
          </p>
        </div>
        <button onClick={handleReset} className="btn-ghost p-2 rounded-lg">
          <RotateCcw className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Progress */}
      <motion.div variants={staggerItem}>
        <div className="h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            animate={{ width: `${((currentIndex) / total) * 100}%` }}
          />
        </div>
      </motion.div>

      {/* Question */}
      <motion.div variants={staggerItem}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-950 flex items-center justify-center">
                <span className="text-xl">🤔</span>
              </div>

              <p className="text-lg sm:text-xl font-semibold text-surface-900 dark:text-surface-50 leading-relaxed max-w-lg">
                {current.statement}
              </p>

              {/* Answer buttons */}
              <div className="flex gap-4 w-full max-w-xs">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(true)}
                  disabled={answered !== null}
                  className={`flex-1 flex flex-col items-center gap-2 py-6 rounded-2xl border-2 font-semibold transition-all duration-300 ${
                    answered !== null
                      ? current.answer === true
                        ? 'border-green-400 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                        : answered === true
                        ? 'border-red-400 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400'
                        : 'border-surface-200 dark:border-surface-700 opacity-40'
                      : 'border-green-300 dark:border-green-800 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 text-surface-700 dark:text-surface-200 cursor-pointer'
                  }`}
                >
                  <ThumbsUp className="w-6 h-6" />
                  <span>True</span>
                  {answered !== null && current.answer === true && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                  {answered === true && current.answer !== true && (
                    <X className="w-4 h-4 text-red-500" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(false)}
                  disabled={answered !== null}
                  className={`flex-1 flex flex-col items-center gap-2 py-6 rounded-2xl border-2 font-semibold transition-all duration-300 ${
                    answered !== null
                      ? current.answer === false
                        ? 'border-green-400 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                        : answered === false
                        ? 'border-red-400 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400'
                        : 'border-surface-200 dark:border-surface-700 opacity-40'
                      : 'border-red-300 dark:border-red-800 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 text-surface-700 dark:text-surface-200 cursor-pointer'
                  }`}
                >
                  <ThumbsDown className="w-6 h-6" />
                  <span>False</span>
                  {answered !== null && current.answer === false && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                  {answered === false && current.answer !== false && (
                    <X className="w-4 h-4 text-red-500" />
                  )}
                </motion.button>
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {answered !== null && current.explanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="w-full"
                  >
                    <div className="p-4 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 text-sm text-left">
                      <p className="font-semibold text-brand-600 dark:text-brand-400 mb-1">
                        Explanation
                      </p>
                      <p className="text-surface-700 dark:text-surface-300">
                        {current.explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {answered !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full flex justify-end mt-4"
                >
                  <button
                    onClick={handleNext}
                    className="btn-primary py-2.5 px-6 text-sm font-semibold rounded-xl flex items-center gap-2"
                  >
                    <span>{currentIndex + 1 === total ? 'Finish Section' : 'Next Question'}</span>
                    <SkipForward className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}