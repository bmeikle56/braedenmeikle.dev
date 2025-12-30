import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BZDevHome from './page/bzdevhome'
import DashboardPage from './page/dash'
import AuthPage from './page/auth'
import DownloadPage from './page/dwnl'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BZDevHome/>} />
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/dash' element={<DashboardPage/>}/>
        <Route path='/dwnl' element={<DownloadPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
