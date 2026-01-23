import { motion } from 'framer-motion'
import { useLoading } from '../../hooks/useLoading'

import { BackButton, LoadingBits, LoadingBoxes, Wallpaper } from '../Components'
import { greenTheme } from '../../styles/colors'

function ContentScaffold({ content, txt, route, theme = greenTheme, useBits = true }) {
  const isLoading = useLoading()

  if (isLoading) {
    if (useBits) {
      return <LoadingBits theme={theme}/>
    } else {
      return <LoadingBoxes theme={theme}/>
    }
  } 

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: .25
    }}
    >
      <Wallpaper theme={theme}/>
      <div style={{zIndex: 1, position: 'relative'}}>
        <BackButton txt={txt} route={route} theme={theme}/>
          <div style={{
          height: '80vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        >
          {content}
        </div>
      </div>
    </motion.div>
  )
}

export default ContentScaffold