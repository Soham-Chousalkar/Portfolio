// System Tray Clock — XP Portfolio
// Shows HH:MM in taskbar; hover reveals world clock popup

document.addEventListener('DOMContentLoaded', () => {
    const trayTime = document.getElementById('tray-time');
    const popup    = document.getElementById('tray-clock-popup');

    const CITIES = [
        { label: 'Hyderabad 🇮🇳', zone: 'Asia/Kolkata'      },
        { label: 'London 🇬🇧',    zone: 'Europe/London'      },
        { label: 'Arizona 🇺🇸',   zone: 'America/Phoenix'    },
        { label: 'Chicago 🇺🇸',   zone: 'America/Chicago'    },
        { label: 'Dayton 🇺🇸',    zone: 'America/New_York'   },
    ];

    function fmt(zone) {
        return new Date().toLocaleTimeString('en-US', {
            hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: zone,
        });
    }

    function tick() {
        // Taskbar clock
        if (trayTime) {
            const now = new Date();
            const h   = String(now.getHours()).padStart(2, '0');
            const m   = String(now.getMinutes()).padStart(2, '0');
            trayTime.textContent = `${h}:${m}`;
        }
        // World clock popup
        if (popup) {
            popup.innerHTML = CITIES.map(c => `
<div class="clock-row">
  <span class="clock-city">${c.label}</span>
  <span class="clock-time-val">${fmt(c.zone)}</span>
</div>`).join('');
        }
    }

    tick();
    setInterval(tick, 1000);
});
