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

import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import mammoth from 'mammoth'

// Set worker source to local Vite bundled worker (offline compatible, zero CDN errors)
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

// Fallback extractor for raw PDF text streams
const extractRawPdfStrings = (arrayBuffer) => {
  try {
    const decoder = new TextDecoder('latin1')
    const rawText = decoder.decode(arrayBuffer)
    const textPieces = []

    // Match text blocks and parentheses string commands
    const stringMatches = rawText.match(/\(([^()\\]*(?:\\.[^()\\]*)*)\)\s*(?:Tj|TJ|'|")/g) || []
    for (const str of stringMatches) {
      const match = /\((.*)\)/.exec(str)
      if (match && match[1]) {
        const cleaned = match[1]
          .replace(/\\([()\\])/g, '$1')
          .replace(/\\n/g, '\n')
          .replace(/\\r/g, '')
          .replace(/\\t/g, ' ')
        if (cleaned.trim().length > 1) {
          textPieces.push(cleaned)
        }
      }
    }

    return textPieces.join(' ').replace(/\s+/g, ' ').trim()
  } catch {
    return ''
  }
}

export const extractTextFromFile = async (file) => {
  const fileName = file.name.toLowerCase()

  if (fileName.endsWith('.pdf') || file.type === 'application/pdf') {
    let extractedText = ''
    const arrayBuffer = await file.arrayBuffer()

    // Primary: pdfjsLib parsing
    try {
      const loadingTask = pdfjsLib.getDocument({
        data: arrayBuffer,
        useSystemFonts: true,
        isEvalSupported: false,
      })
      const pdf = await loadingTask.promise

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()
        const pageText = content.items
          .map((item) => (item && typeof item.str === 'string' ? item.str : ''))
          .filter(Boolean)
          .join(' ')
        if (pageText.trim()) {
          extractedText += pageText + '\n\n'
        }
      }
    } catch {
      // Fallback silently if pdfjsLib fails
    }

    extractedText = extractedText.trim()

    // Secondary: Raw PDF text stream extraction fallback if pdfjs returned empty
    if (!extractedText) {
      extractedText = extractRawPdfStrings(arrayBuffer)
    }

    if (!extractedText) {
      throw new Error(
        'Could not extract text from this PDF. If it is a scanned image or locked document, please copy and paste the text directly.'
      )
    }

    return extractedText
  }

  if (
    fileName.endsWith('.docx') ||
    fileName.endsWith('.doc') ||
    file.type.includes('word') ||
    file.type.includes('officedocument')
  ) {
    try {
      const arrayBuffer = await file.arrayBuffer()
      const result = await mammoth.extractRawText({ arrayBuffer })
      if (!result.value.trim()) {
        throw new Error('No text found in Word document.')
      }
      return result.value.trim()
    } catch (err) {
      if (err.message.includes('No text found')) throw err
      try {
        return await file.text()
      } catch {
        throw new Error(`Failed to parse Word document: ${err.message || 'Unknown error'}`)
      }
    }
  }

  // Text, Markdown, RTF, CSV, JSON, HTML, etc.
  try {
    return await file.text()
  } catch (err) {
    throw new Error(`Cannot read file: ${err.message}`)
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