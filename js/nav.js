(function () {
  "use strict";

  var NAV_ITEMS = [
    { key: "nav_neohioki", page: "index", path: "index.html" },
    { key: "nav_about", page: "about", path: "about.html" },
    { key: "nav_team", page: "team", path: "team.html" },
    { key: "nav_experiments", page: "experiments", path: "experiments/index.html" },
    { key: "nav_reports", page: "reports", path: "reports.html" },
    { key: "nav_contact", page: "contact", path: "contact.html" },
  ];

  // サブディレクトリ配下のページは window.BASE_PATH = "../" などを script で指定
  function getBase() {
    return typeof window.BASE_PATH !== "undefined" ? window.BASE_PATH : "";
  }

  function buildNavLinks(base, currentPage) {
    return NAV_ITEMS.map(function (item) {
      var cls = item.page === currentPage ? ' class="is-active"' : "";
      return `<a href="${base}${item.path}"${cls} data-i18n="${item.key}">—</a>`;
    }).join("");
  }

  function replaceWith(placeholderId, html) {
    var el = document.getElementById(placeholderId);
    if (!el) return;
    el.insertAdjacentHTML("beforebegin", html);
    el.remove();
  }

  function inject() {
    var base = getBase();
    var currentPage = document.body.getAttribute("data-page") || "index";

    replaceWith(
      "site-header",
      `
        <header class="hdr">
          <div class="hdr-inner">
            <a href="${base}index.html" class="brand">
              <span data-i18n="brand_main"></span>
              <span class="brand-sub" data-i18n="brand_sub"></span>
            </a>
            <nav class="nav" aria-label="section">
              ${buildNavLinks(base, currentPage)}
            </nav>
            <div class="lang" role="group" aria-label="language">
              <button type="button" data-lang="jp" class="is-active">JP</button>
              <span aria-hidden="true">／</span>
              <button type="button" data-lang="en">EN</button>
            </div>
          </div>
        </header>
      `
    );

    replaceWith(
      "site-footer",
      `
        <footer class="ftr">
          <div class="ftr-inner">
            <p class="ftr-brand" data-i18n="ftr_brand"></p>
            <p class="ftr-meta" data-i18n="ftr_meta"></p>
          </div>
        </footer>
      `
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
