import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
   const nodeList = document.querySelectorAll(".hot");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent+="🔥";
  }
});
