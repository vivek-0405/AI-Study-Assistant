import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { scaleIn } from '@/animations/variants'

export default function EmptyState({
  icon: Icon = BookOpen,
  title = 'Nothing here yet',
  description = '',
  action = null,
}) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div className="w-20 h-20 rounded-2xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-brand-400 dark:text-brand-500" />
      </div>
      <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-surface-500 dark:text-surface-400 max-w-xs mb-6">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </motion.div>
  )
}