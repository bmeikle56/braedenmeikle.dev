import { motion } from 'framer-motion'
import { useLoading } from '../hooks/useLoading'

import { BackButton, Loading, ProjectButton, Wallpaper } from '../cmp/Components'

function Projects() {
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
            <BackButton txt={'Home'} route={'/'}/>
              <div style={{
              height: '80vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            >
              <ProjectButton txt={'actionplayer.app'} route={'/action-player'}/>
              <ProjectButton txt={'berzerkagile.dev'} route={'/bz-dev'}/>
              <ProjectButton txt={'premiumswift.dev'} route={'/premium-swift'}/>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Projects