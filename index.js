const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header"); 

function toggleMenu() {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  header.classList.toggle("active");
}

menuToggle.addEventListener("click", () => {
  alert("Menu toggled!");
});

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Optional: Close menu when a nav link is clicked
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    header.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});