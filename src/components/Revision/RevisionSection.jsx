import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Copy,
  Download,
  BookOpen,
  Zap,
  Target,
  Brain,
  HelpCircle,
  Lightbulb,
  CheckCircle,
} from 'lucide-react'
import toast from 'react-hot-toast'
import { staggerContainer, staggerItem } from '@/animations/variants'

function RevisionBlock({ title, icon: Icon, iconBg, items }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = `${title}\n\n${items.map((item, i) => `${i + 1}. ${item}`).join('\n')}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success('Copied!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy')
    }
  }

  if (!items || items.length === 0) return null

  return (
    <motion.div variants={staggerItem} className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-surface-900 dark:text-surface-50 text-sm">
            {title}
          </h3>
          <span className={`tag bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400`}>
            {items.length}
          </span>
        </div>
        <button onClick={handleCopy} className="btn-ghost p-2 rounded-lg" title="Copy">
          {copied ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="flex items-start gap-3"
          >
            <span className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold ${iconBg}`}>
              {i + 1}
            </span>
            <span className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function FaqBlock({ faqs }) {
  const [open, setOpen] = useState(null)

  if (!faqs || faqs.length === 0) return null

  return (
    <motion.div variants={staggerItem} className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center">
          <HelpCircle className="w-4 h-4" />
        </div>
        <h3 className="font-semibold text-surface-900 dark:text-surface-50 text-sm">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors"
            >
              <span className="text-sm font-medium text-surface-800 dark:text-surface-100">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                className="text-surface-400 flex-shrink-0 ml-2"
              >
                ▼
              </motion.span>
            </button>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-sm text-surface-600 dark:text-surface-300 leading-relaxed border-t border-surface-200 dark:border-surface-700 pt-3">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function RevisionSection({ data }) {
  const handleDownloadAll = () => {
    const sections = [
      { title: 'Revision Notes', items: data.revisionNotes },
      { title: 'Formula Sheet', items: data.formulaSheet },
      { title: 'Exam Tips', items: data.examTips },
      { title: 'Memory Tricks', items: data.memoryTricks },
      { title: 'Difficult Concepts', items: data.difficultConcepts },
      { title: 'Study Tips', items: data.studyTips },
    ]

    const content = sections
      .filter((s) => s.items?.length > 0)
      .map(
        (s) => `## ${s.title}\n${s.items.map((item, i) => `${i + 1}. ${item}`).join('\n')}`
      )
      .join('\n\n')

    const blob = new Blob([`# ${data.title} - Revision Notes\n\n${content}`], {
      type: 'text/markdown',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${data.title}-revision.md`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Revision notes downloaded!')
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <motion.div variants={staggerItem} className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-surface-900 dark:text-surface-50">
            Revision Notes
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            Complete revision material
          </p>
        </div>
        <button onClick={handleDownloadAll} className="btn-secondary text-xs px-4 py-2">
          <Download className="w-3.5 h-3.5" />
          Download All
        </button>
      </motion.div>

      <RevisionBlock
        title="Revision Notes"
        icon={BookOpen}
        iconBg="bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
        items={data.revisionNotes}
      />
      <RevisionBlock
        title="Formula Sheet / Important Facts"
        icon={Zap}
        iconBg="bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400"
        items={data.formulaSheet}
      />
      <RevisionBlock
        title="Exam Tips"
        icon={Target}
        iconBg="bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400"
        items={data.examTips}
      />
      <RevisionBlock
        title="Memory Tricks"
        icon={Brain}
        iconBg="bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400"
        items={data.memoryTricks}
      />
      <RevisionBlock
        title="Difficult Concepts to Master"
        icon={Lightbulb}
        iconBg="bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400"
        items={data.difficultConcepts}
      />
      <FaqBlock faqs={data.faqs} />
    </motion.div>
  )
}