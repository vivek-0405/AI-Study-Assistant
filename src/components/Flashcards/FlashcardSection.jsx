import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  RotateCcw,
  Star,
  StarOff,
  Check,
  X,
  Eye,
  Keyboard,
} from 'lucide-react'
import toast from 'react-hot-toast'
import { useStudyStore } from '@/store/studyStore'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { DifficultyBadge } from '@/components/Common/Badge'
import { staggerContainer, staggerItem } from '@/animations/variants'

function FlashCard({ card, index, onKnown, onDifficult, isFavorite, onToggleFavorite }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => setIsFlipped(!isFlipped)

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card */}
      <div
        className="relative w-full cursor-pointer perspective-1000"
        style={{ height: '280px' }}
        onClick={handleFlip}
        onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? handleFlip() : null}
        tabIndex={0}
        role="button"
        aria-label={isFlipped ? 'Show question' : 'Show answer'}
      >
        <motion.div
          className="absolute inset-0 transform-style-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 backface-hidden glass-card p-8 flex flex-col items-center justify-center text-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="absolute top-4 left-4">
              <span className="tag bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
                Question
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <DifficultyBadge difficulty={card.difficulty} />
            </div>
            <p className="text-lg sm:text-xl font-semibold text-surface-900 dark:text-surface-50 leading-relaxed">
              {card.question}
            </p>
            {card.hint && !isFlipped && (
              <div className="mt-4 flex items-center gap-1.5 text-xs text-surface-400 dark:text-surface-500">
                <Eye className="w-3 h-3" />
                Hint: {card.hint}
              </div>
            )}
            <div className="absolute bottom-4 flex items-center gap-1.5 text-xs text-surface-400 dark:text-surface-500">
              <span>Click to flip</span>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 backface-hidden glass-card p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-50 to-purple-50 dark:from-brand-950/30 dark:to-purple-950/30"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="absolute top-4 left-4">
              <span className="tag bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400">
                Answer
              </span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-surface-800 dark:text-surface-100 leading-relaxed">
              {card.answer}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-center gap-3 w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDifficult(index)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/50 font-medium text-sm border border-red-200 dark:border-red-900 transition-all"
          title="Mark as difficult (press X)"
        >
          <X className="w-4 h-4" />
          Difficult
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onToggleFavorite(index)}
          className={`p-2.5 rounded-xl transition-all border ${
            isFavorite
              ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-500 border-amber-200 dark:border-amber-900'
              : 'bg-surface-100 dark:bg-surface-800 text-surface-400 border-surface-200 dark:border-surface-700 hover:text-amber-500'
          }`}
          title="Toggle favorite"
        >
          {isFavorite ? (
            <Star className="w-4 h-4 fill-current" />
          ) : (
            <StarOff className="w-4 h-4" />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onKnown(index)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-950/50 font-medium text-sm border border-green-200 dark:border-green-900 transition-all"
          title="Mark as known (press Enter)"
        >
          <Check className="w-4 h-4" />
          Know it
        </motion.button>
      </div>
    </div>
  )
}

