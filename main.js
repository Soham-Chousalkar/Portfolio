// Minimalist Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
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

    // Customizer Tool Functionality
    const depthSlider = document.getElementById('depth-slider');
    const depthValue = document.querySelector('.depth-value');
    const colorPaletteBtn = document.querySelector('.color-palette-btn');
    
    // Depth/Intensity Slider Control
    depthSlider.addEventListener('input', function() {
        const value = this.value;
        depthValue.textContent = value + '%';
        
        // Apply depth changes to all panels
        const panels = document.querySelectorAll('.voxel-island, .stat, .timeline-content, .project-card, .skill-item, .education-item, .achievement-card, .contact-method, .counter-bubble');
        
        panels.forEach(panel => {
            const intensity = value / 100;
            const currentBoxShadow = panel.style.boxShadow || '';
            
            // Update backdrop-filter blur
            const currentBlur = panel.style.backdropFilter || '';
            const newBlur = currentBlur.replace(/blur\([^)]*\)/, `blur(${10 + intensity * 20}px)`);
            panel.style.backdropFilter = newBlur;
            
            // Update box-shadow intensity
            const shadowIntensity = 0.2 + (intensity * 0.3);
            const newBoxShadow = `0 8px 32px rgba(0, 0, 0, ${shadowIntensity}), inset 0 1px 0 rgba(239, 241, 243, ${0.2 + intensity * 0.3})`;
            panel.style.boxShadow = newBoxShadow;
        });
    });
    
    // Color Palette Button
    colorPaletteBtn.addEventListener('click', function() {
        // Define different color palettes
        const colorPalettes = [
            {
                name: 'Ocean Blue',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e3a8a 100%)',
                panels: 'rgba(59, 130, 246, 0.8)',
                accent: '#fbbf24',
                text: '#ffffff'
            },
            {
                name: 'Forest Green',
                background: 'linear-gradient(135deg, #064e3b 0%, #10b981 50%, #064e3b 100%)',
                panels: 'rgba(16, 185, 129, 0.8)',
                accent: '#f59e0b',
                text: '#ffffff'
            },
            {
                name: 'Sunset Orange',
                background: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #7c2d12 100%)',
                panels: 'rgba(234, 88, 12, 0.8)',
                accent: '#fbbf24',
                text: '#ffffff'
            },
            {
                name: 'Purple Dream',
                background: 'linear-gradient(135deg, #581c87 0%, #a855f7 50%, #581c87 100%)',
                panels: 'rgba(168, 85, 247, 0.8)',
                accent: '#fbbf24',
                text: '#ffffff'
            },
            {
                name: 'Current Theme',
                background: 'linear-gradient(135deg, #dbd3d8 0%, #d8b4a0 50%, #dbd3d8 100%)',
                panels: 'rgba(215, 122, 97, 0.8)',
                accent: '#d8b4a0',
                text: '#223843'
            }
        ];
        
        // Get current palette index or start with 0
        const currentIndex = parseInt(localStorage.getItem('colorPaletteIndex') || '4');
        const nextIndex = (currentIndex + 1) % colorPalettes.length;
        const newPalette = colorPalettes[nextIndex];
        
        // Apply new color palette
        document.body.style.background = newPalette.background;
        document.body.style.color = newPalette.text;
        
        // Update all panels
        const panels = document.querySelectorAll('.voxel-island, .timeline-content, .project-card, .education-item, .achievement-card, .contact-method');
        panels.forEach(panel => {
            panel.style.background = newPalette.panels;
        });
        
        // Update accent colors
        const accentElements = document.querySelectorAll('.stat-number, .counter-number, .depth-value, .customizer-icon, .nav-item.active, .nav-item:hover');
        accentElements.forEach(element => {
            element.style.color = newPalette.accent;
        });
        
        // Update text colors
        const textElements = document.querySelectorAll('h1, h2, h3, .project-card h3, .timeline-content h3, .education-item h3, .achievement-card h3');
        textElements.forEach(element => {
            element.style.color = newPalette.text;
        });
        
        // Store current palette index
        localStorage.setItem('colorPaletteIndex', nextIndex.toString());
        
        // Show notification
        showNotification(`Applied ${newPalette.name} theme!`);
    });
    
    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(34, 56, 67, 0.95);
            color: #d8b4a0;
            padding: 15px 20px;
            border-radius: 10px;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(239, 241, 243, 0.2);
            z-index: 10001;
            font-size: 14px;
            font-weight: 600;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    console.log('Portfolio with Customizer loaded successfully! 🎨');
}); 