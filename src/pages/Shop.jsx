import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <p style={{ padding: '2rem' }}>Loading products...</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>All Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {products.map(p => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            style={{ border: '1px solid #e0e0e0', padding: '1rem', cursor: 'pointer', borderRadius: '10px', background: '#fff' }}
          >
            <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px' }} />
            <h4 style={{ margin: '0.6rem 0 0.3rem' }}>{p.title}</h4>
            <p style={{ color: '#0a8', fontWeight: 'bold' }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
