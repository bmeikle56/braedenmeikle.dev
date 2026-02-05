import { ContentScaffold, ForwardButton, PremiumSwiftFont, PremiumSwiftButton } from '../../cmp/Components'
import { greenTheme } from '../../styles/colors'

let palette = {
  white: 'rgb(255,255,255)',
  pink: 'rgba(186, 2, 100, 1)',
  cyan: 'rgba(48, 182, 222, 1)',
  fadedBlue: 'rgba(58, 139, 189, 1)',
  deepBlue: 'rgba(3, 140, 225, 1)',
  green: 'rgba(95, 227, 83, 1)',
  orange: 'rgba(233, 70, 0, 1)',
  purple: 'rgba(126, 89, 228, 1)',
  comment: 'rgba(0, 166, 3, 1)',
  darkComment: 'rgba(1, 81, 2, 1)',
}

function Comments() {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
        <div style={{width: 8, padding: 0, margin: 0}}/>
        <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'[ optional ]'}</p>
      </div>
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
        <div style={{width: 8, padding: 0, margin: 0}}/>
        <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'define input range by callee, caller must satisfy'}</p>
      </div>
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
        <div style={{width: 8, padding: 0, margin: 0}}/>
        <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'proper input enforced at compile time'}</p>
      </div>
      <div style={{height: 24, padding: 0, margin: 0}}/>
    </div>
  )
}

function CallFunction({ suit, rank }) {
  return (
    <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          width: '100%'
        }}
      >
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <pre style={{ color: palette.green, margin: 0 }}>value</pre>
        <pre style={{ color: palette.white, margin: 0 }}>{'('}</pre>
        <pre style={{ color: palette.green, margin: 0 }}>for</pre>
        <pre style={{ color: palette.white, margin: 0 }}>{':'}</pre>
        <div style={{ width: 8 }} />
        <pre style={{ color: palette.green, margin: 0 }}>Card</pre>
        <pre style={{ color: palette.white, margin: 0 }}>{'('}</pre>
        <pre style={{ color: palette.green, margin: 0 }}>suit</pre>
        <pre style={{ color: palette.white, margin: 0 }}>{':'}</pre>
        <div style={{ width: 8 }} />
        <pre style={{ color: palette.orange, margin: 0 }}>{suit}</pre>
        <div style={{ width: 8 }} />
        <pre style={{ color: palette.green, margin: 0 }}>rank</pre>
        <pre style={{ color: palette.white, margin: 0 }}>{':'}</pre>
        <div style={{ width: 8 }} />
        <pre style={{ color: palette.orange, margin: 0 }}>{rank}</pre>
        <pre style={{ color: palette.white, margin: 0 }}>{')'}</pre>
        <pre style={{ color: palette.white, margin: 0 }}>{')'}</pre>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12, background: 'black', borderRadius: 12, padding: 20}}>
      <PremiumSwiftFont txt={'<PremiumSwift>'}/>
      <PremiumSwiftButton txt={'<PremiumFunc/>'} route={'/projects/premium-swift/func'}/>
      <PremiumSwiftButton txt={'<PremiumView/>'} route={'/projects/premium-swift/view'}/>
      {/* <PremiumSwiftButton txt={'<PremiumWrap/>'}/> */}
      <PremiumSwiftFont txt={'<PremiumSwift/>'}/>
    </div>
  )
}

function PremiumSwiftProject() {
  return (
    <ContentScaffold 
    content={ Content() }
    txt={'Projects'}
    route={'/projects'}
    />
  )
}

export default PremiumSwiftProject