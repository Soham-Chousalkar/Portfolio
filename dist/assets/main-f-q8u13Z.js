(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function E(a){const e=a.getContext("2d"),t=a.width/(window.devicePixelRatio||1),s=a.height/(window.devicePixelRatio||1),n=e.createLinearGradient(0,0,0,s*.64);n.addColorStop(0,"#3A7EC8"),n.addColorStop(.25,"#5898DC"),n.addColorStop(.6,"#88BEF0"),n.addColorStop(1,"#B8DCF8"),e.fillStyle=n,e.fillRect(0,0,t,s);const i=s*.58;e.beginPath(),e.moveTo(0,s),e.lineTo(0,i+s*.07),e.bezierCurveTo(t*.12,i-s*.07,t*.28,i+s*.02,t*.44,i-s*.01),e.bezierCurveTo(t*.56,i-s*.05,t*.68,i+s*.06,t*.82,i-s*.02),e.bezierCurveTo(t*.91,i-s*.06,t,i+s*.03,t,s),e.closePath();const o=e.createLinearGradient(0,i-s*.07,0,s);o.addColorStop(0,"#68C038"),o.addColorStop(.25,"#4EA820"),o.addColorStop(.6,"#388A10"),o.addColorStop(1,"#246208"),e.fillStyle=o,e.fill();function c(r,l,d){e.save(),e.globalAlpha=.52,e.fillStyle="#FFFFFF";const p=(b,f,y,w)=>{e.beginPath(),e.ellipse(r+b*d,l+f*d,y*d,w*d,0,0,Math.PI*2),e.fill()};p(0,0,44,18),p(-30,7,26,14),p(30,9,30,14),p(-14,-8,30,17),p(16,-7,34,18),e.restore()}c(t*.18,s*.16,1),c(t*.62,s*.1,1.3),c(t*.84,s*.2,.75),c(t*.4,s*.26,.6)}function h(){const a=document.getElementById("bliss-canvas");if(!a)return;function e(){const s=Math.min(window.devicePixelRatio||1,2),n=window.innerWidth,i=window.innerHeight;a.width=n*s,a.height=i*s,a.style.width=n+"px",a.style.height=i+"px",a.getContext("2d").scale(s,s),E(a)}e();let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(e,180)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();const u={languages:["Python","Java","JavaScript","TypeScript","SQL","C#","Ruby","Go","Scala"],frameworks:["Node.js","React","Express","Spring","Flask","FastAPI"],cloud:["AWS","Docker","Kubernetes","CI/CD","Linux","Shell Scripting"],databases:["PostgreSQL","MySQL","Oracle","Redis","SQLite"],practices:["System Design","API Development","Code Reviews","Unit/Integration Testing","ETL Pipelines"]};window.selectSkillCategory=function(a,e){document.querySelectorAll(".xp-tree-item").forEach(s=>s.classList.remove("selected")),e.classList.add("selected");const t=document.getElementById("skills-pills");t&&u[a]&&(t.innerHTML=u[a].map(s=>`<span class="xp-skill-pill">${s}</span>`).join(""))};const m={hero:{title:"Soham Chousalkar — Welcome",icon:"👤",w:560,h:340,menubar:!1,status:"Ready",content:()=>`
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
</div>`},about:{title:"About Me — Notepad",icon:"📄",w:500,h:380,menubar:["File","Edit","Format","View","Help"],status:"Ln 1, Col 1",content:()=>`<div class="xp-notepad-content">========================================
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
[END OF FILE]</div>`},experience:{title:"Experience — Microsoft Word",icon:"📝",w:640,h:540,menubar:["File","Edit","View","Insert","Format","Help"],status:"Page 1 of 1  |  3 entries",content:()=>`
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
</div>`},projects:{title:"Projects — Windows Explorer",icon:"📁",w:660,h:500,menubar:["File","Edit","View","Favorites","Tools","Help"],address:"My Computer\\Soham\\Projects",status:"4 objects",content:()=>`
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
</div>`},skills:{title:"Skills.reg — Registry Editor",icon:"⚙️",w:600,h:460,menubar:["Registry","Edit","View","Favorites","Help"],status:"HKEY_CURRENT_USER\\Skills",content:()=>`
<div class="xp-registry-container">
  <div class="xp-registry-tree">
    ${[{id:"languages",icon:"🔤",label:"📁 Languages"},{id:"frameworks",icon:"🔧",label:"📁 Frameworks"},{id:"cloud",icon:"☁️",label:"📁 Cloud &amp; DevOps"},{id:"databases",icon:"🗄️",label:"📁 Databases"},{id:"practices",icon:"📐",label:"📁 Eng. Practices"}].map((a,e)=>`
      <div class="xp-tree-item${e===0?" selected":""}"
           onclick="selectSkillCategory('${a.id}',this)"
           data-cat="${a.id}">
        <span class="xp-tree-icon">${a.icon}</span>
        <span>${a.label}</span>
      </div>`).join("")}
  </div>
  <div class="xp-registry-values">
    <div class="xp-reg-header">Name &nbsp;&nbsp;&nbsp;&nbsp; Data</div>
    <div id="skills-pills" class="xp-skill-pills">
      ${u.languages.map(a=>`<span class="xp-skill-pill">${a}</span>`).join("")}
    </div>
  </div>
</div>`},education:{title:"Education.pdf — Adobe Reader",icon:"📚",w:560,h:420,menubar:["File","Edit","View","Document","Help"],status:"Page 1 of 1",content:()=>`
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
</div>`},contact:{title:"Contact.eml — Outlook Express",icon:"📧",w:480,h:360,menubar:["File","Edit","View","Tools","Message","Help"],status:"4 contacts | Ready",content:()=>`
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
</div>`}};class k{constructor(e){this.container=e,this.windows=new Map,this.zCounter=100,this.taskbarEl=document.getElementById("xp-taskbar-windows"),this.isMobile=window.innerWidth<768}open(e){if(this.windows.has(e)){this.windows.get(e).state==="minimized"?this.restore(e):this.focus(e);return}const t=m[e];if(!t)return;const s=this._build(e,t);if(this.container.appendChild(s),!this.isMobile){const n=this.windows.size*24,i=Math.min(80+n,window.innerWidth-t.w-24),o=Math.min(30+n,window.innerHeight-t.h-60);s.style.left=Math.max(0,i)+"px",s.style.top=Math.max(0,o)+"px",s.style.width=t.w+"px",s.style.height=t.h+"px",this._drag(s),this._resize(s)}this.windows.set(e,{el:s,state:"normal",savedPos:null}),this._addBtn(e,t),this.focus(e),s.style.transform="scale(0.82)",s.style.opacity="0",s.style.transition="transform 0.13s ease, opacity 0.13s ease",requestAnimationFrame(()=>{s.style.transform="scale(1)",s.style.opacity="1"}),setTimeout(()=>{s.style.transition=""},160)}close(e){const t=this.windows.get(e);if(!t)return;t.el.style.transition="transform 0.1s ease, opacity 0.1s ease",t.el.style.transform="scale(0.82)",t.el.style.opacity="0",setTimeout(()=>{t.el.remove()},110),this.windows.delete(e),this._removeBtn(e);const s=[...this.windows.keys()];s.length&&this.focus(s[s.length-1])}minimize(e){const t=this.windows.get(e);if(!t||t.state==="minimized")return;t.el.classList.add("minimized"),t.state="minimized";const s=this.taskbarEl.querySelector(`[data-tid="${e}"]`);s&&s.classList.remove("active");const n=[...this.windows.entries()].filter(([i,o])=>o.state!=="minimized"&&i!==e);n.length&&this.focus(n[n.length-1][0])}maximize(e){const t=this.windows.get(e);t&&(t.state==="maximized"?(t.el.classList.remove("maximized"),t.savedPos&&Object.assign(t.el.style,{left:t.savedPos.l,top:t.savedPos.t,width:t.savedPos.w,height:t.savedPos.h}),t.state="normal",t.el.querySelector(".xp-btn-maximize").textContent="□"):(t.savedPos={l:t.el.style.left,t:t.el.style.top,w:t.el.style.width,h:t.el.style.height},t.el.classList.add("maximized"),t.state="maximized",t.el.querySelector(".xp-btn-maximize").textContent="❐"))}restore(e){const t=this.windows.get(e);t&&(t.el.classList.remove("minimized"),t.state="normal",this.focus(e))}focus(e){this.windows.forEach(({el:s},n)=>s.classList.toggle("focused",n===e));const t=this.windows.get(e);t&&(t.el.style.zIndex=++this.zCounter,this.taskbarEl.querySelectorAll(".xp-taskbar-btn").forEach(s=>{s.classList.toggle("active",s.dataset.tid===e)}))}_build(e,t){const s=document.createElement("div");s.className="xp-window focused",s.dataset.wid=e;const n=t.menubar?`<div class="xp-menubar">${t.menubar.map(c=>`<span class="xp-menubar-item">${c}</span>`).join("")}</div>`:"",i=t.address?`<div class="xp-addressbar"><span class="xp-addressbar-label">Address</span><input class="xp-addressbar-path" value="${t.address}" readonly></div>`:"",o=t.status!==void 0?`<div class="xp-statusbar"><span>${t.status}</span><span class="xp-statusbar-grip" title="Resize">⠿⠿</span></div>`:"";return s.innerHTML=`
<div class="xp-titlebar">
  <span class="xp-titlebar-icon">${t.icon}</span>
  <span class="xp-titlebar-title">${t.title}</span>
  <div class="xp-controls">
    <button class="xp-ctrl-btn xp-btn-minimize" data-action="minimize" data-wid="${e}" title="Minimize">_</button>
    <button class="xp-ctrl-btn xp-btn-maximize" data-action="maximize" data-wid="${e}" title="Maximize">□</button>
    <button class="xp-ctrl-btn xp-btn-close"    data-action="close"    data-wid="${e}" title="Close">✕</button>
  </div>
</div>
${n}${i}
<div class="xp-content">${t.content()}</div>
${o}
<div class="xp-resize-handle" data-wid="${e}"></div>`,s.querySelectorAll(".xp-ctrl-btn").forEach(c=>{c.addEventListener("click",r=>{r.stopPropagation();const l=c.dataset.action,d=c.dataset.wid;l==="close"&&this.close(d),l==="minimize"&&this.minimize(d),l==="maximize"&&this.maximize(d)})}),s.addEventListener("mousedown",()=>this.focus(e),!0),s.addEventListener("touchstart",()=>this.focus(e),{passive:!0}),s}_addBtn(e,t){const s=document.createElement("button");s.className="xp-taskbar-btn active",s.dataset.tid=e,s.innerHTML=`<span class="taskbar-btn-icon">${t.icon}</span><span class="taskbar-btn-title">${t.title}</span>`,s.addEventListener("click",()=>{const n=this.windows.get(e);if(n){if(n.state==="minimized"){this.restore(e);return}n.el.classList.contains("focused")?this.minimize(e):this.focus(e)}}),this.taskbarEl.appendChild(s)}_removeBtn(e){const t=this.taskbarEl.querySelector(`[data-tid="${e}"]`);t&&t.remove()}_drag(e){const t=e.querySelector(".xp-titlebar");let s,n,i,o,c=!1;t.addEventListener("pointerdown",r=>{r.target.classList.contains("xp-ctrl-btn")||(c=!0,s=r.clientX,n=r.clientY,i=parseInt(e.style.left)||0,o=parseInt(e.style.top)||0,t.setPointerCapture(r.pointerId),r.preventDefault())}),t.addEventListener("pointermove",r=>{if(!c)return;const l=Math.max(0,Math.min(window.innerWidth-e.offsetWidth,i+r.clientX-s)),d=Math.max(0,Math.min(window.innerHeight-e.offsetHeight-32,o+r.clientY-n));e.style.left=l+"px",e.style.top=d+"px"}),t.addEventListener("pointerup",()=>{c=!1}),t.addEventListener("pointercancel",()=>{c=!1}),t.addEventListener("dblclick",r=>{r.target.classList.contains("xp-ctrl-btn")||this.maximize(e.dataset.wid)})}_resize(e){const t=e.querySelector(".xp-resize-handle");let s,n,i,o,c=!1;t.addEventListener("pointerdown",r=>{c=!0,s=r.clientX,n=r.clientY,i=e.offsetWidth,o=e.offsetHeight,t.setPointerCapture(r.pointerId),r.preventDefault(),r.stopPropagation()}),t.addEventListener("pointermove",r=>{c&&(e.style.width=Math.max(300,i+r.clientX-s)+"px",e.style.height=Math.max(200,o+r.clientY-n)+"px")}),t.addEventListener("pointerup",()=>{c=!1}),t.addEventListener("pointercancel",()=>{c=!1})}}const S=[{id:"hero",icon:"👤",label:`Soham
Chousalkar`},{id:"about",icon:"📄",label:"About Me"},{id:"experience",icon:"📝",label:"Experience"},{id:"projects",icon:"📁",label:"My Projects"},{id:"skills",icon:"⚙️",label:"Skills"},{id:"education",icon:"📚",label:"Education"},{id:"contact",icon:"📧",label:"Contact"},{id:"_recycle",icon:"🗑️",label:"Recycle Bin"}];function L(a){var t;const e=document.getElementById("desktop-icons");e&&(S.forEach(s=>{const n=document.createElement("div");n.className="desktop-icon",n.tabIndex=0,n.innerHTML=`<span class="icon-img">${s.icon}</span><span class="icon-label">${s.label}</span>`;let i=0,o;n.addEventListener("click",c=>{c.stopPropagation(),e.querySelectorAll(".desktop-icon").forEach(r=>r.classList.remove("selected")),n.classList.add("selected"),i++,clearTimeout(o),o=setTimeout(()=>{i>=2&&(s.id==="_recycle"?v(a):a.open(s.id)),i=0},280)}),n.addEventListener("keydown",c=>{c.key==="Enter"&&(s.id==="_recycle"?v(a):a.open(s.id))}),e.appendChild(n)}),(t=document.getElementById("bliss-canvas"))==null||t.addEventListener("click",()=>{e.querySelectorAll(".desktop-icon").forEach(s=>s.classList.remove("selected"))}))}function C(a){const e=document.getElementById("xp-start-menu"),t=document.getElementById("xp-start-btn");if(!e||!t)return;const s=[{id:"hero",icon:"👤",name:"About Soham",sub:"Profile & Overview"},{id:"experience",icon:"📝",name:"Experience.doc",sub:"Work History"},{id:"projects",icon:"📁",name:"My Projects",sub:"Portfolio Work"},{id:"contact",icon:"📧",name:"Send Message",sub:"Contact Info"}],n=[{id:"about",icon:"📄",name:"My Profile",sub:""},{id:"skills",icon:"⚙️",name:"Skills Registry",sub:""},{id:"education",icon:"📚",name:"Education",sub:""}];e.innerHTML=`
<div class="start-menu-header">
  <div class="start-menu-avatar">👨‍💻</div>
  <div class="start-menu-username">Soham Chousalkar</div>
</div>
<div class="start-menu-body">
  <div class="start-menu-left">
    ${s.map(i=>`
      <div class="start-item" data-open="${i.id}">
        <span class="start-item-icon">${i.icon}</span>
        <span>
          <span class="start-item-name">${i.name}</span>
          ${i.sub?`<span class="start-item-sub">${i.sub}</span>`:""}
        </span>
      </div>`).join("")}
    <div class="start-menu-separator"></div>
    <div class="start-item" onclick="window.open('https://github.com/Soham-Chousalkar','_blank','noopener')">
      <span class="start-item-icon">🐙</span><span class="start-item-name">GitHub Profile</span>
    </div>
    <div class="start-item" onclick="window.open('https://linkedin.com/in/sohamchousalkar','_blank','noopener')">
      <span class="start-item-icon">💼</span><span class="start-item-name">LinkedIn</span>
    </div>
  </div>
  <div class="start-menu-right">
    ${n.map(i=>`
      <div class="start-item" data-open="${i.id}">
        <span class="start-item-icon">${i.icon}</span>
        <span class="start-item-name">${i.name}</span>
      </div>`).join("")}
  </div>
</div>
<div class="start-menu-footer">
  <button class="start-footer-btn" id="btn-logoff">🚪 Log Off</button>
  <button class="start-footer-btn" id="btn-shutdown">🔴 Shut Down...</button>
</div>`,e.querySelectorAll("[data-open]").forEach(i=>{i.addEventListener("click",o=>{o.stopPropagation(),a.open(i.dataset.open),e.setAttribute("hidden","")})}),document.getElementById("btn-shutdown").addEventListener("click",i=>{i.stopPropagation(),e.setAttribute("hidden",""),P()}),document.getElementById("btn-logoff").addEventListener("click",i=>{i.stopPropagation(),e.setAttribute("hidden",""),[...a.windows.keys()].forEach(o=>a.close(o))}),t.addEventListener("click",i=>{i.stopPropagation(),e.hasAttribute("hidden")?e.removeAttribute("hidden"):e.setAttribute("hidden","")}),document.addEventListener("click",()=>e.setAttribute("hidden",""))}function I(a){var t;const e=document.getElementById("xp-context-menu");e&&((t=document.getElementById("bliss-canvas"))==null||t.addEventListener("contextmenu",s=>{var o,c,r;s.preventDefault(),e.innerHTML=`
<div class="ctx-item ctx-disabled">Arrange Icons By</div>
<div class="ctx-separator"></div>
<div class="ctx-item" id="ctx-refresh">🔄 Refresh</div>
<div class="ctx-separator"></div>
<div class="ctx-item" id="ctx-open-all">📂 Open All Windows</div>
<div class="ctx-item" id="ctx-close-all">❌ Close All Windows</div>
<div class="ctx-separator"></div>
<div class="ctx-item ctx-disabled">Properties</div>`;const n=Math.min(s.clientX,window.innerWidth-190),i=Math.min(s.clientY,window.innerHeight-180);e.style.left=n+"px",e.style.top=i+"px",e.removeAttribute("hidden"),(o=document.getElementById("ctx-refresh"))==null||o.addEventListener("click",()=>window.location.reload(),{once:!0}),(c=document.getElementById("ctx-open-all"))==null||c.addEventListener("click",()=>{Object.keys(m).forEach(l=>a.open(l)),e.setAttribute("hidden","")},{once:!0}),(r=document.getElementById("ctx-close-all"))==null||r.addEventListener("click",()=>{[...a.windows.keys()].forEach(l=>a.close(l)),e.setAttribute("hidden","")},{once:!0})}),document.addEventListener("click",()=>e.setAttribute("hidden","")))}function P(){const a=document.getElementById("xp-bsod");if(!a)return;a.innerHTML=`
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
<div style="margin-top:auto;font-size:12px;opacity:0.8" id="bsod-countdown">Returning to desktop in 5 seconds...</div>`,a.removeAttribute("hidden");let e=5;const t=setInterval(()=>{e--;const s=document.getElementById("bsod-countdown");s&&(s.textContent=e>0?`Returning to desktop in ${e} seconds...`:"Goodbye!"),e<=0&&(clearInterval(t),a.setAttribute("hidden",""))},1e3);a.addEventListener("click",()=>{clearInterval(t),a.setAttribute("hidden","")},{once:!0})}function v(a){m._recycle={title:"Recycle Bin",icon:"🗑️",w:420,h:210,menubar:["File","Edit","View","Help"],status:"0 objects | 0 bytes",content:()=>`
<div style="text-align:center;padding:32px 20px">
  <div style="font-size:52px;margin-bottom:14px">🗑️</div>
  <p style="font-size:13px;color:#444;line-height:1.7">
    The Recycle Bin is empty.<br>
    <strong style="color:#000080">Soham has no regrets.</strong>
  </p>
</div>`},a.open("_recycle")}function A(a){window.innerWidth>=768||["hero","about","experience","projects","skills","education","contact"].forEach(e=>a.open(e))}function x(){const a=document.getElementById("xp-windows-container");if(!a)return;const e=new k(a);window.XPDesktop={wm:e},L(e),C(e),I(e),A(e),window.innerWidth>=768&&setTimeout(()=>e.open("hero"),250)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x();document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("tray-time"),e=document.getElementById("tray-clock-popup"),t=[{label:"Hyderabad 🇮🇳",zone:"Asia/Kolkata"},{label:"London 🇬🇧",zone:"Europe/London"},{label:"Arizona 🇺🇸",zone:"America/Phoenix"},{label:"Chicago 🇺🇸",zone:"America/Chicago"},{label:"Dayton 🇺🇸",zone:"America/New_York"}];function s(i){return new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:i})}function n(){if(a){const i=new Date,o=String(i.getHours()).padStart(2,"0"),c=String(i.getMinutes()).padStart(2,"0");a.textContent=`${o}:${c}`}e&&(e.innerHTML=t.map(i=>`
<div class="clock-row">
  <span class="clock-city">${i.label}</span>
  <span class="clock-time-val">${s(i.zone)}</span>
</div>`).join(""))}n(),setInterval(n,1e3)});class g{constructor(){this.API="/api/visitors",this.ID_KEY="portfolio_visitorId",this.SESS_KEY="visit_recorded",this.init()}async init(){await this._record(),await this._fetchDisplay()}_getOrCreate(){let e=localStorage.getItem(this.ID_KEY);return e||(e=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():this._uuid(),localStorage.setItem(this.ID_KEY,e)),e}_uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}async _record(){if(sessionStorage.getItem(this.SESS_KEY))return;const e=this._getOrCreate();try{(await fetch(this.API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({visitorId:e})})).ok&&sessionStorage.setItem(this.SESS_KEY,"1")}catch(t){console.warn("[VisitorCounter] POST failed:",t.message)}}async _fetchDisplay(){try{const e=await fetch(this.API);if(!e.ok)throw new Error(`HTTP ${e.status}`);const{count:t}=await e.json();this._render(t??0)}catch(e){console.warn("[VisitorCounter] GET failed:",e.message),this._render("?")}}_render(e){const t=document.getElementById("tray-visitor-count");t&&(t.textContent=typeof e=="number"?e.toLocaleString():e);const s=document.getElementById("tray-visitor");s&&(s.title=`${e} unique visitor${e!==1?"s":""}`),window.XPDesktop&&(window.XPDesktop.visitorCount=e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>new g):new g;
