import { useStudyStore } from '@/store/studyStore'

// AI Provider configurations - isolated from UI
const providers = {
  openai: {
    name: 'OpenAI',
    buildRequest: (prompt, apiKey) => ({
      url: 'https://api.openai.com/v1/chat/completions',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content:
                'You are a study assistant that ONLY returns valid JSON. Never return markdown, explanations, or any text outside of JSON.',
            },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 4000,
          response_format: { type: 'json_object' },
        }),
      },
    }),
    parseResponse: async (response) => {
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error?.message || `OpenAI Error: ${response.status}`)
      }
      return data.choices?.[0]?.message?.content || ''
    },
  },

  gemini: {
    name: 'Google Gemini',
    buildRequest: (prompt, apiKey) => ({
      url: `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
          },
        }),
      },
    }),
    parseResponse: async (response) => {
      const data = await response.json()

      // Handle API errors
      if (!response.ok) {
        const errorMessage =
          data.error?.message || `Gemini API Error: ${response.status}`
        throw new Error(errorMessage)
      }

      // Check for blocked content
      if (data.promptFeedback?.blockReason) {
        throw new Error(`Content blocked: ${data.promptFeedback.blockReason}`)
      }

      // Extract text from response
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text

      if (!text) {
        const finishReason = data.candidates?.[0]?.finishReason
        if (finishReason && finishReason !== 'STOP') {
          throw new Error(`Generation stopped: ${finishReason}`)
        }
        throw new Error('Empty response from Gemini API')
      }

      return text
    },
  },

  claude: {
    name: 'Anthropic Claude',
    buildRequest: (prompt, apiKey) => ({
      url: 'https://api.anthropic.com/v1/messages',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          max_tokens: 4000,
          messages: [{ role: 'user', content: prompt }],
        }),
      },
    }),
    parseResponse: async (response) => {
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error?.message || `Claude Error: ${response.status}`)
      }
      return data.content?.[0]?.text || ''
    },
  },
}

export const getProvider = (providerName) => {
  const provider = providers[providerName]
  if (!provider) {
    throw new Error(
      `Unknown AI provider: ${providerName}. Valid options: openai, gemini, claude`
    )
  }
  return provider
}

export const getApiKey = (providerName) => {
  // Try to get key from Zustand store settings first
  const storeKeys = useStudyStore.getState().apiKeys || {}
  let key = storeKeys[providerName]

  // Fallback to environment variables
  if (!key || key.trim() === '') {
    const keyMap = {
      openai: import.meta.env.VITE_OPENAI_API_KEY,
      gemini: import.meta.env.VITE_GEMINI_API_KEY,
      claude: import.meta.env.VITE_ANTHROPIC_API_KEY,
    }
    key = keyMap[providerName]
  }

  if (!key || key.trim() === '') {
    throw new Error(
      `No API key found for provider: ${providerName}. Please click the settings gear icon in the header to enter an API key or use Demo Mode.`
    )
  }
  return key.trim()
}