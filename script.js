// elementos surgem ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.about, .about h2, .about-colunas, .services, .services h2, .services-colunas')
    .forEach(el => observer.observe(el));

// efeito carrossel do works

const track = document.getElementById('track');
const cards = document.querySelectorAll('.carousel-card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const isMobile = window.innerWidth <= 768;
const cardWidth = isMobile ? window.innerWidth * 0.6 : 300;
const gap = 24;
const step = cardWidth + gap;
const wrapperWidth = isMobile ? window.innerWidth : 860;
let current = 1;

function updateCarousel() {
    cards.forEach((card, i) => {
        card.classList.remove('active', 'adjacent');
        const diff = Math.abs(i - current);
        if (diff === 0) card.classList.add('active');
        else if (diff === 1) card.classList.add('adjacent');
    });

    /* centraliza o card ativo dentro do wrapper */
    const offset = -(current * step) + (wrapperWidth / 2 - cardWidth / 2);
    track.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    if (current > 0) { current--; updateCarousel(); }
});

nextBtn.addEventListener('click', () => {
    if (current < cards.length - 1) { current++; updateCarousel(); }
});

updateCarousel();