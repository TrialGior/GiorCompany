// js/script.js

document.addEventListener("DOMContentLoaded", function() {
console.log("Website telah dimuat.");

const navLinks = document.querySelectorAll("nav ul li a");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

// Smooth scroll untuk setiap link navigasi
navLinks.forEach(link => {
link.addEventListener("click", function(e) {
e.preventDefault();
const targetId = this.getAttribute("href").substring(1);
const targetSection = document.getElementById(targetId);
if (targetSection) {
window.scrollTo({
top: targetSection.offsetTop - 60, // Sesuaikan dengan tinggi header
behavior: "smooth"
});
}
// Tutup hamburger menu jika sedang aktif
if (navMenu.classList.contains("active")) {
navMenu.classList.remove("active");
}
});
});

// Toggle hamburger menu ketika ikon diklik
hamburger.addEventListener("click", function(e) {
e.stopPropagation(); // Mencegah event bubbling ke document
navMenu.classList.toggle("active");
});

// Tutup hamburger menu ketika klik di luar area menu
document.addEventListener("click", function(e) {
if (navMenu.classList.contains("active") &&
!navMenu.contains(e.target) &&
!hamburger.contains(e.target)) {
navMenu.classList.remove("active");
}
});
});