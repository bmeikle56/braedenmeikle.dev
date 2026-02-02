import { ContentScaffold, ProjectButton } from '../cmp/Components'
import { greenTheme } from '../styles/colors'

function Projects() {
  return (
    <ContentScaffold content={
      <div>
        <ProjectButton theme={greenTheme} txt={'actionplayer.app'} route={'/projects/action-player'}/>
        <ProjectButton theme={greenTheme} txt={'berzerkagile.dev'} route={'/projects/bz-dev'}/>
        <ProjectButton theme={greenTheme} txt={'premiumswift.dev'} route={'/projects/premium-swift'}/>
        <ProjectButton theme={greenTheme} txt={'zardstracker.app'} route={'/projects/zards-tracker'}/>
      </div>
    }
    txt={'Home'}
    route={'/'}
    theme={greenTheme}
    useBits={true}/>
  )
}

export default Projects