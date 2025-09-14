import React, { useState } from "react";
import "../../style/Navbar.css";
import { PiCodepenLogo } from "react-icons/pi";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
         <a href="#" className="logo">
  <PiCodepenLogo className="logo-icon" />
  <span className="logo-text">MyPortfolio</span>
</a>

          <ul className={`nav-links ${isActive ? "active" : ""}`}>
            <li>
              <a href="home" onClick={() => setIsActive(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsActive(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsActive(false)}>
                Projects
              </a>
            </li>
            {/* Contact button inside li */}
            <li>
              <a
                href="#contact"
                className="btn secondary"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
