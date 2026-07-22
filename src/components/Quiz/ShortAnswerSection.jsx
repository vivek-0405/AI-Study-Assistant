import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'
import { staggerContainer, staggerItem } from '@/animations/variants'

const checkAnswerSimilarity = (userText, sampleText) => {
  if (!userText || !sampleText) return { isCorrect: false, score: 0 }

  const stopWords = new Set([
    'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'arent', 'as', 'at',
    'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by',
    'can', 'cannot', 'could', 'did', 'do', 'does', 'doing', 'dont', 'down', 'during',
    'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'herself',
    'him', 'himself', 'his', 'how', 'if', 'in', 'into', 'is', 'it', 'its', 'itself',
    'more', 'most', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'our', 'ours', 'ourselves', 'out', 'over', 'own',
    'same', 'she', 'should', 'so', 'some', 'such', 'than', 'that', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'with', 'would', 'you', 'your', 'yours', 'yourself', 'yourselves'
  ])

  const getWords = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 2 && !stopWords.has(w))
  }

  const userWords = new Set(getWords(userText))
  const sampleWords = getWords(sampleText)

  if (sampleWords.length === 0) return { isCorrect: true, score: 100 }

  const uniqueSampleWords = new Set(sampleWords)
  let uniqueMatches = 0;
  uniqueSampleWords.forEach(w => {
    if (userWords.has(w)) {
      uniqueMatches++
    }
  })

  const score = uniqueSampleWords.size > 0 ? (uniqueMatches / uniqueSampleWords.size) * 100 : 0
  const isCorrect = score >= 15 || uniqueMatches >= 2

  return { isCorrect, score: Math.round(score), matchedCount: uniqueMatches }
}

function ShortQuestion({ question, index, onComplete, isCompleted }) {
  const [userNote, setUserNote] = useState('')
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [matchScore, setMatchScore] = useState(0)
  const [showSample, setShowSample] = useState(false)

  const handleSubmit = () => {
    if (!userNote.trim()) return
    const result = checkAnswerSimilarity(userNote, question.sampleAnswer)
    setIsCorrect(result.isCorrect)
    setMatchScore(result.score)
    setChecked(true)
    if (result.isCorrect) {
      setShowSample(true)
      onComplete(index)
    }
  }

  const handleTryAgain = () => {
    setChecked(false)
  }

  const handleRevealSample = () => {
    setShowSample(true)
    onComplete(index)
  }

  return (
    <motion.div
      variants={staggerItem}
      className={`glass-card p-6 border-l-4 transition-all duration-300 ${
        isCompleted
          ? 'border-green-400 bg-green-50/30 dark:bg-green-950/10'
          : 'border-brand-400'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="tag bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 flex-shrink-0">
          Q{index + 1}
          {question.points && ` (${question.points} pts)`}
        </span>
        {isCompleted && (
          <span className="tag bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400">
            <Check className="w-3 h-3" />
            Completed
          </span>
        )}
      </div>

      <p className="text-base font-semibold text-surface-900 dark:text-surface-50 leading-relaxed mb-4">
        {question.question}
      </p>

      {/* User can jot notes */}
      <textarea
        value={userNote}
        onChange={(e) => setUserNote(e.target.value)}
        disabled={checked && isCorrect}
        placeholder="Write your answer here..."
        className="input-field h-24 resize-none text-sm mb-4 disabled:opacity-75"
      />

      {/* Reveal / Sample answer */}
      {!checked ? (
        <button
          onClick={handleSubmit}
          disabled={!userNote.trim()}
          className="btn-primary w-full py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Result Alert */}
          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900 text-green-800 dark:text-green-300'
                : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900 text-red-800 dark:text-red-300'
            }`}
          >
            <span className="text-lg">{isCorrect ? '✅' : '❌'}</span>
            <div>
              <p className="font-semibold text-sm">
                {isCorrect ? 'Correct Answer!' : 'Incorrect / Incomplete'}
              </p>
              <p className="text-xs mt-0.5 opacity-90">
                {isCorrect
                  ? `Your answer matches the key concepts (Similarity Score: ${matchScore}%).`
                  : `Your answer seems to miss some key terms from the topic (Similarity Score: ${matchScore}%).`}
              </p>
            </div>
          </div>

          {/* If incorrect, show buttons */}
          {!isCorrect && !showSample && (
            <div className="flex gap-3">
              <button
                onClick={handleTryAgain}
                className="btn-secondary flex-1 py-2"
              >
                Try Again
              </button>
              <button
                onClick={handleRevealSample}
                className="btn-primary flex-1 py-2"
              >
                Show Sample Answer
              </button>
            </div>
          )}

          {/* Sample Answer Details */}
          {showSample && question.sampleAnswer && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <div className="p-4 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900">
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">
                    Sample Answer
                  </p>
                  <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
                    {question.sampleAnswer}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default function ShortAnswerSection({ data }) {
  const { updateShortAnswerProgress } = useStudyStore()
  const [completed, setCompleted] = useState(new Set())

  const handleComplete = useCallback((index) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }, [])

  useEffect(() => {
    updateShortAnswerProgress(completed.size)
  }, [completed.size, updateShortAnswerProgress])

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
            Short Answer Questions
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            {completed.size} of {data.shortQuestions.length} completed
          </p>
        </div>
      </motion.div>

      {/* Progress */}
      <motion.div variants={staggerItem}>
        <div className="h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            animate={{
              width: `${(completed.size / data.shortQuestions.length) * 100}%`,
            }}
          />
        </div>
      </motion.div>

      {data.shortQuestions.map((q, i) => (
        <ShortQuestion
          key={i}
          question={q}
          index={i}
          onComplete={handleComplete}
          isCompleted={completed.has(i)}
        />
      ))}
    </motion.div>
  )
}