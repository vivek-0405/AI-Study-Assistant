import { getProvider, getApiKey } from './aiProviders'
import { buildStudyPrompt } from './promptBuilder'
import { parseAIResponse } from '@/utils/parseAIResponse'
import { validateStudyData } from '@/schemas/studySchema'
import { useStudyStore } from '@/store/studyStore'

const DEFAULT_TIMEOUT = 60000 // 60 seconds
const MAX_RETRIES = 2

let currentRequestId = 0

export const generateStudyMaterial = async (notes, options = {}) => {
  const { onRetry, signal: externalSignal } = options

  // Increment request ID to handle stale responses
  const requestId = ++currentRequestId
  const isStale = () => requestId !== currentRequestId

  const apiProvider = useStudyStore.getState().apiProvider
  const provider = apiProvider || 'gemini'

  if (provider === 'mock') {
    // Return mock data after a small simulated delay
    await sleep(1200)
    if (isStale()) throw new Error('STALE_REQUEST')
    const { getMockStudyData } = await import('./mockProvider')
    const mockData = getMockStudyData(notes)
    const validated = validateStudyData(mockData)
    return validated
  }

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (isStale()) {
      throw new Error('STALE_REQUEST')
    }

    if (attempt > 0 && onRetry) {
      onRetry(attempt)
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT)

    // Combine with external signal if provided
    const combinedSignal = externalSignal
      ? createCombinedSignal(externalSignal, controller.signal)
      : controller.signal

    try {
      const providerConfig = getProvider(provider)
      const apiKey = getApiKey(provider)
      const prompt = buildStudyPrompt(notes)
      const { url, options: fetchOptions } = providerConfig.buildRequest(prompt, apiKey)

      const response = await fetch(url, {
        ...fetchOptions,
        signal: combinedSignal,
      })

      clearTimeout(timeoutId)

      if (isStale()) throw new Error('STALE_REQUEST')

      const rawText = await providerConfig.parseResponse(response)

      if (!rawText || rawText.trim() === '') {
        throw new Error('Empty response from AI')
      }

      // Parse and clean the response
      const parsed = parseAIResponse(rawText)

      // Validate with Zod
      const validated = validateStudyData(parsed)

      return validated
    } catch (err) {
      clearTimeout(timeoutId)

      if (err.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.', { cause: err })
      }

      if (err.message === 'STALE_REQUEST') {
        throw err
      }

      // Don't retry on validation errors, auth errors, or rate limits/quota exceeded
      const msg = err.message.toLowerCase()
      const isAuthOrQuotaError =
        msg.includes('validation') ||
        msg.includes('api key') ||
        msg.includes('auth') ||
        msg.includes('credential') ||
        msg.includes('token') ||
        msg.includes('unauthorized') ||
        msg.includes('forbidden') ||
        msg.includes('quota') ||
        msg.includes('limit') ||
        msg.includes('401') ||
        msg.includes('403') ||
        msg.includes('429') ||
        msg.includes('400')

      if (isAuthOrQuotaError) {
        throw err
      }

      // Last attempt
      if (attempt === MAX_RETRIES) {
        throw new Error(`Failed after ${MAX_RETRIES + 1} attempts: ${err.message}`, { cause: err })
      }

      // Wait before retry (exponential backoff)
      await sleep(1000 * Math.pow(2, attempt))
    }
  }
}

export const cancelCurrentRequest = () => {
  currentRequestId++
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function createCombinedSignal(signal1, signal2) {
  const controller = new AbortController()
  const abort = () => controller.abort()
  signal1.addEventListener('abort', abort)
  signal2.addEventListener('abort', abort)
  return controller.signal
}