'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  })

  if (reduce) return null

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, width: '100%' }}
      aria-hidden
    />
  )
}
