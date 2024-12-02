import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
// import Dashboard from './pages/Dashboard'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
