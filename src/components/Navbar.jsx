import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
       <div className="nav-left">
        {/* ✅ Added link to Home */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <h2>Sunaina Bhatoy</h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Right-side buttons */}
      <div className="nav-actions">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={handleToggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
