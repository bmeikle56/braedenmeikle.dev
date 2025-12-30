import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

import ActionPlayerHome from '../../action-player/src/pages/home'
import ActionPlayerDownload from '../../action-player/src/pages/download'

import BZDevHome from '../../bz-dev/src/page/bzdevhome'

import PremiumSwiftHome from '../../premium-swift/src/pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/action-player' element={<ActionPlayerHome/>}/>
        <Route path='/projects/action-player/download' element={<ActionPlayerDownload/>}/>
        <Route path='/projects/bz-dev' element={<BZDevHome/>}/>
        <Route path='/projects/premium-swift' element={<PremiumSwiftHome/>}/>
      </Routes>
    </Router>
  )
}

export default App