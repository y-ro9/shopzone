import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to ShopZone 🛍️</h1>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
        Browse products, click any item, and checkout — all without a page reload.
      </p>
      <Link to="/shop" style={{ background: '#111', color: '#fff', padding: '0.8rem 2rem', borderRadius: '8px', display: 'inline-block' }}>
        Start Shopping →
      </Link>
    </div>
  )
}