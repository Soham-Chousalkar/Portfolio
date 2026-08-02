/**
 * AttentionTracker — IntersectionObserver-based section dwell time tracker.
 *
 * Tracks how long the visitor spends in each major section and renders
 * a subtle glassmorphism HUD showing top sections by engagement.
 *
 * The HUD only appears after 10 seconds of page time to avoid
 * distracting visitors who are still orienting themselves.
 *
 * Hidden in print media via CSS.
 */

class AttentionTracker {
    constructor() {
        this.sections = ['#about', '#experience', '#projects', '#skills', '#education'];
        this.dwell = {};       // section id → total ms
        this.entryTime = {};   // section id → Date.now() when entered viewport
        this.hud = null;
        this.hudVisible = false;
        this.pageStartTime = Date.now();

        this.sections.forEach(id => { this.dwell[id] = 0; });

        this._initObserver();
        this._initHUD();

        // Reveal HUD after 10s of page time
        setTimeout(() => this._showHUD(), 10000);

        // Update HUD every 2 seconds
        setInterval(() => this._updateHUD(), 2000);

        // Flush active dwells when tab becomes hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) this._flushActiveDwells();
        });
    }

    _initObserver() {
        const options = {
            threshold: [0.3],   // Section considered "active" when 30% visible
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = '#' + entry.target.id;
                if (entry.isIntersecting) {
                    this.entryTime[id] = Date.now();
                } else if (this.entryTime[id]) {
                    this.dwell[id] += Date.now() - this.entryTime[id];
                    delete this.entryTime[id];
                }
            });
        }, options);

        this.sections.forEach(id => {
            const el = document.querySelector(id);
            if (el) this.observer.observe(el);
        });
    }

    _flushActiveDwells() {
        const now = Date.now();
        Object.keys(this.entryTime).forEach(id => {
            this.dwell[id] += now - this.entryTime[id];
            this.entryTime[id] = now; // Reset so re-entry is accurate
        });
    }

    _getLiveDwell(id) {
        const base = this.dwell[id] || 0;
        const active = this.entryTime[id] ? Date.now() - this.entryTime[id] : 0;
        return base + active;
    }

    _getTopSections(n = 3) {
        return this.sections
            .map(id => ({ id, ms: this._getLiveDwell(id) }))
            .filter(s => s.ms > 500) // Only show sections with meaningful engagement
            .sort((a, b) => b.ms - a.ms)
            .slice(0, n);
    }

    _formatLabel(id) {
        // '#experience' → 'Experience'
        return id.replace('#', '').replace(/^\w/, c => c.toUpperCase());
    }

    _formatDwell(ms) {
        const s = Math.round(ms / 1000);
        if (s < 60) return `${s}s`;
        return `${Math.floor(s / 60)}m ${s % 60}s`;
    }

    _initHUD() {
        this.hud = document.createElement('div');
        this.hud.id = 'attention-hud';
        this.hud.className = 'attention-hud';
        this.hud.setAttribute('aria-hidden', 'true');
        this.hud.innerHTML = `
            <div class="hud-header">
                <span class="hud-icon">👁</span>
                <span class="hud-title">Active Focus</span>
            </div>
            <div class="hud-sections" id="hud-sections-list"></div>
        `;
        this.hud.style.opacity = '0';
        this.hud.style.pointerEvents = 'none';
        document.body.appendChild(this.hud);
    }

    _showHUD() {
        if (this._getTopSections(1).length === 0) {
            // No meaningful engagement yet — try again in 5s
            setTimeout(() => this._showHUD(), 5000);
            return;
        }
        this.hudVisible = true;
        this.hud.style.transition = 'opacity 0.6s ease';
        this.hud.style.opacity = '1';
        this.hud.style.pointerEvents = 'auto';
    }

    _updateHUD() {
        if (!this.hudVisible) return;

        const top = this._getTopSections(3);
        const list = document.getElementById('hud-sections-list');
        if (!list || top.length === 0) return;

        const maxMs = top[0]?.ms || 1;

        list.innerHTML = top.map(({ id, ms }) => {
            const pct = Math.round((ms / maxMs) * 100);
            return `
                <div class="hud-section-row">
                    <span class="hud-section-name">${this._formatLabel(id)}</span>
                    <div class="hud-bar-track">
                        <div class="hud-bar-fill" style="width: ${pct}%"></div>
                    </div>
                    <span class="hud-section-time">${this._formatDwell(ms)}</span>
                </div>
            `;
        }).join('');
    }
}

// Boot after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AttentionTracker());
} else {
    new AttentionTracker();
}
