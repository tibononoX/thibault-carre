(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || {};
  var doc = document;

  // Téléphone (masqué par défaut)
  var phoneItem = doc.getElementById("phone-item");
  if (phoneItem) {
    if (cfg.showPhone === true && cfg.phone) {
      var a = doc.getElementById("phone-link");
      var d = String(cfg.phone).replace(/[^\d+]/g, "");
      a.href = "tel:" + (d.charAt(0) === "0" ? "+33" + d.slice(1) : d);
      a.querySelector("span").textContent = cfg.phone;
      phoneItem.hidden = false;
    } else {
      phoneItem.remove();
    }
  }

  // Témoignages (masqués par défaut)
  var testi = doc.getElementById("temoignages");
  if (testi) {
    if (cfg.showTestimonials === true) {
      testi.hidden = false;
      var navT = doc.getElementById("nav-temoignages");
      if (navT) navT.hidden = false;
    } else {
      testi.remove();
    }
  }

  var y = doc.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Apparition douce au défilement (désactivée si mouvement réduit)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = doc.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window && items.length) {
    doc.documentElement.classList.add("anim");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
