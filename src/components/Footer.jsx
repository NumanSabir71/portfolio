import React from "react";

const Footer = () => {
    return (
        <>
<footer>
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <a href="#hero" class="nav-logo">N.</a>
          <p>Building powerful WordPress websites and WooCommerce stores with clean code and a focus on performance. Available for freelance work worldwide.</p>
          <div class="social-row">
            <a href="#" class="soc-ico"><i class="fab fa-github"></i></a>
            <a href="#" class="soc-ico"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="soc-ico"><i class="fab fa-x-twitter"></i></a>
            <a href="#" class="soc-ico"><i class="fab fa-dribbble"></i></a>
          </div>
        </div>
        <div class="foot-col">
          <h4>Navigation</h4>
          <ul><li><a href="#about">About Me</a></li><li><a href="#skills">Skills</a></li><li><a href="#services">Services</a></li><li><a href="#projects">Projects</a></li><li><a href="#timeline">Experience</a></li><li><a href="#contact">Contact</a></li></ul>
        </div>
        <div class="foot-col">
          <h4>Services</h4>
          <ul><li><a href="#services">WordPress Development</a></li><li><a href="#services">WooCommerce Stores</a></li><li><a href="#services">Custom Plugins</a></li><li><a href="#services">Speed & SEO</a></li><li><a href="#services">Maintenance</a></li></ul>
        </div>
        <div class="foot-col">
          <h4>Contact</h4>
          <ul><li><a href="mailto:hello@nouman.dev">hello@nouman.dev</a></li><li><a href="#">+92 300 0000000</a></li><li><a href="#">Lahore, Pakistan</a></li><li><a href="#">Available Worldwide</a></li></ul>
        </div>
      </div>
      <div class="foot-bar">
        <p>&copy; 2026 Nouman. All rights reserved. Made with <span class="heart">♥</span> and coffee.</p>
        <p>Designed & built by <span class="acc">Nouman</span></p>
      </div>
    </div>
  </footer>

  <button id="btt" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button>
</>
    );
}

export default Footer;