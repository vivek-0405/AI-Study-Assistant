import { getDifficultyColor } from '@/utils/textUtils'

export function DifficultyBadge({ difficulty }) {
  return (
    <span className={`tag ${getDifficultyColor(difficulty)}`}>
      {difficulty || 'medium'}
    </span>
  )
}

export function CountBadge({ count, label, color = 'brand' }) {
  const colorMap = {
    brand: 'bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300',
    green: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
    yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
  }
  return (
    <span className={`tag ${colorMap[color] || colorMap.brand}`}>
      {count} {label}
    </span>
  )
}