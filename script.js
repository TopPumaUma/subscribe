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
  initRain(); // Restart rain with new color
});

// Carousel
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

// Rain Effect
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");
let drops = [];

function initRain() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drops = [];

  for (let i = 0; i < 300; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 15 + 10,
      speed: Math.random() * 4 + 2
    });
  }

  ctx.strokeStyle = body.classList.contains("light") ? "black" : "white";
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let drop of drops) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawRain);
}

window.addEventListener("resize", initRain);
initRain();
drawRain();
