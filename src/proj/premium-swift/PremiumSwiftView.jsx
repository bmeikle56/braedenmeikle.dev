import { ContentScaffold, PremiumSwiftTitle, SwiftFile, SwiftTitle } from '../../cmp/Components'
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

function Swift() {
  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', maxWidth: '400px', width: '75vw', whiteSpace: 'pre-wrap', padding: 0}}>
      <SwiftTitle/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%'}}>
        <SwiftFile txt={'CardView.swift'}/>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>struct</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.cyan, display: 'inline', padding: 0, margin: 0}}>CardView</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'View'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'@State'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>private</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>var</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.cyan, display: 'inline', padding: 0, margin: 0}}>viewModel</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>:</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'CardViewModel'}</pre>
        </div>
        <div style={{height: 24, padding: 0, margin: 0}}/>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>func</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>for</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>card</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>:</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.green, display: 'inline', padding: 0, margin: 0}}>Card</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'->'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'Int'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 60, padding: 0, margin: 0}}/>
          <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'...'}</p>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{height: 24, padding: 0, margin: 0}}/>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>var</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>body</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>some</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>View</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 60, padding: 0, margin: 0}}/>
          <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'...'}</p>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
      </div>
      </div>
  )
}

function PremiumSwift() {
  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', maxWidth: '400px', width: 'fit-content', whiteSpace: 'pre-wrap', padding: 0}}>
      <PremiumSwiftTitle/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%'}}>
        <SwiftFile txt={'CardView.swiftui'}/>
        <div style={{height: 12, padding: 0, margin: 0}}/>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{'@Model'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'CardViewModel'}</pre>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'#View'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'...'}</p>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
      </div>
      </div>
  )
}

function Content() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 64, alignItems: 'flex-start'}}>
      <Swift/>
      <PremiumSwift/>
    </div>
  )
}

function PremiumSwiftView() {
  return (
    <ContentScaffold content={ Content() }/>
  )
}

export default PremiumSwiftView