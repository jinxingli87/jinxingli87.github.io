(function () {
  "use strict";

  var MAX_AUTHORS = 3;
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Theme toggle: system -> dark -> light -> system                         */
  /* ---------------------------------------------------------------------- */

  function applyTheme(setting) {
    var dark = setting === "dark" || (setting === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme-setting", setting);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }

  function initTheme() {
    var button = document.getElementById("theme-toggle");
    if (button) {
      button.addEventListener("click", function () {
        var order = ["system", "dark", "light"];
        var current = localStorage.getItem("theme") || "system";
        var next = order[(order.indexOf(current) + 1) % order.length];
        localStorage.setItem("theme", next);
        applyTheme(next);
      });
    }
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      applyTheme(localStorage.getItem("theme") || "system");
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Navbar, scroll progress, back-to-top, footer year                       */
  /* ---------------------------------------------------------------------- */

  function initChrome() {
    var toggler = document.querySelector(".nav-toggler");
    var links = document.querySelector(".nav-links");
    if (toggler && links) {
      toggler.addEventListener("click", function () {
        links.classList.toggle("open");
      });
    }

    var progress = document.querySelector(".scroll-progress");
    var backToTop = document.getElementById("back-to-top");
    function onScroll() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    var year = document.getElementById("current-year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------------- */
  /* News                                                                    */
  /* ---------------------------------------------------------------------- */

  function formatDate(iso) {
    var p = iso.split("-");
    return MONTHS[parseInt(p[1], 10) - 1] + " " + p[2] + ", " + p[0];
  }

  function renderNews(el) {
    var items = (window.NEWS || []).slice().sort(function (a, b) {
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });
    var limit = parseInt(el.getAttribute("data-limit"), 10);
    if (limit > 0) items = items.slice(0, limit);

    var rows = items.map(function (n) {
      return "<tr><th scope=\"row\">" + formatDate(n.date) + "</th><td>" + n.text + "</td></tr>";
    });
    el.innerHTML = "<table>" + rows.join("") + "</table>";
  }

  /* ---------------------------------------------------------------------- */
  /* Publications                                                            */
  /* ---------------------------------------------------------------------- */

  function authorHtml(name) {
    var safe = escapeHtml(name);
    return (window.SELF_NAMES || []).indexOf(name) >= 0 ? "<em>" + safe + "</em>" : safe;
  }

  function joinAuthors(names) {
    var parts = names.map(authorHtml);
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return parts[0] + " and " + parts[1];
    return parts.slice(0, -1).join(", ") + ", and " + parts[parts.length - 1];
  }

  function authorsHtml(authors) {
    if (authors.length <= MAX_AUTHORS) return joinAuthors(authors);
    var hidden = authors.length - MAX_AUTHORS;
    var shown = authors.slice(0, MAX_AUTHORS).map(authorHtml).join(", ");
    return (
      shown +
      ", and " +
      '<span class="more-authors" title="click to view all authors" data-full="' +
      escapeHtml(joinAuthors(authors)) +
      '">' +
      hidden +
      " more author" +
      (hidden > 1 ? "s" : "") +
      "</span>"
    );
  }

  function pubHtml(p) {
    var venue = (window.VENUES || {})[p.abbr] || {};
    var badge = "";
    if (p.abbr) {
      var style = venue.color ? ' style="background-color:' + venue.color + '"' : "";
      badge = venue.url
        ? '<a class="badge" href="' + venue.url + '" target="_blank" rel="noopener"' + style + ">" + escapeHtml(p.abbr) + "</a>"
        : '<span class="badge"' + style + ">" + escapeHtml(p.abbr) + "</span>";
    }

    var links = [];
    var pdfUrl = p.pdf || (p.doi ? "https://doi.org/" + p.doi : "");
    if (pdfUrl) links.push('<a href="' + pdfUrl + '" target="_blank" rel="noopener">PDF</a>');

    return (
      '<li class="pub">' +
      '<div class="abbr">' + badge + "</div>" +
      '<div class="content">' +
      '<div class="title">' + escapeHtml(p.title) + "</div>" +
      '<div class="author">' + authorsHtml(p.authors) + "</div>" +
      '<div class="periodical"><em>' + escapeHtml(p.venue || "") + "</em>, " + p.year + "</div>" +
      (links.length ? '<div class="links">' + links.join("") + "</div>" : "") +
      "</div></li>"
    );
  }

  function sortedPublications() {
    return (window.PUBLICATIONS || [])
      .map(function (p, i) {
        return { p: p, i: i };
      })
      .sort(function (a, b) {
        return b.p.year - a.p.year || a.i - b.i;
      })
      .map(function (x) {
        return x.p;
      });
  }

  function renderPublications(el) {
    var selectedOnly = el.hasAttribute("data-selected");
    var pubs = sortedPublications().filter(function (p) {
      return !selectedOnly || p.selected;
    });

    if (selectedOnly) {
      el.innerHTML = "<ol>" + pubs.map(pubHtml).join("") + "</ol>";
      return;
    }

    var html = "";
    var year = null;
    pubs.forEach(function (p) {
      if (p.year !== year) {
        if (year !== null) html += "</ol></section>";
        year = p.year;
        html += '<section class="year-group"><h2 class="year">' + year + "</h2><ol>";
      }
      html += pubHtml(p);
    });
    if (year !== null) html += "</ol></section>";
    el.innerHTML = html;
  }

  function initMoreAuthors() {
    document.addEventListener("click", function (e) {
      var el = e.target.closest(".more-authors");
      if (!el) return;
      el.closest(".author").innerHTML = el.getAttribute("data-full");
    });
  }

  /* ---------------------------------------------------------------------- */
  /* CV table of contents highlighting                                       */
  /* ---------------------------------------------------------------------- */

  function initCvToc() {
    var links = document.querySelectorAll(".cv-toc a");
    if (!links.length) return;
    var sections = Array.prototype.map.call(links, function (a) {
      return document.querySelector(a.getAttribute("href"));
    });

    function update() {
      var offset = window.innerHeight * 0.3;
      var current = 0;
      sections.forEach(function (s, i) {
        if (s && s.getBoundingClientRect().top <= offset) current = i;
      });
      links.forEach(function (a, i) {
        a.classList.toggle("active", i === current);
      });
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initChrome();
    document.querySelectorAll("[data-news]").forEach(renderNews);
    document.querySelectorAll("[data-publications]").forEach(renderPublications);
    initMoreAuthors();
    initCvToc();
  });
})();
