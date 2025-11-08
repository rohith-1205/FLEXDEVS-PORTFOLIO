import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div
      className="container"
      style={{
        textAlign: 'center',
        padding: '100px 20px',
        background:
          'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(255,255,255,1))',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(37,99,235,0.1)',
        marginTop: '60px',
      }}
    >
      <h1 className="h1" style={{ color: '#2563eb' }}>
        ✅ Message Sent Successfully!
      </h1>
      <p
        className="lead"
        style={{
          marginTop: '15px',
          color: '#475569',
          lineHeight: 1.7,
          fontSize: '1.1rem',
        }}
      >
        Thank you for reaching out to <strong>Flexdevs Technologies</strong>.<br />
        Our team will contact you within 24 hours to discuss your project.
      </p>

      <Link
        to="/"
        className="btn btn-primary"
        style={{ marginTop: '25px', fontSize: '1rem', padding: '12px 26px' }}
      >
        Back to Home
      </Link>
    </div>
  )
}
