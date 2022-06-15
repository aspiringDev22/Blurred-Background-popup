const closeIconEl = document.querySelector(".close-icon");
const btnEL = document.querySelector(".btn");
const mainContainerEl = document.querySelector(".main-container");
const popupEl = document.querySelector(".popup-container");

btnEL.addEventListener("click", () => {
  mainContainerEl.classList.add("active");
  popupEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  mainContainerEl.classList.remove("active");
  popupEl.classList.add("active");
});
