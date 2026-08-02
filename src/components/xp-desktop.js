/**
 * XP Desktop Orchestrator
 * ─────────────────────────────────────────────────────────
 * Manages: Windows, Taskbar, Start Menu, Desktop Icons,
 *          Context Menu, BSOD easter egg, Recycle Bin gag
 * ─────────────────────────────────────────────────────────
 */

'use strict';

// ============================================================
// SKILL DATA — used by Registry Editor window
// ============================================================
const SKILL_DATA = {
    languages:  ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C#', 'Ruby', 'Go', 'Scala'],
    frameworks: ['Node.js', 'React', 'Express', 'Spring', 'Flask', 'FastAPI'],
    cloud:      ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Shell Scripting'],
    databases:  ['PostgreSQL', 'MySQL', 'Oracle', 'Redis', 'SQLite'],
    practices:  ['System Design', 'API Development', 'Code Reviews', 'Unit/Integration Testing', 'ETL Pipelines'],
};

// Expose for inline onclick handlers
window.selectSkillCategory = function (catId, el) {
    document.querySelectorAll('.xp-tree-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
    const pills = document.getElementById('skills-pills');
    if (pills && SKILL_DATA[catId]) {
        pills.innerHTML = SKILL_DATA[catId]
            .map(s => `<span class="xp-skill-pill">${s}</span>`)
            .join('');
    }
};

// ============================================================
// WINDOW CONFIGURATIONS + CONTENT TEMPLATES
// ============================================================
const WINDOWS = {
    hero: {
        title:  'Soham Chousalkar — Welcome',
        icon:   '👤',
        w: 560, h: 340,
        menubar: false,
        status:  'Ready',
        content: () => `
<div class="xp-hero-content">
  <div class="xp-hero-name">Soham Chousalkar</div>
  <div class="xp-hero-subtitle">
    Software Engineer &nbsp;·&nbsp; CS Graduate Researcher<br>
    Computer Vision Lab @ University of Dayton
  </div>
  <div class="xp-hero-badges">
    <span class="xp-badge">🎓 MS Computer Science</span>
    <span class="xp-badge">⚡ 2+ Years Industry</span>
    <span class="xp-badge">🔬 CV Research</span>
    <span class="xp-badge">📍 Dayton, OH</span>
  </div>
  <div class="xp-stat-row" style="margin-top:16px">
    <div class="xp-stat-box"><span class="xp-stat-number">2+</span><span class="xp-stat-label">Years Exp.</span></div>
    <div class="xp-stat-box"><span class="xp-stat-number">91.7%</span><span class="xp-stat-label">Thesis Acc.</span></div>
    <div class="xp-stat-box"><span class="xp-stat-number">15+</span><span class="xp-stat-label">Projects</span></div>
  </div>
</div>`
    },

    about: {
        title:  'About Me — Notepad',
        icon:   '📄',
        w: 500, h: 380,
        menubar: ['File', 'Edit', 'Format', 'View', 'Help'],
        status:  'Ln 1, Col 1',
        content: () => `<div class="xp-notepad-content">========================================
  ABOUT SOHAM CHOUSALKAR
  Version 2026.08 | Build: Graduate
========================================

NAME:     Soham Chousalkar
ROLE:     Software Engineer
STATUS:   Open to Opportunities ✅

----------------------------------------
PROFILE
----------------------------------------

Master's student in Computer Science at
the University of Dayton. 2+ years of
professional software engineering across
fintech and enterprise retail.

Deep expertise in:
  • Backend systems & distributed APIs
  • ML inference pipelines (PyTorch/CUDA)
  • Computer vision research
  • High-throughput data engineering

Current Thesis: Pianist Gesture Recognition
  • End-to-end DNN pipeline (PyTorch/CUDA)
  • 10+ models benchmarked
  • 91.68% accuracy
  • 10–30ms per-frame on RTX 4060/4090

----------------------------------------
[END OF FILE]</div>`
    },

    experience: {
        title:  'Experience — Microsoft Word',
        icon:   '📝',
        w: 640, h: 540,
        menubar: ['File', 'Edit', 'View', 'Insert', 'Format', 'Help'],
        status:  'Page 1 of 1  |  3 entries',
        content: () => `
<div class="xp-timeline">
  <div class="xp-timeline-item">
    <div class="xp-timeline-role">Associate Software Engineer</div>
    <div class="xp-timeline-company">🏦 Global Payments Asia Pacific</div>
    <div class="xp-timeline-dates">Jan 2024 – Jun 2024</div>
    <ul class="xp-timeline-list">
      <li>Designed high-throughput REST APIs streaming real-time analytics to 2.5M+ active users</li>
      <li>Built payment-tracking pipelines automating 150K+ daily billing transactions</li>
      <li>Optimized PostgreSQL indexing + Redis caching → 38% latency cut, 4,500 RPS</li>
      <li>Implemented OAuth 2.0/JWT auth securing 10M+ financial records (GDPR-aligned)</li>
      <li>CI/CD pipelines: deployment times ↓40%, rollbacks under 1%</li>
      <li>ML anomaly detection catching fraudulent transactions at 94.5% precision</li>
      <li>Led code reviews across 4 engineering groups → test coverage 85%</li>
    </ul>
  </div>
  <div class="xp-timeline-item">
    <div class="xp-timeline-role">Software Engineer I</div>
    <div class="xp-timeline-company">🏪 NCR Corp. / NCR VOYIX</div>
    <div class="xp-timeline-dates">Feb 2022 – Dec 2023</div>
    <ul class="xp-timeline-list">
      <li>Built backend APIs powering enterprise POS workflows across 1,200+ retail locations</li>
      <li>Redesigned DB schemas → p99 latency: 220ms → 85ms</li>
      <li>React/WebSocket dashboards with Redis → sub-50ms real-time updates</li>
      <li>Jest + PyTest suites: test coverage 55% → 88%</li>
      <li>ETL pipelines processing 2TB+ raw daily transaction data</li>
      <li>Dockerized ECS via Jenkins: staging-to-prod variance ↓60%</li>
      <li>Zero schema misalignments coordinating with UI/UX teams</li>
    </ul>
  </div>
  <div class="xp-timeline-item">
    <div class="xp-timeline-role">Computer Vision Lab Research Intern</div>
    <div class="xp-timeline-company">🎓 University of Dayton</div>
    <div class="xp-timeline-dates">Jan 2025 – Present</div>
    <ul class="xp-timeline-list">
      <li>Training AI models: 14 bird species parent/chick ID in real-time, 98% accuracy</li>
      <li>Thesis: Pianist Gesture Recognition — 10+ models, 91.68% acc., 10–30ms latency</li>
    </ul>
  </div>
</div>`
    },

    projects: {
        title:    'Projects — Windows Explorer',
        icon:     '📁',
        w: 660, h: 500,
        menubar:  ['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'],
        address:  'My Computer\\Soham\\Projects',
        status:   '4 objects',
        content:  () => `
<div class="xp-project-grid">
  <div class="xp-project-tile" onclick="window.open('https://pay-check-lilac.vercel.app/','_blank','noopener')">
    <span class="xp-project-icon">💳</span>
    <div class="xp-project-name">PayCheck &nbsp;<span class="xp-live-badge">LIVE ↗</span></div>
    <div class="xp-project-desc">Full-stack payroll. 100% accuracy, 10K+ pay structures/month. Stripe + Zoom + Gmail APIs. 99.9% uptime.</div>
    <div class="xp-project-tags"><span class="xp-tag">Python</span><span class="xp-tag">SQL</span><span class="xp-tag">React</span><span class="xp-tag">Stripe</span></div>
  </div>
  <div class="xp-project-tile" onclick="window.open('https://github.com/Soham-Chousalkar/Gesture-Brush','_blank','noopener')">
    <span class="xp-project-icon">✋</span>
    <div class="xp-project-name">Air Brush</div>
    <div class="xp-project-desc">CV gesture recognition: 96.2% accuracy, &lt;50ms inference. 4-thread pipeline = 2.8× throughput boost.</div>
    <div class="xp-project-tags"><span class="xp-tag">Python</span><span class="xp-tag">OpenCV</span><span class="xp-tag">Deep Learning</span></div>
  </div>
  <div class="xp-project-tile" onclick="window.open('https://github.com/Soham-Chousalkar/virtual-campus','_blank','noopener')">
    <span class="xp-project-icon">🏫</span>
    <div class="xp-project-name">Virtual Campus</div>
    <div class="xp-project-desc">3D campus sim: 300+ concurrent clients, 60fps, 3.5× network throughput via distributed multithreading.</div>
    <div class="xp-project-tags"><span class="xp-tag">Unity</span><span class="xp-tag">C#</span><span class="xp-tag">Blender</span></div>
  </div>
  <div class="xp-project-tile" onclick="window.open('https://github.com/Soham-Chousalkar','_blank','noopener')">
    <span class="xp-project-icon">☕</span>
    <div class="xp-project-name">JavaFX Suite</div>
    <div class="xp-project-desc">Multi-app JavaFX suite: 60fps puzzle engine, ASCII generator (1K chars &lt;100ms), runtime inspector.</div>
    <div class="xp-project-tags"><span class="xp-tag">Java</span><span class="xp-tag">JavaFX</span></div>
  </div>
</div>`
    },

    skills: {
        title:  'Skills.reg — Registry Editor',
        icon:   '⚙️',
        w: 600, h: 460,
        menubar: ['Registry', 'Edit', 'View', 'Favorites', 'Help'],
        status:  'HKEY_CURRENT_USER\\Skills',
        content: () => `
<div class="xp-registry-container">
  <div class="xp-registry-tree">
    ${[
        { id: 'languages',  icon: '🔤', label: '📁 Languages'          },
        { id: 'frameworks', icon: '🔧', label: '📁 Frameworks'          },
        { id: 'cloud',      icon: '☁️', label: '📁 Cloud &amp; DevOps' },
        { id: 'databases',  icon: '🗄️', label: '📁 Databases'          },
        { id: 'practices',  icon: '📐', label: '📁 Eng. Practices'      },
    ].map((c, i) => `
      <div class="xp-tree-item${i === 0 ? ' selected' : ''}"
           onclick="selectSkillCategory('${c.id}',this)"
           data-cat="${c.id}">
        <span class="xp-tree-icon">${c.icon}</span>
        <span>${c.label}</span>
      </div>`).join('')}
  </div>
  <div class="xp-registry-values">
    <div class="xp-reg-header">Name &nbsp;&nbsp;&nbsp;&nbsp; Data</div>
    <div id="skills-pills" class="xp-skill-pills">
      ${SKILL_DATA.languages.map(s => `<span class="xp-skill-pill">${s}</span>`).join('')}
    </div>
  </div>
</div>`
    },

    education: {
        title:  'Education.pdf — Adobe Reader',
        icon:   '📚',
        w: 560, h: 420,
        menubar: ['File', 'Edit', 'View', 'Document', 'Help'],
        status:  'Page 1 of 1',
        content: () => `
<div>
  <div class="xp-edu-card">
    <div class="xp-edu-degree">Master of Science, Computer Science</div>
    <div class="xp-edu-inst">🎓 University of Dayton</div>
    <div class="xp-edu-meta">📍 Dayton, OH &nbsp;|&nbsp; Expected May 2026</div>
    <span class="xp-edu-gpa">GPA: 3.7 / 4.0</span>
    <div class="xp-edu-thesis">
      <strong>Thesis:</strong> Pianist Gesture Recognition — End-to-end DNN inference pipeline (PyTorch/CUDA).
      Benchmarked 10+ models across visual, skeletal, and spatial-structural paradigms.
      <strong>91.68% accuracy</strong>, 10–30ms per-frame latency on RTX 4060/4090.
    </div>
  </div>
  <div class="xp-edu-card">
    <div class="xp-edu-degree">Bachelor of Engineering, Computer Science</div>
    <div class="xp-edu-inst">🏫 Neil Gogte Institute of Technology</div>
    <div class="xp-edu-meta">📍 Hyderabad, India &nbsp;|&nbsp; Apr 2019 – Jun 2023</div>
    <span class="xp-edu-gpa">GPA: 8.0 / 10</span>
  </div>
</div>`
    },

    contact: {
        title:  'Contact.eml — Outlook Express',
        icon:   '📧',
        w: 480, h: 360,
        menubar: ['File', 'Edit', 'View', 'Tools', 'Message', 'Help'],
        status:  '4 contacts | Ready',
        content: () => `
<div style="padding:4px 0">
  <p style="font-size:12px;color:#333;margin-bottom:12px;line-height:1.6">
    Always open to new opportunities, interesting projects,<br>or just a good chat about technology.
  </p>
  <div class="xp-contact-list">
    <a href="mailto:sohamchousalkar123@gmail.com" class="xp-contact-item">
      <span class="xp-contact-icon">📧</span>
      <div><span class="xp-contact-label">Email</span><span class="xp-contact-value">sohamchousalkar123@gmail.com</span></div>
    </a>
    <a href="https://linkedin.com/in/sohamchousalkar" target="_blank" rel="noopener" class="xp-contact-item">
      <span class="xp-contact-icon">💼</span>
      <div><span class="xp-contact-label">LinkedIn</span><span class="xp-contact-value">linkedin.com/in/sohamchousalkar</span></div>
    </a>
    <a href="https://github.com/Soham-Chousalkar" target="_blank" rel="noopener" class="xp-contact-item">
      <span class="xp-contact-icon">🐙</span>
      <div><span class="xp-contact-label">GitHub</span><span class="xp-contact-value">github.com/Soham-Chousalkar</span></div>
    </a>
    <a href="https://soham-portfolio-sepia-eta.vercel.app" target="_blank" rel="noopener" class="xp-contact-item">
      <span class="xp-contact-icon">🌐</span>
      <div><span class="xp-contact-label">Portfolio</span><span class="xp-contact-value">soham-portfolio-sepia-eta.vercel.app</span></div>
    </a>
  </div>
</div>`
    },
};

// ============================================================
// WINDOW MANAGER
// ============================================================
class WindowManager {
    constructor(container) {
        this.container    = container;
        this.windows      = new Map();  // id → { el, state }
        this.zCounter     = 100;
        this.taskbarEl    = document.getElementById('xp-taskbar-windows');
        this.isMobile     = window.innerWidth < 768;
    }

    open(id) {
        if (this.windows.has(id)) {
            const w = this.windows.get(id);
            if (w.state === 'minimized') this.restore(id);
            else this.focus(id);
            return;
        }

        const cfg = WINDOWS[id];
        if (!cfg) return;

        const el = this._build(id, cfg);
        this.container.appendChild(el);

        if (!this.isMobile) {
            const off = this.windows.size * 24;
            const x   = Math.min(80  + off, window.innerWidth  - cfg.w - 24);
            const y   = Math.min(30  + off, window.innerHeight - cfg.h - 60);
            el.style.left   = Math.max(0, x) + 'px';
            el.style.top    = Math.max(0, y) + 'px';
            el.style.width  = cfg.w + 'px';
            el.style.height = cfg.h + 'px';
            this._drag(el);
            this._resize(el);
        }

        this.windows.set(id, { el, state: 'normal', savedPos: null });
        this._addBtn(id, cfg);
        this.focus(id);

        // Open animation
        el.style.transform  = 'scale(0.82)';
        el.style.opacity    = '0';
        el.style.transition = 'transform 0.13s ease, opacity 0.13s ease';
        requestAnimationFrame(() => {
            el.style.transform = 'scale(1)';
            el.style.opacity   = '1';
        });
        setTimeout(() => { el.style.transition = ''; }, 160);
    }

    close(id) {
        const w = this.windows.get(id);
        if (!w) return;
        w.el.style.transition = 'transform 0.1s ease, opacity 0.1s ease';
        w.el.style.transform  = 'scale(0.82)';
        w.el.style.opacity    = '0';
        setTimeout(() => { w.el.remove(); }, 110);
        this.windows.delete(id);
        this._removeBtn(id);
        // Focus last remaining window
        const rest = [...this.windows.keys()];
        if (rest.length) this.focus(rest[rest.length - 1]);
    }

    minimize(id) {
        const w = this.windows.get(id);
        if (!w || w.state === 'minimized') return;
        w.el.classList.add('minimized');
        w.state = 'minimized';
        const btn = this.taskbarEl.querySelector(`[data-tid="${id}"]`);
        if (btn) btn.classList.remove('active');
        // Focus next visible
        const vis = [...this.windows.entries()].filter(([k, v]) => v.state !== 'minimized' && k !== id);
        if (vis.length) this.focus(vis[vis.length - 1][0]);
    }

    maximize(id) {
        const w = this.windows.get(id);
        if (!w) return;
        if (w.state === 'maximized') {
            w.el.classList.remove('maximized');
            if (w.savedPos) {
                Object.assign(w.el.style, {
                    left: w.savedPos.l, top: w.savedPos.t,
                    width: w.savedPos.w, height: w.savedPos.h,
                });
            }
            w.state = 'normal';
            w.el.querySelector('.xp-btn-maximize').textContent = '□';
        } else {
            w.savedPos = { l: w.el.style.left, t: w.el.style.top, w: w.el.style.width, h: w.el.style.height };
            w.el.classList.add('maximized');
            w.state = 'maximized';
            w.el.querySelector('.xp-btn-maximize').textContent = '❐';
        }
    }

    restore(id) {
        const w = this.windows.get(id);
        if (!w) return;
        w.el.classList.remove('minimized');
        w.state = 'normal';
        this.focus(id);
    }

    focus(id) {
        this.windows.forEach(({ el }, k) => el.classList.toggle('focused', k === id));
        const w = this.windows.get(id);
        if (!w) return;
        w.el.style.zIndex = ++this.zCounter;
        this.taskbarEl.querySelectorAll('.xp-taskbar-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.tid === id);
        });
    }

    // ── Build window DOM ──────────────────────────────────
    _build(id, cfg) {
        const el = document.createElement('div');
        el.className = 'xp-window focused';
        el.dataset.wid = id;

        const menuHTML = cfg.menubar
            ? `<div class="xp-menubar">${cfg.menubar.map(m => `<span class="xp-menubar-item">${m}</span>`).join('')}</div>`
            : '';

        const addrHTML = cfg.address
            ? `<div class="xp-addressbar"><span class="xp-addressbar-label">Address</span><input class="xp-addressbar-path" value="${cfg.address}" readonly></div>`
            : '';

        const statusHTML = cfg.status !== undefined
            ? `<div class="xp-statusbar"><span>${cfg.status}</span><span class="xp-statusbar-grip" title="Resize">⠿⠿</span></div>`
            : '';

        el.innerHTML = `
<div class="xp-titlebar">
  <span class="xp-titlebar-icon">${cfg.icon}</span>
  <span class="xp-titlebar-title">${cfg.title}</span>
  <div class="xp-controls">
    <button class="xp-ctrl-btn xp-btn-minimize" data-action="minimize" data-wid="${id}" title="Minimize">_</button>
    <button class="xp-ctrl-btn xp-btn-maximize" data-action="maximize" data-wid="${id}" title="Maximize">□</button>
    <button class="xp-ctrl-btn xp-btn-close"    data-action="close"    data-wid="${id}" title="Close">✕</button>
  </div>
</div>
${menuHTML}${addrHTML}
<div class="xp-content">${cfg.content()}</div>
${statusHTML}
<div class="xp-resize-handle" data-wid="${id}"></div>`;

        el.querySelectorAll('.xp-ctrl-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const a = btn.dataset.action, w = btn.dataset.wid;
                if (a === 'close')    this.close(w);
                if (a === 'minimize') this.minimize(w);
                if (a === 'maximize') this.maximize(w);
            });
        });

        el.addEventListener('mousedown',  () => this.focus(id), true);
        el.addEventListener('touchstart', () => this.focus(id), { passive: true });

        return el;
    }

    // ── Taskbar button ────────────────────────────────────
    _addBtn(id, cfg) {
        const btn = document.createElement('button');
        btn.className = 'xp-taskbar-btn active';
        btn.dataset.tid = id;
        btn.innerHTML = `<span class="taskbar-btn-icon">${cfg.icon}</span><span class="taskbar-btn-title">${cfg.title}</span>`;
        btn.addEventListener('click', () => {
            const w = this.windows.get(id);
            if (!w) return;
            if (w.state === 'minimized') { this.restore(id); return; }
            if (w.el.classList.contains('focused')) this.minimize(id);
            else this.focus(id);
        });
        this.taskbarEl.appendChild(btn);
    }

    _removeBtn(id) {
        const btn = this.taskbarEl.querySelector(`[data-tid="${id}"]`);
        if (btn) btn.remove();
    }

    // ── Drag ─────────────────────────────────────────────
    _drag(el) {
        const tb = el.querySelector('.xp-titlebar');
        let sx, sy, sl, st, dragging = false;

        tb.addEventListener('pointerdown', e => {
            if (e.target.classList.contains('xp-ctrl-btn')) return;
            dragging = true;
            sx = e.clientX; sy = e.clientY;
            sl = parseInt(el.style.left) || 0;
            st = parseInt(el.style.top)  || 0;
            tb.setPointerCapture(e.pointerId);
            e.preventDefault();
        });

        tb.addEventListener('pointermove', e => {
            if (!dragging) return;
            const nL = Math.max(0, Math.min(window.innerWidth  - el.offsetWidth,  sl + e.clientX - sx));
            const nT = Math.max(0, Math.min(window.innerHeight - el.offsetHeight - 32, st + e.clientY - sy));
            el.style.left = nL + 'px';
            el.style.top  = nT + 'px';
        });

        tb.addEventListener('pointerup',     () => { dragging = false; });
        tb.addEventListener('pointercancel', () => { dragging = false; });

        tb.addEventListener('dblclick', e => {
            if (!e.target.classList.contains('xp-ctrl-btn')) this.maximize(el.dataset.wid);
        });
    }

    // ── Resize ───────────────────────────────────────────
    _resize(el) {
        const handle = el.querySelector('.xp-resize-handle');
        let sx, sy, sw, sh, resizing = false;

        handle.addEventListener('pointerdown', e => {
            resizing = true;
            sx = e.clientX; sy = e.clientY;
            sw = el.offsetWidth; sh = el.offsetHeight;
            handle.setPointerCapture(e.pointerId);
            e.preventDefault(); e.stopPropagation();
        });

        handle.addEventListener('pointermove', e => {
            if (!resizing) return;
            el.style.width  = Math.max(300, sw + e.clientX - sx) + 'px';
            el.style.height = Math.max(200, sh + e.clientY - sy) + 'px';
        });

        handle.addEventListener('pointerup',     () => { resizing = false; });
        handle.addEventListener('pointercancel', () => { resizing = false; });
    }
}

