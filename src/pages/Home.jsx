import { Footer, Fun } from '../cmp/Components'
import { greenTheme } from '../styles/colors'
import { ContentScaffold } from '../cmp/Components'

function Home() {
  return (
    <ContentScaffold content={
      <div>
        <Fun theme={greenTheme}/>
        <Footer theme={greenTheme}/>
      </div>
    }
    />
  )
}

export default Home
