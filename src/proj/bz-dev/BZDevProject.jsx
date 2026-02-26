import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

import { ccode, CCode, BZCCode, ContentScaffold, Spacer, Inlinetxt } from '../../cmp/Components'

function TerminalWindow( content ) {
  return (
    <div style={{border: '2px solid rgb(25,25,25)', borderRadius: '12px', display:'flex', flexDirection:'column', padding: 20, background: 'black'}}>
      <div style={{display: 'flex', gap: 8, alignItems: 'center', justifyContent:'center', width: '100%'}}>
        <div style={{display: 'flex', marginRight: 'auto', gap: 6}}>
          <Circle color={'rgba(255,0,0,0.4)'}/>
          <Circle color={'rgba(255,255,0,0.4)'}/>
          <Circle color={'rgba(0,255,0,0.4)'}/>
        </div>
        <div style={{display: 'flex', marginRight: 'auto', alignItems: 'center', gap: 6}}>
          <FontAwesomeIcon icon={faFolder} style={{ color: 'rgb(238, 0, 254)' }} />
          <Inlinetxt txt={'bz-dev'} color={'rgb(60,60,60)'}/>
        </div>
      </div>
      <Spacer height={16}/>
      <div style={{background: 'rgb(25,25,25)', height: 2, width: '100%'}}/>
      <Spacer height={10}/>
      {content}      
    </div>
  )
}

function Circle({ color }) {
  return (
    <div style={{borderRadius: '50%', background: color, width: 11, height: 11}}/>
  )
}

function BZDevContent() {
  return (
    <div style={{ display: 'flex', gap: 12, flexDirection: 'column'}}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'black', alignItems: 'flex-start', paddingLeft: 40, paddingTop: 20, paddingBottom: 20, borderRadius: 12}}>
        <div>
          <BZCCode txt={'bz'}/>
          <CCode txt={' is a command line tool to keep'} color={ccode.white}/>
        </div>
        <CCode txt={'track of personal software projects,'} color={ccode.white}/>
        <CCode txt={'using local file saves and integrated'} color={ccode.white}/>
        <CCode txt={'with Git'} color={ccode.white}/>
      </div>
      {TerminalWindow(
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div>
            <CCode txt={'braedenmeikle@macbookpro ~ % '} color={ccode.white}/>
            <BZCCode txt={'bz make \\'}/>
          </div>
          <BZCCode txt={'-r=bz-dev \\'}/>
          <BZCCode txt={'-k=launch-site \\'}/>
          <BZCCode txt={'-n="purchase domain, forward DNS"'}/>
          <Spacer height={16}/>
          <CCode txt={'Added!'} color={ccode.green}/>
        </div>
      )}
      {TerminalWindow(
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div>
            <CCode txt={'braedenmeikle@macbookpro ~ % '} color={ccode.white}/>
            <BZCCode txt={'bz workon \\'}/>
          </div>
          <BZCCode txt={'-r=bz-dev \\'}/>
          <BZCCode txt={'-k=launch-site'}/>
          <Spacer height={16}/>
          <CCode txt={'{'} color={ccode.white}/>
          <CCode txt={'  bz-dev {'} color={ccode.white}/>
          <CCode txt={'    * launch-site'} color={ccode.green}/>
          <CCode txt={'  }'} color={ccode.white}/>
          <CCode txt={'}'} color={ccode.white}/>
        </div>
      )}
    </div>
  )
}

function BZDevProject() {
  return (
    <ContentScaffold content={BZDevContent()}/>
  )
}

export default BZDevProject