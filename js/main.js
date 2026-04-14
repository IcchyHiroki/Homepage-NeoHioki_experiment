(function () {
  "use strict";

  var DICT = {
    ja: {
      brand_main: "ネオ日置",
      brand_sub: "Neo Hioki Project",
      nav_about: "研究概要",
      nav_team: "研究チーム",
      nav_join: "参加者募集",
      nav_faq: "FAQ",

      hero_eyebrow: "研究プロジェクト",
      hero_title_1: "仮想空間に集う、",
      hero_title_2: "新しい縁。",
      hero_lead:
        "VR技術を用い、高齢者の新たなコミュニティ形成と社会的孤立の緩和を探究する研究プロジェクトです。",
      hero_cta: "参加者募集を見る",

      about_title: "研究概要・目的",
      about_p1:
        "本研究「Neo Hioki（ネオ日置）」は、鹿児島県日置市をモデルに、VR空間内で高齢者同士が交流し、地域コミュニティを再構築する可能性を検証するものです。",
      about_p2:
        "対面の集まりが難しい高齢者の方々にも、自宅にいながら昔ながらの町並みを歩き、隣人と語らう体験を提供します。社会的孤立の緩和、認知機能の維持、地域文化の継承という三つの観点から効果を測定します。",
      about_li1: "VR空間における高齢者の交流行動の観察",
      about_li2: "主観的幸福感・孤独感への影響測定",
      about_li3: "地域文化のデジタルアーカイブ化と継承",

      team_title: "研究チーム",
      team_m1_name: "日置 太郎",
      team_m1_role: "研究代表者／VR体験設計",
      team_m1_aff: "○○大学 情報学研究科",
      team_m2_name: "薩摩 花子",
      team_m2_role: "共同研究者／高齢者心理",
      team_m2_aff: "○○大学 老年学センター",
      team_m3_name: "桜島 次郎",
      team_m3_role: "共同研究者／コミュニティ社会学",
      team_m3_aff: "○○大学 社会学部",
      team_m4_name: "伊集院 三郎",
      team_m4_role: "技術開発／3Dモデリング",
      team_m4_aff: "○○大学 工学部",

      join_title: "参加者募集",
      join_p1:
        "本研究にご協力いただける方を募集しております。下記フォームよりお申し込みください。",
      join_dt1: "対象",
      join_dd1: "65歳以上の方（性別・経験不問）",
      join_dt2: "期間",
      join_dd2: "全6回（隔週・各回約60分）",
      join_dt3: "場所",
      join_dd3: "日置市内 研究拠点 ／ ご自宅（機材貸出）",
      join_dt4: "謝礼",
      join_dd4: "各回終了時にお渡しします",
      join_note:
        'フォームが表示されない場合は <a href="mailto:contact@example.org">contact@example.org</a> までご連絡ください。',

      faq_title: "よくある質問",
      faq_q1: "VR機器を持っていなくても参加できますか？",
      faq_a1:
        "はい。研究期間中は機材を無償でお貸し出しします。操作方法もスタッフが丁寧にご案内します。",
      faq_q2: "VR酔いが心配です。",
      faq_a2:
        "座って利用できる設計とし、休憩を挟みます。体調に合わせていつでも中断できます。",
      faq_q3: "取得したデータはどのように扱われますか？",
      faq_a3:
        "個人を特定できない形に匿名化したうえで、研究目的にのみ使用します。所属機関の倫理審査を経ています。",
      faq_q4: "途中で参加を辞退できますか？",
      faq_a4: "いつでも辞退いただけます。それによる不利益は一切ありません。",
      faq_q5: "家族と一緒に参加してもよいですか？",
      faq_a5:
        "ご家族の見守りは歓迎します。お申し込みフォーム備考欄にご記入ください。",

      ftr_meta:
        '研究に関するお問い合わせ：<a href="mailto:contact@example.org">contact@example.org</a>',
    },
    en: {
      brand_main: "Neo Hioki",
      brand_sub: "Research Project",
      nav_about: "About",
      nav_team: "Team",
      nav_join: "Join",
      nav_faq: "FAQ",

      hero_eyebrow: "RESEARCH PROJECT",
      hero_title_1: "Gathering in virtual space,",
      hero_title_2: "a new sense of connection.",
      hero_lead:
        "A research project exploring how VR technology can foster new communities and reduce social isolation among older adults.",
      hero_cta: "Join the study",

      about_title: "About the Research",
      about_p1:
        'The "Neo Hioki" project takes Hioki City, Kagoshima as its model and examines how older adults can interact and rebuild local community within a VR environment.',
      about_p2:
        "We provide experiences in which seniors who find it difficult to gather in person can walk through nostalgic townscapes and chat with neighbors from their homes. We measure outcomes from three angles: easing social isolation, maintaining cognitive function, and preserving local culture.",
      about_li1: "Observing social behavior of older adults in VR",
      about_li2: "Measuring impact on subjective well-being and loneliness",
      about_li3: "Digital archiving and transmission of local culture",

      team_title: "Research Team",
      team_m1_name: "Taro Hioki",
      team_m1_role: "Principal Investigator / VR Experience Design",
      team_m1_aff: "○○ University, Graduate School of Informatics",
      team_m2_name: "Hanako Satsuma",
      team_m2_role: "Co-Researcher / Geriatric Psychology",
      team_m2_aff: "○○ University, Center for Gerontology",
      team_m3_name: "Jiro Sakurajima",
      team_m3_role: "Co-Researcher / Community Sociology",
      team_m3_aff: "○○ University, Faculty of Sociology",
      team_m4_name: "Saburo Ijuin",
      team_m4_role: "Engineering / 3D Modeling",
      team_m4_aff: "○○ University, Faculty of Engineering",

      join_title: "Call for Participants",
      join_p1:
        "We are recruiting participants for this study. Please apply via the form below.",
      join_dt1: "Eligibility",
      join_dd1: "Adults aged 65 and over (no prior VR experience required)",
      join_dt2: "Duration",
      join_dd2: "Six sessions in total (biweekly, ~60 min each)",
      join_dt3: "Location",
      join_dd3: "Hioki City research site / your home (equipment loaned)",
      join_dt4: "Honorarium",
      join_dd4: "Provided at the end of each session",
      join_note:
        'If the form does not appear, please contact <a href="mailto:contact@example.org">contact@example.org</a>.',

      faq_title: "Frequently Asked Questions",
      faq_q1: "Can I participate without my own VR equipment?",
      faq_a1:
        "Yes. Equipment will be loaned free of charge for the duration of the study, and our staff will guide you through the setup.",
      faq_q2: "I'm worried about VR sickness.",
      faq_a2:
        "Sessions are designed to be done seated, with regular breaks. You may stop at any time based on how you feel.",
      faq_q3: "How will my data be handled?",
      faq_a3:
        "All data is anonymized and used solely for research purposes, under the approval of our institutional ethics committee.",
      faq_q4: "Can I withdraw partway through the study?",
      faq_a4:
        "You may withdraw at any time, with no disadvantage of any kind.",
      faq_q5: "May I participate alongside a family member?",
      faq_a5:
        "Family supervision is welcome. Please note this in the remarks section of the application form.",

      ftr_meta:
        'Research inquiries: <a href="mailto:contact@example.org">contact@example.org</a>',
    },
  };

  function applyLang(lang) {
    var dict = DICT[lang] || DICT.ja;
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] != null) nodes[i].innerHTML = dict[key];
    }
    var btns = document.querySelectorAll(".lang button");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle(
        "is-active",
        btns[j].getAttribute("data-lang") === lang,
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
      ((navigator.language || "ja").toLowerCase().indexOf("ja") === 0
        ? "ja"
        : "en");
    applyLang(initial);

    var btns = document.querySelectorAll(".lang button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function (ev) {
        applyLang(ev.currentTarget.getAttribute("data-lang"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
