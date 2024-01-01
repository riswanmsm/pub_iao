import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you are using React Router for navigation
import "./Navbar.css"; // Style your navbar with CSS
import TextLogo from "../images/TextLogoColour.png";
import ImageLogo from "../images/ImageLogo.png";
import User from "../images/User.png";
import Menu from "../images/Menu.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={TextLogo}
            alt="Text Logo"
            className="responsive-logo-first"
          />
        </Link>
        <Link to="/">
          <img src={ImageLogo} alt="Logo" className="responsive-logo-second" />
        </Link>
      </div>

      {/* Menu items */}
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/time-to-think" className="navbar-link">
            Time to Think
          </Link>
        </li>
      </ul>

      {/* right side icons profile adn humberger */}
      <div className="navbar-icons">
        {/* Search bar on the right */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="profile-icon">
          <img src={User} alt="profile icon" />
        </div>
        <div className="hamburger-icon">
          <div className="profile-icon">
            <img src={Menu} alt="hamburger icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
