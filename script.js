// Theme & Settings
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

// Carousel
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');
let currentIndex = 0;

function updateCarousel() {
  const offset = -(currentIndex * (items[0].offsetWidth + 16));
  track.style.transform = `translateX(${offset}px)`;
  leftBtn.disabled = currentIndex === 0;
