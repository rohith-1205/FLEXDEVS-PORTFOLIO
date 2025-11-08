export default function LogoCloud() {
  const logos = ['ClientOne', 'ClientTwo', 'ClientThree', 'ClientFour']
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
      {logos.map((l) => (
        <div key={l} className="card" style={{ flex: '1 1 120px', textAlign: 'center' }}>
          {l}
        </div>
      ))}
    </div>
  )
}
