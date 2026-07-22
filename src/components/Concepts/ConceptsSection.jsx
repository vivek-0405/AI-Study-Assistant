import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Bookmark, BookmarkCheck } from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'
import { DifficultyBadge } from '@/components/Common/Badge'
import EmptyState from '@/components/Common/EmptyState'
import { staggerContainer, staggerItem } from '@/animations/variants'

function ConceptCard({ concept, isBookmarked, onToggleBookmark, idx }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="glass-card p-5 group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <DifficultyBadge difficulty={concept.difficulty} />
        </div>
        <button
          onClick={() => onToggleBookmark(`concept-${idx}`)}
          className={`flex-shrink-0 p-1.5 rounded-lg transition-all ${
            isBookmarked
              ? 'text-brand-500 bg-brand-50 dark:bg-brand-950/30'
              : 'text-surface-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950/30'
          }`}
        >
          {isBookmarked ? (
            <BookmarkCheck className="w-4 h-4" />
          ) : (
            <Bookmark className="w-4 h-4" />
          )}
        </button>
      </div>

      <h3 className="font-bold text-surface-900 dark:text-surface-50 mb-2 text-base">
        {concept.term}
      </h3>
      <p className="text-sm text-surface-600 dark:text-surface-300 leading-relaxed mb-3">
        {concept.definition}
      </p>

      {concept.example && (
        <div className="mt-3 p-3 rounded-lg bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700">
          <p className="text-xs font-semibold text-surface-400 dark:text-surface-500 mb-1 uppercase tracking-wider">
            Example
          </p>
          <p className="text-xs text-surface-600 dark:text-surface-300">{concept.example}</p>
        </div>
      )}
    </motion.div>
  )
}

export default function ConceptsSection({ data }) {
  const { bookmarks, toggleBookmark } = useStudyStore()
  const [search, setSearch] = useState('')
  const [filterDifficulty, setFilterDifficulty] = useState('all')

  const keyConcepts = data.keyConcepts

  const filtered = useMemo(() => {
    const concepts = keyConcepts || []
    return concepts.filter((c) => {
      const matchSearch =
        !search ||
        c.term.toLowerCase().includes(search.toLowerCase()) ||
        c.definition.toLowerCase().includes(search.toLowerCase())
      const matchDiff = filterDifficulty === 'all' || c.difficulty === filterDifficulty
      return matchSearch && matchDiff
    })
  }, [keyConcepts, search, filterDifficulty])

  if (!keyConcepts || keyConcepts.length === 0) {
    return <EmptyState title="No key concepts" description="No concepts were generated." />
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
            Key Concepts
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            {filtered.length} concepts • {bookmarks.filter(b => b.startsWith('concept-')).length} bookmarked
          </p>
        </div>
      </motion.div>

      {/* Search & filter */}
      <motion.div variants={staggerItem} className="flex gap-3 flex-col sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input
            type="text"
            placeholder="Search concepts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'easy', 'medium', 'hard'].map((d) => (
            <button
              key={d}
              onClick={() => setFilterDifficulty(d)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                filterDifficulty === d
                  ? 'bg-brand-600 text-white shadow-glow'
                  : 'btn-secondary text-xs px-3 py-2'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Concepts grid */}
      {filtered.length === 0 ? (
        <EmptyState title="No results" description="Try a different search term." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((concept) => {
            const originalIndex = keyConcepts.indexOf(concept)
            return (
              <ConceptCard
                key={originalIndex}
                concept={concept}
                idx={originalIndex}
                isBookmarked={bookmarks.includes(`concept-${originalIndex}`)}
                onToggleBookmark={toggleBookmark}
              />
            )
          })}
        </div>
      )}
    </motion.div>
  )
}