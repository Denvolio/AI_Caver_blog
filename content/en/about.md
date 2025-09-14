---
title: "About"
description: "AI Caver — a research log about how AI reshapes human life and behavior. By Denys Voroshylov — AI enthusiast, optimist, and marketing automation architect."
menu:
  main:
    weight: 3
---

<style>
  /* Общий контейнер: две колонки на десктопе */
  .about-row{
    display:flex; gap:24px; align-items:flex-start;
    max-width:1000px; margin:0 auto 2rem;
  }
  /* Фото — ещё компактнее */
  .about-row img{
    width:360px;            /* было 420 */
    max-width:42%;
    height:auto; border-radius:12px; display:block;
    flex:0 0 360px;
  }
  .about-row .col{
    flex:1 1 0; min-width:0;
    overflow-wrap:anywhere; word-break:break-word; /* чтобы длинные токены не ломали вёрстку */
  }
  /* Второй ряд — зеркально */
  .about-row.reverse{ flex-direction:row-reverse; }

  /* Мобильная адаптация: ОБА ряда становятся колонкой */
  @media (max-width: 900px){
    .about-row, .about-row.reverse{ flex-direction:column; }
    .about-row img{ width:100%; max-width:100%; flex:0 0 auto; }
    .about-row .col{ width:100%; }
  }
</style>


<div class="about-row">
  <img src="/uploads/denys-speaking-2.png" alt="Denys Voroshylov speaking" loading="lazy">
  <div class="col">

  <h2>Hi, I’m Denys — AI enthusiast & optimist</h2>

  <p><strong>AI Caver</strong> is my research playground. I don’t track model leaderboards — I observe <strong>how AI changes people</strong>: daily routines, decisions, incentives, work, care, and play. This site is a <strong>field notebook</strong>: experiments, failures with lessons, small tools that stick, and essays about behavior shifts under the pressure of automation.</p>

  <h3>What you’ll find here</h3>
  <ul>
    <li><strong>Research.</strong> I continuously collect data about AI adoption and practices, and analyze how work models and human behavior change.</li>
    <li><strong>AI-Diary.</strong> A running log of how AI reshapes <em>my own life</em> — strong enough to be worth documenting.</li>
    <li><strong>Field notes</strong> — practical write-ups from real use (what worked, what didn’t, why).</li>
    <li><strong>Experiments</strong> — tiny projects to test assumptions.</li>
    <li><strong>Playbooks</strong> — repeatable workflows for busy humans.</li>
    <li><strong>Essays</strong> — how AI nudges individual choices and collective behavior.</li>
  </ul>

  <h3>Principles</h3>
  <ul>
    <li><strong>Optimism with guardrails.</strong> Believe in progress, measure risks.</li>
    <li><strong>Hands-on over hype.</strong> Tools that ship beat slides that shine.</li>
    <li><strong>Clarity and agency.</strong> Humans stay in control.</li>
    <li><strong>Privacy by default.</strong> Minimal data, local when possible.</li>
    <li><strong>Document the path.</strong> Share context, not just results.</li>
  </ul>

  </div>
</div>

<div class="about-row reverse">
  <img src="/uploads/denys-speaking-1.png" alt="Denys Voroshylov portrait" loading="lazy">
  <div class="col">

  <h3>Me, professionally</h3>
  <p>Marketing Automation & Growth Specialist with <strong>15+ years</strong> in B2B/B2C. I build multi-channel automation that cuts manual work and improves conversion efficiency.</p>

  <ul>
    <li><strong>Stacks & skills:</strong> Go High Level, ActiveCampaign, Brevo, Salesforce/Zoho, Make/Zapier, API/RPA, <strong>Python</strong> for data pipelines, SQL/Looker/BigQuery, webinar & leadgen systems.</li>
    <li><strong>Systems I build:</strong> webinars → CRM → nurturing → analytics; trial-to-paid tracking; role-based comms; dashboards for real-time funnels.</li>
    <li><strong>Recent roles:</strong> Growth & Marketing Automation Lead at <strong>WhereScape</strong>; previously Head of Marketing at <strong>Devart</strong>; Product Marketing at <strong>Gameloft</strong>; strategy roles in agencies & product teams.</li>
    <li><strong>Trainer & speaker:</strong> 20+ conference talks, ~10 training programs on marketing automation and practical AI for teams.</li>
  </ul>

  <p>Based in <strong>Gdańsk, Poland</strong>. Languages: <strong>English (Advanced)</strong>, Ukrainian/Russian (native), Polish (basic).</p>

  <h3>Get in touch</h3>
  <p>Got a story, dataset, or failure to dissect? Email <strong>author@aicaver.com</strong>. If a post helped you — share it. That’s the best fuel for this project.</p>

  </div>
</div>

