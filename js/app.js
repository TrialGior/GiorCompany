// js/app.js

// Data project yang dapat Anda update secara berkala
const projects = [
{
title: "Project One",
image: "image/project/project1.jpg",
link: "https://example.com/project1"
},
{
title: "Project Two",
image: "image/project/project2.jpg",
link: "https://example.com/project2"
},
{
title: "Project Three",
image: "image/project/project3.jpg",
link: "https://example.com/project3"
}
// Tambahkan project lain sesuai kebutuhan
];

function loadProjects() {
const projectContainer = document.getElementById("project-container");
if (!projectContainer) return;

projects.forEach(project => {
// Membuat elemen project secara dinamis
const projectItem = document.createElement("div");
projectItem.className = "project-item";

const projectImage = document.createElement("img");
projectImage.src = project.image;
projectImage.alt = project.title;

const projectTitle = document.createElement("h3");
projectTitle.textContent = project.title;

const projectLink = document.createElement("a");
projectLink.href = project.link;
projectLink.textContent = "View Project";
projectLink.target = "_blank";

projectItem.appendChild(projectImage);
projectItem.appendChild(projectTitle);
projectItem.appendChild(projectLink);

projectContainer.appendChild(projectItem);
});
}

// Array gambar untuk hero slider
const heroImages = [
"image/hero-bg1.jpg",
"image/hero-bg2.jpg",
"image/hero-bg3.jpg",
"image/hero-bg4.jpg"
];

function initHeroSlider() {
const heroSlidesContainer = document.getElementById("hero-slides");
if (!heroSlidesContainer) return;

// Buat elemen slide untuk setiap gambar
heroImages.forEach((image, index) => {
const slideDiv = document.createElement("div");
slideDiv.className = "hero-slide";
if (index === 0) slideDiv.classList.add("active");
slideDiv.style.backgroundImage = `url('${image}')`;
heroSlidesContainer.appendChild(slideDiv);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
setInterval(() => {
slides[currentSlide].classList.remove("active");
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add("active");
}, 4000); // Durasi 4 detik per slide
}

document.addEventListener("DOMContentLoaded", function() {
loadProjects();
initHeroSlider();
});