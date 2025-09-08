(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(i){if(i.ep)return;i.ep=!0;const e=a(i);fetch(i.href,e)}})();document.addEventListener("DOMContentLoaded",function(){function r(){[{id:"hyderabad-time",timeZone:"Asia/Kolkata"},{id:"london-time",timeZone:"Europe/London"},{id:"arizona-time",timeZone:"America/Phoenix"},{id:"texas-time",timeZone:"America/Chicago"},{id:"dayton-time",timeZone:"America/New_York"}].forEach(e=>{const o=new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:e.timeZone});document.getElementById(e.id).textContent=o})}r(),setInterval(r,1e3);const t=document.querySelector(".theme-toggle"),a=document.documentElement,s=localStorage.getItem("theme")||"dark";a.setAttribute("data-theme",s),t.setAttribute("data-theme",s),t.addEventListener("click",()=>{const e=a.getAttribute("data-theme")==="dark"?"light":"dark";a.setAttribute("data-theme",e),t.setAttribute("data-theme",e),localStorage.setItem("theme",e)})});class n{constructor(){this.storageKey="portfolio_visitor_data",this.init()}async init(){this.createCounter(),this.recordVisit(),this.loadStats(),this.startAutoRefresh()}createCounter(){const t=document.createElement("div");t.className="visitor-counter",t.innerHTML=`
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
        `,document.body.appendChild(t)}async recordVisit(){try{const a=await(await fetch("https://api.countapi.xyz/hit/soham-portfolio/visits")).json();if(a.value){this.updateCounter(a.value);return}}catch{console.log("CountAPI unavailable, using local storage fallback")}this.recordLocalVisit()}recordLocalVisit(){const t=this.getVisitorData(),a=new Date().toDateString();t.totalVisits=(t.totalVisits||0)+1,(!t.lastVisit||t.lastVisit!==a)&&(t.uniqueVisitors=(t.uniqueVisitors||0)+1,t.lastVisit=a),this.saveVisitorData(t),this.updateCounter(t.uniqueVisitors)}getVisitorData(){try{const t=localStorage.getItem(this.storageKey);return t?JSON.parse(t):{}}catch{return{}}}saveVisitorData(t){try{localStorage.setItem(this.storageKey,JSON.stringify(t))}catch{console.log("Local storage unavailable")}}loadStats(){const t=this.getVisitorData();t.uniqueVisitors?this.updateCounter(t.uniqueVisitors):this.updateCounter(1250)}updateCounter(t){const a=document.getElementById("visitor-count");a&&(a.textContent=t.toLocaleString())}startAutoRefresh(){setInterval(()=>{this.loadStats()},3e5)}}document.addEventListener("DOMContentLoaded",()=>new n);
