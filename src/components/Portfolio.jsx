import React from "react";
const baseURL = "https://portfolio-nouman-75.vercel.app";
const Portfolio = () => {
    return (
      
        <>
        <section id="projects">
    <div class="container">
      <div class="proj-header">
        <div>
          <span class="label sr">Portfolio</span>
          <h2 class="section-title sr">Featured <span class="hi">Projects</span></h2>
        </div>
        <div class="filter-row sr">
          <button class="fbtn on" data-filter="all">All</button>
          <button class="fbtn" data-filter="wordpress">WordPress</button>
          <button class="fbtn" data-filter="woocommerce">WooCommerce</button>
          <button class="fbtn" data-filter="plugin">Plugin</button>
        </div>
      </div>

      <div class="proj-grid">
        <div class="proj-card sr d1" data-cat="wordpress">
          <div class="proj-thumb"><img src = '/public/images/easypaisa.png' /><div class="proj-overlay"><a href="https://easypaisa.com.pk/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Portfolio</span>
            <h3>easypaisa</h3>
            <p>easypaisa Bank Limited, stylized as easypaisa, is a Pakistani digital bank based in Karachi. It provides services such as mobile wallet, mobile payments, and branchless banking.</p>
            <div class="proj-stack"><span>WordPress</span><span>Elementor</span><span>Theme Development</span><span>ACF</span></div>
          </div>
        </div>
        <div class="proj-card sr d2" data-cat="wordpress">
          <div class="proj-thumb">🏢<div class="proj-overlay"><a href="#" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a><a href="#" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Corporate Website</span>
            <h3>BuildCo — Construction Company</h3>
            <p>Custom WordPress theme with project showcase, team management, and lead capture integrations.</p>
            <div class="proj-stack"><span>WordPress</span><span>Custom Theme</span><span>ACF</span><span>Rank Math</span></div>
          </div>
        </div>
        <div class="proj-card sr d3" data-cat="plugin">
          <div class="proj-thumb">🔌<div class="proj-overlay"><a href="#" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a><a href="#" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Custom Plugin</span>
            <h3>BookEase — Appointment Plugin</h3>
            <p>WordPress booking plugin with calendar sync, SMS reminders, and payment integration via Stripe.</p>
            <div class="proj-stack"><span>PHP</span><span>WordPress API</span><span>Stripe</span><span>Twilio</span></div>
          </div>
        </div>
        <div class="proj-card sr d1" data-cat="wordpress">
          <div class="proj-thumb">📰<div class="proj-overlay"><a href="#" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a><a href="#" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">News & Magazine</span>
            <h3>DailyPulse — News Portal</h3>
            <p>High-traffic news site handling 100k+ daily visitors with custom Gutenberg blocks and ad management.</p>
            <div class="proj-stack"><span>WordPress</span><span>Gutenberg</span><span>WP Rocket</span><span>Cloudflare</span></div>
          </div>
        </div>
        <div class="proj-card sr d2" data-cat="woocommerce">
          <div class="proj-thumb">🎓<div class="proj-overlay"><a href="#" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a><a href="#" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">WooCommerce</span>
            <h3>EduShop — Course Marketplace</h3>
            <p>Online course store with WooCommerce Subscriptions, drip content, and student progress tracking.</p>
            <div class="proj-stack"><span>WordPress</span><span>WooCommerce</span><span>LearnDash</span><span>WPML</span></div>
          </div>
        </div>
        <div class="proj-card sr d3" data-cat="plugin">
          <div class="proj-thumb">📊<div class="proj-overlay"><a href="#" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a><a href="#" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Custom Plugin</span>
            <h3>ReportGen — WooCommerce Analytics</h3>
            <p>Custom analytics dashboard plugin with revenue charts, product performance, and CSV export.</p>
            <div class="proj-stack"><span>PHP</span><span>WooCommerce Hooks</span><span>Chart.js</span><span>MySQL</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
}

export default Portfolio;