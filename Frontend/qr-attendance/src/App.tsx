import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NiceModal from '@ebay/nice-modal-react'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/LoginPage/Login'

function App() {
  return (
    <BrowserRouter basename="/presence">
      <NiceModal.Provider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </NiceModal.Provider>
    </BrowserRouter>
  )
}

export default App
