import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'



function SpeakerBox({ theme, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, delay: delay }}
    >
      <div style={{display: 'flex'}}>
          <div
            style={{
              backgroundColor: theme,
              width: 24,
              height: 24,
              borderRadius: 6,
              boxShadow: `0px 0px 15px ${theme}, 0px 0px 12px ${theme}, 0px 0px 15px ${theme}`
            }}
          />
      </div>
    </motion.div>
  )
}

function LoadingBoxes({ theme }) {
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
      <SpeakerBox theme={theme} delay={0}/>
      <SpeakerBox theme={theme} delay={0.25}/>
      <SpeakerBox theme={theme} delay={0.5}/>
      <SpeakerBox theme={theme} delay={0.75}/>
    </motion.div>
  )
}

function ByteTransfer({ theme }) {
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
          color: theme,
          textShadow: `0px 0px 15px ${theme}, 0px 0px 12px ${theme}, 0px 0px 15px ${theme}`,
        }}
      />
    </motion.div>
  )
}

function LoadingBits({ theme }) {
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
    >
      <ByteTransfer theme={theme}/>
    </motion.div>
  )
}


export { LoadingBits, LoadingBoxes }
