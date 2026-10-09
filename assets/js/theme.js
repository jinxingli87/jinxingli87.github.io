// Loaded in <head> so the correct theme is applied before the page paints.
(function () {
  var setting = localStorage.getItem("theme") || "system";
  var dark = setting === "dark" || (setting === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme-setting", setting);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
})();
