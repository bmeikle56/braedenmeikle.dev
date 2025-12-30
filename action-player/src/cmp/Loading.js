import { motion } from 'framer-motion'
import { useEffect } from 'react'

function DiamondSuit() {
  return (
    <motion.div className='suits' 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5}}
    >&#9824;</motion.div>
  )
}

function HeartSuit() {
  return (
    <motion.div className='suits'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5}}
    >&#9829;</motion.div>
  )
}

function SpadeSuit() {
  return (
    <motion.div className='suits'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 1}}
    >&#9830;</motion.div>
  )
}

function ClubSuit() {
  return (
    <motion.div className='suits'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 1.5}}
    >&#9827;</motion.div>
  )
}

function Loading({ setLoading }) {
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  return (
    <motion.div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      flexDirection: 'row',
      gap: '80px',
      height: '100vh'
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0,1,0] }}
    transition={{ duration: 3 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '10px',
        width: 'max-content'
      }}>
        <DiamondSuit/>
        <ClubSuit/>
        <HeartSuit/>
        <SpadeSuit/>
      </div>
    </motion.div>
  )
}

export default Loading