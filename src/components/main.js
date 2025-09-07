// Minimalist Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Simplified World Clock using Intl.DateTimeFormat API
    function updateWorldClock() {
        const cities = [
            { id: 'hyderabad-time', timeZone: 'Asia/Kolkata' },
            { id: 'london-time', timeZone: 'Europe/London' },
            { id: 'arizona-time', timeZone: 'America/Phoenix' },
            { id: 'texas-time', timeZone: 'America/Chicago' },
            { id: 'dayton-time', timeZone: 'America/New_York' }
        ];
        
        cities.forEach(city => {
            const time = new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: city.timeZone
            });
            document.getElementById(city.id).textContent = time;
        });
    }
    
    // Update clock immediately and then every second
    updateWorldClock();
    setInterval(updateWorldClock, 1000);

    // Simplified theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    themeToggle.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        themeToggle.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

}); 

