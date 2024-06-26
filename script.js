// Add event listener for scroll event
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add event listener for hover effect on nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#fff';
        link.style.color = '#007bff';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = 'white';
    });
});
