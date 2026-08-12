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
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2025 — Present</div><div class="tl-card"><h3>WordPress Developer</h3><div class="org"><i class="fas fa-building" style={{marginRight: '6px;' , opacity:'.6'}}></i>Coding Hatch — Project Based</div><p>Working on a project-based, part-time basis, responsible for developing WordPress websites from scratch, implementing custom WordPress solutions, and delivering projects according to client requirements. Also responsible for guiding and mentoring junior developer, providing technical support, and ensuring projects are developed and delivered efficiently.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2023 — Present</div><div class="tl-card"><h3>CMS Developer</h3><div class="org"><i class="fas fa-building" style={{ marginRight:'6px' , opacity:'.6' }}></i>Voltro By Falkenherz — Full-time</div><p>CMS Developer responsible for developing and managing WordPress and Shopify projects from initial development through live deployment. Experienced in website maintenance, troubleshooting and bug resolution, performance and speed optimization, security improvements, and website recovery.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2022 — 2023</div><div class="tl-card"><h3>WordPress Developer</h3><div class="org"><i class="fas fa-building" style={{marginRight: '6px;' , opacity:'.6'}}></i>StackIntel.io — Full-time</div><p>Worked as a Junior WordPress Developer on various projects, including multilingual websites and business websites. Responsible for developing and maintaining WordPress websites, implementing client requirements, and contributing to project development throughout the lifecycle. Successfully handled the EasyPaisa project from the initial development phase through to the final sprint and delivery.</p></div></div>
        </div>
      </div>

      <div class="tab-panel" id="edu">
        <div class="tl">
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2016 — 2021</div><div class="tl-card"><h3>BS Computer Science</h3><div class="org"><i class="fas fa-university" style={{marginRight: '6px;' , opacity:'.6'}}></i>University of Gujrat</div><p>Graduated with honors. Specialized in software engineering. Final project: Custom Clearance Appearance.</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2021</div><div class="tl-card"><h3>Web Developer Course</h3><div class="org"><i class="fa-brands fa-dev" style={{marginRight: '6px;' , opacity:'.6'}}></i>UET Lahore - Erozgar Program</div><p>Frontend Development, WordPress, Shopify, PHP and MySQL</p></div></div>
          <div class="tl-item sr"><div class="tl-dot"></div><div class="tl-date">2016</div><div class="tl-card"><h3>Intermediate</h3><div class="org"><i class="fa-solid fa-graduation-cap" style={{marginRight: '6px;' , opacity:'.6'}}></i>Punjab Group of Colleges</div><p>I.C.S with physics</p></div></div>
        </div>
      </div>
    </div>
  </section>
        
        </>
    );
}

export default Journey;