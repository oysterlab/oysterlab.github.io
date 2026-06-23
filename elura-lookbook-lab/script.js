const printButton = document.querySelector("#print-page");

printButton?.addEventListener("click", () => {
  window.print();
});

function updateReleaseSections(now = new Date()) {
  document.querySelectorAll("[data-release-time]").forEach((section) => {
    const releaseTime = new Date(section.dataset.releaseTime);
    const released = now >= releaseTime;
    section.classList.toggle("is-locked", !released);

    const label = section.querySelector("[data-release-label]");
    if (label) {
      label.textContent = label.textContent.replace(released ? "Ready" : "Released", released ? "Released" : "Ready");
    }
  });
}

updateReleaseSections();
window.setInterval(updateReleaseSections, 60000);
