import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { totalItems } = useCart()
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: '1.5rem',
      padding: '1rem 2rem', background: '#111', color: '#fff'
    }}>
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>ShopZone</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/contact">Contact</Link>

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {isAuthenticated ? (
          <button onClick={() => { logout(); navigate('/') }} style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <Link to="/cart" style={{ position: 'relative', fontSize: '1.3rem' }}>
          🛒
          {totalItems > 0 && (
            <span style={{
              position: 'absolute', top: '-8px', right: '-12px',
              background: '#ff4d4d', color: '#fff', borderRadius: '50%',
              fontSize: '0.7rem', minWidth: '20px', height: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold'
            }}>{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  )
}