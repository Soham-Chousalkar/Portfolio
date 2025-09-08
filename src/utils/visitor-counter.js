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
            <div class="visitor-voxel-island" tabindex="0">
                <div class="visitor-content">
                    <div class="visitor-text">
                        <span class="visitor-label">Visitors</span>
                        <span class="visitor-number" id="visitor-count">0</span>
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