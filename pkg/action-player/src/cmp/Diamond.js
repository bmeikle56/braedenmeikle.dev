function Diamond() {
  return (
    <svg className='diamond-icon' width='60' height='100' viewBox='0 0 60 100'>
      <defs>
        <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
          <feDropShadow dx='0' dy='0' stdDeviation='4' floodColor='white' />
        </filter>
      </defs>
      <polygon
        points='30,0 60,50 30,100 0,50'
        fill='rgb(0,255,255)'
        filter='url(#glow)'
      />
    </svg>
  )
}

export default Diamond