import { Routes, Route } from 'react-router-dom'

import './style/ActionPlayerApp.css'

import ActionPlayerHome from './pages/home'

function ActionPlayerApp() {
  return (
    <Routes>
      <Route index element={<ActionPlayerHome/>} />
    </Routes>
  )
}

export default ActionPlayerApp