// ============================================================
// DESKTOP ICONS
// ============================================================
const ICONS = [
    { id: 'hero',        icon: '👤', label: 'Soham\nChousalkar' },
    { id: 'about',       icon: '📄', label: 'About Me'          },
    { id: 'experience',  icon: '📝', label: 'Experience'        },
    { id: 'projects',    icon: '📁', label: 'My Projects'       },
    { id: 'skills',      icon: '⚙️', label: 'Skills'            },
    { id: 'education',   icon: '📚', label: 'Education'         },
    { id: 'contact',     icon: '📧', label: 'Contact'           },
    { id: '_recycle',    icon: '🗑️', label: 'Recycle Bin'       },
];

function buildDesktopIcons(wm) {
    const container = document.getElementById('desktop-icons');
    if (!container) return;

    ICONS.forEach(ic => {
        const div = document.createElement('div');
        div.className  = 'desktop-icon';
        div.tabIndex   = 0;
        div.innerHTML  = `<span class="icon-img">${ic.icon}</span><span class="icon-label">${ic.label}</span>`;

        let clicks = 0, clickTimer;
        div.addEventListener('click', e => {
            e.stopPropagation();
            // Deselect others
            container.querySelectorAll('.desktop-icon').forEach(d => d.classList.remove('selected'));
            div.classList.add('selected');
            clicks++;
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                if (clicks >= 2) {
                    if (ic.id === '_recycle') triggerRecycleBin(wm);
                    else wm.open(ic.id);
                }
                clicks = 0;
            }, 280);
        });

        div.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                if (ic.id === '_recycle') triggerRecycleBin(wm);
                else wm.open(ic.id);
            }
        });

        container.appendChild(div);
    });

    // Deselect on Bliss click
    document.getElementById('bliss-canvas')?.addEventListener('click', () => {
        container.querySelectorAll('.desktop-icon').forEach(d => d.classList.remove('selected'));
    });
}

