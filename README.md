# 🌟 Interactive Portfolio Marketplace

A beautiful, interactive 3D portfolio website built with Three.js that presents your achievements and projects in an open-field marketplace environment. Perfect for showcasing your work in an engaging and memorable way!

## ✨ Features

- **🎮 Interactive 3D Environment**: Walk around an open field with exhibits displayed on tables
- **📱 Mobile-First Design**: Fully responsive with touch controls optimized for portrait mode
- **⚡ Fast & Smooth**: Minimalistic design prioritizing performance and clarity
- **🔧 Easy Customization**: Simple configuration file for adding/editing content
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **📄 Resume Integration**: Direct link to your PDF resume
- **🌐 Web-Based**: No heavy software required - runs in any modern browser

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- A modern web browser
- Your resume PDF file

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your content**
   - Edit `config.js` to update your personal information and exhibits
   - Replace `Soham_Resume.pdf` with your own resume file
   - Update the title in `index.html` if needed

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 How to Customize

### 1. Personal Information
Edit the `personal` section in `config.js`:
```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    description: "Your description",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
}
```

### 2. Adding New Exhibits
To add a new exhibit, copy an existing one in the `exhibits` array and modify:

```javascript
{
    id: "unique-id",
    title: "Exhibit Title",
    category: "Category",
    position: { x: -8, z: -8 }, // Position on the field
    shortDescription: "Brief description",
    content: `
        <h3>Your Content</h3>
        <p>Your detailed content here...</p>
    `,
    icon: "🎯" // Choose an emoji icon
}
```

### 3. Position Guidelines
- **x**: -8 to 8 (left to right)
- **z**: -8 to 8 (back to front)
- Keep at least 4 units spacing between exhibits
- Recommended layout:
  ```
  [-8,-8] [0,-8] [8,-8]
  [-8,0]  [0,0]  [8,0]
  [-8,8]  [0,8]  [8,8]
  ```

### 4. Content Formatting
The `content` field supports HTML, so you can:
- Use `<h3>`, `<h4>` for headings
- Add `<ul>`, `<li>` for lists
- Include `<a href="">` for links
- Use `<img src="">` for images
- Add `<video>` for videos

## 🎮 Controls

### Desktop
- **WASD**: Move around the field
- **Mouse**: Look around (click to enable pointer lock)
- **Click**: Interact with exhibits
- **ESC**: Toggle menu

### Mobile
- **Touch & Drag**: Look around
- **Control Buttons**: Move (appear automatically on mobile)
- **Tap**: Interact with exhibits
- **Menu Button**: Access navigation

## 📱 Mobile Optimization

The portfolio is specifically optimized for mobile devices:
- **Portrait Mode**: Primary design focus
- **Touch Controls**: Intuitive movement and interaction
- **Responsive UI**: Adapts to different screen sizes
- **Performance**: Optimized for mobile browsers

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "Deploy from a branch"
   - Choose "main" branch and "/docs" folder

3. **Build and Deploy**
   ```bash
   npm run build
   # Copy dist folder contents to docs folder
   git add docs/
   git commit -m "Deploy portfolio"
   git push origin main
   ```

### Other Platforms

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Firebase**: Use Firebase Hosting
- **Any static hosting**: Upload the `dist` folder contents

## 🎨 Customization Tips

### Colors
The portfolio uses a green theme. To change colors:
1. Update CSS variables in `styles.css`
2. Modify the color values in `main.js` for 3D elements
3. Update the gradient colors in the loading screen

### Layout
- Adjust `fieldSize` in `config.js` to change the field size
- Modify `tableSpacing` to change distance between exhibits
- Update `tableHeight` to change exhibit height

### Performance
- Reduce the number of decorative elements in `createDecorativeElements()`
- Lower shadow map resolution for better performance
- Disable shadows on mobile devices

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── main.js            # 3D scene and interactions
├── config.js          # Content configuration
├── styles.css         # Styling and responsive design
├── package.json       # Dependencies and scripts
├── Soham_Resume.pdf   # Your resume (replace with yours)
└── README.md          # This file
```

## 🔧 Technical Details

- **Framework**: Three.js for 3D graphics
- **Build Tool**: Vite for fast development
- **Animations**: GSAP for smooth transitions
- **Styling**: CSS3 with modern features
- **Responsive**: Mobile-first design approach

## 🐛 Troubleshooting

### Common Issues

1. **3D doesn't load**
   - Check browser console for errors
   - Ensure WebGL is supported
   - Try updating your graphics drivers

2. **Mobile controls not working**
   - Ensure touch events are enabled
   - Check if mobile controls are visible
   - Try refreshing the page

3. **Performance issues**
   - Reduce field size in config
   - Disable shadows on mobile
   - Close other browser tabs

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! If you make improvements, consider sharing them back.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Three.js community for the amazing 3D library
- GSAP for smooth animations
- Inter font family for beautiful typography

---

**Happy coding! 🚀**

Your interactive portfolio is now ready to impress visitors with a unique and engaging experience! 