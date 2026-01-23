import { motion } from 'framer-motion'
import { useLoading } from '../hooks/useLoading'
import { Footer, Fun, LoadingBits, Wallpaper } from '../cmp/Components'

function Home() {
  const isLoading = useLoading()

  return (
    <>
      {isLoading ? (
        <LoadingBits />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Wallpaper />
          <Fun />
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default Home