// ============================================================
// START MENU
// ============================================================
function buildStartMenu(wm) {
    const menu   = document.getElementById('xp-start-menu');
    const startBtn = document.getElementById('xp-start-btn');
    if (!menu || !startBtn) return;

    const left = [
        { id: 'hero',       icon: '👤', name: 'About Soham',    sub: 'Profile & Overview' },
        { id: 'experience', icon: '📝', name: 'Experience.doc', sub: 'Work History'        },
        { id: 'projects',   icon: '📁', name: 'My Projects',    sub: 'Portfolio Work'      },
        { id: 'contact',    icon: '📧', name: 'Send Message',   sub: 'Contact Info'        },
    ];

    const right = [
        { id: 'about',     icon: '📄', name: 'My Profile',      sub: '' },
        { id: 'skills',    icon: '⚙️', name: 'Skills Registry', sub: '' },
        { id: 'education', icon: '📚', name: 'Education',       sub: '' },
    ];

    menu.innerHTML = `
<div class="start-menu-header">
  <div class="start-menu-avatar">👨‍💻</div>
  <div class="start-menu-username">Soham Chousalkar</div>
</div>
<div class="start-menu-body">
  <div class="start-menu-left">
    ${left.map(i => `
      <div class="start-item" data-open="${i.id}">
        <span class="start-item-icon">${i.icon}</span>
        <span>
          <span class="start-item-name">${i.name}</span>
          ${i.sub ? `<span class="start-item-sub">${i.sub}</span>` : ''}
        </span>
      </div>`).join('')}
    <div class="start-menu-separator"></div>
    <div class="start-item" onclick="window.open('https://github.com/Soham-Chousalkar','_blank','noopener')">
      <span class="start-item-icon">🐙</span><span class="start-item-name">GitHub Profile</span>
    </div>
    <div class="start-item" onclick="window.open('https://linkedin.com/in/sohamchousalkar','_blank','noopener')">
      <span class="start-item-icon">💼</span><span class="start-item-name">LinkedIn</span>
    </div>
  </div>
  <div class="start-menu-right">
    ${right.map(i => `
      <div class="start-item" data-open="${i.id}">
        <span class="start-item-icon">${i.icon}</span>
        <span class="start-item-name">${i.name}</span>
      </div>`).join('')}
  </div>
</div>
<div class="start-menu-footer">
  <button class="start-footer-btn" id="btn-logoff">🚪 Log Off</button>
  <button class="start-footer-btn" id="btn-shutdown">🔴 Shut Down...</button>
</div>`;

    menu.querySelectorAll('[data-open]').forEach(item => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            wm.open(item.dataset.open);
            menu.setAttribute('hidden', '');
        });
    });

    document.getElementById('btn-shutdown').addEventListener('click', e => {
        e.stopPropagation();
        menu.setAttribute('hidden', '');
        triggerBSOD();
    });

    document.getElementById('btn-logoff').addEventListener('click', e => {
        e.stopPropagation();
        menu.setAttribute('hidden', '');
        [...wm.windows.keys()].forEach(id => wm.close(id));
    });

    // Toggle on Start click
    startBtn.addEventListener('click', e => {
        e.stopPropagation();
        menu.hasAttribute('hidden') ? menu.removeAttribute('hidden') : menu.setAttribute('hidden', '');
    });

    // Close on outside click
    document.addEventListener('click', () => menu.setAttribute('hidden', ''));
}

