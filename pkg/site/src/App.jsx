import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

import ActionPlayerApp from '@apps/action-player'
import BZDevApp from '@apps/bz-dev'
import PremiumSwiftApp from '@apps/premium-swift'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/action-player/*' element={<ActionPlayerApp/>}/>
        <Route path='/projects/bz-dev/*' element={<BZDevApp/>}/>
        <Route path='/projects/premium-swift/*' element={<PremiumSwiftApp/>}/>
      </Routes>
    </Router>
  )
}

export default App