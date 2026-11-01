import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductView() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => { setProduct(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  if (loading) return <p style={{ padding: '2rem' }}>Loading...</p>
  if (!product) return <p style={{ padding: '2rem' }}>Product not found.</p>

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/shop" style={{ color: '#0066cc' }}>← Back to Shop</Link>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <img src={product.thumbnail} alt={product.title} style={{ width: '360px', borderRadius: '12px', border: '1px solid #eee' }} />
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>{product.title}</h1>
          <p style={{ fontSize: '1.5rem', color: '#0a8', fontWeight: 'bold', marginBottom: '1rem' }}>${product.price}</p>
          <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '1.5rem' }}>{product.description}</p>
          <button
            onClick={handleAdd}
            style={{ background: '#111', color: '#fff', border: 'none', padding: '0.8rem 2rem', borderRadius: '8px', fontSize: '1rem' }}
          >
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}