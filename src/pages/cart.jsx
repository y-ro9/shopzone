import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>Your cart is empty 🛒</h2>
        <Link to="/shop" style={{ color: '#0066cc', display: 'inline-block', marginTop: '1rem' }}>Go shopping →</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderBottom: '1px solid #eee' }}>
          <img src={item.thumbnail} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p style={{ color: '#666' }}>${item.price} × {item.quantity}</p>
          </div>
          <p style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)} style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px' }}>
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={clearCart} style={{ background: 'transparent', border: '1px solid #999', padding: '0.5rem 1rem', borderRadius: '6px' }}>
          Clear Cart
        </button>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Total: ${totalPrice.toFixed(2)}</p>
          <button onClick={() => navigate('/checkout')} style={{ background: '#111', color: '#fff', border: 'none', padding: '0.8rem 2rem', borderRadius: '8px', marginTop: '0.5rem' }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}