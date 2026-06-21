const variantButtons = Array.from(document.querySelectorAll("[data-target]"));
const variants = Array.from(document.querySelectorAll(".variant"));
const printSelected = document.querySelector("#print-selected");
const printAll = document.querySelector("#print-all");

function activateVariant(id) {
  variants.forEach((variant) => {
    variant.classList.toggle("is-active", variant.id === id);
  });

  variantButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === id);
  });

  const active = document.querySelector(`#${id}`);
  if (active) {
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
