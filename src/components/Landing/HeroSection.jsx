import { motion } from 'framer-motion'
import { Sparkles, Zap, BookOpen } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/animations/variants'

const stats = [
  { label: 'Study Modes', value: '6+', icon: BookOpen },
  { label: 'AI Powered', value: '100%', icon: Sparkles },
  { label: 'Questions Generated', value: '30+', icon: Zap },
]

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 px-6 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={staggerItem} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-200 dark:border-brand-800/50 text-sm font-medium text-brand-600 dark:text-brand-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            AI-Powered Study Assistant
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={staggerItem}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-surface-900 dark:text-surface-50 leading-tight tracking-tight mb-6"
        >
          Learn Smarter,{' '}
          <span className="text-blue-600 dark:text-blue-400">Not Harder</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className="text-xl text-surface-600 dark:text-surface-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
        >
          Paste your notes and instantly generate flashcards, quizzes, summaries,
          and revision material powered by AI.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400"
            >
              <Icon className="w-4 h-4 text-brand-500" />
              <strong className="text-surface-900 dark:text-surface-100 font-semibold">
                {value}
              </strong>
              {label}
            </div>
          ))}
        </motion.div>


      </motion.div>
    </section>
  )
}