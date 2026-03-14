// Dark Mode Toggle
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  
  themeToggle.addEventListener('click', function() {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add transition animation
    html.style.setProperty('--transition-speed', '0.3s');
    setTimeout(() => {
      html.style.setProperty('--transition-speed', '0s');
    }, 300);
  });
  
  // Apply theme immediately on load to prevent flash
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  }
})();
