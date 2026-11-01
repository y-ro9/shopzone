import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductView from './pages/ProductView'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 — Page Not Found</h2>} />
      </Routes>
    </>
  )
}

export default App