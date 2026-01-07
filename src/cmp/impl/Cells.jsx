import { motion } from 'framer-motion'
// import { txtCol, specialColor } from '../styles/colors.js'
import { HDiv, VDiv } from './GeometricDiv'

function Cell({ content }) {
  return <div id='cell' style={{
    backgroundColor: 'black',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '210px',
    padding: '18px 0 18px 0',
    boxShadow: '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)',
    flexDirection: 'column'
  }}>
    {content}
  </div> 
}

function BouncingLines() {
  const heights = [
    [`${50}%`, `${80}%`, `${50}%`], 
    [`${54}%`, `${90}%`, `${54}%`], 
    [`${43}%`, `${82}%`, `${43}%`]
  ]

  const durs = [0.5, 0.7, 0.9]

  function BouncingLine({ height, dur }) {
    const barStyle = {
      width: '1px',
      backgroundColor: 'rgb(12,123,0)',
      boxShadow: '0px 0px 5px rgb(12,123,0), 0px 0px 5px rgb(12,123,0), 0px 0px 5px rgb(12,123,0)'
    }

    return (
      <div style={{height: '8px', display: 'flex', justifyContent: 'space-between'}}>
        {<motion.div style={barStyle} animate={{
          height: height,
          transition: {
            duration: dur,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop'
          }
        }}/>}
      </div>
      )
  }

  return (
    <div style={{display: 'flex', width: '10px', paddingTop:'4px', justifyContent:'space-between'}}>
      {[...Array(3)].map((_, i) => <div key={i}>
        <div style={{scale: '-1 -1'}}>
          <BouncingLine height={heights[i]} dur={durs[i]}/>
        </div>
        <BouncingLine height={heights[i]} dur={durs[i]}/>
      </div>)}
    </div>
  )
}

function Goals() {
  function Goal({ goal }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: 'fit-content',}}>
        <p style={{ color: 'rgb(12,123,0)', paddingRight: '6px', margin: '0px 0px 0px 0px', textShadow: '0px 0px 5px rgb(12,123,0), 0px 0px 5px rgb(12,123,0), 0px 0px 5px rgb(12,123,0)' }}>&rArr;</p>
        <p style={{ color: 'rgb(12,123,0)', margin: '0px 0px 0px 0px', textShadow: '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)' }}>{goal}</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: 8, paddingBottom: 8}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Goal goal={'Full stack dev'}/>
        <Goal goal={'Fast + smooth UX'}/>
      </div>
    </div>
  )
} 

// function Apps() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
//       <div style={{ display: 'flex', gap: '8px' }}>
//           <img src={'https://i.postimg.cc/tTFHs75q/geico.jpg'} style={{paddingLeft:'8px', paddingRight:'8px', width: 40, height: 40}} alt={'GEICO iOS app'}/>
//           <img src={'https://i.postimg.cc/hvgRTgy9/hiya.jpg'} style={{paddingLeft:'8px', paddingRight:'8px', width: 40, height: 40}} alt={'Hiya iOS app'}/>
//       </div>
//     </div>
//   )
// } 

// function FavoriteFoods() {
//   return (
//     <div style={{display: 'flex', gap: 30, paddingTop: 5, paddingBottom: 5}}>
//       <img alt='White chocolate' src={`${process.env.PUBLIC_URL}/img/white-chocolate.png`} style={{width: 35, height: 35}}/>
//       <img alt='Coffee cup' src={`${process.env.PUBLIC_URL}/img/coffee-cup.png`} style={{width: 35, height: 35}}/>
//     </div>
//   )
// }

function IPhone() {
  return (
    <div style={{
      background: 'black',
      border: 'rgb(12,123,0)',
      boxShadow: '0px 0px 8px rgb(12,123,0), 0px 0px 4px rgb(12,123,0)',
      width: 48,
      height: 96,
      borderRadius: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <BouncingLines/>
    </div>
  )
}

function FavoriteSongs() {
  function FavoriteSong({ meta }) {
    return (
      <div style={{display: 'flex'}}>
        <pre style={{whiteSpace: 'nowrap', padding: '0 8px 0 0', color: 'rgb(45,45,45)'}}>{'<'}</pre>
        <pre style={{whiteSpace: 'nowrap', padding: 0, color: 'rgb(12,123,0)', textShadow: '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)'}}>{meta.artist}</pre>
        <pre style={{whiteSpace: 'nowrap', padding: '0 0 0 8px', color: 'rgb(45,45,45)'}}>{'/>'}</pre>
      </div>
    )
  }

  return (<div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
    {/* <div style={{display: 'flex', flexDirection:'column', gap: 30}}>
      <BouncingLines/>
      <BouncingLines/>
    </div> */}
    <IPhone/>
    <div style={{padding: '0 8px 0 0px'}}>
      <VDiv height={96}/>
    </div>
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', gap: 0}}>
      <FavoriteSong meta={{
        song: 'Freedom',
        artist: 'Oliver Heldens'
      }}/>
      <FavoriteSong meta={{
        song: 'Glimmer In The Dark',
        artist: 'Trilucid'
      }}/>
      <FavoriteSong meta={{
        song: 'Got Damn',
        artist: 'Gunna'
      }}/>
    </div>
    
    {/* {songMetas.map((songMeta) => {
      return <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%', height: 40}}>
        <FavoriteSong meta={songMeta}/>
      </div>
    })} */}
  </div>)
}

function FavoriteTeams() {
  return (
    <div style={{display: 'flex', gap: 20, justifyContent: 'center'}}>
      <img alt='Wizards old logo' src={`${process.env.PUBLIC_URL}/img/wizards.png`} style={{width: 35, height: 35}}/>
      <img alt='Georgia Tech Yellowjackets' src={`${process.env.PUBLIC_URL}/img/yellowjackets.png`} style={{width: 55, height: 35, marginRight: -10}}/>
    </div>
  )
}

// function FavoriteFunction() {
//   const meta = {
//     func: 'compactMap',
//     link: 'https://developer.apple.com/documentation/swift/sequence/compactmap(_:)'
//   }

//   return (
//     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
//       <a href={meta.link} rel='noreferrer' target='_blank' className='func'>{meta.func}</a>
//     </div>
//   )
// }
  
// function FavoritePokerHand() {
//   return (
//     <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
//       <img alt='Jack of Diamonds' src={`${process.env.PUBLIC_URL}/img/jack-of-diamonds.png`} style={{width: 35, height: 35}}/>
//       <img alt='Deuce of Diamonds' src={`${process.env.PUBLIC_URL}/img/two-of-diamonds.png`} style={{width: 35, height: 35}}/>
//     </div>
//   )
// }

function Cells() {

  function CellContent() {
    return (
      <div style={{gap: 16, display: 'flex', flexDirection: 'column'}}>
        <FavoriteSongs/>
        <Goals/>
        {/* <FavoriteTeams/> */}
        {/* <FavoriteFunction/> */}
      </div>
    )
  }
  return (
    <motion.div 
    style={{display:'flex', justifyContent: 'center', gap: 20, paddingTop: 80}}
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{
    //   delay: .25
    // }}
    >
      <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
        <Cell content={<CellContent/>}/>
      </div>
    </motion.div>
  )
}

export default FavoriteSongs