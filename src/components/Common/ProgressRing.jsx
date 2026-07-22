import { motion } from 'framer-motion'

export default function ProgressRing({
  progress = 0,
  size = 80,
  strokeWidth = 6,
  color = '#6366f1',
  bgColor = null,
  label = null,
  sublabel = null,
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor || 'rgba(99,102,241,0.15)'}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </svg>
      {(label !== null || sublabel !== null) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {label !== null && (
            <span className="text-sm font-bold text-surface-900 dark:text-surface-50 leading-none">
              {label}
            </span>
          )}
          {sublabel !== null && (
            <span className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  )
}