document.addEventListener('DOMContentLoaded', () => {

    const btnTema = document.getElementById('btn-tema');
    const body = document.body;
    const temaSalvo = localStorage.getItem('tema');
    const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (temaSalvo === 'dark' || (!temaSalvo && preferenciaSistema)) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    btnTema.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
        } else {
            localStorage.setItem('tema', 'light');
        }
    });
});