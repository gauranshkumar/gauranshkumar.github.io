document.addEventListener('DOMContentLoaded', () => {
    // Load theme preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeToggleIcon(true);
    }

    // Smooth scroll for in-page links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
            // Hide nav on mobile after clicking a link
            document.getElementById('nav-links').style.display = 'none';
        });
    });

    // Mobile menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinksContainer = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        if (navLinksContainer.style.display === 'flex') {
            navLinksContainer.style.display = 'none';
        } else {
            navLinksContainer.style.display = 'flex';
        }
    });
});

// Toggle dark/light theme
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeToggleIcon(isDark);
}

// Update toggle icon (moon for light mode, sun for dark mode)
function updateThemeToggleIcon(isDark) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Event listener for the theme toggle button
document.getElementById('theme-toggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
});
