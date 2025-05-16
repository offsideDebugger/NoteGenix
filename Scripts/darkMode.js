// Dark mode functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to apply theme
    function applyTheme(theme) {
        try {
            document.documentElement.setAttribute('data-theme', theme);
            if (darkModeToggle) {
                darkModeToggle.checked = theme === 'dark';
                darkModeToggle.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
            }
            
            // Try to save to localStorage
            try {
                localStorage.setItem('theme', theme);
            } catch (e) {
                console.warn('Failed to save theme preference to localStorage:', e);
            }
        } catch (e) {
            console.error('Failed to apply theme:', e);
        }
    }

    // Get initial theme
    let currentTheme;
    try {
        currentTheme = localStorage.getItem('theme');
    } catch (e) {
        console.warn('Failed to read theme from localStorage:', e);
    }
    
    // Use system preference if no saved theme
    if (!currentTheme) {
        currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    }

    // Apply initial theme
    applyTheme(currentTheme);

    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Only add event listener if toggle exists (index page)
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function(e) {
            const newTheme = e.target.checked ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }
}); 