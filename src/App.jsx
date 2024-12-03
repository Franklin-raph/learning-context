import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import { CartProvider } from './contexts/CartContext'
// import Dashboard from './pages/Dashboard'

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
