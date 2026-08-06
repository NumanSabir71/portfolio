import React from "react";

const Skills = () => {
    return (
        <>
        <section id="skills">
    <div class="container">
      <div class="skills-header">
        <span class="label sr">Skills & Technologies</span>
        <h2 class="section-title sr">My Technical <span class="hi">Expertise</span></h2>
        <p class="section-desc sr">WordPress tools and technologies I use daily to build fast, scalable, and beautiful websites.</p>
      </div>

      <div class="skills-grid">
        <div class="sk-card sr d1">
          <div class="sk-icon" style={{ background: 'rgba(33,117,179,.1)' , color: '#21759B' }}><i class="fab fa-wordpress"></i></div>
          <h4>WordPress Development</h4>
          <p>Custom WordPress builds from scratch — themes, templates, and core customisation.</p>
          <div class="sk-tags"><span class="sk-tag">WordPress</span><span class="sk-tag">Elementor</span><span class="sk-tag">Gutenberg</span><span class="sk-tag">ACF</span></div>
        </div>
        <div class="sk-card sr d2">
          <div class="sk-icon" style={{ background: 'rgba(33,117,179,.1)' , color: '#21759B' }}><i class="fas fa-paint-brush"></i></div>
          <h4>Theme Development & Customization</h4>
          <p>Custom WordPress themes built from scratch, plus deep customisation of existing themes and builders.</p>
          <div class="sk-tags"><span class="sk-tag">Custom Themes</span><span class="sk-tag">Child Themes</span><span class="sk-tag">Template Hierarchy</span><span class="sk-tag">Elementor</span></div>
        </div>
        <div class="sk-card sr d3">
          <div class="sk-icon" style={{ background: 'rgba(124,58,237,.08)' , color: '#9D6EF8' }}><i class="fab fa-php"></i></div>
          <h4>PHP & MySQL</h4>
          <p>Server-side logic, custom queries, and database-driven WordPress functionality.</p>
          <div class="sk-tags"><span class="sk-tag">PHP 8</span><span class="sk-tag">MySQL</span><span class="sk-tag">WP REST API</span><span class="sk-tag">Hooks</span></div>
        </div>
        <div class="sk-card sr d1">
          <div class="sk-icon" style={{ background: 'rgba(144,0,255,.08)' , color: '#9900FF' }}><i class="fas fa-shopping-bag"></i></div>
          <h4>WooCommerce</h4>
          <p>Full-featured e-commerce stores with custom checkout flows and payment gateways.</p>
          <div class="sk-tags"><span class="sk-tag">WooCommerce</span><span class="sk-tag">Stripe</span><span class="sk-tag">PayPal</span><span class="sk-tag">Subscriptions</span></div>
        </div>
        <div class="sk-card sr d2">
          <div class="sk-icon" style={{ background: 'rgba(150,191,72,.1)' , color: '#96BF48' }}><i class="fab fa-shopify"></i></div>
          <h4>Shopify Development</h4>
          <p>Custom Shopify stores with theme edits, apps integration, and conversion-focused storefronts.</p>
          <div class="sk-tags"><span class="sk-tag">Shopify</span><span class="sk-tag">Liquid</span><span class="sk-tag">Online Store 2.0</span><span class="sk-tag">Apps</span></div>
        </div>
        <div class="sk-card sr d3">
          <div class="sk-icon" style={{ background: 'rgba(252,211,77,.08)' , color: '#FCD34D' }}><i class="fas fa-puzzle-piece"></i></div>
          <h4>Plugin Development</h4>
          <p>Custom WordPress plugins to extend functionality beyond what off-the-shelf tools offer.</p>
          <div class="sk-tags"><span class="sk-tag">Custom Plugins</span><span class="sk-tag">Customization</span><span class="sk-tag">Hooks</span><span class="sk-tag">Shortcodes</span></div>
        </div>
        <div class="sk-card sr d1">
          <div class="sk-icon" style={{ background: 'rgba(34,211,238,.08)' , color: '#22D3EE' }}><i class="fas fa-code"></i></div>
          <h4>Frontend (HTML/CSS/JS)</h4>
          <p>Responsive, accessible front-ends built on top of WordPress with modern styling.</p>
          <div class="sk-tags"><span class="sk-tag">HTML5</span><span class="sk-tag">CSS3</span><span class="sk-tag">JavaScript</span><span class="sk-tag">React</span></div>
        </div>
        <div class="sk-card sr d2">
          <div class="sk-icon" style={{ background: 'rgba(52,211,153,.08)', color: '#34D399' }}><i class="fas fa-tachometer-alt"></i></div>
          <h4>Performance & SEO</h4>
          <p>Speed optimisation, Core Web Vitals, caching, and on-page SEO for WordPress sites.</p>
          <div class="sk-tags"><span class="sk-tag">Rank Math</span><span class="sk-tag">WP Rocket</span><span class="sk-tag">Yoast SEO</span><span class="sk-tag">CDN</span></div>
        </div>
      </div>

      <div class="tech-shelf sr">
        <p class="tech-shelf-lbl">Also proficient in</p>
        <div class="tech-marquee">
          <div class="tech-marquee-track">
            <div class="tech-pills">
              <div class="tpill"><i class="fab fa-wordpress" style={{ color: '#21759B' }}></i> WordPress</div>
              <div class="tpill"><i class="fab fa-php"       style={{ color: '#777BB4' }}></i> PHP</div>
              <div class="tpill"><i class="fab fa-js"        style={{ color: '#F7DF1E' }}></i> JavaScript</div>
              <div class="tpill"><i class="fab fa-react"     style={{ color: '#61DAFB' }}></i> React</div>
              <div class="tpill"><i class="fas fa-shopping-bag" style={{ color: '#9900FF' }}></i> WooCommerce</div>
              <div class="tpill"><i class="fab fa-shopify"  style={{ color: '#96BF48' }}></i> Shopify</div>
              <div class="tpill"><i class="fas fa-layer-group" style={{ color: '#EE543A' }}></i> Elementor</div>
              <div class="tpill"><i class="fas fa-cube"      style={{ color: '#F7DF1E' }}></i> ACF</div>
              <div class="tpill"><i class="fas fa-language"  style={{ color: '#0073AA' }}></i> WPML</div>
              <div class="tpill"><i class="fas fa-database"  style={{ color: '#4479A1' }}></i> MySQL</div>
              <div class="tpill"><i class="fas fa-search"    style={{ color: '#A4286A' }}></i> Yoast SEO</div>
              <div class="tpill"><i class="fab fa-github"></i> GitHub</div>
              <div class="tpill"><i class="fas fa-bolt"      style={{ color: '#FF6D00' }}></i> WP Rocket</div>
              <div class="tpill"><i class="fab fa-cloudflare" style={{ color: '#F48120' }}></i> Cloudflare</div>
            </div>
            <div class="tech-pills" aria-hidden="true">
              <div class="tpill"><i class="fab fa-wordpress" style={{ color: '#21759B' }}></i> WordPress</div>
              <div class="tpill"><i class="fab fa-php"       style={{ color: '#777BB4' }}></i> PHP</div>
              <div class="tpill"><i class="fab fa-js"        style={{ color: '#F7DF1E' }}></i> JavaScript</div>
              <div class="tpill"><i class="fab fa-react"     style={{ color: '#61DAFB' }}></i> React</div>
              <div class="tpill"><i class="fas fa-shopping-bag" style={{ color: '#9900FF' }}></i> WooCommerce</div>
              <div class="tpill"><i class="fab fa-shopify"  style={{ color: '#96BF48' }}></i> Shopify</div>
              <div class="tpill"><i class="fas fa-layer-group" style={{ color: '#EE543A' }}></i> Elementor</div>
              <div class="tpill"><i class="fas fa-cube"      style={{ color: '#F7DF1E' }}></i> ACF</div>
              <div class="tpill"><i class="fas fa-language"  style={{ color: '#0073AA' }}></i> WPML</div>
              <div class="tpill"><i class="fas fa-database"  style={{ color: '#4479A1' }}></i> MySQL</div>
              <div class="tpill"><i class="fas fa-search"    style={{ color: '#A4286A' }}></i> Yoast SEO</div>
              <div class="tpill"><i class="fab fa-github"></i> GitHub</div>
              <div class="tpill"><i class="fas fa-bolt"      style={{ color: '#FF6D00' }}></i> WP Rocket</div>
              <div class="tpill"><i class="fab fa-cloudflare" style={{ color: '#F48120' }}></i> Cloudflare</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
        </>
    );
}

export default Skills;
