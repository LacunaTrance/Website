// script.js

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gear animations
const gears = document.querySelectorAll('.gear');

gears.forEach(gear => {
    gear.addEventListener('animationiteration', () => {
        const randomDuration = Math.random() * (2 - 0.5) + 0.5; // Random duration between 0.5 and 2 seconds
        gear.style.animationDuration = `${randomDuration}s`;
    });
});
