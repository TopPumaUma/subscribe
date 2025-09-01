// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});

// Carousel Logic
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

// Responsive initial update
window.addEventListener('resize', updateCarousel);
document.addEventListener('DOMContentLoaded', updateCarousel);
