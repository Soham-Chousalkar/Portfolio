/**
 * Visitor Counter — XP Portfolio (System Tray Integration)
 * Tracks unique visitors via Turso (libSQL) serverless API.
 * Session-deduped: no re-POST on page refresh.
 * Updates the system tray visitor count element.
 */

'use strict';

class VisitorCounter {
    constructor() {
        this.API      = '/api/visitors';
        this.ID_KEY   = 'portfolio_visitorId';
        this.SESS_KEY = 'visit_recorded';
        this.init();
    }

    async init() {
        await this._record();
        await this._fetchDisplay();
    }

    _getOrCreate() {
        let id = localStorage.getItem(this.ID_KEY);
        if (!id) {
            id = (typeof crypto !== 'undefined' && crypto.randomUUID)
                ? crypto.randomUUID()
                : this._uuid();
            localStorage.setItem(this.ID_KEY, id);
        }
        return id;
    }

    _uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    async _record() {
        if (sessionStorage.getItem(this.SESS_KEY)) return;
        const visitorId = this._getOrCreate();
        try {
            const res = await fetch(this.API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ visitorId }),
            });
            if (res.ok) sessionStorage.setItem(this.SESS_KEY, '1');
        } catch (e) {
            console.warn('[VisitorCounter] POST failed:', e.message);
        }
    }

    async _fetchDisplay() {
        try {
            const res = await fetch(this.API);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const { count } = await res.json();
            this._render(count ?? 0);
        } catch (e) {
            console.warn('[VisitorCounter] GET failed:', e.message);
            this._render('?');
        }
    }

    _render(count) {
        // System tray counter (XP theme)
        const el = document.getElementById('tray-visitor-count');
        if (el) el.textContent = typeof count === 'number' ? count.toLocaleString() : count;

        // Update tray icon title tooltip
        const icon = document.getElementById('tray-visitor');
        if (icon) icon.title = `${count} unique visitor${count !== 1 ? 's' : ''}`;

        // Global exposure for other modules
        if (window.XPDesktop) window.XPDesktop.visitorCount = count;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new VisitorCounter());
} else {
    new VisitorCounter();
}