import React from "react";

const Hero = () => {
    return (
        <>
        <section id="hero">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <div class="container">
      <div class="hero-grid">

    
        <div class="hero-left">
          <div class="hero-avail">
            <span class="avail-dot"></span>
            Open to new opportunities
          </div>

          <h1 class="hero-title">
            <span class="intro">Hello, I'm</span>
            <span class="name">Nouman</span>
          </h1>

          <p class="hero-role">
            <span id="typedText">WordPress Developer</span><span class="typed-cursor"></span>
          </p>

          <p class="hero-desc">
            I build powerful, fast WordPress websites and WooCommerce stores that drive real business results. Specialising in custom themes, plugins, and performance-optimised solutions tailored to your goals.
          </p>

          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary"><i class="fas fa-rocket"></i> View My Work</a>
            <a href="#contact"  class="btn btn-ghost"><i class="fas fa-paper-plane"></i> Get In Touch</a>
          </div>

          <div class="hero-mini-stats">
            <div class="hms-item">
              <div class="hms-num">5+</div>
              <div class="hms-lbl">Years Exp.</div>
            </div>
            <div class="hms-sep"></div>
            <div class="hms-item">
              <div class="hms-num">50+</div>
              <div class="hms-lbl">Projects</div>
            </div>
            <div class="hms-sep"></div>
            <div class="hms-item">
              <div class="hms-num">30+</div>
              <div class="hms-lbl">Clients</div>
            </div>
            <div class="hms-sep"></div>
            <div class="hms-item">
              <div class="hms-num">99%</div>
              <div class="hms-lbl">Satisfaction</div>
            </div>
          </div>
        </div>

        
        <div class="hero-visual">
          <div class="profile-wrap">
            <div class="profile-glow"></div>
            <div class="profile-ring" aria-hidden="true"></div>
            <div class="profile-surface">
              <span class="profile-letter">N</span>
            </div>

            <div class="f-badge react"><i class="fab fa-wordpress"></i> WordPress</div>
            <div class="f-badge node"><i class="fab fa-php"></i> PHP</div>
            <div class="f-badge figma"><i class="fas fa-shopping-cart"></i> WooCommerce</div>
            <div class="f-badge aws"><i class="fas fa-puzzle-piece"></i> Plugins</div>
          </div>

          <div class="exp-badge">
            <div class="exp-num">5+</div>
            <div class="exp-lbl">Years of<br></br>Experience</div>
          </div>
        </div>

      </div>
    </div>

    <div class="hero-scroll-cue">
      <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
      <span class="scroll-label">Scroll</span>
    </div>
  </section>
        </>
    );

}
export default Hero;