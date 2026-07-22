import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import {
  FileText,
  Upload,
  X,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Loader2,
  StopCircle,
  History,
} from 'lucide-react'
import toast from 'react-hot-toast'
import { extractTextFromFile } from '@/utils/textUtils'
import { useStudyGeneration } from '@/hooks/useStudyGeneration'
import { useStudyStore } from '@/store/studyStore'
import { staggerContainer, staggerItem } from '@/animations/variants'

const EXAMPLE_TOPICS = [
  {
    label: 'Photosynthesis',
    text: 'Photosynthesis is the process by which green plants convert sunlight into food. It occurs in the chloroplasts, using chlorophyll to absorb light energy. The process requires carbon dioxide and water, producing glucose and oxygen. The light-dependent reactions occur in the thylakoid membrane, while the light-independent reactions (Calvin cycle) occur in the stroma.',
  },
  {
    label: 'Operating Systems',
    text: 'An operating system (OS) is system software that manages hardware and software resources. Key concepts include process management, memory management, file systems, and I/O management. Process scheduling algorithms include FCFS, SJF, Round Robin, and Priority Scheduling. Virtual memory allows programs to use more memory than physically available through paging and segmentation.',
  },
  {
    label: 'Machine Learning',
    text: 'Machine Learning is a subset of AI that enables computers to learn from data without explicit programming. Types include supervised learning (classification, regression), unsupervised learning (clustering, dimensionality reduction), and reinforcement learning. Key algorithms include linear regression, decision trees, neural networks, and SVMs. Overfitting and underfitting are common challenges addressed through regularization and cross-validation.',
  },
  {
    label: 'World War II',
    text: "World War II (1939-1945) was a global conflict involving most nations. Key events include Germany's invasion of Poland, the Battle of Britain, Operation Barbarossa, Pearl Harbor, D-Day (June 6, 1944), and the dropping of atomic bombs on Hiroshima and Nagasaki. Major leaders included Churchill, Roosevelt, Stalin, Hitler, and Mussolini. The war resulted in approximately 70-85 million casualties.",
  },
]

const MAX_CHARS = 10000

export default function NotesInput() {
  const [notes, setNotes] = useState('')
  const [showHistory, setShowHistory] = useState(false)
  const textareaRef = useRef(null)
  const { generate, cancel, isLoading } = useStudyGeneration()
  const { recentNotes } = useStudyStore()



  const handleClear = useCallback(() => {
    setNotes('')
    textareaRef.current?.focus()
  }, [])

  const handleExampleLoad = useCallback((text) => {
    setNotes(text)
    textareaRef.current?.focus()
  }, [])

  const handleFileRead = useCallback(async (file) => {
    try {
      const text = await extractTextFromFile(file)
      setNotes(text.slice(0, MAX_CHARS))
      toast.success(`File loaded: ${file.name}`)
    } catch (err) {
      toast.error(err.message)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop: (files) => {
      if (files[0]) handleFileRead(files[0])
    },
    accept: { 'text/plain': ['.txt'] },
    multiple: false,
    noClick: true,
  })

  const handleSubmit = () => {
    generate(notes)
  }

  const isReady = notes.trim().length >= 10

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto px-4 sm:px-6 pb-20"
      id="input-section"
    >
      {/* Main card */}
      <motion.div variants={staggerItem} className="glass-card p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-950 flex items-center justify-center">
              <FileText className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <h2 className="font-semibold text-surface-900 dark:text-surface-50 text-sm">
                Study Material
              </h2>
              <p className="text-xs text-surface-400 dark:text-surface-500">
                Paste notes, lecture transcripts, or a topic
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            {notes && (
              <button
                onClick={handleClear}
                className="btn-ghost text-xs px-3 py-1.5 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                title="Clear text"
              >
                <X className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            )}
          </div>
        </div>

        {/* Textarea with dropzone */}
        <div
          {...getRootProps()}
          className={`relative rounded-xl border-2 transition-all duration-200 ${
            isDragActive
              ? 'border-brand-400 bg-brand-50/50 dark:bg-brand-950/20'
              : 'border-surface-200 dark:border-surface-700 hover:border-brand-300 dark:hover:border-brand-700'
          }`}
        >
          <input {...getInputProps()} />
          <textarea
            ref={textareaRef}
            value={notes}
            onChange={(e) => setNotes(e.target.value.slice(0, MAX_CHARS))}
            placeholder="Paste your lecture notes, textbook content, or enter a topic..."
            className="w-full h-64 sm:h-80 resize-none bg-transparent pt-4 pb-12 px-4 text-sm text-surface-900 dark:text-surface-50 placeholder:text-surface-400 dark:placeholder:text-surface-600 focus:outline-none leading-relaxed"
            aria-label="Study notes input"
            disabled={isLoading}
          />

          {/* Character Counter */}
          <div className="absolute bottom-3 right-4 text-xs text-surface-400 dark:text-surface-500 pointer-events-none select-none">
            {notes.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}
          </div>

          {/* Drag overlay */}
          <AnimatePresence>
            {isDragActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-xl bg-brand-50/90 dark:bg-brand-950/90 backdrop-blur-sm flex flex-col items-center justify-center gap-3 pointer-events-none"
              >
                <Upload className="w-10 h-10 text-brand-500 animate-bounce" />
                <p className="font-semibold text-brand-600 dark:text-brand-400">
                  Drop your .txt file here
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>



        {/* Divider */}
        <div className="border-t border-surface-200 dark:border-surface-700 my-6" />

        {/* Example topics */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-3">
            Quick Examples
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_TOPICS.map((example) => (
              <button
                key={example.label}
                onClick={() => handleExampleLoad(example.text)}
                disabled={isLoading}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 hover:bg-brand-50 dark:hover:bg-brand-950/50 hover:text-brand-600 dark:hover:text-brand-400 border border-transparent hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-200"
              >
                {example.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recent notes */}
        {recentNotes.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-2 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <History className="w-3 h-3" />
              Recent Notes
              {showHistory ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
            <AnimatePresence>
              {showHistory && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-2">
                    {recentNotes.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleExampleLoad(item.text)}
                        disabled={isLoading}
                        className="text-left p-3 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-200"
                      >
                        <p className="text-xs text-surface-600 dark:text-surface-300 line-clamp-1">
                          {item.text}
                        </p>
                        <p className="text-xs text-surface-400 dark:text-surface-500 mt-1">
                          {new Date(item.timestamp).toLocaleDateString()}
                        </p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Upload hint */}
        <button
          onClick={open}
          className="flex items-center gap-2 text-xs text-surface-400 dark:text-surface-500 mb-6 hover:text-brand-500 transition-colors cursor-pointer group text-left"
          title="Upload .txt file"
        >
          <Upload className="w-3.5 h-3.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-brand-500 underline font-medium">Upload file</span>
        </button>

        {/* Generate button */}
        <motion.button
          onClick={isLoading ? cancel : handleSubmit}
          disabled={!isReady && !isLoading}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 ${
            isLoading || isReady
              ? 'btn-primary text-base py-4 rounded-2xl shadow-glow-lg hover:shadow-glow hover:scale-[1.01] active:scale-[0.99]'
              : 'bg-surface-200 dark:bg-surface-800 text-surface-400 dark:text-surface-600 cursor-not-allowed'
          }`}
          whileTap={isReady || isLoading ? { scale: 0.98 } : {}}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Study Kit...
              <StopCircle className="w-4 h-4 opacity-70" />
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Study Kit
            </>
          )}
        </motion.button>


      </motion.div>
    </motion.section>
  )
}