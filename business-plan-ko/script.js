const revealItems = document.querySelectorAll(".reveal");
const parallaxItems = document.querySelectorAll(".parallax");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach(item => observer.observe(item));

let ticking = false;

function updateParallax() {
  parallaxItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const speed = parseFloat(item.dataset.speed || "0");
    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
    item.style.transform = `translate3d(0, ${(center * speed).toFixed(2)}px, 0)`;
  });
}

function requestTick() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateParallax();
    ticking = false;
  });
}

window.addEventListener("scroll", requestTick, { passive: true });
window.addEventListener("resize", requestTick);
window.addEventListener("load", updateParallax);
updateParallax();
