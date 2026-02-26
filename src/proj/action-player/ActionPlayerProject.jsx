import { Video, ContentScaffold } from "../../cmp/Components"
import { greenTheme } from "../../styles/colors"

const txtColor = 'rgb(180,180,180)'

function Bullet({ txt }) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{height: 4, width: 4, background: greenTheme, borderRadius: 8, marginLeft: 6, boxShadow: '0px 0px 2px rgb(12,123,0), 0px 0px 4px rgb(12,123,0), 0px 0px 6px rgb(12,123,0)'}}/>
      <pre style={{color: txtColor, whiteSpace: 'pre-wrap', paddingLeft: 6, margin: 0}}>{txt}</pre>
    </div>
  )
}


function ActionPlayerContent() {
  return (
    <div id='action-player-content' style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '700px', height: '100vh', gap: 80}}>
      <Video device={'iPhone'}/>
      <div style={{background: 'rgb(10,10,10)', width: '250px', height: 'fit-content', borderRadius: 12, padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: 8}}>
        <Bullet txt={'MVVM Architecture with modern use of property wrappers'}/>
        <Bullet txt={'SwiftUI declarative views + UIKit navigation library'}/>
        <Bullet txt={'ChatGPT latest model analysis in real-time'}/>
        <Bullet txt={'Go backend optimized for speed + reliability'}/>
      </div>
    </div>
  )
}

function ActionPlayerProject() {
  return (
    <ContentScaffold content={ ActionPlayerContent() }/>
  )
}

export default ActionPlayerProject