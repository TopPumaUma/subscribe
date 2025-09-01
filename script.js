// Theme toggle
const body = document.body;
const themeSwitch = document.getElementById("theme-switch");
const settingsBtn = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

settingsBtn.addEventListener("click", () => {
  settingsMenu.classList.toggle("hidden");
});

themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});

// Carousel behavior
const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let index = 0;
const itemWidth = items[0].offsetWidth + 16;

function updateCarousel() {
  const offset = -index * itemWidth;
  track.style.transform = `translateX(${offset}px)`;
}

leftBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

rightBtn.addEventListener("click", () => {
  if (index < items.length - 1) {
    index++;
    updateCarousel();
  }
});
