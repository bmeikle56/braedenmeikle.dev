import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const color = 'rgb(185,0,185)'

function SpeakerBox({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, delay: delay }}
    >
      <div style={{display: 'flex'}}>
          <div
            style={{
              backgroundColor: color,
              width: 24,
              height: 24,
              borderRadius: 6,
              boxShadow: `0px 0px 15px ${color}`
            }}
          />
      </div>
    </motion.div>
  )
}

function LoadingBoxes() {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        flexDirection: 'row',
        gap: '12px',
        height: '100vh',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SpeakerBox delay={0}/>
      <SpeakerBox delay={0.25}/>
      <SpeakerBox delay={0.5}/>
      <SpeakerBox delay={0.75}/>
    </motion.div>
  )
}

function ByteTransfer() {
  const preRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (preRef.current) {
        preRef.current.textContent =
          Array.from({ length: 8 }, () => Math.round(Math.random())).join('')
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 3 }}
    >
      <pre
        ref={preRef}
        style={{
          color: 'rgb(12,123,0)',
          textShadow:
            '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)',
        }}
      />
    </motion.div>
  )
}

function LoadingBits() {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        flexDirection: 'row',
        gap: '80px',
        height: '100vh',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
    >
      <ByteTransfer />
    </motion.div>
  )
}


export { LoadingBits, LoadingBoxes }
