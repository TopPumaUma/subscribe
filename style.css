:root {
  --bg-dark: #0a0a0a;
  --text-dark: #ffffff;
  --bg-light: #f9f9f9;
  --text-light: #000000;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  transition: background 0.3s, color 0.3s;
}

body.dark {
  background: var(--bg-dark);
  color: var(--text-dark);
}

body.light {
  background: var(--bg-light);
  color: var(--text-light);
}

canvas#rain-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

/* Settings Menu */
.top-bar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

#settings-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: inherit;
}

.settings-menu {
  position: absolute;
  top: 2.5rem;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

body.light .settings-menu {
  background: rgba(255, 255, 255, 0.95);
  color: black;
}

.hidden {
  display: none;
}

/* Toggle Switch */
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theme-toggle input {
  display: none;
}

.slider {
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
}

.slider::after {
  content: '';
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: 0.3s;
}

.theme-toggle input:checked + .slider::after {
  transform: translateX(20px);
}

/* Hero Section */
.hero {
  padding: 6rem 1rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.logo-placeholder {
  width: 120px;
  height: 120px;
  background: gray;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Sub Counter */
.sub-counter {
  margin-top: 1rem;
}

/* Social Icons */
.social-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  color: inherit;
  transition: transform 0.2s, color 0.2s;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #ff0000;
}

/* Favorites Carousel */
.favorites {
  padding: 3rem 1rem;
  text-align: center;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  gap: 1rem;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  max-width: 960px;
}

.carousel-item {
  min-width: 300px;
  margin: 0 0.5rem;
  transition: transform 0.3s ease;
}

.carousel-item iframe {
  width: 100%;
  height: 180px;
  border-radius: 12px;
  border: 2px solid var(--text-dark);
}

body.light .carousel-item iframe {
  border: 2px solid var(--text-light);
}

.arrow {
  font-size: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  transition: transform 0.2s;
}

.arrow:hover {
  transform: scale(1.2);
  color: #ffcc00;
}
