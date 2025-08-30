// Minimalist Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // World Clock Functionality - Fixed
    function updateWorldClock() {
        const now = new Date();
        
        // Get timezone offsets
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        
        // Hyderabad (IST - UTC+5:30)
        const hyderabadTime = new Date(utc + (5.5 * 60 * 60 * 1000));
        document.getElementById('hyderabad-time').textContent = hyderabadTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // London (GMT/BST - UTC+0/+1) - Check if DST is in effect
        const londonTime = new Date(utc);
        const londonOffset = londonTime.getTimezoneOffset();
        const londonDST = new Date(londonTime.getFullYear(), 2, 31).getDay();
        const londonDSTStart = new Date(londonTime.getFullYear(), 2, 31 - londonDST);
        const londonDSTEnd = new Date(londonTime.getFullYear(), 9, 31 - new Date(londonTime.getFullYear(), 9, 31).getDay());
        
        let londonAdjustedTime;
        if (londonTime >= londonDSTStart && londonTime < londonDSTEnd) {
            // BST (British Summer Time) - UTC+1
            londonAdjustedTime = new Date(utc + (1 * 60 * 60 * 1000));
        } else {
            // GMT (Greenwich Mean Time) - UTC+0
            londonAdjustedTime = new Date(utc);
        }
        
        document.getElementById('london-time').textContent = londonAdjustedTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Arizona (MST - UTC-7) - No DST
        const arizonaTime = new Date(utc - (7 * 60 * 60 * 1000));
        document.getElementById('arizona-time').textContent = arizonaTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Texas (CST - UTC-6) - Check if DST is in effect
        const texasTime = new Date(utc - (6 * 60 * 60 * 1000));
        const texasDSTStart = new Date(texasTime.getFullYear(), 2, 14 - new Date(texasTime.getFullYear(), 2, 14).getDay());
        const texasDSTEnd = new Date(texasTime.getFullYear(), 10, 7 - new Date(texasTime.getFullYear(), 10, 7).getDay());
        
        let texasAdjustedTime;
        if (texasTime >= texasDSTStart && texasTime < texasDSTEnd) {
            // CDT (Central Daylight Time) - UTC-5
            texasAdjustedTime = new Date(utc - (5 * 60 * 60 * 1000));
        } else {
            // CST (Central Standard Time) - UTC-6
            texasAdjustedTime = new Date(utc - (6 * 60 * 60 * 1000));
        }
        
        document.getElementById('texas-time').textContent = texasAdjustedTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Dayton (EST - UTC-5) - Check if DST is in effect
        const daytonTime = new Date(utc - (5 * 60 * 60 * 1000));
        const daytonDSTStart = new Date(daytonTime.getFullYear(), 2, 14 - new Date(daytonTime.getFullYear(), 2, 14).getDay());
        const daytonDSTEnd = new Date(daytonTime.getFullYear(), 10, 7 - new Date(daytonTime.getFullYear(), 10, 7).getDay());
        
        let daytonAdjustedTime;
        if (daytonTime >= daytonDSTStart && daytonTime < daytonDSTEnd) {
            // EDT (Eastern Daylight Time) - UTC-4
            daytonAdjustedTime = new Date(utc - (4 * 60 * 60 * 1000));
        } else {
            // EST (Eastern Standard Time) - UTC-5
            daytonAdjustedTime = new Date(utc - (5 * 60 * 60 * 1000));
        }
        
        document.getElementById('dayton-time').textContent = daytonAdjustedTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
    
    // Update clock immediately and then every second
    updateWorldClock();
    setInterval(updateWorldClock, 1000);

    // Theme Toggle Functionality
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



    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    // Function to update active navigation link based on scroll position
    function updateActiveNav() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                if (navItems[index]) {
                    navItems[index].classList.add('active');
                }
            }
        });
    }

    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Event listeners
    window.addEventListener('scroll', function() {
        updateActiveNav();
    });

    // Initial call
    updateActiveNav();



    console.log('Portfolio with World Clock loaded successfully! ⏰');
}); 

