import { ContentScaffold } from '../cmp/Components'

function Portfolio({ theme }) {
  return (
    <ContentScaffold content={
      <div>
        <pre style={{
          display: 'flex',
          padding: 20,
          borderRadius: 12,
          background: 'black',
          color: theme,
          textShadow: `0 0 5px ${theme}, 0 0 12px ${theme}, 0 0 15px ${theme}`
          }}>Coming soon!</pre>
      </div>
    }
    txt={'Home'}
    route={'/'}/>
  )
}

export default Portfolio