import { ContentScaffold, ErrorMessage, PremiumSwiftTitle, SwiftTitle } from '../../cmp/Components'
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

function SwiftFunc() {
  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', maxWidth: '400px', width: '75vw', whiteSpace: 'pre-wrap', padding: 0}}>
      <SwiftTitle/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>struct</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.cyan, display: 'inline', padding: 0, margin: 0}}>Card</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{'let'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>{'suit'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'String'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{'let'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>{'rank'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'Int'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{height: 24, padding: 0, margin: 0}}/>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>func</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>for</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>card:</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.green, display: 'inline', padding: 0, margin: 0}}>Card</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{') ->'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>Int</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>?</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'guard against invalid Cards'}</p>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>guard</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>card.</pre>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>rank</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'>='}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>0</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 52, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>&&</pre>
          <div style={{width: 9.5, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>card.</pre>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>rank</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'<'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>13</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 52, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>&&</pre>
          <div style={{width: 9.5, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'['}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"h"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"s"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"d"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"c"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{']'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>.</pre>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>contains</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>card.</pre>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>suit</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>else</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>return</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>nil</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'return the value of the Card...'}</p>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
      </div>
      <div style={{height: 24, padding: 0, margin: 0}}/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>let</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>=</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <CallFunction suit={'"d"'} rank={2}/>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>print</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
            <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'...value'}</p>
          </div>
          <div style={{height: 24, padding: 0, margin: 0}}/>
          <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>let</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>=</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
            <CallFunction suit={'"h"'} rank={13}/>
          </div>
          <div style={{display: 'flex'}}>
            <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>print</pre>
            <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
            <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>value</pre>
            <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'nil'}</p>
          </div>
          <div style={{height: 24, padding: 0, margin: 0}}/>
          <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>let</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>=</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
            <CallFunction suit={'"hearts"'} rank={12}/>
          </div>
          <div style={{display: 'flex'}}>
            <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>print</pre>
            <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
            <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>value</pre>
            <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
            <div style={{width: 8, padding: 0, margin: 0}}/>
            <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'nil'}</p>
          </div>
        </div>
      </div>
  )
}

function PremiumSwiftFunc() {
  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', maxWidth: '400px', width: 'fit-content', whiteSpace: 'pre-wrap', padding: 0}}>
      <PremiumSwiftTitle/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Comments/>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>struct</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.cyan, display: 'inline', padding: 0, margin: 0}}>Card</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{'let'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>{'suit'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'String'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>{'let'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>{'rank'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{':'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>{'Int'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{height: 24, padding: 0, margin: 0}}/>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>func</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>value</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'('}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.fadedBlue, display: 'inline', padding: 0, margin: 0}}>for</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>card:</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.green, display: 'inline', padding: 0, margin: 0}}>Card</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.pink, display: 'inline', padding: 0, margin: 0}}>in</pre>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 60, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{suit:'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"h"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"s"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"d"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.orange, display: 'inline', padding: 0, margin: 0}}>{'"c"'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{', '}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'rank:'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'['}</pre>
          <pre style={{color: palette.purple, display: 'inline', padding: 0, margin: 0}}>{'0'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{','}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.purple, display: 'inline', padding: 0, margin: 0}}>{'13'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{')'}</pre>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{') ->'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.deepBlue, display: 'inline', padding: 0, margin: 0}}>Int</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'{'}</pre>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: 30, padding: 0, margin: 0}}/>
          <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'return the value of the Card...'}</p>
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{color: palette.white, display: 'inline', padding: 0, margin: 0}}>{'}'}</pre>
        </div>
      </div>
      <div style={{height: 24, padding: 0, margin: 0}}/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%', gap: 16}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <pre style={{color: palette.darkComment, display: 'inline', padding: 0, margin: 0}}>{'///'}</pre>
          <div style={{width: 8, padding: 0, margin: 0}}/>
          <p style={{color: palette.comment, display: 'inline', padding: 0, margin: 0, fontSize: 12}}>{'proper function call, no errors'}</p>
        </div>
        <CallFunction suit={'"d"'} rank={2}/>
      </div>
      <div style={{height: 24, padding: 0, margin: 0}}/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%', gap: 16}}>
        <ErrorMessage txt={'Card.rank not in [0, 13)'}/>
        <CallFunction suit={'"h"'} rank={13}/>
      </div>
      <div style={{height: 24, padding: 0, margin: 0}}/>
      <div style={{background: 'rgb(13,13,13)', padding: 20, borderRadius: 20, display: 'flex', flexDirection: 'column', width: '100%', gap: 16}}>
        <ErrorMessage txt={'Card.suit not in {"h", "s", "d", "c"}'}/>
        <CallFunction suit={'"hearts"'} rank={12}/>
      </div>
      </div>
  )
}

function Content() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 64, alignItems: 'flex-start'}}>
      <SwiftFunc/>
      <PremiumSwiftFunc/>
    </div>
  )
}

function PremiumSwiftFuncPage() {
  return (
    <ContentScaffold 
    content={ Content() }
    txt={'PremiumSwift'}
    route={'/projects/premium-swift'}
    />
  )
}

export default PremiumSwiftFuncPage