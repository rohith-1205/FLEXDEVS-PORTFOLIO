export default function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <div className="container">
        {title && <h2 className="h2">{title}</h2>}
        {subtitle && <p className="lead">{subtitle}</p>}
        <div style={{ marginTop: '20px' }}>{children}</div>
      </div>
    </section>
  )
}
