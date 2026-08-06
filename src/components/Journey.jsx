import React from "react";

const Journey = () => {
    return (
        <>
          <section id="timeline">
    <div class="container">
      <div class="tl-header">
        <span class="label sr">My Journey</span>
        <h2 class="section-title sr">Experience & <span class="hi">Education</span></h2>
      </div>
      <div class="tab-row sr">
        <div class="tab-shell">
          <button class="tbtn on" data-target="exp"><i class="fas fa-briefcase"></i> Experience</button>
          <button class="tbtn" data-target="edu"><i class="fas fa-graduation-cap"></i> Education</button>
        </div>
      </div>

      <div class="tab-panel on" id="exp">
        <div class="tl">
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2022 — Present</div><div class="tl-card"><h3>Senior WordPress Developer</h3><div class="org"><i class="fas fa-building" style={{ marginRight:'6px' , opacity:'.6' }}></i>PixelForge Agency — Full-time</div><p>Lead developer on 20+ WordPress projects ranging from corporate sites to high-traffic WooCommerce stores. Reduced average page load by 65% across client portfolio and mentored two junior WordPress developers.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2020 — 2022</div><div class="tl-card"><h3>WordPress Developer</h3><div class="org"><i class="fas fa-building" style={{marginRight: '6px;' , opacity:'.6'}}></i>Digital Craft Agency — Full-time</div><p>Delivered 15+ WordPress projects including custom e-commerce stores, membership portals, and multilingual sites using WPML. Built reusable plugin library that cut development time by 35%.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2019 — 2020</div><div class="tl-card"><h3>WordPress & WooCommerce Developer</h3><div class="org"><i class="fas fa-building" style={{marginRight: '6px;' , opacity:'.6'}}></i>ShopReady Co. — Contract</div><p>Set up and customised 10+ WooCommerce stores for small and medium businesses. Integrated payment gateways, shipping APIs, and subscription systems achieving 98% client satisfaction.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2018 — 2019</div><div class="tl-card"><h3>Junior Web Developer</h3><div class="org"><i class="fas fa-building" style={{marginRight: '6px;' , opacity:'.6'}}></i>WebWorks Studio — Full-time</div><p>Built and maintained WordPress websites for local businesses. Gained solid foundations in PHP, MySQL, HTML/CSS, and WordPress theme development.</p></div></div>
        </div>
      </div>

      <div class="tab-panel" id="edu">
        <div class="tl">
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2015 — 2019</div><div class="tl-card"><h3>BS Computer Science</h3><div class="org"><i class="fas fa-university" style={{marginRight: '6px;' , opacity:'.6'}}></i>University of Engineering & Technology</div><p>Graduated with honors (3.8 GPA). Specialized in software engineering. Final project: AI-powered code review using NLP.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2022</div><div class="tl-card"><h3>Google UX Design Professional Certificate</h3><div class="org"><i class="fab fa-google" style={{marginRight: '6px;' , opacity:'.6'}}></i>Google via Coursera</div><p>Mastered UX research, wireframing, prototyping, and usability testing methodologies.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2021</div><div class="tl-card"><h3>AWS Certified Developer – Associate</h3><div class="org"><i class="fab fa-aws" style={{marginRight: '6px;' , opacity:'.6'}}></i>Amazon Web Services</div><p>Certified in designing, developing, and deploying cloud-based applications using AWS services.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2020</div><div class="tl-card"><h3>Meta Front-End Developer Certificate</h3><div class="org"><i class="fab fa-meta" style={{marginRight: '6px;' , opacity:'.6'}}></i>Meta via Coursera</div><p>Covered advanced React patterns, automated testing, accessibility, and design principles.</p></div></div>
        </div>
      </div>
    </div>
  </section>
        
        </>
    );
}

export default Journey;