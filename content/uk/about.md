---
title: "Про сайт"
description: "AI Caver — дослідницький щоденник про те, як ШІ змінює життя й поведінку людей. Денис Ворошилов — ентузіаст і оптиміст ШІ, архітектор маркетингової автоматизації."
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
  <img src="/uploads/denys-speaking-2.png" alt="Денис Ворошилов — виступ" loading="lazy">
  <div class="col">

  <h2>Привіт! Я Денис — ентузіаст і оптиміст ШІ</h2>

  <p><strong>AI Caver</strong> — моя дослідницька площадка. Я фокусуюся не на «рейтингах моделей», а на тому, <strong>як ШІ змінює людей</strong>: щоденні звички, рішення, стимули, роботу, турботу й розваги. Сайт — це <strong>польовий зошит</strong>: експерименти, фейли з уроками, робочі міні-інструменти та есеї про зсуви поведінки під тиском автоматизації.</p>

  <h3>Що тут є</h3>
  <ul>
    <li><strong>Дослідження.</strong> Постійно збираю дані про впровадження ШІ та практики, аналізую зміни у виробничих моделях і людській поведінці.</li>
    <li><strong>AI-щоденник.</strong> Фіксую, як ШІ змінює <em>моє власне життя</em> — настільки суттєво, що це варто документувати.</li>
    <li><strong>Польові нотатки</strong> — практичні висновки з реального використання.</li>
    <li><strong>Експерименти</strong> — малі проєкти для перевірки гіпотез.</li>
    <li><strong>Плейбуки</strong> — повторювані робочі процеси для зайнятих людей.</li>
    <li><strong>Есеї</strong> — як ШІ підштовхує індивідуальні вибори та колективну поведінку.</li>
  </ul>

  <h3>Принципи</h3>
  <ul>
    <li><strong>Оптимізм із запобіжниками.</strong> Віримо в прогрес, вимірюємо ризики.</li>
    <li><strong>Практика понад хайп.</strong> Інструменти, що працюють, кращі за презентації.</li>
    <li><strong>Ясність і контроль.</strong> Людина лишається керманичем.</li>
    <li><strong>Приватність за замовчуванням.</strong> Мінімум даних, локально де можливо.</li>
    <li><strong>Документуємо шлях.</strong> Ділимося контекстом, не лише результатами.</li>
  </ul>

  </div>
</div>

<div class="about-row reverse">
  <img src="/uploads/denys-speaking-1.png" alt="Портрет — Денис Ворошилов" loading="lazy">
  <div class="col">

  <h3>Кілька слів про мене</h3>
  <p>Фахівець із <strong>маркетингової автоматизації та зростання</strong> з <strong>15+ роками</strong> досвіду в B2B/B2C. Будую багатоканальні системи, що зменшують ручну працю та підвищують ефективність конверсій.</p>

  <ul>
    <li><strong>Стек і навички:</strong> Go High Level, ActiveCampaign, Brevo, Salesforce/Zoho, Make/Zapier, API/RPA, <strong>Python</strong> для пайплайнів даних, SQL/Looker/BigQuery, вебінарні та лідген-системи.</li>
    <li><strong>Які системи роблю:</strong> webinars → CRM → nurturing → аналітика; облік trial-to-paid; рольові комунікації; дашборди в реальному часі.</li>
    <li><strong>Останні ролі:</strong> Growth & Marketing Automation Lead у <strong>WhereScape</strong>; раніше Head of Marketing у <strong>Devart</strong>; Product Marketing у <strong>Gameloft</strong>; стратегії в агенціях і продакт-командах.</li>
    <li><strong>Тренер і спікер:</strong> 20+ конференційних виступів, ~10 власних тренінгових програм з автоматизації маркетингу та прикладного ШІ.</li>
  </ul>

  <p>Базуюся в <strong>Ґданську (Польща)</strong>. Мови: <strong>англійська (Advanced)</strong>, українська/російська (рідні), польська (basic).</p>

  <h3>Контакт</h3>
  <p>Маєш історію, датасет або фейл для розбору? Пиши на <strong>author@aicaver.com</strong>. Якщо матеріал був корисним — пошир його. Це найкраща підтримка.</p>

  </div>
</div>


