import React from "react";

const Testimonials = () => {
    return (
        <>
          <section id="testimonials">
    <div class="container">
      <div class="testi-header">
        <span class="label sr">Testimonials</span>
        <h2 class="section-title sr">What Clients <span class="hi">Say</span></h2>
        <p class="section-desc sr">Real feedback from people I've had the pleasure of working with.</p>
      </div>

      <div class="slider-wrap sr">
        <div class="slider-track" id="sliderTrack">
          <div class="tcard"><div class="tcard-quote">"</div><div class="stars">★★★★★</div><p class="tcard-text">"Nouman delivered an exceptional e-commerce platform that exceeded every expectation. His attention to detail and proactive communication made the process smooth. Performance improved by 200%."</p><div class="tcard-author"><div class="tcard-av">SK</div><div><div class="tcard-name">Sarah Kim</div><div class="tcard-role">CEO, Bloom Retail</div></div></div></div>
          <div class="tcard"><div class="tcard-quote">"</div><div class="stars">★★★★★</div><p class="tcard-text">"Working with Nouman was a game-changer for our startup. He built exactly what we envisioned and suggested improvements we hadn't thought of. The dashboard he built is now the core of our product."</p><div class="tcard-author"><div class="tcard-av">MR</div><div><div class="tcard-name">Marcus Rodriguez</div><div class="tcard-role">Founder, DataPulse</div></div></div></div>
          <div class="tcard"><div class="tcard-quote">"</div><div class="stars">★★★★★</div><p class="tcard-text">"Incredibly talented with a great eye for design. He transformed our outdated app into a sleek, modern platform. Users love it and engagement metrics have doubled since launch."</p><div class="tcard-author"><div class="tcard-av">LA</div><div><div class="tcard-name">Lisa Anderson</div><div class="tcard-role">Product Manager, TechFlow</div></div></div></div>
          <div class="tcard"><div class="tcard-quote">"</div><div class="stars">★★★★★</div><p class="tcard-text">"Nouman's expertise and professionalism set him apart. He delivered our complex healthcare portal on time and on budget. The code is clean and easy for our team to maintain."</p><div class="tcard-author"><div class="tcard-av">JP</div><div><div class="tcard-name">James Park</div><div class="tcard-role">CTO, MedConnect</div></div></div></div>
          <div class="tcard"><div class="tcard-quote">"</div><div class="stars">★★★★★</div><p class="tcard-text">"We hired Nouman to rescue a failing project and he delivered beyond expectations. Within weeks he fixed critical issues and added new features. Our client was absolutely thrilled."</p><div class="tcard-author"><div class="tcard-av">TC</div><div><div class="tcard-name">Tom Chen</div><div class="tcard-role">Director, Apex Agency</div></div></div></div>
          <div class="tcard"><div class="tcard-quote">"</div><div class="stars">★★★★★</div><p class="tcard-text">"Outstanding work on our mobile app! Nouman's attention to UX and performance resulted in a product users can't stop raving about. The app holds a 4.9 star rating on both app stores."</p><div class="tcard-author"><div class="tcard-av">NW</div><div><div class="tcard-name">Nina Williams</div><div class="tcard-role">Marketing Lead, FitLife</div></div></div></div>
        </div>
      </div>

      <div class="slider-nav">
        <button class="snav-btn" id="prevBtn"><i class="fas fa-arrow-left"></i></button>
        <div class="sdots" id="sliderDots"></div>
        <button class="snav-btn" id="nextBtn"><i class="fas fa-arrow-right"></i></button>
      </div>
    </div>
  </section>
        
        </>
    );
}

export default Testimonials;