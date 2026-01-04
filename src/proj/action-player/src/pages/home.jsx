import Video from '../cmp/Video'

import { ContentScaffold } from '../../../../cmp/Components'

function BulletPoint({ txt }) {
  return (
    <pre style={{whiteSpace: 'pre-wrap', color: 'rgb(150,150,150)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0}}>
      <div style={{background: 'rgb(50,50,50)', width: 8, height: 8, borderRadius: '50%', marginRight: 8}}/>
      {txt}
    </pre>
  )
}


function ActionPlayerContent() {
  return (
    <div id='action-player-content' style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '700px', height: '100vh', gap: 80}}>
      <Video device={'iPhone'}/>
      <div style={{background: 'rgb(10,10,10)', width: '250px', height: 'fit-content', borderRadius: 12, padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: 8}}>
        <BulletPoint txt={'MVVM Architecture with modern use of property wrappers'}/>
        <BulletPoint txt={'SwiftUI declarative views + UIKit navigation library'}/>
        <BulletPoint txt={'ChatGPT latest model analysis in real-time'}/>
        <BulletPoint txt={'Go backend optimized for speed + reliability'}/>
      </div>
    </div>
  )
}

function ActionPlayerHome() {
  return (
    <ContentScaffold
    content={ ActionPlayerContent() }
    txt={'Projects'}
    route={'/projects'}
    />
  )
}

export default ActionPlayerHome