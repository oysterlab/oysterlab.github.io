const variantButtons = Array.from(document.querySelectorAll("[data-target]"));
const variants = Array.from(document.querySelectorAll(".variant"));
const printSelected = document.querySelector("#print-selected");
const printAll = document.querySelector("#print-all");
const releaseCards = Array.from(document.querySelectorAll("[data-release-time]"));

function updateReleaseStates(now = new Date()) {
  releaseCards.forEach((card) => {
    const releaseAt = new Date(card.dataset.releaseTime);
    const isReleased = now >= releaseAt;
    const status = card.querySelector("[data-release-status]");
    const label = card.dataset.releaseLabel;

    card.classList.toggle("is-released", isReleased);
    card.classList.toggle("is-ready", !isReleased);

    if (status && label) {
      status.textContent = `${label} / ${isReleased ? "Released" : "Ready"}`;
    }
  });
}

function activateVariant(id, options = {}) {
  const { scroll = true } = options;
  variants.forEach((variant) => {
    variant.classList.toggle("is-active", variant.id === id);
  });

  variantButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === id);
  });

  const active = document.querySelector(`#${id}`);
  if (active && scroll) {
    active.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

variantButtons.forEach((button) => {
  button.addEventListener("click", () => activateVariant(button.dataset.target));
});

printSelected?.addEventListener("click", () => {
  document.body.classList.add("print-selected");
  window.print();
});

printAll?.addEventListener("click", () => {
  document.body.classList.remove("print-selected");
  window.print();
});

window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-selected");
});

const params = new URLSearchParams(window.location.search);
const requestedVariant = params.get("variant") || window.location.hash.replace("#", "");
if (requestedVariant && document.querySelector(`#${requestedVariant}`)) {
  activateVariant(requestedVariant, { scroll: false });
}

updateReleaseStates();
window.setInterval(updateReleaseStates, 60000);
