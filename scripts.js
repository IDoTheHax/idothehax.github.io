document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Dark mode toggle
    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    });

    
    // Shrinking hax section on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            body.classList.add('shrink');
        } else {
            body.classList.remove('shrink');
        }
    });
});