// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar active on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

// Simple contact form alert
document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! I will get back to you soon.');
    e.target.reset();
});
