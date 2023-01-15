import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let hotIconCheck = document.querySelectorAll(".hot");

  hotIconCheck.forEach((element) => {
    if (!element.textContent.includes("🔥")) {
      element.textContent += "🔥";
    }
  });
});
