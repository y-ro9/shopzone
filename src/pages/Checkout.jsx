import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  function handlePlaceOrder() {
    alert('Order placed! (Mock)')
    clearCart()
    navigate('/')
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Checkout</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Logged in as <strong>Guest User</strong>
      </p>
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', border: '1px solid #eee' }}>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>
                <span>{item.title} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
      <button
        onClick={handlePlaceOrder}
        disabled={cart.length === 0}
        style={{ marginTop: '1.5rem', width: '100%', background: cart.length ? '#111' : '#ccc', color: '#fff', border: 'none', padding: '0.9rem', borderRadius: '8px' }}
      >
        Place Order
      </button>
    </div>
  )
}
