function Video({ device }) {
  return (
    <video 
      src={`/vid/${device}.mp4`}
      autoPlay 
      muted 
      loop 
      playsInline 
      className='video'
    />
  )
}

export default Video