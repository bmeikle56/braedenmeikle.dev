import { Routes, Route } from 'react-router-dom'

import './style/ActionPlayerApp.css'

import ActionPlayerHome from './pages/home'
import ActionPlayerDownload from './pages/download'

function ActionPlayerApp() {
  return (
    <Routes>
      <Route path='/' element={<ActionPlayerHome/>} />
      <Route path='/download' element={<ActionPlayerDownload/>} />
    </Routes>
  )
}

export default ActionPlayerApp