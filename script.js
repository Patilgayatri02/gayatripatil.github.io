/* =====================
   HAMBURGER MENU
===================== */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* =====================
   THEME TOGGLE
===================== */
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");
  localStorage.setItem("theme", isLight ? "light" : "dark");

  themeToggle.textContent = isLight ? "🌞" : "🌙";
});

/* =====================
   ACTIVE NAV HIGHLIGHT
===================== */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

// On click
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// On scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =====================
   SCROLL ANIMATIONS
===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
