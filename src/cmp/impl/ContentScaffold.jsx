import { motion } from 'framer-motion'
import { useLoading } from '../../hooks/useLoading'

import { BackButton, LoadingBits, LoadingBoxes, Wallpaper } from '../Components'

function ContentScaffold({ content, txt, route, useBits = true }) {
  const isLoading = useLoading()

  if (isLoading) {
    if (useBits) {
      return <LoadingBits />
    } else {
      return <LoadingBoxes />
    }
  } 

  return (
    <>
      {isLoading ? (
        <LoadingHeadphones />
      ) : (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .25
        }}
        >
          <Wallpaper/>
          <div style={{zIndex: 1, position: 'relative'}}>
            <BackButton txt={txt} route={route}/>
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
      )}
    </>
  )
}

export default ContentScaffold