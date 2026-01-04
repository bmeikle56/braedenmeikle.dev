import { ContentScaffold } from '../../cmp/Components'

function ZardsTrackerProject() {
  return (
    <ContentScaffold content={
      <div>
        <pre style={{
          display: 'flex',
          padding: 20,
          borderRadius: 12,
          background: 'black',
          color: 'rgb(12,123,0)',
          textShadow: `0 0 5px rgb(12,123,0), 0 0 12px rgb(12,123,0), 0 0 15px rgb(12,123,0)`
          }}>Coming soon!</pre>
      </div>
    }
    txt={'Projects'}
    route={'/projects'}/>
  )
}

export default ZardsTrackerProject