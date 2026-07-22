import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/variants'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}