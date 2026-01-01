import Diamond from '../cmp/Diamond'
import ActionPlayerTitle from '../cmp/Title'
import Video from '../cmp/Video'
import DownloadButton from '../cmp/DownloadButton'

import { ContentScaffold } from '../../../../cmp/Components'

function ActionPlayerContent() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', width: '700px', height: '100vh'}}>
      <div className='title-view' style={{display: 'flex', justifyContent: 'center', alignItems:'center', background: 'black', padding: '0 30px 0 30px', borderRadius: 20, marginTop: 50}}>
        <Diamond/>
        <ActionPlayerTitle/>
      </div>
      <div style={{height: '10vh'}}/>
      <Video device={'iPhone'}/>
      <div style={{height: 40}}/>
      <a href='/dwnld/ActionPlayer.zip'>
        <pre style={{color: 'rgb(12,123,0)', padding: 12, background: 'black', borderRadius: 10}}>ActionPlayer.zip</pre>
      </a>
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