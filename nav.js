/* ============================================================
   TECHKITCH — HEADER NAV DROPDOWN (shared across all pages)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".js-nav-toggle");
  const nav = document.querySelector(".js-nav");
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("nav--open");
    toggle.classList.remove("nav-toggle--active");
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.contains("nav--open");
    if (isOpen) {
      closeNav();
    } else {
      nav.classList.add("nav--open");
      toggle.classList.add("nav-toggle--active");
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-dropdown-wrapper")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
});
