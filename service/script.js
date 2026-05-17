const nav = document.querySelector("[data-nav]");
const progress = document.querySelector("[data-progress]");
const menuButton = document.querySelector("[data-menu-button]");
const menuPanel = document.querySelector("[data-menu-panel]");
const revealItems = document.querySelectorAll(".reveal, .mask-media");
const parallaxItems = document.querySelectorAll(".parallax");
const comparePanel = document.querySelector("[data-compare]");
const compareButtons = document.querySelectorAll("[data-compare-state]");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach(item => revealObserver.observe(item));

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuPanel.setAttribute("aria-hidden", String(!open));
  menuPanel.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  setMenu(open);
});

menuPanel.addEventListener("click", event => {
  if (event.target.tagName === "A") {
    setMenu(false);
  }
});

compareButtons.forEach(button => {
  button.addEventListener("click", () => {
    const state = button.dataset.compareState;
    comparePanel.classList.toggle("is-after", state === "after");
    compareButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  });
});

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? scrollTop / max : 0;

  nav.classList.toggle("is-compact", scrollTop > 24);
  progress.style.width = `${Math.min(1, Math.max(0, ratio)) * 100}%`;

  parallaxItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const speed = parseFloat(item.dataset.speed || "0");
    const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
    const shift = centerOffset * speed;
    item.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
  });
}

let ticking = false;
function requestTick() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateScrollEffects();
    ticking = false;
  });
}

window.addEventListener("scroll", requestTick, { passive: true });
window.addEventListener("resize", requestTick);
window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
  updateScrollEffects();
});
updateScrollEffects();
