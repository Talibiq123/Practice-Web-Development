const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.children[0].classList.toggle('active1');
    menuToggle.children[1].classList.toggle('active2');
    menuToggle.children[2].classList.toggle('active3');
});
