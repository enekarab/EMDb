let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const totalItems = carousel.children.length;

function moveCarousel(direction) {
    const itemWidth = carousel.clientWidth;
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}