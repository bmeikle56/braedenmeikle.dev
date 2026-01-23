import { motion } from 'framer-motion'
// import { useEffect, useRef } from 'react'

const color = 'rgb(185,0,185)'

function SoundAnim() {
  // const preRef = useRef(null)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (preRef.current) {
  //       preRef.current.textContent =
  //         Array.from({ length: 8 }, () => Math.round(Math.random())).join('')
  //     }
  //   }, 80)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 3 }}
    >
      <div
        style={{
          backgroundColor: color,
          width: 36,
          height: 36,
          borderRadius: 6,
          boxShadow: `0px 0px 15px ${color}`
        }}
      />
    </motion.div>
  )
}

function LoadingHeadphones() {
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
      <SoundAnim />
    </motion.div>
  )
}

export default LoadingHeadphones
