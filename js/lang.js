(function () {
  "use strict";

  function applyLang(lang) {
    var dict =
      (window.NeoHioki && window.NeoHioki.DICT[lang]) ||
      (window.NeoHioki && window.NeoHioki.DICT.jp) ||
      {};
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (dict[key] == null) continue;
      var tag = el.tagName.toLowerCase();
      if (tag === "title") {
        document.title = dict[key];
      } else if (tag === "meta") {
        el.setAttribute("content", dict[key]);
      } else {
        el.innerHTML = dict[key];
      }
    }

    var btns = document.querySelectorAll(".lang button");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle(
        "is-active",
        btns[j].getAttribute("data-lang") === lang
      );
    }

    try {
      localStorage.setItem("neohioki_lang", lang);
    } catch (e) {
      /* ignore */
    }
  }

  function init() {
    var saved = null;
    try {
      saved = localStorage.getItem("neohioki_lang");
    } catch (e) {
      /* ignore */
    }
    var initial =
      saved ||
      ((navigator.language || "jp").toLowerCase().indexOf("jp") === 0
        ? "jp"
        : "en");
    applyLang(initial);
    // 翻訳完了後に表示（FOUC防止）
    document.body.classList.add("lang-ready");

    // nav.js が挿入するボタンにも効くよう、document 全体へイベント委譲
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest("[data-lang]");
      if (btn) applyLang(btn.getAttribute("data-lang"));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
