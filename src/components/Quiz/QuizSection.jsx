import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  AlertCircle,
  SkipForward,
} from 'lucide-react'
import { triggerConfetti, triggerFireworks } from '@/utils/confetti'
import { useStudyStore } from '@/store/studyStore'
import { DifficultyBadge } from '@/components/Common/Badge'
import ProgressRing from '@/components/Common/ProgressRing'
import { staggerContainer, staggerItem, scaleIn } from '@/animations/variants'
import toast from 'react-hot-toast'

function QuizScoreScreen({ score, total, incorrect, onRetake, onRetakeWrong }) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0
  const isPerfect = percentage === 100
  const isGood = percentage >= 70

  const getEmoji = () => {
    if (percentage === 100) return '🏆'
    if (percentage >= 80) return '⭐'
    if (percentage >= 60) return '📚'
    return '💪'
  }

  const getMessage = () => {
    if (percentage === 100) return 'Perfect Score! Outstanding!'
    if (percentage >= 80) return 'Excellent Work! Almost there!'
    if (percentage >= 60) return 'Good job! Keep practicing!'
    return "Don't give up! Review and retry!"
  }

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center gap-6 py-8"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-6xl"
      >
        {getEmoji()}
      </motion.div>

      <div>
        <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-50 mb-1">
          Quiz Complete!
        </h3>
        <p className="text-surface-500 dark:text-surface-400">{getMessage()}</p>
      </div>

      <ProgressRing
        progress={percentage}
        size={120}
        strokeWidth={8}
        color={isPerfect ? '#10b981' : isGood ? '#6366f1' : '#f59e0b'}
        label={`${percentage}%`}
        sublabel={`${score}/${total}`}
      />

      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
        <div className="glass-card p-3 text-center">
          <p className="text-xl font-bold text-green-500">{score}</p>
          <p className="text-xs text-surface-400 dark:text-surface-500 mt-0.5">Correct</p>
        </div>
        <div className="glass-card p-3 text-center">
          <p className="text-xl font-bold text-red-500">{total - score}</p>
          <p className="text-xs text-surface-400 dark:text-surface-500 mt-0.5">Incorrect</p>
        </div>
        <div className="glass-card p-3 text-center">
          <p className="text-xl font-bold text-brand-500">{total}</p>
          <p className="text-xs text-surface-400 dark:text-surface-500 mt-0.5">Total</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <button onClick={onRetake} className="btn-secondary flex-1">
          <RotateCcw className="w-4 h-4" />
          Retake
        </button>
        {incorrect.length > 0 && (
          <button onClick={onRetakeWrong} className="btn-primary flex-1">
            <AlertCircle className="w-4 h-4" />
            Retry Wrong ({incorrect.length})
          </button>
        )}
      </div>
    </motion.div>
  )
}

