import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CreditCard,
  HelpCircle,
  ToggleLeft,
  PenLine,
  MessageSquare,
  Clock,
  Target,
  TrendingUp,
} from 'lucide-react'
import { useStudyStore } from '@/store/studyStore'
import ProgressRing from '@/components/Common/ProgressRing'
import { formatTime } from '@/utils/textUtils'
import { staggerContainer, staggerItem } from '@/animations/variants'

function StatCard({ label, value, sub, icon: Icon, color, className = '' }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={`glass-card p-5 ${className}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
            color || 'bg-brand-100 dark:bg-brand-950'
          }`}
        >
          <Icon className="w-4 h-4 text-brand-600 dark:text-brand-400" />
        </div>
      </div>
      <p className="text-2xl font-black text-surface-900 dark:text-surface-50">{value}</p>
      <p className="text-xs font-semibold text-surface-500 dark:text-surface-400 mt-0.5">{label}</p>
      {sub && <p className="text-xs text-surface-400 dark:text-surface-500 mt-0.5">{sub}</p>}
    </motion.div>
  )
}

function ProgressRow({ label, score, total, color = '#6366f1', icon: Icon }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 w-36 flex-shrink-0">
        <Icon className="w-4 h-4 text-surface-400 dark:text-surface-500" />
        <span className="text-sm font-medium text-surface-700 dark:text-surface-300">
          {label}
        </span>
      </div>
      <div className="flex-1 h-2.5 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
      <div className="w-16 text-right">
        <span className="text-sm font-bold text-surface-900 dark:text-surface-50">
          {score}/{total}
        </span>
        <span className="text-xs text-surface-400 dark:text-surface-500 ml-1">
          ({pct}%)
        </span>
      </div>
    </div>
  )
}

export default function ProgressSection() {
  const { progress, updateTimeSpent } = useStudyStore()

  useEffect(() => {
    const interval = setInterval(updateTimeSpent, 5000)
    return () => clearInterval(interval)
  }, [updateTimeSpent])

  const totalCompleted =
    progress.flashcardsCompleted +
    progress.quizScore +
    progress.trueFalseScore +
    progress.fillBlanksScore +
    progress.shortAnswersCompleted

  const totalPossible =
    progress.flashcardsTotal +
    progress.quizTotal +
    progress.trueFalseTotal +
    progress.fillBlanksTotal +
    progress.shortAnswersTotal

  const overallPct = totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0

  const quizAccuracy =
    progress.quizTotal > 0
      ? Math.round((progress.quizScore / progress.quizTotal) * 100)
      : 0

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <motion.div variants={staggerItem}>
        <h2 className="text-xl font-bold text-surface-900 dark:text-surface-50">
          Study Progress
        </h2>
        <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
          Track your learning journey
        </p>
      </motion.div>

      {/* Overall progress */}
      <motion.div
        variants={staggerItem}
        className="glass-card p-6 flex items-center gap-6 flex-wrap"
      >
        <ProgressRing
          progress={overallPct}
          size={100}
          strokeWidth={8}
          color="#6366f1"
          label={`${overallPct}%`}
          sublabel="Complete"
        />
        <div className="flex-1">
          <h3 className="font-bold text-surface-900 dark:text-surface-50 mb-1">
            Overall Completion
          </h3>
          <p className="text-sm text-surface-500 dark:text-surface-400 mb-3">
            {totalCompleted} of {totalPossible} items completed
          </p>
          <div className="h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${overallPct}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard
          label="Flashcards Done"
          value={progress.flashcardsCompleted}
          sub={`of ${progress.flashcardsTotal}`}
          icon={CreditCard}
          color="bg-blue-100 dark:bg-blue-950"
        />
        <StatCard
          label="Quiz Score"
          value={`${quizAccuracy}%`}
          sub={`${progress.quizScore}/${progress.quizTotal}`}
          icon={HelpCircle}
          color="bg-brand-100 dark:bg-brand-950"
        />
        <StatCard
          label="Time Spent"
          value={formatTime(progress.timeSpent)}
          icon={Clock}
          color="bg-green-100 dark:bg-green-950"
        />
        <StatCard
          label="Accuracy"
          value={`${quizAccuracy}%`}
          icon={Target}
          color="bg-purple-100 dark:bg-purple-950"
        />
      </div>

      {/* Detailed progress */}
      <motion.div variants={staggerItem} className="glass-card p-6">
        <h3 className="font-semibold text-surface-900 dark:text-surface-50 mb-5 text-sm">
          Progress by Section
        </h3>
        <div className="flex flex-col gap-4">
          <ProgressRow
            label="Flashcards"
            score={progress.flashcardsCompleted}
            total={progress.flashcardsTotal}
            color="#3b82f6"
            icon={CreditCard}
          />
          <ProgressRow
            label="Quiz"
            score={progress.quizScore}
            total={progress.quizTotal}
            color="#6366f1"
            icon={HelpCircle}
          />
          <ProgressRow
            label="True/False"
            score={progress.trueFalseScore}
            total={progress.trueFalseTotal}
            color="#8b5cf6"
            icon={ToggleLeft}
          />
          <ProgressRow
            label="Fill Blanks"
            score={progress.fillBlanksScore}
            total={progress.fillBlanksTotal}
            color="#ec4899"
            icon={PenLine}
          />
          <ProgressRow
            label="Short Q&A"
            score={progress.shortAnswersCompleted}
            total={progress.shortAnswersTotal}
            color="#10b981"
            icon={MessageSquare}
          />
        </div>
      </motion.div>

      {/* Motivational message */}
      <motion.div
        variants={staggerItem}
        className="glass-card p-5 border-l-4 border-brand-500"
      >
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-surface-900 dark:text-surface-50 mb-1">
              {overallPct >= 80
                ? "Outstanding progress! You're crushing it! 🏆"
                : overallPct >= 50
                ? "Great work! Keep going, you're halfway there! ⭐"
                : "Good start! Complete more sections to master this topic 💪"}
            </p>
            <p className="text-xs text-surface-500 dark:text-surface-400">
              {overallPct < 100
                ? `Complete all sections to reach 100%. Currently at ${overallPct}%.`
                : 'You completed everything! Try retaking the quiz for review.'}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}