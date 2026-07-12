const slides = [
  ["01-cover.png", "Cover", "ELURA — Reveal yourself through your space."],
  ["02-problem.png", "Problem", "A home can be fully furnished and still feel unfinished."],
  ["03-why-it-stays-unfinished.png", "Why It Stays Unfinished", "Identity is easy to feel and hard to translate into space."],
  ["04-insight.png", "Insight", "The market solved inspiration. It never solved translation."],
  ["05-why-now.png", "Why Now", "Home personalization can now begin with the person, not the catalog."],
  ["06-solution.png", "Solution", "ELURA translates who you are into how your space feels."],
  ["07-core-experience.png", "Core Experience", "It starts with understanding you."],
  ["08-result.png", "Result", "Personal to you. Natural in your space."],
  ["09-target-customer.png", "Target Customer", "Women creating their first truly personal home."],
  ["10-market.png", "Market", "A large category and a focused starting point."],
  ["11-business-model.png", "Business Model", "Start with guidance. Grow into the room."],
  ["12-validation.png", "Validation", "We built the learning loop. Paid conversion is next."],
  ["13-go-to-market.png", "Go to Market", "Every personalized space brings in the next customer."],
  ["14-competition.png", "Competition", "The market forces a trade-off. ELURA removes it."],
  ["15-defensibility.png", "Defensibility", "The translation system gets stronger with every home."],
  ["16-roadmap.png", "Roadmap", "From concierge proof to a compounding product."],
  ["17-closing.png", "Closing", "The future of home personalization starts with the person."]
].map(([file, title, alt], index) => ({
  index,
  file: `final-16x9/${file}`,
  title,
  alt
}));

const deck = document.querySelector("#deck");
const counter = document.querySelector("#counter");
const title = document.querySelector("#slide-title");
const progressBar = document.querySelector("#progress-bar");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const fullscreenButton = document.querySelector("#fullscreen-button");
const overviewButton = document.querySelector("#overview-button");
const overviewDialog = document.querySelector("#overview-dialog");
const overviewClose = document.querySelector("#overview-close");
const overviewGrid = document.querySelector("#overview-grid");
const viewer = document.querySelector("#viewer");
const swipeHint = document.querySelector("#swipe-hint");

let current = getIndexFromHash();
let pointerStart = null;
let hintTimer;

deck.innerHTML = slides.map((slide) => `
  <figure class="slide" id="slide-${slide.index + 1}" aria-hidden="true">
    <img
      src="${slide.file}"
      alt="${slide.alt}"
      ${slide.index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
      draggable="false"
    >
  </figure>
`).join("");

overviewGrid.innerHTML = slides.map((slide) => `
  <button class="overview-card" type="button" data-index="${slide.index}" aria-label="Open slide ${slide.index + 1}: ${slide.title}">
    <span class="overview-card__image">
      <img src="${slide.file}" alt="" loading="lazy">
    </span>
    <span class="overview-card__meta">
      <span class="overview-card__number">${formatNumber(slide.index + 1)}</span>
      <span class="overview-card__title">${slide.title}</span>
    </span>
  </button>
`).join("");

const slideElements = [...document.querySelectorAll(".slide")];
const overviewCards = [...document.querySelectorAll(".overview-card")];

setActive(current, { updateHash: false });

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function getIndexFromHash() {
  const raw = window.location.hash.replace(/^#(?:slide-)?/, "");
  const parsed = Number.parseInt(raw, 10);
  if (Number.isFinite(parsed) && parsed >= 1 && parsed <= slides.length) return parsed - 1;
  return 0;
}

function setActive(index, { updateHash = true } = {}) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  current = next;

  slideElements.forEach((element, slideIndex) => {
    const active = slideIndex === current;
    element.classList.toggle("is-active", active);
    element.setAttribute("aria-hidden", String(!active));
  });

  overviewCards.forEach((card, slideIndex) => {
    card.classList.toggle("is-current", slideIndex === current);
    card.setAttribute("aria-current", slideIndex === current ? "true" : "false");
  });

  const slide = slides[current];
  counter.textContent = `${formatNumber(current + 1)} / ${slides.length}`;
  title.textContent = slide.title;
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  previousButton.disabled = current === 0;
  nextButton.disabled = current === slides.length - 1;
  document.title = `${formatNumber(current + 1)} / ${slides.length} · ${slide.title} — ELURA`;

  if (updateHash) history.replaceState(null, "", `#${current + 1}`);
  preloadNeighbor(current + 1);
}

function preloadNeighbor(index) {
  if (!slides[index]) return;
  const image = new Image();
  image.src = slides[index].file;
}

function step(delta) {
  setActive(current + delta);
}

function openOverview() {
  overviewDialog.showModal();
  requestAnimationFrame(() => {
    overviewCards[current].scrollIntoView({ block: "center", behavior: "smooth" });
    overviewCards[current].focus({ preventScroll: true });
  });
}

function closeOverview() {
  if (overviewDialog.open) overviewDialog.close();
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch {
    document.body.classList.toggle("is-fullscreen");
  }
}

function updateFullscreenUi() {
  const active = Boolean(document.fullscreenElement);
  document.body.classList.toggle("is-fullscreen", active);
  fullscreenButton.setAttribute("aria-label", active ? "Exit full screen" : "Enter full screen");
  fullscreenButton.setAttribute("title", active ? "Exit full screen (F)" : "Full screen (F)");
}

previousButton.addEventListener("click", () => step(-1));
nextButton.addEventListener("click", () => step(1));
overviewButton.addEventListener("click", openOverview);
overviewClose.addEventListener("click", closeOverview);
fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateFullscreenUi);

overviewGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".overview-card");
  if (!card) return;
  setActive(Number(card.dataset.index));
  closeOverview();
});

overviewDialog.addEventListener("click", (event) => {
  if (event.target === overviewDialog) closeOverview();
});

window.addEventListener("hashchange", () => setActive(getIndexFromHash(), { updateHash: false }));

document.addEventListener("keydown", (event) => {
  if (overviewDialog.open) {
    if (event.key === "Escape") closeOverview();
    return;
  }

  const actions = {
    ArrowRight: () => step(1),
    ArrowDown: () => step(1),
    PageDown: () => step(1),
    " ": () => step(1),
    ArrowLeft: () => step(-1),
    ArrowUp: () => step(-1),
    PageUp: () => step(-1),
    Home: () => setActive(0),
    End: () => setActive(slides.length - 1),
    o: openOverview,
    O: openOverview,
    f: toggleFullscreen,
    F: toggleFullscreen
  };

  if (actions[event.key]) {
    event.preventDefault();
    actions[event.key]();
  }
});

viewer.addEventListener("dblclick", toggleFullscreen);

viewer.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse") return;
  pointerStart = { x: event.clientX, y: event.clientY };
});

viewer.addEventListener("pointerup", (event) => {
  if (!pointerStart) return;
  const deltaX = event.clientX - pointerStart.x;
  const deltaY = event.clientY - pointerStart.y;
  pointerStart = null;
  if (Math.abs(deltaX) < 42 || Math.abs(deltaX) < Math.abs(deltaY)) return;
  step(deltaX < 0 ? 1 : -1);
});

viewer.addEventListener("pointercancel", () => {
  pointerStart = null;
});

if (window.matchMedia("(max-width: 900px)").matches) {
  swipeHint.classList.add("is-visible");
  hintTimer = window.setTimeout(() => swipeHint.classList.remove("is-visible"), 2600);
}

window.addEventListener("pagehide", () => window.clearTimeout(hintTimer));
