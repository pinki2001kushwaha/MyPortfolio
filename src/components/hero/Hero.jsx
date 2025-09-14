import React, { useState, useEffect } from "react";
import "../../style/Hero.css";
import file from "../../assets/files.png";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Animated background elements */}
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <div className="hero-container">
        {/* Left: Text Content */}
        <div className={`hero-text ${isLoaded ? 'fade-in-up' : ''}`}>
          <div className="greeting">
            <span className="wave"></span>
            <span>Hello, I'm</span>
          </div>
          
          <h1>
            <span className="name-gradient">Shraddha</span>
          </h1>
          
          <div className="typewriter-container">
            <h3 className="typewriter">
              Full Stack Software Developer | React.js & Next.js & Node.js Enthusiast
            </h3>
          </div>
    <p>
  I specialize in building scalable and responsive web applications using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>. With 1.6+ years of professional experience, 
  I focus on delivering clean UI, seamless user experiences, and 
  performance-driven full-stack solutions.
</p>

          
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              <span>View My Work</span>
              <div className="hover-effect"></div>
            </a>
            <a href="#contact" className="btn secondary">
              <span>Contact Me</span>
              <div className="hover-effect"></div>
            </a>
          </div>
          
          <div className="social-links">
            <a href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right: Image with modern frame */}
        <div className={`hero-image ${isLoaded ? 'fade-in-right' : ''}`}>
          <div className="image-container">
            <img
              src={file}
              alt="Shraddha Developer"
              className="profile-img"
            />
            <div className="image-frame"></div>
            <div className="image-dots">
              <div className="dot dot-1"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-3"></div>
            </div>
            
           
            <div className="floating-badge">
              <span>3+ Projects</span>
            </div>
          </div>
        </div>
      </div>
      
    
    </section>
  );
}

export default Hero;
