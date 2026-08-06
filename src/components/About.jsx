import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div class="container">
          <div class="about-grid">
            <div class="about-visual sr left">
              <div class="about-corner-deco"></div>
              <div class="about-corner-deco br"></div>
              <div class="about-img">
                <div class="about-img-inner">👨‍💻</div>
              </div>
              <div class="about-float">
                <div class="fn">50+</div>
                <div class="fl">
                  Projects<br></br>Delivered
                </div>
              </div>
            </div>

            <div class="about-text sr right">
              <span class="label">About Me</span>
              <h2 class="section-title">
                Building WordPress Sites That
                <span class="hi">Deliver Results</span>
              </h2>
              <p class="section-desc">
                I'm a dedicated WordPress developer with over 5 years of
                experience creating high-performance websites, WooCommerce
                stores, and custom plugins that help businesses grow online.
              </p>
              <p class="section-desc">
                From crafting pixel-perfect custom themes to building complex
                e-commerce solutions, I bring technical depth and a sharp eye
                for user experience to every project.
              </p>

              <div class="about-chips">
                <div class="achip">
                  <i class="fas fa-map-marker-alt"></i> Pakistan
                </div>
                <div class="achip">
                  <i class="fas fa-language"></i> English, Urdu
                </div>
                <div class="achip">
                  <i
                    class="fas fa-circle"
                    
                  ></i>
                  Open to Remote
                </div>
                <div class="achip">
                  <i class="fas fa-graduation-cap"></i> BS Computer Science
                </div>
              </div>

              <div class="about-cta">
                <a href="#" class="btn btn-primary">
                  <i class="fas fa-download"></i> Download CV
                </a>
                <a href="#projects" class="btn btn-ghost">
                  <i class="fas fa-eye"></i> View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
