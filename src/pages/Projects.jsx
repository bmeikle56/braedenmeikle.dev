import { ContentScaffold, ForwardButton } from '../cmp/Components'
import { greenTheme } from '../styles/colors'

function Projects() {
  return (
    <ContentScaffold content={
      <div>
        <ForwardButton theme={greenTheme} txt={'actionplayer.app'} route={'/projects/action-player'}/>
        <ForwardButton theme={greenTheme} txt={'berzerkagile.dev'} route={'/projects/bz-dev'}/>
        <ForwardButton theme={greenTheme} txt={'premiumswift.dev'} route={'/projects/premium-swift'}/>
        <ForwardButton theme={greenTheme} txt={'zardstracker.app'} route={'/projects/zards-tracker'}/>
      </div>
    }
    txt={'Home'}
    route={'/'}
    theme={greenTheme}
    useBits={true}/>
  )
}

export default Projects