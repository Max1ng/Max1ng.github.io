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

// Helper function to update the active link based on the section in the viewport
function updateActiveLink(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            // Remove the 'active-link' class from all links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active-link');
            });

            // Add the 'active-link' class to the corresponding link
            if (navLink) {
                navLink.classList.add('active-link');
            }
        }
    });
}

// Set up Intersection Observers for each section
document.querySelectorAll('.section').forEach(section => {
    const observer = new IntersectionObserver(updateActiveLink, {
        root: null,
        threshold: 0.5, // Adjust this threshold as needed
    });

    observer.observe(section);
});
