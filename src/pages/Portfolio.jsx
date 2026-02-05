import { ContentScaffold } from '../cmp/Components'

const txtColor = 'rgb(160,160,160)'

function Bullet({ txt }) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{height: 4, width: 4, background: txtColor, borderRadius: 8, marginLeft: 6}}/>
      <pre style={{color: txtColor, whiteSpace: 'pre-wrap', paddingLeft: 6, margin: 0}}>{txt}</pre>
    </div>
  )
}

function PortFolioCell({
  title,
  subtitle,
  loc,
  start,
  end,
  color,
  bullets
}) {
  return (
    <div style={{display: 'flex', background: 'rgb(10,10,10)', flexDirection: 'column', borderRadius: 12, width: 360, height: 'fit-content', padding: 12, gap: 12}}>
      {/* title and date */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: 'rgb(16,16,16)'}}>
          <pre style={{color: color, margin: 0, padding: 6}}>{title}</pre>
        </div>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: 'rgb(16,16,16)'}}>
          {end && <pre style={{color: txtColor, margin: 0, padding: 6}}>{`${start} - ${end}`}</pre>}
          {!end && <pre style={{color: txtColor, margin: 0, padding: 6}}>{`${start}`}</pre>}
        </div>
      </div>

      {/* subtitle */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: 'rgb(16,16,16)'}}>
          <pre style={{color: txtColor, margin: 0, padding: 6}}>{subtitle}</pre>
        </div>
          <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: 'rgb(16,16,16)'}}>
          <pre style={{color: txtColor, margin: 0, padding: 6}}>{loc}</pre>
        </div>
      </div>
      

      {/* divider */}
      {bullets && <div style={{height: 1, borderRadius: 2, width: '100%', background: 'rgb(16,16,16)'}}/>}

      {/* description */}
      {bullets && bullets.map((txt, _) => <Bullet txt={txt}/>)}
    </div>
  )
}

function PortfolioDivider({ txt }) {
  return (
    <div style={{display: 'flex', background: 'rgb(10,10,10)', flexDirection: 'column', borderRadius: 12, width: 360, height: 'fit-content', padding: 12, gap: 6}}>
      <pre style={{color: txtColor, margin: 0}}>{txt}</pre>
      <div style={{height: 1, borderRadius: 2, width: '100%', background: 'rgb(16,16,16)'}}/>
    </div>
  )
}

function PortfolioContent() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 24}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
        <PortfolioDivider txt={'Education'}/>
        <PortFolioCell 
        title={'The Potomac School'}
        subtitle={`High School`}
        loc={'McLean, VA'}
        start={'2016'}
        end={'2020'}
        color={'rgb(16, 48, 205)'}
        />
        <PortFolioCell 
        title={'Georgia Tech'}
        subtitle={`BS in Computer Science`}
        loc={'Atlanta, GA'}
        start={'2020'}
        end={'2023'}
        color={'rgb(226, 172, 48)'}
        bullets={['Teaching Assistant for Objects and Design', 'Peer Mentor for Computer Science students', 'iOS Developer for VIP team']}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
        <PortfolioDivider txt={'Experience'}/>
        <PortFolioCell 
        title={'Hiya'}
        subtitle={`iOS Developer Intern`}
        loc={'Remote'}
        start={'2022'}
        color={'rgb(138, 16, 225)'}
        />
        <PortFolioCell 
        title={'GEICO'}
        subtitle={`iOS Developer Intern`}
        loc={'Remote'}
        start={'2023'}
        color={'rgb(3, 89, 248)'}
        />
        <PortFolioCell 
        title={'GEICO'}
        subtitle={`Software Engineer`}
        loc={'Remote'}
        start={'2024'}
        end={'2026'}
        color={'rgb(3, 89, 248)'}
        bullets={['Full-stack developer on chatbot team', 'iOS Developer on mobile team']}
        />
      </div>
    </div>
  )
}

function Portfolio({ theme }) {
  return (
    <ContentScaffold content={PortfolioContent()}
    txt={'Home'}
    route={'/'}/>
  )
}

export default Portfolio