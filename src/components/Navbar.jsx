import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = ["home", "services", "portfolio", "about", "contact"];

  return (
    <header className="navbar">
      <div className="nav-container">
        <img src={logo} alt="FlexDevs" className="nav-logo" />

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item}>
              <button onClick={() => handleScroll(item)} className="nav-btn">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
