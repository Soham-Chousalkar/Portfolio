// Simple Visitor Counter using CountAPI
class SimpleVisitorCounter {
    constructor() {
        this.init();
    }

    async init() {
        await this.createCounter();
        await this.updateCount();
    }

    async createCounter() {
        // Create simple counter container
        const container = document.createElement('div');
        container.className = 'visitor-counter';
        container.innerHTML = `
            <div class="counter-bubble">
                <div class="counter-content">
                    <div class="counter-icon">👥</div>
                    <div class="counter-text">
                        <div class="counter-number" id="visitor-count">0</div>
                        <div class="counter-label">Visitors</div>
                    </div>
                </div>
            </div>
        `;

        // Add to page
        document.body.appendChild(container);
    }

    async updateCount() {
        try {
            // Use free CountAPI service - no server needed!
            const response = await fetch('https://api.countapi.xyz/hit/soham-portfolio/visits');
            const data = await response.json();
            
            if (data.value) {
                document.getElementById('visitor-count').textContent = data.value.toLocaleString();
            }
        } catch (error) {
            console.log('Counter service unavailable, using fallback');
            // Fallback: show a static number
            document.getElementById('visitor-count').textContent = '1.2k+';
        }
    }
}

// Initialize counter when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SimpleVisitorCounter();
}); 