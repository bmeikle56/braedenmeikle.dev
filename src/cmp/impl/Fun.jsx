import { motion } from 'framer-motion'
import { darkGray, superDarkGray, onlineGreen } from '../../styles/colors'
import FavoriteSongs from './Cells'
import { VDiv, HDiv } from './GeometricDiv'

function Title({ theme }) { 
  const style = {
    fontSize: '28px',
    paddingBottom: '0px',
    textAlign: 'center',
    color: theme,
    textShadow: `0px 0px 15px ${theme}, 0px 0px 12px ${theme}, 0px 0px 15px ${theme}`
  }

  return <pre style={style}>braeden meikle</pre> 
}

function ActivityTracker() {
  const activity = [
    [0,1,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ]

  function currentDayActivity() {
    return activity.flat()[currentDay() - 1]
  }

  function currentDay() {
    return new Date().getDate()
  }
  
  function onlineOfflineText() {
    const color = currentDayActivity() == 1 ? onlineGreen : darkGray
    const text = currentDayActivity() == 1 ? "Seen today" : "Offline"

    return (
      <div style={{display: 'flex'}}>
        <pre style={{
          color: color,
          textShadow: 'rgb(167, 167, 167) 0px 0px 8px',
          opacity: 0.3,
          fontSize: 12, margin: '0px 0px 0px 0px'
        }}>{"{ "}</pre>
        <pre style={{
          color: color,
          textShadow: 'rgb(201, 201, 201) 0px 0px 8px',
          opacity: 0.6,
          fontSize: 12, margin: '0px 0px 0px 0px'
        }}>{text}</pre>
        <pre style={{
          color: color,
          textShadow: 'rgb(167, 167, 167) 0px 0px 8px',
          opacity: 0.3,
          fontSize: 12, margin: '0px 0px 0px 0px'
        }}>{" }"}</pre>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Pfp/>
      </div>
      <div style={{padding: '0 4px 0 4px'}}>
      <VDiv height={72}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'grid', justifyContent: 'center', gap: '2px'}}>
          {activity.map((row, i) =>
              <div key={i} style={{display: 'flex', gap: '2px'}}>
              {row.map((day, j) => 
                <Activity key={j} day={day} index={(i+1) * (j+1)}/>
              )}
            </div>
          )}
        </div>
        {onlineOfflineText()}
      </div>
    </div>
  )
}

function Activity({ day, index }) {
  const activityStyle = {
    backgroundColor: day === 1 ? onlineGreen : superDarkGray, 
    width: '10px', 
    height: '10px', 
    borderRadius: '3px'
  }

  return <motion.div 
    style={activityStyle}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
      duration: 0.2, 
      delay: (day * 2) + (0.06 * index)
    }}
  ></motion.div>
}

function Pfp() {
  const meta = {
    imgLink: 'https://i.postimg.cc/5y9YBjxF/IMG-6776.jpg',
    width: 57,
    height: 76,
    alt: 'Profile Picture'
  }

  return (
      <img 
        src={meta.imgLink}
        style={{width: meta.width, height: meta.height, borderRadius:'10%'}} 
        alt={meta.alt}
      />
  )
}

// function OmahaHandOfTheDay() {
//   // cards must be unique
//   const cards = new Set()
//   while (cards.size < 5) {
//     cards.add(getRandomCard())
//   }

//   const rankOrder = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5', '4', '3', '2']

//   // cards sorked by rank, left highest
//   const sortedCards = Array.from(cards).sort((a, b) => {
//     const rankA = a[0]
//     const rankB = b[0]
//     return rankOrder.indexOf(rankA) - rankOrder.indexOf(rankB)
//   })

//   return <Hand cards={sortedCards} />
// }

// function getRandomCard() {
//   const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k', 'a']
//   const suits = ['h', 'd', 'c', 's']
//   const rank = ranks[Math.floor(Math.random() * ranks.length)]
//   const suit = suits[Math.floor(Math.random() * suits.length)]
//   return rank + suit
// }

// function Hand({ cards }) {
//   return (
//     <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 5, width: 220}}>
//       {cards.map((card) => {
//         return <div style={{width: 50, height: 50}}>
//           <div style={{background: 'rgb(12,123,0)', boxShadow: `0px 0px 8px rgb(12,123,0)`, borderRadius: 3, width: 36, height: 48, zIndex: 0, marginTop: 22}}/>
//           <img alt={card} src={`${process.env.PUBLIC_URL}/img/cards/${card[0]}/${card[1]}.png`} style={{width: 46, height: 46, zIndex: 1, marginTop: -47, marginBottom: 25, marginLeft: -5, opacity: 0.7}}/>
//         </div>
//       })}
//     </div>
//   )
// }

function Circle({ theme }) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0,1,0] }}
    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', repeatDelay: 3, delay: Math.random() * 5 }}
    style={{
      height: 8, 
      width: 8, 
      borderRadius: '50%', 
      color: theme, 
      boxShadow: `0px 0px 8px ${theme}, 0px 0px 4px ${theme}`
    }}/>
  )
}
  
function Fun({ theme }) { 
  return (
    <div id='fun' style={{zIndex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'black', height: 'fit-content', paddingBottom: 30, paddingRight: 25, paddingLeft: 25, borderRadius: 16}}>
        <Title theme={theme}/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '32px'}}>
          <HDiv width={230}/>
        </div>
        <div>
          <ActivityTracker/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 0 20px 0'}}>
          <HDiv width={230}/>
        </div>
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}>
            <OmahaHandOfTheDay/>
          </div>
        </div> */}
        <FavoriteSongs theme={theme}/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 0 20px 0'}}>
          <HDiv width={230}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <pre style={{color: theme, textShadow: `0px 0px 15px ${theme}, 0px 0px 12px ${theme}, 0px 0px 15px ${theme}`}}>Washington, DC</pre>
          <VDiv height={30}/>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '4px', width: 'fit-content'}}>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
            <Circle theme={theme}/>
          </div>
        </div>
        
        {/* <Cells/> */}
      </div>
    </div>
  )
}

export default Fun