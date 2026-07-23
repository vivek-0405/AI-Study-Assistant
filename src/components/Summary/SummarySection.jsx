import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Copy,
  Check,
  Download,
  BookOpen,
  Lightbulb,
  Zap,
  Hash,
} from 'lucide-react'
import toast from 'react-hot-toast'
import { staggerContainer, staggerItem } from '@/animations/variants'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success('Copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy')
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="btn-ghost p-2 rounded-lg"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  )
}

function CollapsibleCard({ title, icon: Icon, iconBg, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <motion.div variants={staggerItem} className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-surface-50/50 dark:hover:bg-surface-800/50 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="font-semibold text-surface-900 dark:text-surface-50 text-sm">
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-surface-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function SummarySection({ data }) {
  const handleDownload = () => {
    const content = `# ${data.title}

## Summary
${data.summary}

${data.detailedSummary ? `## Detailed Summary\n${data.detailedSummary}\n` : ''}

## Key Points
${data.keyPoints.map((p, i) => `${i + 1}. ${p}`).join('\n')}

${
  data.importantDefinitions?.length > 0
    ? `## Important Definitions\n${data.importantDefinitions.map((d) => `**${d.term}**: ${d.definition}`).join('\n\n')}`
    : ''
}
`

    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${data.title}-summary.md`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Summary downloaded!')
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4"
    >
      {/* Title */}
      <motion.div
        variants={staggerItem}
        className="flex items-start justify-between gap-4 flex-wrap"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 dark:text-surface-50 leading-tight">
            {data.title}
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-1">
            AI-generated study material
          </p>
        </div>
      </motion.div>

      {/* Quick summary */}
      <CollapsibleCard
        title="Summary"
        icon={BookOpen}
        iconBg="bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
        defaultOpen
      >
        <p className="text-surface-700 dark:text-surface-300 leading-relaxed text-sm">
          {data.summary}
        </p>
        {data.detailedSummary && (
          <p className="text-surface-600 dark:text-surface-400 leading-relaxed text-sm mt-3">
            {data.detailedSummary}
          </p>
        )}
      </CollapsibleCard>

      {/* Key points */}
      <CollapsibleCard
        title="Key Points"
        icon={Zap}
        iconBg="bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400"
        defaultOpen
      >
        <ul className="flex flex-col gap-2.5">
          {data.keyPoints.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <span className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                {i + 1}
              </span>
              <span className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </CollapsibleCard>

      {/* Important definitions */}
      {data.importantDefinitions?.length > 0 && (
        <CollapsibleCard
          title="Important Definitions"
          icon={Hash}
          iconBg="bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400"
          defaultOpen={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.importantDefinitions.map((def, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700"
              >
                <p className="font-semibold text-brand-600 dark:text-brand-400 text-sm mb-1">
                  {def.term}
                </p>
                <p className="text-xs text-surface-600 dark:text-surface-300 leading-relaxed">
                  {def.definition}
                </p>
              </motion.div>
            ))}
          </div>
        </CollapsibleCard>
      )}

      {/* Study tips */}
      {data.studyTips?.length > 0 && (
        <CollapsibleCard
          title="Study Tips"
          icon={Lightbulb}
          iconBg="bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400"
          defaultOpen={false}
        >
          <ul className="flex flex-col gap-2">
            {data.studyTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-green-500 flex-shrink-0 mt-0.5">💡</span>
                <span className="text-surface-700 dark:text-surface-300">{tip}</span>
              </li>
            ))}
          </ul>
        </CollapsibleCard>
      )}
    </motion.div>
  )
}