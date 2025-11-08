import { Link } from 'react-router-dom'

export default function Button({ to, children, type = 'primary', style }) {
  const className = type === 'primary' ? 'btn btn-primary' : 'btn btn-outline'
  return to
    ? <Link to={to} className={className} style={style}>{children}</Link>
    : <button className={className} style={style}>{children}</button>
}
