import { motion } from 'framer-motion'
import { useLoading } from '../../hooks/useLoading'

import { BackButton, Loading, Wallpaper } from '../Components'

function ContentScaffold({ content, txt, route }) {
  const isLoading = useLoading()

  return (
    <>
      {isLoading ? (
        <Loading />
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