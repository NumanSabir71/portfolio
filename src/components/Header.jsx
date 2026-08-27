import React from "react";

const Header = () => {
  return (
    <>
      <nav id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo">N.</a>

            <div className="nav-center">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#timeline">Experience</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="nav-right">
              <div className="nav-socials">
                <a href="#" className="nav-social" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="nav-social" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              <a href="#contact" className="btn btn-primary nav-hire">
                Hire Me
              </a>
            </div>

            <button
              className="hamburger"
              id="hamburgerBtn"
              aria-label="Menu"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-overlay" id="mobileOverlay"></div>

      <div className="mobile-menu" id="mobileMenu">
        <a href="#about" className="ml">About</a>
        <a href="#skills" className="ml">Skills</a>
        <a href="#services" className="ml">Services</a>
        <a href="#projects" className="ml">Projects</a>
        <a href="#timeline" className="ml">Experience</a>
        <a href="#testimonials" className="ml">Testimonials</a>
        <a href="#contact" className="ml">Contact</a>
        <a href="#contact" className="btn btn-primary ml">
          Hire Me
        </a>
      </div>
    </>
  );
};

export default Header;