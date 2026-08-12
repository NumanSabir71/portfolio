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
          <button class="fbtn" data-filter="shopify">Shopify</button>
        </div>
      </div>

      <div class="proj-grid">
        <div class="proj-card sr d1" data-cat="wordpress">
          <div class="proj-thumb"><img src = '/images/easypaisa.png' /><div class="proj-overlay"><a href="https://easypaisa.com.pk/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Portfolio</span>
            <h3>easypaisa</h3>
            <p>easypaisa Bank Limited, stylized as easypaisa, is a Pakistani digital bank based in Karachi. It provides services such as mobile wallet, mobile payments, and branchless banking.</p>
            <div class="proj-stack"><span>WordPress</span><span>Elementor</span><span>Theme Development</span><span>ACF</span></div>
          </div>
        </div>
        <div class="proj-card sr d2" data-cat="wordpress">
          <div class="proj-thumb"><img src = '/images/protek.png' /><div class="proj-overlay"><a href="https://www.proteklaundry.com/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Ecommerce B2B</span>
            <h3>Protek Laundry</h3>
            <p>Protek Laundry is the best laundry equipment supplier company in Dubai, UAE, Oman, Saudi Arabia, Maldives, Bahrain, Sri Lanka,Tanzania, Africa.</p>
            <div class="proj-stack"><span>WordPress</span><span>PHP</span><span>ACF</span><span>Woocommerce</span></div>
          </div>
        </div>
        <div class="proj-card sr d3" data-cat="plugin">
          <div class="proj-thumb">🔌<div class="proj-overlay"><a href="https://mithilacenter.org/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a><a href="https://github.com/NumanSabir71/events_plugin" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Custom Plugin</span>
            <h3>Mithila-Events Plugin</h3>
            <p>WordPress plugin for Mithila Art / Mithila Center — a full event booking system with volunteer and sponsor registration, paid ticketing, art-piece checkout, and content modules for leadership, partners, press, recognition, and artists.</p>
            <div class="proj-stack"><span>PHP</span><span>Javascript</span><span>Stripe</span><span>Custom Post Types</span></div>
          </div>
        </div>
        <div class="proj-card sr d1" data-cat="wordpress">
          <div class="proj-thumb"><img src = '/images/keepcoders.png' /><div class="proj-overlay"><a href="https://keepcoders.com/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Portfolio</span>
            <h3>Keepcoders</h3>
            <p>From predictive analytics to machine learning, KeepCoders helps businesses automate, optimize, and innovate through cutting-edge AI technology.</p>
            <div class="proj-stack"><span>WordPress</span><span>Elementor</span><span>ACF</span><span>GSAP</span></div>
          </div>
        </div>
        <div class="proj-card sr d2" data-cat="woocommerce">
          <div class="proj-thumb"><img src = '/images/elng.png' /><div class="proj-overlay"><a href="https://electromart.com.ng/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Ecommerce</span>
            <h3>Electromart Nigeria</h3>
            <p>Shop quality home appliances and electronics at Electromart Nigeria. Discover top brands, great prices, and fast delivery across Nigeria.</p>
            <div class="proj-stack"><span>WordPress</span><span>WooCommerce</span><span>PHP</span><span>Hooks</span></div>
          </div>
        </div>
        <div class="proj-card sr d3" data-cat="woocommerce">
          <div class="proj-thumb"><img src = '/images/elgh-p.png' /><div class="proj-overlay"><a href="https://www.electromart.com.gh/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Ecommerce</span>
            <h3>Electromart Ghana</h3>
            <p>Discover unbeatable deals on the latest tech and home appliances at Electromart Ghana! Shop now for affordable prices and exceptional customer service.</p>
            <div class="proj-stack"><span>WordPress</span><span>WooCommerce</span><span>PHP</span><span>Hooks</span></div>
          </div>
        </div>
        <div class="proj-card sr d1" data-cat="woocommerce">
          <div class="proj-thumb"><img src = '/images/bakemart.png' /><div class="proj-overlay"><a href="https://www.bakemartathome.com/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Ecommerce</span>
            <h3>Bakemartathome</h3>
            <p>Welcome to Bakemart! We are excited to offer a wide range of delicious baked and frozen goods for our customers to shop from the comfort of your own homes.</p>
            <div class="proj-stack"><span>WordPress</span><span>WooCommerce</span><span>PHP</span><span>Elementor</span></div>
          </div>
        </div>
        <div class="proj-card sr d2" data-cat="wordpress">
          <div class="proj-thumb"><img src = '/images/garage.png' /><div class="proj-overlay"><a href="https://garagestudio.ae/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Portfolio</span>
            <h3>Garage Studio</h3>
            <p>Step into Garage Studio, the premier professional photography studio for corporate photography, event management, and more. Visit us today!</p>
            <div class="proj-stack"><span>WordPress</span><span>Elementor</span><span>Booking</span><span>Membership</span></div>
          </div>
          
        </div>
        <div class="proj-card sr d3" data-cat="plugin">
          <div class="proj-thumb">🔌<div class="proj-overlay"><a href="https://github.com/NumanSabir71/garage_membership" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Custom Plugin</span>
            <h3>Garage Membership</h3>
            <p>Built a structured, searchable database of creative professionals so the Garage Studio team can segment members (by profession, camera brand, interests, location, etc.)</p>
            <div class="proj-stack"><span>WordPress</span><span>PHP</span><span>Shortcodes</span><span>Custom Post Types</span></div>
          </div>
          
        </div>
        <div class="proj-card sr d1" data-cat="wordpress">
          <div class="proj-thumb"><img src = '/images/follium.png' /><div class="proj-overlay"><a href="https://folium.ai/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Portfolio</span>
            <h3>Follium AI</h3>
            <p>We build and provide AI, Data, and Cloud engineering solutions that automate processes, improve decision-making, and help enterprises scale.</p>
            <div class="proj-stack"><span>WordPress</span><span>PHP</span><span>ACF</span><span>Gutenberg</span></div>
          </div>
          
        </div>
        <div class="proj-card sr d2" data-cat="wordpress">
          <div class="proj-thumb"><img src = '/images/mithilaart.png' /><div class="proj-overlay"><a href="https://github.com/NumanSabir71/mithila_artist" class="proj-obtn"><i class="fab fa-github"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Custom Theme</span>
            <h3>Mithila Art Ecommerce Theme</h3>
            <p>Custom WordPress + WooCommerce theme for Mithila Design — an artisan store celebrating Mithila art from Nepal and the Madhubani painting tradition.</p>
            <div class="proj-stack"><span>WordPress</span><span>PHP</span><span>Woocommerce Templates</span><span>Javscript</span></div>
          </div>
          
        </div>
        <div class="proj-card sr d3" data-cat="shopify">
          <div class="proj-thumb"><img src = '/images/rasasi.png' /><div class="proj-overlay"><a href="https://imrasasi.com/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Shopify Store</span>
            <h3>ImRasasi</h3>
            <p>Discover our collection of WOMEN'S PERFUMES at Savia Exclusive ✔️ Free Samples ✔️ Free Shipping</p>
            <div class="proj-stack"><span>Shopify</span><span>Liquid</span><span>Payment Gateway Integration</span><span>Multicurrency</span></div>
          </div>
          
        </div>
        <div class="proj-card sr d1" data-cat="shopify">
          <div class="proj-thumb"><img src = '/images/as.png' /><div class="proj-overlay"><a href="https://aurorascents.com/" class="proj-obtn"><i class="fas fa-external-link-alt"></i></a></div></div>
          <div class="proj-body">
            <span class="proj-cat">Shopify Store</span>
            <h3>Aurora Scents</h3>
            <p>Discover luxurious fragrances at AuroraScents. Shop our curated collection of perfumes and home scents for pure elegance and captivating aromas.</p>
            <div class="proj-stack"><span>Shopify</span><span>Liquid</span><span>Payment Gateway Integration</span></div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
        </>
    );
}

export default Portfolio;