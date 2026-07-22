import confetti from 'canvas-confetti'

export const triggerConfetti = (options = {}) => {
  const defaults = {
    spread: 100,
    ticks: 100,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#3b82f6'],
  }

  const config = { ...defaults, ...options }

  // Left cannon
  confetti({
    ...config,
    particleCount: 60,
    angle: 60,
    origin: { x: 0, y: 0.6 },
  })

  // Right cannon
  confetti({
    ...config,
    particleCount: 60,
    angle: 120,
    origin: { x: 1, y: 0.6 },
  })
}

export const triggerSchoolPride = () => {
  const end = Date.now() + 2000
  const colors = ['#6366f1', '#ec4899']

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    })
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }

  frame()
}

export const triggerFireworks = () => {
  const duration = 3000
  const end = Date.now() + duration

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: Math.random() * 360,
      spread: 60,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
      colors: ['#6366f1', '#8b5cf6', '#ec4899', '#10b981'],
      ticks: 60,
      gravity: 1,
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }

  frame()
}