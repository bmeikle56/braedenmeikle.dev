import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ActionPlayerHome from './pages/home'
import ActionPlayerDownload from './pages/download'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ActionPlayerHome/>} />
        <Route path='/download' element={<ActionPlayerDownload/>} />
      </Routes>
    </Router>
  )
}

export default App