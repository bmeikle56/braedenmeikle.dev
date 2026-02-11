import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

import ActionPlayerProject from './proj/action-player/ActionPlayerProject.jsx'
import PremiumSwiftProject from './proj/premium-swift/PremiumSwiftProject.jsx'
import BZDevProject from './proj/bz-dev/BZDevProject.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ZardsTrackerProject from './proj/zards-tracker/ZardsTrackerProject.jsx'
import { greenTheme } from './styles/colors.js'
import PremiumSwiftFuncPage from './proj/premium-swift/PremiumSwiftFuncPage.jsx'
import PremiumSwiftView from './proj/premium-swift/PremiumSwiftView.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio theme={greenTheme}/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/action-player' element={<ActionPlayerProject/>}/>
        <Route path='/projects/bz-dev' element={<BZDevProject/>}/>
        <Route path='/projects/premium-swift' element={<PremiumSwiftProject/>}/>
        <Route path='/projects/premium-swift/func' element={<PremiumSwiftFuncPage/>}/>
        <Route path='/projects/premium-swift/view' element={<PremiumSwiftView/>}/>
        {/* <Route path='/projects/premium-swift/wrap' element={<PremiumSwiftWrap/>}/> */}
        <Route path='/projects/zards-tracker' element={<ZardsTrackerProject theme={greenTheme}/>}/>
      </Routes>
    </Router>
  )
}

export default App

// *** LinkedIn banner app ***

// import LinkedInBanner from './pages/LinkedInBanner';
// import { toPng } from 'html-to-image';

// export default function App() {
//   const downloadBanner = () => {
//     const node = document.getElementById("banner");
//     toPng(document.getElementById("banner"), {
//       pixelRatio: 4,
//       width: 1584,
//       height: 396
//     }).then(dataUrl => {
//       const link = document.createElement("a");
//       link.download = "linkedin-banner.png";
//       link.href = dataUrl;
//       link.click();
//     });

//   };

//   const words = ['coder', 'thinker', 'learner'];

//   return (
//     <div style={{ padding: 40 }}>
//       <LinkedInBanner>
//       <div style={{background: 'black', width: 'fit-content', marginRight: 320, padding: 12, borderRadius: 12}}>
//         {words.map(word => (
//           <div key={word} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, paddingTop: 6, paddingBottom: 6 }}>
//             <span style={{ color: 'rgb(40,40,40)', fontSize: 24, }}>{'<'}</span>
//             <span
//               style={{
//                 color: 'rgb(20,200,0)',
//                 fontSize: 24,
//                 fontFamily: 'monospace',
//                 // filter: 'drop-shadow(0 0 5px rgb(15,150,0)) drop-shadow(0 0 8px rgb(15,150,0)) drop-shadow(0 0 12px rgb(15,150,0))',
//               }}
//             >
//               {word}
//             </span>
//             <span style={{ color: 'rgb(40,40,40)', fontSize: 24, }}>{'/>'}</span>
//           </div>
//         ))}
//         </div>
//       </LinkedInBanner>

//       <button onClick={downloadBanner} style={{ marginTop: 20 }}>
//         Download Banner
//       </button>
//     </div>
//   );
// }