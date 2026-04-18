import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          Usman<span>.</span>Olamide
        </NavLink>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cv"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