// ============================================================
// DESKTOP CONTEXT MENU
// ============================================================
function initContextMenu(wm) {
    const menu = document.getElementById('xp-context-menu');
    if (!menu) return;

    document.getElementById('bliss-canvas')?.addEventListener('contextmenu', e => {
        e.preventDefault();
        menu.innerHTML = `
<div class="ctx-item ctx-disabled">Arrange Icons By</div>
<div class="ctx-separator"></div>
<div class="ctx-item" id="ctx-refresh">🔄 Refresh</div>
<div class="ctx-separator"></div>
<div class="ctx-item" id="ctx-open-all">📂 Open All Windows</div>
<div class="ctx-item" id="ctx-close-all">❌ Close All Windows</div>
<div class="ctx-separator"></div>
<div class="ctx-item ctx-disabled">Properties</div>`;

        const x = Math.min(e.clientX, window.innerWidth  - 190);
        const y = Math.min(e.clientY, window.innerHeight - 180);
        menu.style.left = x + 'px';
        menu.style.top  = y + 'px';
        menu.removeAttribute('hidden');

        document.getElementById('ctx-refresh')?.addEventListener('click',    () => window.location.reload(), { once: true });
        document.getElementById('ctx-open-all')?.addEventListener('click',   () => { Object.keys(WINDOWS).forEach(id => wm.open(id)); menu.setAttribute('hidden',''); }, { once: true });
        document.getElementById('ctx-close-all')?.addEventListener('click',  () => { [...wm.windows.keys()].forEach(id => wm.close(id)); menu.setAttribute('hidden',''); }, { once: true });
    });

    document.addEventListener('click', () => menu.setAttribute('hidden', ''));
}

