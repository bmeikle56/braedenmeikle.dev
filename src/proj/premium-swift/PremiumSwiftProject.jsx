import { ContentScaffold, PremiumSwiftFont, PremiumSwiftButton } from '../../cmp/Components'
import { palette } from '../../styles/colors'

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
    <ContentScaffold content={ Content() }/>
  )
}

export default PremiumSwiftProject