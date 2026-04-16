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
        // <title data-i18n="..."> → document.title を更新
        document.title = dict[key];
      } else if (tag === "meta") {
        // <meta data-i18n="..."> → content 属性を更新
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

    // イベント委譲で言語ボタンを処理（nav.js注入後でも動作する）
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest
        ? ev.target.closest("[data-lang]")
        : null;
      if (!btn && ev.target.getAttribute) {
        btn = ev.target.getAttribute("data-lang") ? ev.target : null;
      }
      if (btn) applyLang(btn.getAttribute("data-lang"));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
