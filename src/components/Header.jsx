import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styles

function Header() {
  return (
    <header className="header">
      <div className="branding">
        <h1>Noé Antonio García Flores</h1>
      </div>
      <nav>
        <ul className="navigation">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
