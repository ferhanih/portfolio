const btn = document.getElementById('scrollTopBtn');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // <- ça gère le défilement lent
    });
});
