import { ContentScaffold } from '../cmp/Components'

const txtColor = 'rgb(200,200,200)'

function Bullet({ txt }) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{height: 4, width: 4, background: txtColor, borderRadius: 8}}/>
      <pre style={{color: txtColor, whiteSpace: 'pre-wrap', paddingLeft: 6, margin: 0}}>{txt}</pre>
    </div>
  )
}

function PortFolioCell({
  title,
  subtitle,
  start,
  end,
  color,
  bullets
}) {
  return (
    <div style={{display: 'flex', background: 'rgb(10,10,10)', flexDirection: 'column', borderRadius: 12, width: 360, height: 'fit-content', padding: 12, gap: 12}}>
      {/* title and date */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: 'rgb(20,20,20)'}}>
          <pre style={{color: color, margin: 0, padding: 6}}>{title}</pre>
        </div>
        <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: 'rgb(20,20,20)'}}>
          <pre style={{color: txtColor, margin: 0, padding: 6}}>{`${start} - ${end}`}</pre>
        </div>
      </div>

      {/* subtitle */}
      <div style={{display: 'flex', borderRadius: 8, width: 'fit-content', height: 'fit-content', background: 'rgb(20,20,20)'}}>
        <pre style={{color: txtColor, margin: 0, padding: 6}}>{subtitle}</pre>
      </div>

      {/* divider */}
      <div style={{height: 1, borderRadius: 2, width: '100%', background: 'rgb(30,30,30)'}}/>

      {/* description */}
      {bullets.map((txt, _) => <Bullet txt={txt}/>)}
    </div>
  )
}

function PortfolioContent() {
  return (
    <div>
      <PortFolioCell 
      title={'Georgia Tech'}
      subtitle={`BS in Computer Science`}
      start={'2020'}
      end={'2023'}
      color={'rgb(175,125,12)'}
      bullets={['Teaching Assistant for Objects and Design', 'Peer Mentor for Computer Science students', 'iOS Developer for VIP team']}
      />
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