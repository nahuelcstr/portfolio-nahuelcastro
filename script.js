/*SCRIPT SCROLL NAVBAR*/
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
    nav.classList.add('show');
    } else {
    navbar.classList.remove('show');
    }
});

