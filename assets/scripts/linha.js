const linhas = document.querySelectorAll('.linha');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observer.unobserve(entry.target); 
        }
    });
});

linhas.forEach(linha => observer.observe(linha));
