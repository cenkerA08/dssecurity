import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react'; 
import './NavBar.css';
import logo from './Images/SecurityLogo.png';

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt='logo van d&s security' width={250} height={120}/>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/OverOns" className={isActive('/OverOns')} onClick={closeMenu}>
              Over Ons
            </Link>
          </li>
          <li>
            <Link to="/Diensten" className={isActive('/Diensten')} onClick={closeMenu}>
              Diensten
            </Link>
          </li>
          <li>
            <Link to="/Contact" className={isActive('/Contact')} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;
