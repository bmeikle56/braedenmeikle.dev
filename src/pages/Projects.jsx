import { ContentScaffold, ProjectButton } from '../cmp/Components'

function Projects() {
  return (
    <ContentScaffold content={
      <div>
        <ProjectButton txt={'actionplayer.app'} route={'/projects/action-player'}/>
        <ProjectButton txt={'berzerkagile.dev'} route={'/projects/bz-dev'}/>
        <ProjectButton txt={'premiumswift.dev'} route={'/projects/premium-swift'}/>
      </div>
    }
    txt={'Home'}
    route={'/'}/>
  )
}

export default Projects