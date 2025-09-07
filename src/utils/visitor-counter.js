// Ultra-Optimal Visitor Counter - No Backend Required
// Uses local storage + CountAPI fallback + simulated stats

class SimpleVisitorCounter {
    constructor() {
        this.storageKey = 'portfolio_visitor_data';
        this.init();
    }

    async init() {
        this.createCounter();
        this.recordVisit();
        this.loadStats();
        this.startAutoRefresh();
    }

    createCounter() {
        const container = document.createElement('div');
        container.className = 'visitor-counter';
        container.innerHTML = `
            <div class="counter-bubble" tabindex="0">
                <div class="counter-content">
                    <div class="counter-icon">👥</div>
                    <div class="counter-text">
                        <div class="counter-number" id="visitor-count">0</div>
                        <div class="counter-label">Visitors</div>
                    </div>
                </div>
            </div>
            <div class="counter-expanded">
                <div class="stats-grid">
                    <div class="stat-item" data-value="25">
                        <div class="stat-number">25</div>
                        <div class="stat-label">Total Visitors</div>
                    </div>
                    <div class="stat-item" data-value="100">
                        <div class="stat-number">100</div>
                        <div class="stat-label">Total Visits</div>
                    </div>
                    <div class="stat-item" data-value="3">
                        <div class="stat-number">3</div>
                        <div class="stat-label">Countries</div>
                    </div>
                    <div class="stat-item" data-value="5">
                        <div class="stat-number">5</div>
                        <div class="stat-label">Cities</div>
                    </div>
                </div>
                <div class="location-map">
                    <h3>Top Locations</h3>
                    <div class="location-chart">
                        <div class="location-bar" data-country="United States" data-count="25" data-percentage="100"></div>
                        <div class="location-bar" data-country="United Kingdom" data-count="15" data-percentage="60"></div>
                        <div class="location-bar" data-country="Canada" data-count="10" data-percentage="40"></div>
                        <div class="location-bar" data-country="Germany" data-count="8" data-percentage="32"></div>
                        <div class="location-bar" data-country="Australia" data-count="5" data-percentage="20"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }

    async recordVisit() {
        try {
            // Try CountAPI first (external service)
            const response = await fetch('https://api.countapi.xyz/hit/soham-portfolio/visits');
            const data = await response.json();
            if (data.value) {
                this.updateCounter(data.value);
                return;
            }
        } catch (error) {
            console.log('CountAPI unavailable, using local storage fallback');
        }

        // Fallback to local storage
        this.recordLocalVisit();
    }

    recordLocalVisit() {
        const visitorData = this.getVisitorData();
        const today = new Date().toDateString();
        
        // Update visit count
        visitorData.totalVisits = (visitorData.totalVisits || 0) + 1;
        
        // Update unique visitors (simplified logic)
        if (!visitorData.lastVisit || visitorData.lastVisit !== today) {
            visitorData.uniqueVisitors = (visitorData.uniqueVisitors || 0) + 1;
            visitorData.lastVisit = today;
        }
        
        // Store updated data
        this.saveVisitorData(visitorData);
        
        // Update display
        this.updateCounter(visitorData.uniqueVisitors);
    }

    getVisitorData() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (error) {
            return {};
        }
    }

    saveVisitorData(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (error) {
            console.log('Local storage unavailable');
        }
    }

    loadStats() {
        // Load from local storage or use simulated data
        const visitorData = this.getVisitorData();
        
        if (visitorData.uniqueVisitors) {
            this.updateCounter(visitorData.uniqueVisitors);
        } else {
            // Simulated data for demonstration
            this.updateCounter(1250);
        }
    }

    updateCounter(count) {
        const element = document.getElementById('visitor-count');
        if (element) {
            element.textContent = count.toLocaleString();
        }
    }

    startAutoRefresh() {
        // Refresh every 5 minutes instead of 30 seconds for better performance
        setInterval(() => {
            this.loadStats();
        }, 300000);
    }
}

// Initialize counter when DOM is ready
document.addEventListener('DOMContentLoaded', () => new SimpleVisitorCounter()); 