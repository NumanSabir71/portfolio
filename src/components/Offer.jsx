import React from "react";

const Offer = () => {
    return (
        <>
        <section id="services">
    <div class="container">
      <div class="svc-header">
        <div>
          <span class="label sr">What I Offer</span>
          <h2 class="section-title sr">Services I <span class="hi">Provide</span></h2>
        </div>
        <p class="section-desc sr" style={{ maxWidth: '360px' }}>End-to-end WordPress solutions from concept to launch, tailored to your business goals.</p>
      </div>

      <div class="svc-grid">
        <div class="svc-card sr d1">
          <div class="svc-emoji-bg">🌐</div>
          <div class="svc-icon">🌐</div>
          <h3>Custom WordPress Development</h3>
          <p>Bespoke WordPress websites built from scratch — no cookie-cutter templates, just clean, maintainable code.</p>
          <ul class="svc-list"><li>Custom theme development</li><li>Gutenberg block creation</li><li>Third-party API integrations</li><li>Multisite network setup</li></ul>
        </div>
        <div class="svc-card sr d2">
          <div class="svc-emoji-bg">🛒</div>
          <div class="svc-icon">🛒</div>
          <h3>WooCommerce Stores</h3>
          <p>Fully featured online stores with custom checkout flows, payment gateways, and inventory management.</p>
          <ul class="svc-list"><li>WooCommerce setup & configuration</li><li>Custom checkout & cart flows</li><li>Payment gateway integration</li><li>Subscription & membership stores</li></ul>
        </div>
        <div class="svc-card sr d3">
          <div class="svc-emoji-bg">🧩</div>
          <div class="svc-icon">🧩</div>
          <h3>Custom Plugin Development</h3>
          <p>Tailor-made WordPress plugins that add exactly the functionality your site needs — built to WordPress standards.</p>
          <ul class="svc-list"><li>Custom post types & taxonomies</li><li>Admin dashboard panels</li><li>Shortcodes & Gutenberg blocks</li><li>REST API endpoints</li></ul>
        </div>
        <div class="svc-card sr d1">
          <div class="svc-emoji-bg">🚀</div>
          <div class="svc-icon">🚀</div>
          <h3>Speed & SEO Optimization</h3>
          <p>Turn slow WordPress sites into lightning-fast experiences with measurable Core Web Vitals improvements.</p>
          <ul class="svc-list"><li>Core Web Vitals & LCP/CLS fixes</li><li>Caching & CDN configuration</li><li>Image optimisation & lazy loading</li><li>Rank Math / Yoast SEO setup</li></ul>
        </div>
        <div class="svc-card sr d2">
          <div class="svc-emoji-bg">🔒</div>
          <div class="svc-icon">🔒</div>
          <h3>WordPress Security & Maintenance</h3>
          <p>Keep your WordPress site secure, updated, and running at peak performance month after month.</p>
          <ul class="svc-list"><li>Malware removal & hardening</li><li>Regular core, theme & plugin updates</li><li>Automated daily backups</li><li>Uptime monitoring & support</li></ul>
        </div>
        <div class="svc-card sr d3">
          <div class="svc-emoji-bg">🔄</div>
          <div class="svc-icon">🔄</div>
          <h3>WordPress Migration</h3>
          <p>Seamlessly move your site to a new host, domain, or platform with zero downtime and full data integrity.</p>
          <ul class="svc-list"><li>Host-to-host migrations</li><li>Domain & SSL transfer</li><li>Theme & plugin compatibility checks</li><li>Post-migration testing & optimisation</li></ul>
        </div>
      </div>
    </div>
  </section>
        
        </>

    );
}

export default Offer;