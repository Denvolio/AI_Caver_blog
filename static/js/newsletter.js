(function () {
  "use strict";

  const isUkrainian = document.documentElement.lang.toLowerCase().startsWith("uk");
  const placeholder = isUkrainian ? "Ваш email" : "Your email";
  const uid = isUkrainian ? "38804f916d" : "f2105ba1ba";
  const subscribeLabel = isUkrainian ? "Підписатися" : "Subscribe";
  const subscribeTitle = isUkrainian
    ? "Підписатися на розсилку AI Caver"
    : "Subscribe to the AI Caver newsletter";
  const subscribeUrl = isUkrainian ? "/uk/subscribe/" : "/subscribe/";

  function createSlot(variant) {
    const slot = document.createElement("div");
    slot.className = "newsletter-slot newsletter-slot--" + variant;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = uid;
    script.src = "https://https-www-aicaver-com.kit.com/" + uid + "/index.js";
    slot.appendChild(script);

    return slot;
  }

  function createSubscribeLink(withIcon) {
    const link = document.createElement("a");
    link.className = "menu-item newsletter-menu-link";
    link.href = subscribeUrl;
    link.title = subscribeTitle;
    link.innerHTML = (withIcon ? '<i class="far fa-envelope fa-fw" aria-hidden="true"></i>' : "") + subscribeLabel;
    return link;
  }

  function insertSlots() {
    const desktopMenu = document.querySelector("#header-desktop .menu-inner");
    const desktopDelimiter = desktopMenu && desktopMenu.querySelector(".delimiter");
    if (desktopMenu && !desktopMenu.querySelector(".newsletter-menu-link")) {
      desktopMenu.insertBefore(createSubscribeLink(false), desktopDelimiter);
    }

    const mobileMenu = document.querySelector("#menu-mobile");
    const mobileThemeSwitch = mobileMenu && mobileMenu.querySelector(".theme-switch");
    if (mobileMenu && !mobileMenu.querySelector(".newsletter-menu-link")) {
      mobileMenu.insertBefore(createSubscribeLink(true), mobileThemeSwitch);
    }

    const postFooter = document.querySelector("#post-footer");
    if (postFooter && !postFooter.querySelector(".newsletter-slot--article")) {
      const articleSlot = createSlot("article");
      articleSlot.id = "newsletter";
      postFooter.prepend(articleSlot);
    }
  }

  function localizeEmailFields(root) {
    root.querySelectorAll('.newsletter-slot input[name="email_address"]').forEach(function (input) {
      input.placeholder = placeholder;
      input.setAttribute("aria-label", placeholder);
      input.setAttribute("autocomplete", "email");
    });
  }

  insertSlots();
  localizeEmailFields(document);

  const observer = new MutationObserver(function (mutations) {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          localizeEmailFields(node);
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
