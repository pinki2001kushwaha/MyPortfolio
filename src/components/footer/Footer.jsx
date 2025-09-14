import React from "react";
import '../../style/Footer.css';
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
    return (
            <footer className="footer">
  <div className="container footer-container">
    {/* <!-- Left: Brand / About --> */}
    <div className="footer-about">
      <h3>Shraddha</h3>
      <p>Full Stack Software Developer | React.js & Next.js | Node.js Enthusiast</p>
    </div>

    {/* <!-- Middle: Links --> */}
    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home"> Home</a></li>
        <li><a href="#about"> About</a></li>
        <li><a href="#projects"> Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
    </div>

    {/* <!-- Right: Contact Info --> */}
    <div className="footer-contact">
      <h4>Contact</h4>
      <p> +91 7225086371</p>
      <p> kushwahapinki2001@gmail.com</p>
      
      {/* <div className="socials">
        <a href="#"><i className="fab fa-github">https://github.com/pinki2001kushwaha</i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div> */}
    </div>
  </div>

  {/* <!-- Bottom --> */}
  <div className="footer-bottom">
    <p>&copy; 2024 Shraddha. All rights reserved.</p>
  </div>
</footer>

    );
}
export default Footer;