import { Link } from "react-router-dom"; // If you are using React Router for navigation
import "./Footer.css"; // Style your navbar with CSS
import TextLogoWhite from "../images/TextLogoWhite.png";
import ImageLogoWhite from "../images/ImageLogoWhite.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer items */}
      <div className="footer-menu">
        <p className="footer-menu-header">Legal</p>
        <ul>
          <li className="footer-item">
            <Link to="/" className="footer-link">
              Terms and conditions
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">
              Privacy and cookies policy
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/" className="footer-link">
              Accessibility statement
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-logo">
        <Link to="/">
          <img
            src={TextLogoWhite}
            alt="Text Logo"
            className="responsive-logo-first"
          />
        </Link>
        <Link to="/">
          <img
            src={ImageLogoWhite}
            alt="Logo"
            className="responsive-logo-second"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
