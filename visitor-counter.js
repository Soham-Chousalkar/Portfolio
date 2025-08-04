class VisitorCounter {
    constructor() {
        this.container = null;
        this.stats = {
            totalVisitors: 0,
            totalVisits: 0,
            locationStats: {}
        };
        this.isExpanded = false;
        this.chart = null;
        this.init();
    }

    async init() {
        await this.createCounter();
        await this.recordVisit();
        await this.loadStats();
        this.startAutoRefresh();
    }

    async createCounter() {
        // Create counter container
        this.container = document.createElement('div');
        this.container.className = 'visitor-counter';
        this.container.innerHTML = `
            <div class="counter-bubble">
                <div class="counter-content">
                    <div class="counter-icon">👥</div>
                    <div class="counter-text">
                        <div class="counter-number" id="visitor-count">0</div>
                        <div class="counter-label">Visitors</div>
                    </div>
                </div>
                <div class="counter-expanded" id="counter-expanded">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number" id="total-visitors">0</div>
                            <div class="stat-label">Total Visitors</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="total-visits">0</div>
                            <div class="stat-label">Total Visits</div>
                        </div>
                    </div>
                    <div class="location-map">
                        <h3>Visitor Locations</h3>
                        <canvas id="location-chart"></canvas>
                    </div>
                </div>
            </div>
        `;

        // Add to page
        document.body.appendChild(this.container);

        // Add hover event
        this.container.addEventListener('mouseenter', () => this.expand());
        this.container.addEventListener('mouseleave', () => this.collapse());
    }

    async recordVisit() {
        try {
            const response = await fetch('/api/visit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                this.updateCounter(data.totalVisitors);
            }
        } catch (error) {
            console.error('Error recording visit:', error);
        }
    }

    async loadStats() {
        try {
            const response = await fetch('/api/stats');
            if (response.ok) {
                this.stats = await response.json();
                this.updateStats();
                this.createLocationChart();
            }
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    }

    updateCounter(count) {
        const counterElement = document.getElementById('visitor-count');
        if (counterElement) {
            this.animateNumber(counterElement, parseInt(counterElement.textContent), count);
        }
    }

    updateStats() {
        const totalVisitorsElement = document.getElementById('total-visitors');
        const totalVisitsElement = document.getElementById('total-visits');
        
        if (totalVisitorsElement) {
            this.animateNumber(totalVisitorsElement, parseInt(totalVisitorsElement.textContent), this.stats.totalVisitors);
        }
        
        if (totalVisitsElement) {
            this.animateNumber(totalVisitsElement, parseInt(totalVisitsElement.textContent), this.stats.totalVisits);
        }
    }

    animateNumber(element, start, end) {
        const duration = 1000;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * this.easeOutQuart(progress));
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    expand() {
        if (this.isExpanded) return;
        
        this.isExpanded = true;
        this.container.classList.add('expanded');
        
        // Add neon glow effect
        this.container.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.3)';
    }

    collapse() {
        if (!this.isExpanded) return;
        
        this.isExpanded = false;
        this.container.classList.remove('expanded');
        
        // Remove neon glow effect
        this.container.style.boxShadow = '';
    }

    createLocationChart() {
        const canvas = document.getElementById('location-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Create a simple bar chart for countries
        const countries = Object.keys(this.stats.locationStats);
        const counts = countries.map(country => this.stats.locationStats[country].total);
        
        const maxCount = Math.max(...counts);
        const barWidth = canvas.width / countries.length;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw bars with neon effect
        countries.forEach((country, index) => {
            const height = (counts[index] / maxCount) * (canvas.height - 40);
            const x = index * barWidth + 10;
            const y = canvas.height - height - 20;
            
            // Neon glow
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#00ffff';
            ctx.fillRect(x, y, barWidth - 20, height);
            
            // Reset shadow
            ctx.shadowBlur = 0;
            
            // Draw text
            ctx.fillStyle = '#ffffff';
            ctx.font = '12px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(country, x + (barWidth - 20) / 2, canvas.height - 5);
            ctx.fillText(counts[index], x + (barWidth - 20) / 2, y - 10);
        });
    }

    startAutoRefresh() {
        // Refresh stats every 30 seconds
        setInterval(() => {
            this.loadStats();
        }, 30000);
    }
}

// Initialize visitor counter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VisitorCounter();
}); 