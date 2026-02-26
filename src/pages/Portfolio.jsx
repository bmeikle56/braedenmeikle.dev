import { ContentScaffold } from '../cmp/Components'
import { greenTheme } from '../styles/colors'

const txtColor = 'rgb(180,180,180)'
const bgColor = 'rgb(20,20,20)'

function Bullet({ txt }) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{height: 4, width: 4, background: greenTheme, borderRadius: 8, marginLeft: 6, boxShadow: '0px 0px 2px rgb(12,123,0), 0px 0px 4px rgb(12,123,0), 0px 0px 6px rgb(12,123,0)'}}/>
      <pre style={{color: txtColor, whiteSpace: 'pre-wrap', paddingLeft: 6, margin: 0}}>{txt}</pre>
    </div>
  )
}

function Skills({ skills }) {
  function Skill({ txt }) {
    return (
      <div style={{display: 'flex', alignItems: 'center', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: bgColor, padding: 6}}>
        <pre style={{color: txtColor, margin: 0}}>{txt}</pre>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 6}}>
      {skills.map((txt, _) => <Skill txt={txt}/>)}
    </div>
  )
}

function PortFolioCell({
  title,
  subtitle,
  loc,
  start,
  end,
  bullets,
  skills
}) {
  return (
    <div style={{display: 'flex', background: 'rgb(10,10,10)', flexDirection: 'column', borderRadius: 12, width: 320, height: 'fit-content', padding: 12, gap: 12, boxShadow: '0px 0px 8px rgb(12,123,0)'}}>
      {/* title and date */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: bgColor}}>
          <pre style={{color: txtColor, margin: 0, padding: 6}}>{title}</pre>
        </div>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: bgColor}}>
          {end && <pre style={{color: txtColor, margin: 0, padding: 6}}>{`${start} - ${end}`}</pre>}
          {!end && <pre style={{color: txtColor, margin: 0, padding: 6}}>{`${start}`}</pre>}
        </div>
      </div>

      {/* subtitle */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: bgColor}}>
          <pre style={{color: txtColor, margin: 0, padding: 6}}>{subtitle}</pre>
        </div>
          <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: bgColor}}>
          <pre style={{color: txtColor, margin: 0, padding: 6}}>{loc}</pre>
        </div>
      </div>
      

      {/* divider */}
      {bullets && <div style={{height: 1, borderRadius: 2, width: '100%', background: bgColor}}/>}

      {/* description */}
      {bullets && bullets.map((txt, _) => <Bullet txt={txt}/>)}

      {/* divider */}
      {skills && <div style={{height: 1, borderRadius: 2, width: '100%', background: bgColor}}/>}

      {/* skills */}
      {skills && <Skills skills={skills}/>}
    </div>
  )
}

function PortfolioDivider({ txt }) {
  return (
    <div style={{display: 'flex', background: 'rgb(10,10,10)', flexDirection: 'column', borderRadius: 12, width: 320, height: 'fit-content', padding: 12, gap: 6}}>
      <pre style={{color: txtColor, margin: 0}}>{txt}</pre>
      <div style={{height: 1, borderRadius: 2, width: '100%', background: bgColor}}/>
    </div>
  )
}

function PortfolioContent() {
  return (
    <div id='portfolio' style={{display: 'flex', gap: 24}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
        <PortfolioDivider txt={'Education'}/>
        <PortFolioCell 
        title={'The Potomac School'}
        subtitle={`High School`}
        loc={'McLean, VA'}
        start={'2016'}
        end={'2020'}
        />
        <PortFolioCell 
        title={'Georgia Tech'}
        subtitle={`Computer Science`}
        loc={'Atlanta, GA'}
        start={'2020'}
        end={'2023'}
        bullets={['TA for Objects and Design', 'Peer Mentor for CS freshmen', 'iOS Developer for VIP team']}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
        <PortfolioDivider txt={'Experience'}/>
        <PortFolioCell 
        title={'Hiya'}
        subtitle={`iOS Developer Intern`}
        loc={'Remote'}
        start={'2022'}
        skills={['Git', 'Swift', 'Objective-C', 'Xcode', 'Xcode Instruments']}
        />
        <PortFolioCell 
        title={'GEICO'}
        subtitle={`iOS Developer Intern`}
        loc={'Remote'}
        start={'2023'}
        skills={['Git', 'Swift', 'Objective-C', 'Xcode', 'Xcode Instruments']}
        />
        <PortFolioCell 
        title={'GEICO'}
        subtitle={`Software Engineer`}
        loc={'Remote'}
        start={'2024'}
        end={'2026'}
        bullets={['Full-stack developer on chatbot team', 'iOS Developer on mobile team']}
        skills={['Git', 'Flutter', 'Swift', 'Objective-C', 'Xcode', 'Cursor', 'Azure', 'JavaScript', 'TypeScript', 'Postgres', 'SQL', 'REST APIs']}
        />
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <ContentScaffold content={PortfolioContent()}/>
  )
}

export default Portfolio