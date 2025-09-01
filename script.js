// Elements
const body = document.body;
const themeSwitch = document.getElementById("theme-switch");
const settingsBtn = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

// Toggle menu
settingsBtn.addEventListener("click", () => {
  settingsMenu.classList.toggle("hidden");
});

// Toggle theme
themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});

// Carousel logic
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');
let currentIndex = 0;

function updateCarousel() {
  const offset = -(currentIndex * (items[0].offsetWidth + 16));
  track.style.transform = `translateX(${offset}px)`;
  leftBtn.disabled = currentIndex === 0;
  rightBtn.disabled = currentIndex === items.length - 1;
}

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});
rightBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) currentIndex++;
  updateCarousel();
});
window.addEventListener('resize', updateCarousel);
document.addEventListener('DOMContentLoaded', updateCarousel);

// Rain canvas
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");
let drops = [];

function initRain() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drops = [];

  for (let i = 0; i < 200; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1
    });
  }
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = body.classList.contains("light") ? "black" : "white";
  ctx.lineWidth = 1;
  ctx.beginPath();

  for (let drop of drops) {
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
  }

  ctx.stroke();

  for (let drop of drops) {
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawRain);
}

// Resize and re-init
window.addEventListener("resize", initRain);
document.addEventListener("DOMContentLoaded", () => {
  initRain();
  drawRain();
});
