import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 className="h1">404</h1>
      <p className="lead">Page not found.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Go Home</Link>
    </div>
  )
}
