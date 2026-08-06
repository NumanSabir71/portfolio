import React from "react";

const Stats = () => {
    return (
        <>
        <section id="stats">
    <div class="container">
      <div class="stats-row">
        <div class="stat-box sr">
          <div class="stat-n" data-target="50" data-suffix="+">0</div>
          <div class="stat-l">Projects Completed</div>
          <div class="stat-s">Across 12 countries</div>
        </div>
        <div class="stat-box sr d1">
          <div class="stat-n" data-target="30" data-suffix="+">0</div>
          <div class="stat-l">Happy Clients</div>
          <div class="stat-s">5-star average rating</div>
        </div>
        <div class="stat-box sr d2">
          <div class="stat-n" data-target="5" data-suffix="+">0</div>
          <div class="stat-l">Years Experience</div>
          <div class="stat-s">Professional development</div>
        </div>
        <div class="stat-box sr d3">
          <div class="stat-n" data-target="99" data-suffix="%">0</div>
          <div class="stat-l">Satisfaction Rate</div>
          <div class="stat-s">Based on client reviews</div>
        </div>
      </div>
    </div>
  </section>
        
        </>
    );
}

export default Stats;