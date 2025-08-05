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
        this.autoRefreshInterval = null;
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
            console.log('Recording visit...');
            const response = await fetch('/api/visit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('Visit recorded successfully:', data);
                this.updateCounter(data.totalVisitors);
                this.stats.totalVisitors = data.totalVisitors;
                this.stats.totalVisits = data.totalVisits;
            } else {
                console.error('Failed to record visit:', response.status);
            }
        } catch (error) {
            console.error('Error recording visit:', error);
            // Fallback: increment counter locally if server is unavailable
            this.stats.totalVisitors++;
            this.updateCounter(this.stats.totalVisitors);
        }
    }

    async loadStats() {
        try {
            console.log('Loading stats...');
            const response = await fetch('/api/stats');
            if (response.ok) {
                const data = await response.json();
                console.log('Stats loaded:', data);
                this.stats = data;
                this.updateStats();
                this.createLocationChart();
            } else {
                console.error('Failed to load stats:', response.status);
            }
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    }

    updateCounter(count) {
        const counterElement = document.getElementById('visitor-count');
        if (counterElement) {
            this.animateNumber(counterElement, parseInt(counterElement.textContent) || 0, count);
        }
    }

    updateStats() {
        const totalVisitorsElement = document.getElementById('total-visitors');
        const totalVisitsElement = document.getElementById('total-visits');
        
        if (totalVisitorsElement) {
            this.animateNumber(totalVisitorsElement, parseInt(totalVisitorsElement.textContent) || 0, this.stats.totalVisitors);
        }
        
        if (totalVisitsElement) {
            this.animateNumber(totalVisitsElement, parseInt(totalVisitsElement.textContent) || 0, this.stats.totalVisits);
        }
    }

    animateNumber(element, start, end) {
        const duration = 1000;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * this.easeOutQuart(progress));
            element.textContent = current;
            
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
        if (this.container) {
            this.container.classList.add('expanded');
            this.isExpanded = true;
        }
    }

    collapse() {
        if (this.container) {
            this.container.classList.remove('expanded');
            this.isExpanded = false;
        }
    }

    createLocationChart() {
        const canvas = document.getElementById('location-chart');
        if (!canvas || !this.stats.locationStats) return;

        const ctx = canvas.getContext('2d');
        const countries = Object.keys(this.stats.locationStats);
        const data = countries.map(country => this.stats.locationStats[country].total);

        if (data.length === 0) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw simple bar chart
        const barWidth = canvas.width / data.length;
        const maxValue = Math.max(...data);
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];

        data.forEach((value, index) => {
            const barHeight = (value / maxValue) * (canvas.height - 40);
            const x = index * barWidth;
            const y = canvas.height - barHeight - 20;

            ctx.fillStyle = colors[index % colors.length];
            ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

            // Draw country name
            ctx.fillStyle = '#333';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(countries[index], x + barWidth / 2, canvas.height - 5);
        });
    }

    startAutoRefresh() {
        // Clear existing interval
        if (this.autoRefreshInterval) {
            clearInterval(this.autoRefreshInterval);
        }
        
        // Start new interval
        this.autoRefreshInterval = setInterval(async () => {
            console.log('Auto-refreshing stats...');
            await this.loadStats();
        }, 30000); // Refresh every 30 seconds
    }

    destroy() {
        if (this.autoRefreshInterval) {
            clearInterval(this.autoRefreshInterval);
        }
        if (this.container) {
            this.container.remove();
        }
    }
}

// Initialize visitor counter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VisitorCounter();
}); 