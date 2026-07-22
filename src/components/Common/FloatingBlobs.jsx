import { motion } from 'framer-motion'

export default function FloatingBlobs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <motion.div
        className="floating-blob w-96 h-96 bg-brand-400 dark:bg-brand-600 top-[-10%] left-[-5%]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-blob w-80 h-80 bg-purple-400 dark:bg-purple-700 top-[20%] right-[-5%]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div
        className="floating-blob w-72 h-72 bg-pink-400 dark:bg-pink-700 bottom-[-5%] left-[30%]"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
      <motion.div
        className="floating-blob w-64 h-64 bg-cyan-400 dark:bg-cyan-700 bottom-[20%] right-[20%]"
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.05, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      />
    </div>
  )
}