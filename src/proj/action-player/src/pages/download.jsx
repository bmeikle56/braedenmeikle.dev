import { motion } from 'framer-motion'
import { useState } from 'react'
import Loading from '../cmp/Loading'
import BackButton from '../cmp/BackButton'

function Bullet({ i }) {

  function Diamond() {
    return (
      <svg className='diamond-icon' width='30' height='50' viewBox='0 0 60 100'>
        <defs>
          <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
            <feDropShadow dx='0' dy='0' stdDeviation='4' floodColor='white' />
          </filter>
        </defs>
        <polygon
          points='15,0 30,25 15,50 0,25'
          fill='rgb(0,255,255)'
          filter='url(#glow)'
        />
      </svg>
    )
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Diamond/>
      <pre style={{color: 'rgb(0,255,255)', marginBottom: 37, marginLeft: -5}}>{i}</pre>
    </div>
  )
}

function ActionPlayerDownload() {
  const [isLoading, setLoading] = useState(true)

  if (isLoading) {
    return <Loading setLoading={setLoading}/>
  } else {
    return (
      <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 2.0 }}
    >
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <BackButton/>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '350px',
        }}
      >
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 30}}>
            <pre style={{color: 'rgb(0,255,255)', textShadow: '0px 0px 7px white, 0px 0px 7px white'}}>{'{ requires a MacBook }'}</pre>
          </div>
          <div style={{display: 'flex', gap: 20}}>
            <Bullet i={'1'}/>
            <a href='https://apps.apple.com/app/xcode/id497799835?mt=12' target='_blank' rel='noopener noreferrer'>
              <pre style={{color: 'rgb(0,255,255)'}}>download Xcode</pre>
            </a>
          </div>
          <div style={{display: 'flex', gap: 20}}>
            <Bullet i={'2'}/>
            <a href='../../assets/files/PokerDegen.zip'>
              <pre style={{color: 'rgb(0,255,255)'}}>download PokerDegen zip</pre>
            </a>
          </div>
          <div style={{display: 'flex', gap: 20}}>
            <Bullet i={'3'}/>
            <pre style={{color: 'rgb(0,255,255)'}}>run the app on your iPhone or iPad</pre>
          </div>
          <div style={{display: 'flex', gap: 20}}>
            <Bullet i={'4'}/>
            <pre style={{color: 'rgb(0,255,255)'}}>analyze hands</pre>
          </div>
        </div>
      </div>
    </motion.div>
    )
  }
}



export default ActionPlayerDownload