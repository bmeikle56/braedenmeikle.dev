import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

import ActionPlayerProject from './proj/action-player/ActionPlayerProject.jsx'
import PremiumSwiftProject from './proj/premium-swift/PremiumSwiftProject.jsx'
import BZDevProject from './proj/bz-dev/BZDevProject.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ZardsTrackerProject from './proj/zards-tracker/ZardsTrackerProject.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/action-player' element={<ActionPlayerProject/>}/>
        <Route path='/projects/bz-dev' element={<BZDevProject/>}/>
        <Route path='/projects/premium-swift' element={<PremiumSwiftProject/>}/>
        <Route path='/projects/zards-tracker' element={<ZardsTrackerProject/>}/>
      </Routes>
    </Router>
  )
}

export default App