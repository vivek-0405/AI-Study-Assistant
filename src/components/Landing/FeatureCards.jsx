import { motion } from 'framer-motion'
import {
  CreditCard,
  HelpCircle,
  ToggleLeft,
  PenLine,
  MessageSquare,
  BookOpen,
  FileText,
  TrendingUp,
} from 'lucide-react'
import { staggerContainer, staggerItem } from '@/animations/variants'

const features = [
  {
    icon: CreditCard,
    title: 'Flashcards',
    description: 'Interactive flip cards with shuffle, favorites, and progress tracking',
    color: 'from-blue-500 to-brand-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: HelpCircle,
    title: 'Multiple Choice Quiz',
    description: 'AI-generated MCQs with instant feedback, explanations & score tracking',
    color: 'from-brand-500 to-purple-500',
    bg: 'bg-brand-50 dark:bg-brand-950/30',
    iconColor: 'text-brand-600 dark:text-brand-400',
  },
  {
    icon: ToggleLeft,
    title: 'True / False',
    description: 'Quick true/false questions with explanations for rapid review',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: PenLine,
    title: 'Fill in the Blanks',
    description: 'Missing-word exercises with hints and reveal answers',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: MessageSquare,
    title: 'Short Questions',
    description: 'Open-ended questions for deep understanding and self-evaluation',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: BookOpen,
    title: 'Key Concepts',
    description: 'Important terms, definitions, and examples with difficulty tags',
    color: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    iconColor: 'text-teal-600 dark:text-teal-400',
  },
  {
    icon: FileText,
    title: 'Revision Notes',
    description: 'Concise notes, formulas, exam tips, and memory tricks',
    color: 'from-green-500 to-teal-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: TrendingUp,
    title: 'Study Progress',
    description: 'Track your accuracy, streaks, and improvement over time',
    color: 'from-violet-500 to-brand-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
]

export default function FeatureCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={staggerItem} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-50 mb-4">
            Everything you need to{' '}
            <span className="gradient-text">ace your exams</span>
          </h2>
          <p className="text-surface-500 dark:text-surface-400 max-w-xl mx-auto">
            One paste generates a complete study kit. No more wasting time creating materials from scratch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-5 group cursor-default"
            >
              <div
                className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
              </div>
              <h3 className="font-semibold text-surface-900 dark:text-surface-50 mb-1.5 text-sm">
                {feature.title}
              </h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}