import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

import ActionPlayerApp from './../src/proj/action-player/src/ActionPlayerApp.jsx'
import BZDevApp from './../src/proj/bz-dev/src/BZDevApp.jsx'
import PremiumSwiftApp from './../src/proj/premium-swift/src/PremiumSwiftApp.jsx'
import Portfolio from './pages/Portfolio.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/action-player/*' element={<ActionPlayerApp/>}/>
        <Route path='/projects/bz-dev/*' element={<BZDevApp/>}/>
        <Route path='/projects/premium-swift/*' element={<PremiumSwiftApp/>}/>
      </Routes>
    </Router>
  )
}

export default App