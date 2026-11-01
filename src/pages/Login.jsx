import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { loginAsGuest, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  if (isAuthenticated) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>You're already logged in ✓</h2>
        <button onClick={() => navigate('/checkout')} style={{ marginTop: '1rem', padding: '0.7rem 1.5rem', background: '#111', color: '#fff', border: 'none', borderRadius: '6px' }}>
          Go to Checkout
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: '3rem', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>Login</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Sign in to access checkout</p>
      <button
        onClick={() => { loginAsGuest(); navigate('/checkout') }}
        style={{ background: '#111', color: '#fff', border: 'none', padding: '0.9rem 2rem', borderRadius: '8px', width: '100%', fontSize: '1rem' }}
      >
        Login as Guest
      </button>
    </div>
  )
}