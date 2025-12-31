function VDiv({ height }) {
  return (
    <div style={{height: `${height}px`, width:'2px', background: 'rgb(20,20,20)', borderRadius: '8px'}}/>
  )
}

function HDiv({ width }) {
  return (
    <div style={{
      height: '2px', 
      width: `${width}px`, 
      background: 'rgb(20,20,20)', 
      borderRadius: '8px',
    }}/>
  )
}

function ExpandingHDiv() {
  return (
    <div style={{
      height: '2px', 
      width: '100%', 
      background: 'rgb(20,20,20)', 
      borderRadius: '8px',
    }}/>
  )
}

export { VDiv, HDiv, ExpandingHDiv } 