async function showcase() {
    window.location.href = 'showcase.html';
}
async function kontakt() {
    window.location.href = 'kontakt.html';
}
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.monster');

    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('enlarged');
        });
    });
});
