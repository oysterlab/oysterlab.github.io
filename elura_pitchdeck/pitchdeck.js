const slides = [
  ["01-cover.png", "Cover", "ELURA — Reveal yourself through your space."],
  ["02-problem.png", "Problem", "When people want their space to feel more personal, choosing what belongs is surprisingly difficult."],
  ["03-activated-desire.png", "Activated Desire", "The problem begins after: I want this space to feel more like me."],
  ["04-core-hypothesis.png", "Core Hypothesis", "The desire may stay latent until people see their own room transformed."],
  ["05-why-art-first.png", "Why Art First", "Art is not the only way to personalize a home. It is the clearest place to start."],
  ["06-solution.png", "Solution", "ELURA translates who you are into how your space feels."],
  ["07-core-experience.png", "Core Experience", "It starts with understanding you."],
  ["08-result.png", "Result", "From identity to an installed result."],
  ["09-customer.png", "Customer", "They know what they like. They cannot see what belongs in their room."],
  ["10-acquisition-wedge.png", "Acquisition Wedge", "Meet them while taste is turning into action."],
  ["11-market-expansion.png", "Market & Expansion", "Wall art is the first transaction. Personalization can expand across the home."],
  ["12-business-model.png", "Business Model", "The direction earns trust. The physical product earns revenue."],
  ["13-validation.png", "Validation", "The system runs. The purchase hypothesis is not yet proven."],
  ["14-go-to-market.png", "Go to Market", "Test the difference before scaling the channel."],
  ["15-competition.png", "Competition", "The market forces a trade-off. ELURA removes it."],
  ["16-defensibility.png", "Defensibility", "Today: curation and workflow. Later: outcome data."],
  ["17-roadmap.png", "Roadmap", "From concierge proof to a compounding product."],
  ["18-founder-current-ask.png", "Founder & Current Ask", "One founder built the full loop. The next constraint is paid proof."],
  ["19-closing.png", "Closing", "The future of home personalization starts with the person."]
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
