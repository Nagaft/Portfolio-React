import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './Footer.css'; 

function Footer() {
  const year = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Nagaft" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/no%C3%A9garc%C3%ADa/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
        </a>
      </div>
      <p>© {year} Noé García. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
