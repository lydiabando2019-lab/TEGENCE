// --- Mobile menu ---
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// close the menu when a link is clicked
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// --- Fade-in sections on scroll ---
const sections = document.querySelectorAll(".flex3, .flex4, .flex5, .flex6");

sections.forEach((section) => section.classList.add("reveal"));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);   // animate only once
            }
        });
    },
    { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));