// ============================================================
// BSOD EASTER EGG
// ============================================================
function triggerBSOD() {
    const bsod = document.getElementById('xp-bsod');
    if (!bsod) return;

    bsod.innerHTML = `
<div class="bsod-header">&nbsp;Windows&nbsp;</div>
<div class="bsod-text">
  A fatal exception has occurred at <span class="bsod-highlight">0x00000000</span>.<br><br>
  <span class="bsod-highlight">SOHAM_CHOUSALKAR_IS_AVAILABLE</span><br><br>
  If you are seeing this screen, Soham's talent has caused a stack overflow<br>
  in your expectations. Your expectations need to be revised.<br><br>
  * Press any key to proceed with hiring Soham.<br>
  * If this is the first time you've seen this screen,<br>
    restart the hiring process and check qualifications.<br><br>
  Technical Information:<br>
  *** STOP: 0x0000HIRE (0x00000000, 0xC0FFEEEE, 0xD0D0CACE, 0x2026GRAD)<br><br>
  <span style="opacity:0.7;font-size:12px">Beginning physical memory dump ···</span>
</div>
<div style="margin-top:auto;font-size:12px;opacity:0.8" id="bsod-countdown">Returning to desktop in 5 seconds...</div>`;

    bsod.removeAttribute('hidden');
    let n = 5;
    const iv = setInterval(() => {
        n--;
        const el = document.getElementById('bsod-countdown');
        if (el) el.textContent = n > 0 ? `Returning to desktop in ${n} seconds...` : 'Goodbye!';
        if (n <= 0) { clearInterval(iv); bsod.setAttribute('hidden', ''); }
    }, 1000);

    bsod.addEventListener('click', () => { clearInterval(iv); bsod.setAttribute('hidden', ''); }, { once: true });
}

