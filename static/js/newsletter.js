(function () {
  "use strict";

  const language = document.documentElement.lang.toLowerCase();
  const isUkrainian = language.startsWith("uk");
  const isRussian = language.startsWith("ru");
  const config = isUkrainian
    ? { formId: "x9iEO0", placeholder: "Ваш email", submitLabel: "Підписатися", subscribeLabel: "Підписатися", subscribeTitle: "Підписатися на розсилку AI Caver", subscribeUrl: "/uk/subscribe/" }
    : isRussian
      ? { formId: "704xqP", placeholder: "Ваш email", submitLabel: "Подписаться", subscribeLabel: "Подписаться", subscribeTitle: "Подписаться на рассылку AI Caver", subscribeUrl: "/ru/subscribe/" }
      : { formId: "w3V58o", placeholder: "Your email", submitLabel: "Subscribe", subscribeLabel: "Subscribe", subscribeTitle: "Subscribe to the AI Caver newsletter", subscribeUrl: "/subscribe/" };

  function createSlot(variant) {
    const slot = document.createElement("div");
    slot.className = "newsletter-slot newsletter-slot--" + variant;

    const embed = document.createElement("div");
    embed.className = "ml-embedded";
    embed.dataset.form = config.formId;
    slot.appendChild(embed);

    return slot;
  }

  function createSubscribeLink(withIcon) {
    const link = document.createElement("a");
    link.className = "menu-item newsletter-menu-link";
    link.href = config.subscribeUrl;
    link.title = config.subscribeTitle;
    link.innerHTML = (withIcon ? '<i class="far fa-envelope fa-fw" aria-hidden="true"></i>' : "") + config.subscribeLabel;
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
    root.querySelectorAll('.newsletter-slot input[type="email"], .newsletter-slot input[name="email"]').forEach(function (input) {
      input.placeholder = config.placeholder;
      input.setAttribute("aria-label", config.placeholder);
      input.setAttribute("autocomplete", "email");
    });
    root.querySelectorAll(".newsletter-slot .ml-form-embedSubmit button").forEach(function (button) {
      button.textContent = config.submitLabel;
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
