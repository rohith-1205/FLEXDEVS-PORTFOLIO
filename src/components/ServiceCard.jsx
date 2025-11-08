export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="card">
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <h3 className="h3" style={{ marginTop: '10px' }}>{title}</h3>
      <p className="lead">{description}</p>
    </div>
  )
}