// ============================================================
// RECYCLE BIN EASTER EGG
// ============================================================
function triggerRecycleBin(wm) {
    WINDOWS['_recycle'] = {
        title:  'Recycle Bin',
        icon:   '🗑️',
        w: 420, h: 210,
        menubar: ['File', 'Edit', 'View', 'Help'],
        status:  '0 objects | 0 bytes',
        content: () => `
<div style="text-align:center;padding:32px 20px">
  <div style="font-size:52px;margin-bottom:14px">🗑️</div>
  <p style="font-size:13px;color:#444;line-height:1.7">
    The Recycle Bin is empty.<br>
    <strong style="color:#000080">Soham has no regrets.</strong>
  </p>
</div>`
    };
    wm.open('_recycle');
}

// ============================================================
// MOBILE — Open all windows as stacked cards
// ============================================================
function handleMobile(wm) {
    if (window.innerWidth >= 768) return;
    ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].forEach(id => wm.open(id));
}

// ============================================================
// BOOT
// ============================================================
function boot() {
    const container = document.getElementById('xp-windows-container');
    if (!container) return;

    const wm = new WindowManager(container);
    window.XPDesktop = { wm };  // Expose for visitor-counter.js

    buildDesktopIcons(wm);
    buildStartMenu(wm);
    initContextMenu(wm);
    handleMobile(wm);

    // Auto-open welcome window on desktop
    if (window.innerWidth >= 768) {
        setTimeout(() => wm.open('hero'), 250);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
