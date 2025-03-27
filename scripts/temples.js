// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Get current year for copyright
const currentYear = new Date().getFullYear();
document.querySelector('footer p:first-of-type').innerHTML = `&copy; ${currentYear} 🏀 Enias Gramu 🏀 Zimbabwe.`;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;