// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Function to highlight the active link based on scroll position
function highlightActiveLink() {
    const scrollPosition = window.scrollY + 200;

    document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        const navLink = document.querySelector(`a[href="#${section.id}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}

// Update the active link on scroll
window.addEventListener('scroll', highlightActiveLink);
window.addEventListener('load', highlightActiveLink); // Check on page load as well