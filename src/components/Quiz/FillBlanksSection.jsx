import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Eye, Lightbulb } from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'
import { staggerContainer, staggerItem } from '@/animations/variants'
import toast from 'react-hot-toast'

function BlankQuestion({ question, questionIndex, onAnswer }) {
  const [userAnswer, setUserAnswer] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const inputRef = useRef(null)

  const handleCheck = useCallback(() => {
    if (!userAnswer.trim()) {
      toast.error('Please enter an answer first')
      return
    }
    const correct =
      userAnswer.trim().toLowerCase() === question.answer.toLowerCase()
    setIsCorrect(correct)
    setRevealed(true)
    onAnswer(correct)
  }, [userAnswer, question.answer, onAnswer])

  const handleReveal = () => {
    setRevealed(true)
    setIsCorrect(false)
    onAnswer(false)
  }

  const renderQuestion = () => {
    const parts = question.question.split(/____+/)
    return (
      <span>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="inline-block mx-1">
                {revealed ? (
                  <span
                    className={`font-bold underline ${
                      isCorrect
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {question.answer}
                  </span>
                ) : (
                  <span className="inline-block w-24 border-b-2 border-brand-400 dark:border-brand-500" />
                )}
              </span>
            )}
          </span>
        ))}
      </span>
    )
  }

  return (
    <motion.div
      variants={staggerItem}
      className="glass-card p-6"
    >
      {/* Question number */}
      <div className="flex items-center justify-between mb-4">
        <span className="tag bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
          Question {questionIndex + 1}
        </span>
        {question.hint && !revealed && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="btn-ghost text-xs px-3 py-1.5 text-amber-600 dark:text-amber-400"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Hint
          </button>
        )}
      </div>

      {/* Hint */}
      <AnimatePresence>
        {showHint && question.hint && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-3"
          >
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-amber-700 dark:text-amber-400">
              💡 {question.hint}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question text */}
      <p className="text-base text-surface-800 dark:text-surface-100 leading-relaxed mb-5">
        {renderQuestion()}
      </p>

      {/* Input */}
      {!revealed && (
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            placeholder="Type your answer..."
            className="input-field flex-1"
            aria-label="Fill in the blank answer"
          />
          <button onClick={handleCheck} className="btn-primary px-4">
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={handleReveal}
            className="btn-ghost p-3 rounded-xl"
            title="Reveal answer"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Result */}
      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900'
              : 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900'
          }`}
        >
          {isCorrect ? (
            <>
              <Check className="w-4 h-4" />
              Correct! Well done.
            </>
          ) : (
            <>
              <X className="w-4 h-4" />
              Answer: <strong className="ml-1">{question.answer}</strong>
              {userAnswer && (
                <span className="ml-2 text-xs opacity-70">
                  (You wrote: {userAnswer})
                </span>
              )}
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function FillBlanksSection({ data }) {
  const { updateFillBlanksProgress } = useStudyStore()
  const [answers, setAnswers] = useState([])

  const handleAnswer = useCallback((isCorrect, index) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[index] = isCorrect
      return next
    })
  }, [])

  const answered = answers.filter((a) => a !== undefined).length
  const correct = answers.filter(Boolean).length
  const score = answered > 0 ? Math.round((correct / answered) * 100) : 0

  useEffect(() => {
    if (answered > 0) {
      updateFillBlanksProgress(correct, data.fillBlanks.length)
    }
  }, [correct, answered, data.fillBlanks.length, updateFillBlanksProgress])

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
            Fill in the Blanks
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            {answered} answered • {correct} correct • {answered > 0 ? score : 0}% accuracy
          </p>
        </div>
      </motion.div>

      {/* Progress */}
      {answered > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden"
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            animate={{ width: `${(answered / data.fillBlanks.length) * 100}%` }}
          />
        </motion.div>
      )}

      {/* Questions */}
      {data.fillBlanks.map((q, i) => (
        <BlankQuestion
          key={i}
          question={q}
          questionIndex={i}
          onAnswer={(isCorrect) => handleAnswer(isCorrect, i)}
        />
      ))}
    </motion.div>
  )
}