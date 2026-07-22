import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useStudyStore } from '@/store/studyStore'
import { generateStudyMaterial, cancelCurrentRequest } from '@/services/aiService'

export const useStudyGeneration = () => {
  const navigate = useNavigate()
  const abortControllerRef = useRef(null)
  const {
    setStudyData,
    setStatus,
    setError,
    setRawNotes,
    addToRecentNotes,
    addToHistory,
    status,
  } = useStudyStore()

  const generate = useCallback(
    async (notes) => {
      if (!notes || notes.trim().length < 10) {
        toast.error('Please enter at least 10 characters of study material.')
        return
      }

      // Cancel any ongoing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      cancelCurrentRequest()

      abortControllerRef.current = new AbortController()

      setStatus('loading')
      setRawNotes(notes)
      addToRecentNotes(notes.slice(0, 200))

      try {
        const data = await generateStudyMaterial(notes, {
          signal: abortControllerRef.current.signal,
        })

        setStudyData(data)
        addToHistory({
          title: data.title,
          timestamp: Date.now(),
          flashcards: data.flashcards.length,
          quiz: data.quiz.length,
        })

        navigate('/study')
      } catch (err) {
        if (err.message === 'STALE_REQUEST') {
          return
        }

        const msg = err.message.toLowerCase()
        const isFallbackTriggerError =
          msg.includes('quota') ||
          msg.includes('limit') ||
          msg.includes('429') ||
          msg.includes('401') ||
          msg.includes('403') ||
          msg.includes('400') ||
          msg.includes('api key') ||
          msg.includes('auth') ||
          msg.includes('credential') ||
          msg.includes('token') ||
          msg.includes('unauthorized') ||
          msg.includes('forbidden') ||
          msg.includes('failed after')

        if (isFallbackTriggerError) {
          // Switch provider to mock
          useStudyStore.getState().setApiProvider('mock')
          
          // Retry immediately with mock
          try {
            const data = await generateStudyMaterial(notes, {
              signal: abortControllerRef.current.signal,
            })
            
            setStudyData(data)
            addToHistory({
              title: data.title,
              timestamp: Date.now(),
              flashcards: data.flashcards.length,
              quiz: data.quiz.length,
            })

            navigate('/study')
            return
          } catch (mockErr) {
            setError(mockErr.message)
            toast.error(mockErr.message)
            return
          }
        }

        const errorMessage = err.message || 'Failed to generate study material'
        setError(errorMessage)

        toast.error(errorMessage, {
          duration: 6000,
        })
      }
    },
    [setStudyData, setStatus, setError, setRawNotes, addToRecentNotes, addToHistory, navigate]
  )

  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    cancelCurrentRequest()
    setStatus('idle')
  }, [setStatus])

  return { generate, cancel, isLoading: status === 'loading' }
}