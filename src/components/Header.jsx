import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img 
            src="https://www.hunterdouglas.asia/main-landing/Header_Logo.png" 
            alt="Hunter Douglas" 
            className="logo-image"
          />
        </Link>
        
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/onboarding" 
            className={`nav-link ${isActive('/onboarding') ? 'active' : ''}`}
          >
            Onboarding
          </Link>
          <Link 
            to="/offboarding" 
            className={`nav-link ${isActive('/offboarding') ? 'active' : ''}`}
          >
            Offboarding
          </Link>
        </nav>

        <div className="header-actions">
          <div className="user-menu">
            <div className="user-avatar">HD</div>
            <span className="user-name">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
