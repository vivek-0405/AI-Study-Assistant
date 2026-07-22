/**
 * Robust AI response parser
 * Handles malformed JSON, markdown code blocks, extra text, etc.
 */
export const parseAIResponse = (rawText) => {
  if (!rawText || typeof rawText !== 'string') {
    throw new Error('Invalid AI response: empty or non-string response')
  }

  let text = rawText.trim()

  // Strategy 1: Direct parse
  try {
    return JSON.parse(text)
  } catch {
    // Continue to next strategy
  }

  // Strategy 2: Remove markdown code blocks
  const codeBlockPatterns = [
    /```json\s*([\s\S]*?)\s*```/i,
    /```\s*([\s\S]*?)\s*```/,
    /`([\s\S]*?)`/,
  ]

  for (const pattern of codeBlockPatterns) {
    const match = text.match(pattern)
    if (match) {
      try {
        return JSON.parse(match[1].trim())
      } catch {
        text = match[1].trim()
      }
    }
  }

  // Strategy 3: Extract JSON object
  const jsonObjectMatch = text.match(/\{[\s\S]*\}/)
  if (jsonObjectMatch) {
    try {
      return JSON.parse(jsonObjectMatch[0])
    } catch {
      // Continue to next strategy
    }
  }

  // Strategy 4: Fix common JSON issues
  try {
    const fixed = fixCommonJsonIssues(text)
    return JSON.parse(fixed)
  } catch {
    // Continue to next strategy
  }

  // Strategy 5: Find the largest valid JSON object
  try {
    const result = extractLargestJsonObject(text)
    if (result) return result
  } catch {
    // Continue
  }

  throw new Error(
    'Could not parse AI response. The AI returned an invalid format. Please try again.'
  )
}

function fixCommonJsonIssues(text) {
  let fixed = text

  // Remove trailing commas before } or ]
  fixed = fixed.replace(/,(\s*[}\]])/g, '$1')

  // Fix single quotes to double quotes (basic)
  // Only replace when not inside a double-quoted string
  fixed = fixed.replace(/:\s*'([^']*?)'/g, ': "$1"')

  // Remove JavaScript comments
  fixed = fixed.replace(/\/\/[^\n]*/g, '')
  fixed = fixed.replace(/\/\*[\s\S]*?\*\//g, '')

  // Fix unquoted keys
  fixed = fixed.replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '$1"$2":')

  // Fix boolean values that might be quoted
  fixed = fixed.replace(/"true"/g, 'true').replace(/"false"/g, 'false')

  // Remove BOM
  fixed = fixed.replace(/^\uFEFF/, '')

  return fixed
}

function extractLargestJsonObject(text) {
  let maxObj = null
  let maxKeys = 0

  // Try all possible start positions
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '{') {
      // Find matching close brace
      let depth = 0
      for (let j = i; j < text.length; j++) {
        if (text[j] === '{') depth++
        else if (text[j] === '}') {
          depth--
          if (depth === 0) {
            const candidate = text.slice(i, j + 1)
            try {
              const obj = JSON.parse(candidate)
              const keys = Object.keys(obj).length
              if (keys > maxKeys) {
                maxKeys = keys
                maxObj = obj
              }
            } catch {
              // Try with fixes
              try {
                const obj = JSON.parse(fixCommonJsonIssues(candidate))
                const keys = Object.keys(obj).length
                if (keys > maxKeys) {
                  maxKeys = keys
                  maxObj = obj
                }
              } catch {
                // Skip
              }
            }
            break
          }
        }
      }
    }
  }

  return maxObj
}