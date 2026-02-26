import { motion } from 'framer-motion'
import { useLoading } from '../../hooks/useLoading'
import { LoadingBits, Wallpaper } from '../Components'
import { greenTheme } from '../../styles/colors'

function ContentScaffold({ content, theme = greenTheme }) {
  const isLoading = useLoading()

  if (isLoading) {
    return <LoadingBits theme={theme}/>
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.25 }}
    >
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
      {/* scrollable content layer */}
      <div
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
          }}
        >
          {content}
        </div>
      </div>
    </motion.div>
  )
}

export default ContentScaffold
