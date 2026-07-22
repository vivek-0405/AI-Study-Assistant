import { motion } from 'framer-motion'

function SkeletonBlock({ className = '' }) {
  return (
    <div
      className={`skeleton ${className}`}
      aria-hidden="true"
    />
  )
}

export function FlashcardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-card p-8 flex flex-col gap-6"
    >
      <div className="flex justify-between items-center">
        <SkeletonBlock className="h-4 w-24" />
        <SkeletonBlock className="h-8 w-8 rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-4 py-8">
        <SkeletonBlock className="h-6 w-3/4" />
        <SkeletonBlock className="h-4 w-1/2" />
      </div>
      <div className="flex justify-center gap-4">
        <SkeletonBlock className="h-10 w-24 rounded-xl" />
        <SkeletonBlock className="h-10 w-24 rounded-xl" />
        <SkeletonBlock className="h-10 w-24 rounded-xl" />
      </div>
    </motion.div>
  )
}

export function QuizSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-card p-8 flex flex-col gap-6"
    >
      <SkeletonBlock className="h-4 w-32" />
      <SkeletonBlock className="h-6 w-full" />
      <SkeletonBlock className="h-5 w-3/4" />
      <div className="flex flex-col gap-3 mt-4">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonBlock key={i} className="h-14 rounded-xl" />
        ))}
      </div>
    </motion.div>
  )
}

export function SummarySkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-4"
    >
      <SkeletonBlock className="h-8 w-2/3" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-5/6" />
      <SkeletonBlock className="h-4 w-4/5" />
      <div className="mt-4 flex flex-col gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-3 items-start">
            <SkeletonBlock className="h-5 w-5 rounded-full flex-shrink-0 mt-0.5" />
            <SkeletonBlock className="h-4 flex-1" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function DashboardLoadingSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header skeleton */}
      <div className="glass border-b border-surface-200 dark:border-surface-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <SkeletonBlock className="h-8 w-48" />
          <div className="flex gap-3">
            <SkeletonBlock className="h-9 w-24 rounded-xl" />
            <SkeletonBlock className="h-9 w-9 rounded-full" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 py-8 flex gap-6">
        {/* Sidebar skeleton */}
        <div className="hidden lg:flex flex-col gap-2 w-56 flex-shrink-0">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SkeletonBlock key={i} className="h-10 rounded-xl" />
          ))}
        </div>

        {/* Content skeleton */}
        <div className="flex-1 flex flex-col gap-6">
          <SummarySkeleton />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <SkeletonBlock key={i} className="h-28 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonBlock