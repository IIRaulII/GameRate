import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-top">
          <div className="logo-container">
            <img 
              src="/rategame.png" 
              alt="GameRate Logo" 
              className="navbar-logo-image" 
            />
            <h1 className="navbar-logo">GameRate</h1>
          </div>
          <button 
            className="hamburger-btn" 
            onClick={toggleMenu}
            aria-label="Menú principal"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
        <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <NavLink 
                to="/juegos" 
                className={({ isActive }) => 
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Juegos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/favoritos" 
                className={({ isActive }) => 
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Favoritos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/formulario" 
                className={({ isActive }) => 
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Añadir Juego
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 