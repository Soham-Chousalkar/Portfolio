/**
 * ProceduralBackground — Zero-dependency HTML5 Canvas constellation layer.
 *
 * Performance guardrails:
 *  - prefers-reduced-motion → single static frame, no RAF loop
 *  - hardwareConcurrency < 4 → halved particle count
 *  - viewport < 768px → mobile cap: 25 particles max
 *  - Canvas DPR capped at 2 to avoid over-rendering on 3x+ displays
 *  - Passive mousemove listener (does not block scroll)
 *  - All RAF cancelled and listeners removed on destroy()
 */

class ProceduralBackground {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.nodes = [];
        this.mouse = { x: -9999, y: -9999 };
        this.rafId = null;
        this.resizeTimer = null;
        this.isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.dpr = Math.min(window.devicePixelRatio || 1, 2);

        // Accent color pulled from CSS variable (dark mode default)
        this.accentColor = '#d77a61';

        this._boundMouseMove = this._onMouseMove.bind(this);
        this._boundResize = this._onResize.bind(this);

        this.init();
    }

    _getParticleCount() {
        const w = window.innerWidth;
        const cores = navigator.hardwareConcurrency || 4;
        let base = w < 768 ? 25 : (w < 1200 ? 50 : 80);
        if (cores < 4) base = Math.floor(base / 2);
        return base;
    }

    _createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'procedural-bg';
        canvas.className = 'canvas-bg';
        canvas.setAttribute('aria-hidden', 'true');
        // Insert as first child of body, behind everything
        document.body.insertBefore(canvas, document.body.firstChild);
        return canvas;
    }

    _resize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.canvas.width = w * this.dpr;
        this.canvas.height = h * this.dpr;
        this.canvas.style.width = w + 'px';
        this.canvas.style.height = h + 'px';
        this.ctx.scale(this.dpr, this.dpr);
        this._seedNodes(w, h);
    }

    _seedNodes(w, h) {
        const count = this._getParticleCount();
        this.nodes = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 2 + 1,
        }));
    }

    _onMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }

    _onResize() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => this._resize(), 150);
    }

    _hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    }

    _drawFrame() {
        const ctx = this.ctx;
        const w = this.canvas.width / this.dpr;
        const h = this.canvas.height / this.dpr;
        const accentRGB = this._hexToRgb(this.accentColor);
        const CONNECT_DIST = 120;
        const REPEL_DIST = 150;
        const REPEL_FORCE = 0.6;

        ctx.clearRect(0, 0, w, h);

        // Update node positions & apply mouse repulsion
        for (const node of this.nodes) {
            // Mouse repulsion
            const dx = node.x - this.mouse.x;
            const dy = node.y - this.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < REPEL_DIST && dist > 0) {
                const force = (REPEL_DIST - dist) / REPEL_DIST * REPEL_FORCE;
                node.vx += (dx / dist) * force;
                node.vy += (dy / dist) * force;
            }

            // Velocity damping
            node.vx *= 0.97;
            node.vy *= 0.97;

            // Clamp speed
            const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
            if (speed > 1.5) {
                node.vx = (node.vx / speed) * 1.5;
                node.vy = (node.vy / speed) * 1.5;
            }

            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x < 0 || node.x > w) node.vx *= -1;
            if (node.y < 0 || node.y > h) node.vy *= -1;
            node.x = Math.max(0, Math.min(w, node.x));
            node.y = Math.max(0, Math.min(h, node.y));
        }

        // Draw connecting lines
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const a = this.nodes[i];
                const b = this.nodes[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const alpha = (1 - dist / CONNECT_DIST) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(${accentRGB}, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        // Draw nodes
        for (const node of this.nodes) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${accentRGB}, 0.45)`;
            ctx.fill();
        }

        this.rafId = requestAnimationFrame(() => this._drawFrame());
    }

    _drawStatic() {
        // Single static frame for reduced-motion users
        const ctx = this.ctx;
        const w = this.canvas.width / this.dpr;
        const h = this.canvas.height / this.dpr;
        const accentRGB = this._hexToRgb(this.accentColor);
        ctx.clearRect(0, 0, w, h);
        for (const node of this.nodes) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${accentRGB}, 0.3)`;
            ctx.fill();
        }
    }

    init() {
        this.canvas = this._createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this._resize();

        if (this.isReduced) {
            this._drawStatic();
            return;
        }

        window.addEventListener('mousemove', this._boundMouseMove, { passive: true });
        window.addEventListener('resize', this._boundResize, { passive: true });
        this._drawFrame();
    }

    destroy() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
        clearTimeout(this.resizeTimer);
        window.removeEventListener('mousemove', this._boundMouseMove);
        window.removeEventListener('resize', this._boundResize);
        this.canvas?.remove();
    }
}

// Boot after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ProceduralBackground());
} else {
    new ProceduralBackground();
}
