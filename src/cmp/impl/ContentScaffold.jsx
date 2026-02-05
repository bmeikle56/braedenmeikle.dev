import { motion } from 'framer-motion'
import { useLoading } from '../../hooks/useLoading'

import { BackButton, LoadingBits, LoadingBoxes, Wallpaper } from '../Components'
import { greenTheme } from '../../styles/colors'

function ContentScaffold({ content, txt, route, theme = greenTheme, useBits = true }) {
  const isLoading = useLoading()

  if (isLoading) {
    return useBits ? <LoadingBits theme={theme}/> : <LoadingBoxes theme={theme}/>
  }

  return (
    <>
      {/* fixed position wallpapper */}
      <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Wallpaper/>
    </div>

      {/* fixed position back button */}
      <BackButton
        txt={txt}
        route={route}
        theme={theme}
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 3,
        }}
      />

      {/* scrollable content layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
          overflowY: 'auto', // enables scrolling
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch', // smoother mobile scroll
        }}
      >
        <div
          style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            // paddingTop: 80,   // space so content isn't under back button
            // paddingBottom: 40,
          }}
        >
          {content}
        </div>
      </motion.div>
    </>
  )
}

export default ContentScaffold
