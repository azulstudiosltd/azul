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