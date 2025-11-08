import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Flexdevs Technologies logo" width="42" height="42" />
        <span>FLEXDEVS TECHNOLOGIES</span>
      </Link>

      <nav>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
      </nav>
    </header>
  )
}
