# 🌟 Liquid Glass Portfolio

A modern, responsive portfolio website featuring liquid glass effects, real-time visitor tracking, and an advanced color customizer.

## 🚀 Live Demo
**[View Live Portfolio](https://soham-chousalkar.github.io/Portfolio/)**

## 📸 Screenshots

<div align="center">
  <img src="assets/images/home.png" alt="Home Section" width="45%" />
  <img src="assets/images/customize.png" alt="Customizer Tool" width="45%" />
  <br><br>
  <img src="assets/images/Color-wheel.png" alt="Color Picker" width="45%" />
  <img src="assets/images/visitors.png" alt="Visitor Analytics" width="45%" />
</div>

## ✨ Features

### 🎨 **Liquid Glass Design**
- Frosted glass panels with backdrop blur effects
- Subtle shimmer animations and depth
- Responsive design with smooth transitions

### 🌍 **World Clock**
- Real-time display for 5 timezones:
  - 🇮🇳 Hyderabad (IST)
  - 🇬🇧 London (GMT/BST)
  - 🇺🇸 Arizona (MST)
  - 🇺🇸 Texas (CST)
  - 🇺🇸 Dayton (EST)

### 🎛️ **Advanced Customizer Tool**
- **Depth/Intensity Slider:** Control blur and shadow effects
- **Color Palette Picker:** 6 individual color controls
- **Real-time Preview:** Canvas-based color selection
- **HSL/Hex Input:** Multiple color input methods
- **Smart Text Inversion:** Automatic contrast adjustment

### 📊 **Visitor Analytics**
- Real-time visitor counter
- Geographic location tracking
- Interactive charts and statistics
- Auto-refresh every 30 seconds

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Build Tool:** Vite
- **Styling:** Custom CSS with liquid glass effects
- **Backend:** Node.js, Express.js
- **Deployment:** GitHub Pages with GitHub Actions

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/Soham-Chousalkar/Portfolio.git
cd Portfolio
git checkout liquid-glass-portfolio
npm install

# Development
npm run dev

# Production build
npm run build

# Start backend (for visitor tracking)
npm run server
```

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── styles.css              # Liquid glass styling
├── main.js                 # Frontend functionality
├── scripts/                # JavaScript utilities
│   ├── visitor-counter.js  # Visitor tracking
│   ├── deployment-status.js # Status checker
│   └── deploy.sh          # Deployment script
├── tools/                  # Development tools
│   ├── check-deployment.md # Deployment guide
│   └── tatus              # Status file
├── assets/                 # Static assets
│   ├── data/              # JSON data files
│   │   ├── visits.json    # Visit data
│   │   └── visitors.json  # Visitor data
│   └── images/            # Images and screenshots
│       ├── home.png       # Home screenshot
│       ├── customize.png  # Customizer screenshot
│       ├── Color-wheel.png # Color picker screenshot
│       ├── visitors.png   # Visitor analytics screenshot
│       └── Soham_Resume.pdf # Resume
├── server.js               # Backend API
├── dist/                   # Built files
└── .github/workflows/      # GitHub Actions
```

## 🎨 Color Palette

The portfolio uses a sophisticated color palette:
- **Background:** `#dbd3d8` (Light gray-beige)
- **Navigation:** `#eff1f3` (Off-white)
- **Text:** `#223843` (Dark blue-gray)
- **Panels:** `#d77a61` (Warm coral)
- **Accent:** `#d8b4a0` (Peach)

## 🌐 Deployment

- **Live URL:** https://soham-chousalkar.github.io/Portfolio/
- **Automatic deployment** via GitHub Actions
- **Built files** served from `gh-pages` branch

## 👨‍💻 Author

**Soham Chousalkar**
- Full Stack Developer & UI/UX Designer
- Specializing in modern web technologies
- Creating beautiful, functional digital experiences

---

**⭐ Star this repository if you find it helpful!** 