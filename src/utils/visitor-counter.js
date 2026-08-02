/**
 * Visitor Counter — Session-deduplicated, UUID-based, Turso-backed.
 *
 * Flow:
 *  1. On first ever visit: generate crypto.randomUUID(), store in localStorage
 *  2. Check sessionStorage for 'visit_recorded' flag
 *  3. If not recorded this session: POST visitorId to /api/visitors (Turso deduplicates by INSERT OR IGNORE)
 *  4. Set sessionStorage flag so refreshes don't re-POST
 *  5. Always GET /api/visitors on load to display real global count
 */

class VisitorCounter {
    constructor() {
        this.API_BASE = '/api/visitors';
        this.STORAGE_KEY = 'portfolio_visitorId';
        this.SESSION_KEY = 'visit_recorded';
        this.init();
    }

    async init() {
        this._createDisplay();
        await this._recordVisit();
        await this._fetchAndDisplay();
    }

    _createDisplay() {
        // Only create if it doesn't already exist (e.g. from a previous hot reload)
        if (document.querySelector('.visitor-counter')) return;

        const container = document.createElement('div');
        container.className = 'visitor-counter';
        container.innerHTML = `
            <div class="visitor-panel" tabindex="0" title="Unique visitors to this portfolio">
                <div class="visitor-content">
                    <div class="visitor-text">
                        <span class="visitor-label">Visitors</span>
                        <span class="visitor-number" id="visitor-count">—</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }

    _getOrCreateVisitorId() {
        let id = localStorage.getItem(this.STORAGE_KEY);
        if (!id) {
            // crypto.randomUUID() is supported in all modern browsers
            id = (typeof crypto !== 'undefined' && crypto.randomUUID)
                ? crypto.randomUUID()
                : this._fallbackUUID();
            localStorage.setItem(this.STORAGE_KEY, id);
        }
        return id;
    }

    _fallbackUUID() {
        // RFC 4122 v4 UUID fallback for older environments
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    async _recordVisit() {
        // Session deduplication: only POST once per browser session
        if (sessionStorage.getItem(this.SESSION_KEY)) return;

        const visitorId = this._getOrCreateVisitorId();

        try {
            const response = await fetch(this.API_BASE, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ visitorId }),
            });

            if (response.ok) {
                sessionStorage.setItem(this.SESSION_KEY, '1');
            }
        } catch (err) {
            // Non-fatal — display will still show count from GET
            console.warn('[VisitorCounter] Could not record visit:', err.message);
        }
    }

    async _fetchAndDisplay() {
        try {
            const response = await fetch(this.API_BASE);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            this._updateDisplay(data.count ?? 0);
        } catch (err) {
            console.warn('[VisitorCounter] Could not fetch count:', err.message);
            this._updateDisplay('—');
        }
    }

    _updateDisplay(count) {
        const el = document.getElementById('visitor-count');
        if (el) {
            el.textContent = typeof count === 'number'
                ? count.toLocaleString()
                : count;
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new VisitorCounter());
} else {
    new VisitorCounter();
}