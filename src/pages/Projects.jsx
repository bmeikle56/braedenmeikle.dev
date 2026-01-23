import { ContentScaffold, ProjectButton } from '../cmp/Components'
import { purpleTheme } from '../styles/colors'

function Projects() {
  return (
    <ContentScaffold content={
      <div>
        <ProjectButton theme={purpleTheme} txt={'actionplayer.app'} route={'/projects/action-player'}/>
        <ProjectButton theme={purpleTheme} txt={'berzerkagile.dev'} route={'/projects/bz-dev'}/>
        <ProjectButton theme={purpleTheme} txt={'premiumswift.dev'} route={'/projects/premium-swift'}/>
        <ProjectButton theme={purpleTheme} txt={'zardstracker.app'} route={'/projects/zards-tracker'}/>
      </div>
    }
    txt={'Home'}
    route={'/'}
    theme={purpleTheme}
    useBits={false}/>
  )
}

export default Projects