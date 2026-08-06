import React from "react";

const Contact = () => {
    return (
        <>
        <section id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-left sr left">
          <span class="label">Get In Touch</span>
          <h2>Let's Work <span class="hi">Together</span></h2>
          <p class="section-desc">Have a project in mind? I'd love to hear from you. Drop a message and I'll get back within 24 hours.</p>

          <div class="cinfo">
            <div class="ci"><div class="ci-ico"><i class="fas fa-envelope"></i></div><div><div class="ci-k">Email</div><div class="ci-v">hello@nouman.dev</div></div></div>
            <div class="ci"><div class="ci-ico"><i class="fas fa-phone-alt"></i></div><div><div class="ci-k">Phone</div><div class="ci-v">+92 300 0000000</div></div></div>
            <div class="ci"><div class="ci-ico"><i class="fas fa-map-marker-alt"></i></div><div><div class="ci-k">Location</div><div class="ci-v">Lahore, Pakistan</div></div></div>
          </div>

          <div class="social-row">
            <a href="#" class="soc-ico" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" class="soc-ico" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="soc-ico" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
            <a href="#" class="soc-ico" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
            <a href="#" class="soc-ico" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <div class="sr right">
          <form class="cform" id="contactForm" novalidate>
            <div class="form-row2">
              <div class="fg"><label for="fname">First Name</label><input type="text" id="fname" placeholder="John" required /></div>
              <div class="fg"><label for="lname">Last Name</label><input type="text" id="lname" placeholder="Doe" required /></div>
            </div>
            <div class="fg"><label for="email">Email Address</label><input type="email" id="email" placeholder="john@example.com" required /></div>
            <div class="fg">
              <label for="service">Service Interested In</label>
              <select id="service">
                <option value="" disabled selected>Select a service…</option>
                <option>Custom WordPress Development</option><option>WooCommerce Store</option>
                <option>Custom Plugin Development</option><option>Speed & SEO Optimization</option>
                <option>WordPress Security & Maintenance</option><option>WordPress Migration</option><option>Other</option>
              </select>
            </div>
            <div class="fg"><label for="msg">Your Message</label><textarea id="msg" placeholder="Tell me about your project…" required></textarea></div>
            <button type="submit" class="btn btn-primary form-submit"><i class="fas fa-paper-plane"></i> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
        </>

    );
}

export default Contact;