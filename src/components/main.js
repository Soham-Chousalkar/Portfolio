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

    // Section Management System - Ultra Lightweight
    const sectionControlsToggle = document.querySelector('.section-controls-toggle');
    const sectionControls = document.querySelector('.section-controls');
    const sectionToggles = document.querySelectorAll('.section-toggle');
    
    // Toggle section controls panel
    sectionControlsToggle?.addEventListener('click', () => {
        sectionControls.classList.toggle('active');
    });
    
    // Toggle individual sections
    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const targetSection = e.target.dataset.target;
            const section = document.querySelector(`[data-section="${targetSection}"]`);
            const navItem = document.querySelector(`[data-target="${targetSection}"]`);
            
            if (section) {
                const isVisible = section.dataset.visible === 'true';
                section.dataset.visible = isVisible ? 'false' : 'true';
                
                // Update navigation visibility
                if (navItem) {
                    navItem.style.display = isVisible ? 'none' : 'flex';
                }
                
                // Update button text
                e.target.textContent = isVisible ? `Show ${targetSection}` : `Hide ${targetSection}`;
                
                // Save preference
                localStorage.setItem(`section-${targetSection}-visible`, !isVisible);
            }
        });
    });
    
    // Load saved section preferences
    document.querySelectorAll('[data-section]').forEach(section => {
        const sectionName = section.dataset.section;
        const savedVisibility = localStorage.getItem(`section-${sectionName}-visible`);
        if (savedVisibility !== null) {
            section.dataset.visible = savedVisibility === 'true' ? 'true' : 'false';
            
            // Update navigation
            const navItem = document.querySelector(`[data-target="${sectionName}"]`);
            if (navItem) {
                navItem.style.display = savedVisibility === 'true' ? 'flex' : 'none';
            }
            
            // Update toggle button text
            const toggle = document.querySelector(`[data-target="${sectionName}"]`);
            if (toggle) {
                toggle.textContent = savedVisibility === 'true' ? `Hide ${sectionName}` : `Show ${sectionName}`;
            }
        }
    });
}); 

