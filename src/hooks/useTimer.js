import { useEffect, useRef, useState } from 'react'

export const useTimer = (isActive = true) => {
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef(null)
  const startTimeRef = useRef(null)
  const elapsedRef = useRef(0)

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now() - elapsedRef.current * 1000
      intervalRef.current = setInterval(() => {
        const currentElapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)
        elapsedRef.current = currentElapsed
        setElapsed(currentElapsed)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isActive])

  const reset = () => {
    elapsedRef.current = 0
    setElapsed(0)
    if (isActive) {
      startTimeRef.current = Date.now()
    }
  }

  return { elapsed, reset }
}