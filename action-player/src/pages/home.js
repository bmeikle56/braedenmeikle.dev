import { motion } from 'framer-motion'
import Diamond from '../cmp/Diamond'
import PokerDegenTitle from '../cmp/Title'
import Video from '../cmp/Video'
import { useState } from 'react'
import Loading from '../cmp/Loading'
import DownloadButton from '../cmp/DownloadButton'

function ActionPlayerHome() {
  const [isLoading, setLoading] = useState(true)

  if (isLoading) {
    return <Loading setLoading={setLoading}/>
  } else {
    return (
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', width: '100vw', height: '100vh'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 2.0 }}
      >
        <div className='title-view' style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Diamond/>
          <PokerDegenTitle/>
        </div>
        <div style={{height: '10vh'}}/>
        <div style={{display: 'flex', justifyContent: 'center', width: '80%', marginTop: -30}}>
          <Video device={'iPhone'}/>
          {/* <Video device={'iPad'}/> */}
        </div>
        <div style={{height: 40}}/>
        <DownloadButton/>
      </motion.div>
    )
  }
}

export default ActionPlayerHome