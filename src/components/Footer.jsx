import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <p><strong>Flexdevs Technologies</strong> — Creating seamless web experiences with React & modern UI engineering.</p>
      <p>📧 flexdevstechnologies@gmail.com | 📞 +91-9842370274</p>
      <p>© {new Date().getFullYear()} Flexdevs Technologies. All rights reserved.</p>
      <p>
        <Link to="/about">About</Link> | <Link to="/services">Services</Link> | 
        <Link to="/portfolio">Portfolio</Link> | <Link to="/contact">Contact</Link>
      </p>
    </footer>
  )
}