function QuizQuestion({ question, onAnswer, onSkip, questionNum, total, skipped }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (option) => {
    if (revealed) return
    setSelected(option)
    setRevealed(true)
  }

  const getOptionStyle = (option) => {
    if (!revealed) {
      return 'border-surface-200 dark:border-surface-700 hover:border-brand-400 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950/30 cursor-pointer'
    }
    if (option === question.answer) {
      return 'border-green-400 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-200 cursor-default'
    }
    if (option === selected && selected !== question.answer) {
      return 'border-red-400 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-200 cursor-default'
    }
    return 'border-surface-200 dark:border-surface-700 opacity-50 cursor-default'
  }

  return (
    <motion.div
      key={questionNum}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card p-6 sm:p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="tag bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
            Q{questionNum} of {total}
          </span>
          {question.difficulty && <DifficultyBadge difficulty={question.difficulty} />}
          {skipped && (
            <span className="tag bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
              Skipped
            </span>
          )}
        </div>
        <button
          onClick={onSkip}
          disabled={revealed}
          className="btn-ghost text-xs px-3 py-1.5 disabled:opacity-40"
        >
          <SkipForward className="w-3.5 h-3.5" />
          Skip
        </button>
      </div>

      {/* Question */}
      <p className="text-base sm:text-lg font-semibold text-surface-900 dark:text-surface-50 mb-6 leading-relaxed">
        {question.question}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, i) => (
          <motion.button
            key={i}
            onClick={() => handleSelect(option)}
            disabled={revealed}
            whileHover={!revealed ? { x: 4 } : {}}
            whileTap={!revealed ? { scale: 0.99 } : {}}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-300 ${getOptionStyle(option)}`}
          >
            <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 flex-shrink-0">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="flex-1 text-sm font-medium text-surface-800 dark:text-surface-100">
              {option}
            </span>
            {revealed && option === question.answer && (
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            )}
            {revealed && option === selected && selected !== question.answer && (
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            )}
          </motion.button>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {revealed && question.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-4"
          >
            <div className="p-4 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900">
              <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-1">
                Explanation
              </p>
              <p className="text-sm text-surface-700 dark:text-surface-300">
                {question.explanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex justify-end"
        >
          <button
            onClick={() => onAnswer(selected === question.answer)}
            className="btn-primary py-2.5 px-6 text-sm font-semibold rounded-xl flex items-center gap-2"
          >
            <span>{questionNum === total ? 'Finish Quiz' : 'Next Question'}</span>
            <SkipForward className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function QuizSection({ data, retakeWrongOnly = false }) {
  const { updateQuizProgress, incorrectQuestions } = useStudyStore()

  const getInitialQuestions = () => {
    if (retakeWrongOnly && incorrectQuestions.length > 0) {
      return incorrectQuestions.map((i) => data.quiz[i]).filter(Boolean)
    }
    return data.quiz
  }

  const [questions, setQuestions] = useState(getInitialQuestions)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [incorrect, setIncorrect] = useState([])
  const [skipped, setSkipped] = useState(new Set())
  const [isComplete, setIsComplete] = useState(false)
  const [answeredCount, setAnsweredCount] = useState(0)

  const currentQuestion = questions[currentIndex]
  const total = questions.length

  const handleAnswer = useCallback((isCorrect) => {
    setAnsweredCount((c) => c + 1)
    if (isCorrect) {
      setScore((s) => s + 1)
    } else {
      setIncorrect((prev) => [...prev, currentIndex])
    }

    if (currentIndex + 1 >= total) {
      // All answered
      const finalScore = isCorrect ? score + 1 : score
      const finalIncorrect = isCorrect ? incorrect : [...incorrect, currentIndex]
      updateQuizProgress(finalScore, total, finalIncorrect)

      if (finalScore / total >= 0.8) {
        triggerConfetti()
      }
      if (finalScore === total) {
        triggerFireworks()
      }
      setScore(finalScore)
      setIncorrect(finalIncorrect)
      setIsComplete(true)
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex, score, incorrect, total, updateQuizProgress])

  const handleSkip = () => {
    setSkipped((prev) => new Set([...prev, currentIndex]))
    if (currentIndex + 1 < total) {
      setCurrentIndex((i) => i + 1)
    } else {
      updateQuizProgress(score, total, [...incorrect, currentIndex])
      setIsComplete(true)
    }
  }

  const handleRetake = () => {
    setQuestions(data.quiz)
    setCurrentIndex(0)
    setScore(0)
    setIncorrect([])
    setSkipped(new Set())
    setIsComplete(false)
    setAnsweredCount(0)
  }

  const handleRetakeWrong = () => {
    if (incorrect.length === 0) {
      toast.success('You got them all right!')
      return
    }
    const wrongQuestions = incorrect.map((i) => questions[i]).filter(Boolean)
    setQuestions(wrongQuestions)
    setCurrentIndex(0)
    setScore(0)
    setIncorrect([])
    setSkipped(new Set())
    setIsComplete(false)
    setAnsweredCount(0)
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <motion.div variants={staggerItem} className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-bold text-surface-900 dark:text-surface-50">
            Multiple Choice Quiz
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            Score: {score}/{answeredCount} • {total} questions total
          </p>
        </div>
        {!isComplete && (
          <div className="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-5 bg-brand-500'
                      : i < currentIndex
                      ? incorrect.includes(i)
                        ? 'w-1.5 bg-red-400'
                        : 'w-1.5 bg-green-400'
                      : 'w-1.5 bg-surface-300 dark:bg-surface-600'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Progress bar */}
      {!isComplete && (
        <motion.div variants={staggerItem}>
          <div className="h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
              animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        {isComplete ? (
          <QuizScoreScreen
            key="score"
            score={score}
            total={total}
            incorrect={incorrect}
            onRetake={handleRetake}
            onRetakeWrong={handleRetakeWrong}
            onDone={() => {}}
          />
        ) : (
          <motion.div variants={staggerItem} key="question">
            <AnimatePresence mode="wait">
              <QuizQuestion
                key={currentIndex}
                question={currentQuestion}
                onAnswer={handleAnswer}
                onSkip={handleSkip}
                questionNum={currentIndex + 1}
                total={total}
                skipped={skipped.has(currentIndex)}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}