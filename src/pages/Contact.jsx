export default function Contact() {
  return (
    <div style={{ padding: '2rem', maxWidth: '450px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Contact Us</h1>
      <form onSubmit={e => { e.preventDefault(); alert('Message sent!'); e.target.reset() }} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <input placeholder="Name" required style={{ padding: '0.7rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input type="email" placeholder="Email" required style={{ padding: '0.7rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        <textarea placeholder="Message" rows="4" required style={{ padding: '0.7rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        <button type="submit" style={{ background: '#111', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '6px' }}>Send Message</button>
      </form>
    </div>
  )
}