export default function FlashcardSection({ data }) {
  const { favorites, toggleFavorite, updateFlashcardProgress } = useStudyStore()
  const [cards, setCards] = useState(data.flashcards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [knownCards, setKnownCards] = useState(new Set())
  const [difficultCards, setDifficultCards] = useState(new Set())
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false)

  const currentCard = cards[currentIndex]
  const total = cards.length

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, total - 1))
  }, [total])

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0))
  }, [])

  const handleShuffle = useCallback(() => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setCurrentIndex(0)
    toast.success('Cards shuffled!')
  }, [cards])

  const handleReset = useCallback(() => {
    setCards(data.flashcards)
    setCurrentIndex(0)
    setKnownCards(new Set())
    setDifficultCards(new Set())
    updateFlashcardProgress(0)
    toast.success('Flashcards reset!')
  }, [data.flashcards, updateFlashcardProgress])

  const handleKnown = useCallback((idx) => {
    const card = cards[idx]
    if (!card) return
    const originalIdx = data.flashcards.indexOf(card)
    setKnownCards((prev) => {
      const next = new Set(prev)
      next.add(originalIdx)
      return next
    })
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1)
    } else {
      toast.success('🎉 You completed all flashcards!')
    }
  }, [cards, currentIndex, total, data.flashcards])

  const handleDifficult = useCallback((idx) => {
    const card = cards[idx]
    if (!card) return
    const originalIdx = data.flashcards.indexOf(card)
    setDifficultCards((prev) => {
      const next = new Set(prev)
      next.add(originalIdx)
      return next
    })
    toast('Marked as difficult', { icon: '📌' })
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1)
    }
  }, [cards, currentIndex, total, data.flashcards])

  useEffect(() => {
    updateFlashcardProgress(knownCards.size)
  }, [knownCards.size, updateFlashcardProgress])

  useKeyboardShortcuts([
    { key: 'ArrowRight', handler: goNext },
    { key: 'ArrowLeft', handler: goPrev },
    { key: 'ArrowDown', handler: () => handleKnown(currentIndex) },
    { key: 'ArrowUp', handler: () => handleDifficult(currentIndex) },
    { key: 's', handler: handleShuffle },
    { key: 'r', handler: handleReset },
  ])

  const completionPct = total > 0 ? Math.round((knownCards.size / total) * 100) : 0

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
            Flashcards
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            {knownCards.size} of {total} known • {difficultCards.size} difficult
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
            className="btn-ghost p-2 rounded-lg"
            title="Keyboard shortcuts"
          >
            <Keyboard className="w-4 h-4" />
          </button>
          <button onClick={handleShuffle} className="btn-ghost p-2 rounded-lg" title="Shuffle (S)">
            <Shuffle className="w-4 h-4" />
          </button>
          <button onClick={handleReset} className="btn-ghost p-2 rounded-lg" title="Reset (R)">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Keyboard help */}
      <AnimatePresence>
        {showKeyboardHelp && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-card p-4 text-xs text-surface-500 dark:text-surface-400 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                ['← →', 'Previous / Next'],
                ['↓', 'Mark as Known'],
                ['↑', 'Mark as Difficult'],
                ['S', 'Shuffle'],
                ['R', 'Reset'],
                ['Enter/Space', 'Flip Card'],
              ].map(([key, desc]) => (
                <div key={key} className="flex items-center gap-2">
                  <kbd className="px-2 py-1 rounded-md bg-surface-100 dark:bg-surface-800 font-mono font-bold text-surface-700 dark:text-surface-300 text-xs">
                    {key}
                  </kbd>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <motion.div variants={staggerItem}>
        <div className="flex items-center justify-between text-xs text-surface-500 dark:text-surface-400 mb-2">
          <span>Progress</span>
          <span>{completionPct}%</span>
        </div>
        <div className="h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            animate={{ width: `${completionPct}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Card counter */}
      <motion.div
        variants={staggerItem}
        className="flex items-center justify-center gap-2 text-sm text-surface-500 dark:text-surface-400"
      >
        <span>
          {currentIndex + 1} / {total}
        </span>
        <div className="flex gap-1">
          {cards.map((card, i) => {
            const originalIndex = data.flashcards.indexOf(card)
            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-6 bg-brand-500'
                    : knownCards.has(originalIndex)
                    ? 'w-1.5 bg-green-400'
                    : difficultCards.has(originalIndex)
                    ? 'w-1.5 bg-red-400'
                    : 'w-1.5 bg-surface-300 dark:bg-surface-600'
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            )
          })}
        </div>
      </motion.div>

      {/* Card */}
      <motion.div variants={staggerItem}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {currentCard && (
              <FlashCard
                card={currentCard}
                index={currentIndex}
                total={total}
                onKnown={handleKnown}
                onDifficult={handleDifficult}
                isFavorite={favorites.includes(`fc-${data.flashcards.indexOf(currentCard)}`)}
                onToggleFavorite={(idx) => toggleFavorite(`fc-${data.flashcards.indexOf(cards[idx])}`)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation */}
      <motion.div
        variants={staggerItem}
        className="flex items-center justify-between"
      >
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="btn-secondary px-5 py-2.5 disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex items-center gap-2">
          {currentCard && knownCards.has(data.flashcards.indexOf(currentCard)) && (
            <span className="tag bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400">
              ✓ Known
            </span>
          )}
          {currentCard && difficultCards.has(data.flashcards.indexOf(currentCard)) && (
            <span className="tag bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400">
              📌 Difficult
            </span>
          )}
        </div>

        <button
          onClick={goNext}
          disabled={currentIndex === total - 1}
          className="btn-secondary px-5 py-2.5 disabled:opacity-40"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Study again difficult */}
      {difficultCards.size > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 border-l-4 border-red-400"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-surface-900 dark:text-surface-50">
                {difficultCards.size} difficult card{difficultCards.size > 1 ? 's' : ''}
              </p>
              <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">
                Focus on these to improve
              </p>
            </div>
            <button
              onClick={() => {
                const difficultOnes = data.flashcards.filter((_, i) => difficultCards.has(i))
                setCards(difficultOnes)
                setCurrentIndex(0)
                setDifficultCards(new Set())
                setKnownCards(new Set())
                toast.success('Studying difficult cards only!')
              }}
              className="btn-secondary text-xs px-4 py-2"
            >
              Study These
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}