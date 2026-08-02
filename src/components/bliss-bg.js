/**
 * BlissBackground — CSS-approximated Windows XP Bliss wallpaper.
 * Draws sky gradient + rolling green hills + wispy clouds on canvas.
 * Zero dependencies, zero images, instant load.
 */

function drawBliss(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width / (window.devicePixelRatio || 1);
    const H = canvas.height / (window.devicePixelRatio || 1);

    // --- Sky gradient (top 62%) ---
    const sky = ctx.createLinearGradient(0, 0, 0, H * 0.64);
    sky.addColorStop(0,    '#3A7EC8');
    sky.addColorStop(0.25, '#5898DC');
    sky.addColorStop(0.6,  '#88BEF0');
    sky.addColorStop(1,    '#B8DCF8');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // --- Rolling hill (bottom 45%) ---
    const hillBase = H * 0.58;
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, hillBase + H * 0.07);
    ctx.bezierCurveTo(W * 0.12, hillBase - H * 0.07, W * 0.28, hillBase + H * 0.02, W * 0.44, hillBase - H * 0.01);
    ctx.bezierCurveTo(W * 0.56, hillBase - H * 0.05, W * 0.68, hillBase + H * 0.06, W * 0.82, hillBase - H * 0.02);
    ctx.bezierCurveTo(W * 0.91, hillBase - H * 0.06, W, hillBase + H * 0.03, W, H);
    ctx.closePath();

    const hill = ctx.createLinearGradient(0, hillBase - H * 0.07, 0, H);
    hill.addColorStop(0,   '#68C038');
    hill.addColorStop(0.25,'#4EA820');
    hill.addColorStop(0.6, '#388A10');
    hill.addColorStop(1,   '#246208');
    ctx.fillStyle = hill;
    ctx.fill();

    // --- Soft cloud wisps ---
    function drawCloud(cx, cy, scale) {
        ctx.save();
        ctx.globalAlpha = 0.52;
        ctx.fillStyle = '#FFFFFF';
        const blob = (ox, oy, rx, ry) => {
            ctx.beginPath();
            ctx.ellipse(cx + ox * scale, cy + oy * scale, rx * scale, ry * scale, 0, 0, Math.PI * 2);
            ctx.fill();
        };
        blob(0,   0,  44, 18);
        blob(-30, 7,  26, 14);
        blob(30,  9,  30, 14);
        blob(-14, -8, 30, 17);
        blob(16,  -7, 34, 18);
        ctx.restore();
    }

    drawCloud(W * 0.18, H * 0.16, 1.0);
    drawCloud(W * 0.62, H * 0.10, 1.3);
    drawCloud(W * 0.84, H * 0.20, 0.75);
    drawCloud(W * 0.40, H * 0.26, 0.6);
}

function initBliss() {
    const canvas = document.getElementById('bliss-canvas');
    if (!canvas) return;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width  = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width  = w + 'px';
        canvas.style.height = h + 'px';
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        drawBliss(canvas);
    }

    resize();

    let timer;
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(resize, 180);
    }, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBliss);
} else {
    initBliss();
}
