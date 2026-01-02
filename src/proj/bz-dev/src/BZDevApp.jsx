import './style/BZDevApp.css'
import { Routes, Route } from 'react-router-dom'
import BZDevHome from './page/bzdevhome'
import DashboardPage from './page/dash'
import AuthPage from './page/auth'
import DownloadPage from './page/dwnl'

function BZDevApp() {
  return (
    <Routes>
      <Route index element={<BZDevHome/>} />
      {/* <Route path='/projects/bz-dev/auth' element={<AuthPage/>}/>
      <Route path='/projects/bz-dev/dash' element={<DashboardPage/>}/>
      <Route path='/projects/bz-dev/dwnl' element={<DownloadPage/>}/> */}
    </Routes>
  )
}

export default BZDevApp
