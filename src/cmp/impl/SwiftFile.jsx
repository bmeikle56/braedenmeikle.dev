import { palette } from "../../styles/colors"

function SwiftFile({ txt }) {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <pre style={{color: palette.orange, display: 'inline', padding: 4, fontSize: 10, margin: 0, borderRadius: 4, background: 'rgb(30,30,30)', width: 'fit-content'}}>{`${txt}`}</pre>
    </div>
  )
}

export { SwiftFile }