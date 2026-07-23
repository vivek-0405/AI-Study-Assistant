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
  FileText,
} from 'lucide-react'
import { staggerContainer, staggerItem } from '@/animations/variants'

function RevisionBlock({ title, icon: Icon, iconBg, items }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = `${title}\n\n${items.map((item, i) => `${i + 1}. ${item}`).join('\n')}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silent copy fallback
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
        <button onClick={handleCopy} className="btn-ghost p-2 rounded-lg" title="Copy section text">
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
  const handleDownloadWord = () => {
    const topicTitle = data.title || 'Study_Notes'
    const filename = `${topicTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Short_Notes.doc`

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${topicTitle}</title>
        <style>
          body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; margin: 40px; color: #1e293b; line-height: 1.6; }
          h1 { color: #312e81; font-size: 24pt; border-bottom: 3px solid #4f46e5; padding-bottom: 8px; margin-bottom: 16px; }
          h2 { color: #4338ca; font-size: 16pt; margin-top: 24px; margin-bottom: 12px; border-left: 4px solid #6366f1; padding-left: 10px; }
          h3 { color: #1e1b4b; font-size: 13pt; margin-top: 16px; margin-bottom: 8px; }
          p { font-size: 11pt; margin-bottom: 12px; }
          ul { font-size: 11pt; margin-left: 20px; }
          li { margin-bottom: 8px; }
          .note-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 14px; }
          .highlight { background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 12px; margin-bottom: 12px; }
          .footer { margin-top: 40px; border-top: 1px solid #cbd5e1; padding-top: 12px; font-size: 9pt; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <h1>${topicTitle} - Short Notes</h1>

        ${data.summary ? `
          <h2>Topic Overview</h2>
          <p>${data.summary}</p>
        ` : ''}

        ${data.detailedSummary ? `
          <p>${data.detailedSummary}</p>
        ` : ''}

        ${data.keyPoints && data.keyPoints.length > 0 ? `
          <h2>Key Takeaways</h2>
          <ul>
            ${data.keyPoints.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}

        ${data.revisionNotes && data.revisionNotes.length > 0 ? `
          <h2>Short Notes</h2>
          <ul>
            ${data.revisionNotes.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}

        ${data.importantDefinitions && data.importantDefinitions.length > 0 ? `
          <h2>Important Terms & Definitions</h2>
          ${data.importantDefinitions.map((def) => `
            <div class="highlight">
              <strong>${def.term}:</strong> ${def.definition}
            </div>
          `).join('')}
        ` : ''}

        ${data.keyConcepts && data.keyConcepts.length > 0 ? `
          <h2>Key Concepts</h2>
          ${data.keyConcepts.map((c) => `
            <div class="note-box">
              <h3>${c.term}</h3>
              <p><strong>Definition:</strong> ${c.definition}</p>
              ${c.example ? `<p><strong>Example:</strong> ${c.example}</p>` : ''}
            </div>
          `).join('')}
        ` : ''}

        ${data.formulaSheet && data.formulaSheet.length > 0 ? `
          <h2>Formula Sheet / Important Facts</h2>
          <ul>
            ${data.formulaSheet.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}

        ${data.examTips && data.examTips.length > 0 ? `
          <h2>Exam Tips</h2>
          <ul>
            ${data.examTips.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}

        <div class="footer">
          Generated by AI Study Assistant — Ready for offline revision & printing
        </div>
      </body>
      </html>
    `

    const blob = new Blob(['\ufeff' + htmlContent], {
      type: 'application/msword;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <motion.div variants={staggerItem} className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-surface-900 dark:text-surface-50 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            Short Notes
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5">
            Concise topic notes formatted for quick reading & offline Word download
          </p>
        </div>
        <button
          onClick={handleDownloadWord}
          className="btn-primary p-2.5 rounded-xl shadow-md flex items-center justify-center transition-transform hover:scale-105"
          title="Download Word"
        >
          <Download className="w-5 h-5" />
        </button>
      </motion.div>

      <RevisionBlock
        title="Short Notes & Core Takeaways"
        icon={BookOpen}
        iconBg="bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
        items={data.revisionNotes}
      />
      <RevisionBlock
        title="Key Points & Important Facts"
        icon={Zap}
        iconBg="bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400"
        items={data.keyPoints}
      />
      <RevisionBlock
        title="Exam Tips & Fast Recall"
        icon={Target}
        iconBg="bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400"
        items={data.examTips}
      />
      <RevisionBlock
        title="Memory Tricks & Quick Reference"
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