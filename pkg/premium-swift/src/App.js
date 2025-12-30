import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function PremiumSwiftApp() {
  return (
    <Routes>
      <Route index element={<Home/>} />
    </Routes>
  )
}

export default PremiumSwiftApp
