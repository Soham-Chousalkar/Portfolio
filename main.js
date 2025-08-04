// Minimalist Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // World Clock Functionality
    function updateWorldClock() {
        const now = new Date();
        
        // Hyderabad (IST - UTC+5:30)
        const hyderabadTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
        document.getElementById('hyderabad-time').textContent = hyderabadTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // London (GMT/BST - UTC+0/+1)
        const londonTime = new Date(now.getTime());
        document.getElementById('london-time').textContent = londonTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Arizona (MST - UTC-7)
        const arizonaTime = new Date(now.getTime() - (7 * 60 * 60 * 1000));
        document.getElementById('arizona-time').textContent = arizonaTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
                            // Texas (CST - UTC-6)
                    const texasTime = new Date(now.getTime() - (6 * 60 * 60 * 1000));
                    document.getElementById('texas-time').textContent = texasTime.toLocaleTimeString('en-US', {
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    });

                    // Dayton (EST - UTC-5)
                    const daytonTime = new Date(now.getTime() - (5 * 60 * 60 * 1000));
                    document.getElementById('dayton-time').textContent = daytonTime.toLocaleTimeString('en-US', {
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    });
                }
    
    // Update clock immediately and then every second
    updateWorldClock();
    setInterval(updateWorldClock, 1000);

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
    
    // Color Picker Functionality
    const colorButtons = document.querySelectorAll('.color-btn');
    const colorPickerModal = document.getElementById('color-picker-modal');
    const colorPickerClose = document.getElementById('color-picker-close');
    const applyColorBtn = document.getElementById('apply-color-btn');
    
    let currentColorTarget = null;
    let currentHue = 0;
    let currentSaturation = 100;
    let currentLightness = 50;
    
    // Color picker canvas elements
    const colorPickerCanvas = document.getElementById('color-picker-canvas');
    const hueCanvas = document.getElementById('hue-canvas');
    const colorPickerCursor = document.getElementById('color-picker-cursor');
    const hueCursor = document.getElementById('hue-cursor');
    const colorPreviewBox = document.getElementById('color-preview-box');
    const hexInput = document.getElementById('hex-input');
    const hueSlider = document.getElementById('hue-slider');
    const saturationSlider = document.getElementById('saturation-slider');
    const lightnessSlider = document.getElementById('lightness-slider');
    
    // Initialize color picker canvases
    function initColorPicker() {
        const ctx = colorPickerCanvas.getContext('2d');
        const hueCtx = hueCanvas.getContext('2d');
        
        // Draw hue slider
        const hueGradient = hueCtx.createLinearGradient(0, 0, 0, 200);
        for (let i = 0; i <= 360; i += 60) {
            hueGradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
        }
        hueCtx.fillStyle = hueGradient;
        hueCtx.fillRect(0, 0, 30, 200);
        
        // Initial color picker canvas
        updateColorPickerCanvas();
    }
    
    function updateColorPickerCanvas() {
        const ctx = colorPickerCanvas.getContext('2d');
        
        // Create gradient for current hue
        const gradient = ctx.createLinearGradient(0, 0, 200, 0);
        gradient.addColorStop(0, `hsl(${currentHue}, 0%, 50%)`);
        gradient.addColorStop(1, `hsl(${currentHue}, 100%, 50%)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 200, 200);
        
        // Add lightness gradient
        const lightnessGradient = ctx.createLinearGradient(0, 0, 0, 200);
        lightnessGradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
        lightnessGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        lightnessGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
        ctx.fillStyle = lightnessGradient;
        ctx.fillRect(0, 0, 200, 200);
    }
    
    function updateColor() {
        const color = `hsl(${currentHue}, ${currentSaturation}%, ${currentLightness}%)`;
        const hexColor = hslToHex(currentHue, currentSaturation, currentLightness);
        
        colorPreviewBox.style.background = color;
        hexInput.value = hexColor.toUpperCase();
        
        updateColorPickerCanvas();
        updateCursors();
    }
    
    function updateCursors() {
        // Update color picker cursor
        const x = (currentSaturation / 100) * 200;
        const y = (1 - currentLightness / 100) * 200;
        colorPickerCursor.style.left = `${x - 6}px`;
        colorPickerCursor.style.top = `${y - 6}px`;
        
        // Update hue cursor
        const hueY = (currentHue / 360) * 200;
        hueCursor.style.top = `${hueY - 2}px`;
    }
    
    function hslToHex(h, s, l) {
        s /= 100;
        l /= 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r = 0, g = 0, b = 0;
        
        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        
        const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
        const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
        const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');
        
        return `#${rHex}${gHex}${bHex}`;
    }
    
    function hexToHsl(hex) {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        
        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        
        return [h * 360, s * 100, l * 100];
    }
    
    // Color button click handlers
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const currentColor = this.getAttribute('data-color');
            
            currentColorTarget = target;
            
            // Convert hex to HSL for initial values
            const [h, s, l] = hexToHsl(currentColor);
            currentHue = h;
            currentSaturation = s;
            currentLightness = l;
            
            // Update sliders
            hueSlider.value = currentHue;
            saturationSlider.value = currentSaturation;
            lightnessSlider.value = currentLightness;
            
            updateColor();
            colorPickerModal.classList.add('active');
        });
    });
    
    // Color picker canvas click handler
    colorPickerCanvas.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        currentSaturation = (x / 200) * 100;
        currentLightness = (1 - y / 200) * 100;
        
        updateColor();
    });
    
    // Hue canvas click handler
    hueCanvas.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const y = e.clientY - rect.top;
        
        currentHue = (y / 200) * 360;
        
        updateColor();
    });
    
    // Slider event handlers
    hueSlider.addEventListener('input', function() {
        currentHue = parseInt(this.value);
        updateColor();
    });
    
    saturationSlider.addEventListener('input', function() {
        currentSaturation = parseInt(this.value);
        updateColor();
    });
    
    lightnessSlider.addEventListener('input', function() {
        currentLightness = parseInt(this.value);
        updateColor();
    });
    
    // Hex input handler
    hexInput.addEventListener('input', function() {
        const hex = this.value;
        if (hex.match(/^#[0-9A-Fa-f]{6}$/)) {
            const [h, s, l] = hexToHsl(hex);
            currentHue = h;
            currentSaturation = s;
            currentLightness = l;
            
            hueSlider.value = currentHue;
            saturationSlider.value = currentSaturation;
            lightnessSlider.value = currentLightness;
            
            updateColor();
        }
    });
    
    // Apply color button
    applyColorBtn.addEventListener('click', function() {
        if (currentColorTarget) {
            const newColor = hexInput.value;
            applyColorToTarget(currentColorTarget, newColor);
            colorPickerModal.classList.remove('active');
            showNotification(`Applied new ${currentColorTarget} color!`);
        }
    });
    
    // Close modal
    colorPickerClose.addEventListener('click', function() {
        colorPickerModal.classList.remove('active');
    });
    
    // Close modal on outside click
    colorPickerModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    function applyColorToTarget(target, color) {
    switch(target) {
        case 'background':
            document.body.style.background = `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, 20)} 50%, ${color} 100%)`;
            break;
        case 'nav':
            const navElements = document.querySelectorAll('.bottom-nav, .nav-item');
            navElements.forEach(el => {
                if (el.classList.contains('bottom-nav')) {
                    el.style.background = `rgba(${hexToRgb(color)}, 0.9)`;
                }
            });
            break;
        case 'text':
            const textElements = document.querySelectorAll('h1, h2, h3, .project-card h3, .timeline-content h3, .education-item h3, .achievement-card h3, body');
            textElements.forEach(el => {
                if (el === document.body) {
                    el.style.color = color;
                } else {
                    el.style.color = color;
                }
            });
            break;
        case 'panels':
            const panelElements = document.querySelectorAll('.voxel-island, .timeline-content, .project-card, .education-item, .achievement-card, .contact-method');
            panelElements.forEach(el => {
                el.style.background = `rgba(${hexToRgb(color)}, 0.8)`;
            });
            break;
        case 'accent':
            const accentElements = document.querySelectorAll('.stat-number, .counter-number, .depth-value, .customizer-icon, .nav-item.active, .nav-item:hover');
            accentElements.forEach(el => {
                el.style.color = color;
            });
            break;
        case 'borders':
            const borderElements = document.querySelectorAll('.voxel-island, .stat, .timeline-content, .project-card, .skill-item, .education-item, .achievement-card, .contact-method, .counter-bubble');
            borderElements.forEach(el => {
                el.style.borderColor = `rgba(${hexToRgb(color)}, 0.2)`;
            });
            break;
    }
    
    // Update the color button
    const colorBtn = document.querySelector(`[data-target="${target}"]`);
    if (colorBtn) {
        colorBtn.style.background = color;
        colorBtn.setAttribute('data-color', color);
        updateColorButtonText(colorBtn, color);
    }
}
    
    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    }
    
    function adjustColor(hex, amount) {
        const r = Math.max(0, Math.min(255, parseInt(hex.slice(1, 3), 16) + amount));
        const g = Math.max(0, Math.min(255, parseInt(hex.slice(3, 5), 16) + amount));
        const b = Math.max(0, Math.min(255, parseInt(hex.slice(5, 7), 16) + amount));
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    
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
    
    // Function to update color button text based on background color
    function updateColorButtonText(button, backgroundColor) {
        const textElement = button.querySelector('.color-label');
        if (textElement) {
            const invertedColor = getTrueInvertedColor(backgroundColor);
            textElement.style.color = invertedColor;
            textElement.style.textShadow = `0 1px 2px rgba(0, 0, 0, 0.3)`;
        }
    }
    
    // Function to get inverted color for better contrast
    function getInvertedColor(hexColor) {
        const rgb = hexToRgb(hexColor);
        const [r, g, b] = rgb.split(', ').map(Number);
        
        // Calculate relative luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Return black for light backgrounds, white for dark backgrounds
        return luminance > 0.5 ? '#000000' : '#ffffff';
    }
    
    // Function to get true inverted color (RGB complement)
    function getTrueInvertedColor(hexColor) {
        const rgb = hexToRgb(hexColor);
        const [r, g, b] = rgb.split(', ').map(Number);
        
        // Calculate inverted RGB values
        const invertedR = 255 - r;
        const invertedG = 255 - g;
        const invertedB = 255 - b;
        
        // Convert back to hex
        const invertedHex = `#${invertedR.toString(16).padStart(2, '0')}${invertedG.toString(16).padStart(2, '0')}${invertedB.toString(16).padStart(2, '0')}`;
        
        return invertedHex;
    }
    
    // Initialize color button text colors
    colorButtons.forEach(button => {
        const currentColor = button.getAttribute('data-color');
        updateColorButtonText(button, currentColor);
    });
    
    // Initialize color picker
    initColorPicker();

    console.log('Portfolio with World Clock and Advanced Color Picker loaded successfully! 🎨⏰');
}); 