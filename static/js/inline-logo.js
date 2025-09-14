/**** Inline the header logo SVG so it inherits currentColor ****/
document.addEventListener('DOMContentLoaded', () => {
  const selectors = [
    '.site-brand img[src$="ai-caver-mini.svg"]',
    'header .brand img[src$="ai-caver-mini.svg"]',
    'header img[src$="ai-caver-mini.svg"]'
  ];
  let img;
  for (const s of selectors) { img = document.querySelector(s); if (img) break; }
  if (!img) return;

  fetch(img.src).then(r => r.text()).then(txt => {
    const wrap = document.createElement('span');
    wrap.innerHTML = txt.trim();
    const svg = wrap.firstElementChild;
    if (!svg) return;
    // размеры — как у картинки, если были заданы в CSS/HTML
    if (img.width)  svg.setAttribute('width',  img.width);
    if (img.height) svg.setAttribute('height', img.height);
    svg.style.display = 'inline-block';
    img.replaceWith(svg);
  }).catch(() => {});
});
