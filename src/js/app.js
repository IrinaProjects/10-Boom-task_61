import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  // let hotIcon = document.querySelectorAll(".hot");
  // console.log(hotIcon);
  // hotIcon.forEach((element) => {
  //   if (!element.textContent.includes("🔥")) {
  //     element.textContent += "🔥";
  //   }
  // });

  const nodeList = document.querySelectorAll(".hot");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent += "🔥";
  }
});

// Не вярвах, че ще доживея да го кажа, ма на моя компютър 52 задача,Hot Price, работи:
// Има си и querySelectorAll, ама тестовете твърдят, че нищи си няма. Какво съм объркала? Мерси предварително! :)
