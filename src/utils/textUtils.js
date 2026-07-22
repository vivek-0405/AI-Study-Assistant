export const countWords = (text) => {
  if (!text || typeof text !== 'string') return 0
  return text.trim().split(/\s+/).filter(Boolean).length
}

export const countChars = (text) => {
  return (text || '').length
}

export const estimateReadingTime = (text) => {
  const words = countWords(text)
  const wordsPerMinute = 200
  const minutes = Math.ceil(words / wordsPerMinute)
  if (minutes < 1) return '< 1 min'
  if (minutes === 1) return '1 min'
  return `${minutes} mins`
}

export const truncate = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export const capitalizeFirst = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const extractTextFromFile = async (file) => {
  if (file.type === 'text/plain') {
    return await file.text()
  }

  if (
    file.type === 'application/pdf' ||
    file.name.toLowerCase().endsWith('.pdf')
  ) {
    throw new Error(
      'PDF parsing requires additional setup. Please copy and paste the text directly.'
    )
  }

  if (
    file.type.includes('word') ||
    file.name.toLowerCase().endsWith('.docx') ||
    file.name.toLowerCase().endsWith('.doc')
  ) {
    throw new Error(
      'DOCX parsing requires additional setup. Please copy and paste the text directly.'
    )
  }

  // Try reading as text anyway
  try {
    return await file.text()
  } catch {
    throw new Error(`Cannot read file type: ${file.type}`)
  }
}

export const formatTime = (seconds) => {
  if (seconds < 60) return `${seconds}s`
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}m ${secs}s`
}

export const getAccuracyColor = (accuracy) => {
  if (accuracy >= 80) return 'text-green-500'
  if (accuracy >= 60) return 'text-yellow-500'
  return 'text-red-500'
}

export const getDifficultyColor = (difficulty) => {
  const colors = {
    easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  }
  return colors[difficulty] || colors.medium
}