// Portfolio Configuration - Easy to edit!
export const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Soham",
        title: "Developer & Creator",
        description: "Passionate about building innovative digital experiences",
        email: "your.email@example.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername"
    },

    // Exhibit Layout Configuration
    layout: {
        fieldSize: 40, // Size of the open field
        tableSpacing: 8, // Distance between tables
        tableHeight: 1.2, // Height of tables
        maxTablesPerRow: 3 // Maximum tables in a row
    },

    // Exhibits - Easy to add/edit!
    exhibits: [
        {
            id: "about",
            title: "About Me",
            category: "Personal",
            position: { x: -8, z: -8 },
            shortDescription: "Who I am and what drives me",
            content: `
                <h3>Welcome to my Portfolio!</h3>
                <p>I'm a passionate developer who loves creating innovative solutions and engaging experiences. This interactive portfolio represents my journey in technology and design.</p>
                <p>Feel free to explore the different exhibits to learn more about my work, skills, and achievements.</p>
                <div class="contact-info">
                    <p><strong>Email:</strong> your.email@example.com</p>
                    <p><strong>Location:</strong> Your City, Country</p>
                </div>
            `,
            icon: "👤" // Emoji icon for the table
        },
        {
            id: "experience",
            title: "Work Experience",
            category: "Professional",
            position: { x: 0, z: -8 },
            shortDescription: "My professional journey",
            content: `
                <h3>Professional Experience</h3>
                <p>I've worked on various exciting projects across different technologies and domains.</p>
                <div class="experience-item">
                    <h4>Software Developer</h4>
                    <p class="company">Company Name • 2022 - Present</p>
                    <ul>
                        <li>Developed web applications using modern technologies</li>
                        <li>Collaborated with cross-functional teams</li>
                        <li>Implemented best practices and coding standards</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <h4>Junior Developer</h4>
                    <p class="company">Previous Company • 2020 - 2022</p>
                    <ul>
                        <li>Built responsive user interfaces</li>
                        <li>Optimized application performance</li>
                        <li>Participated in code reviews and testing</li>
                    </ul>
                </div>
            `,
            icon: "💼"
        },
        {
            id: "projects",
            title: "Projects",
            category: "Portfolio",
            position: { x: 8, z: -8 },
            shortDescription: "Featured projects and work",
            content: `
                <h3>Featured Projects</h3>
                <p>Here are some of my most notable projects:</p>
                <div class="project-item">
                    <h4>Interactive Web Application</h4>
                    <p class="tech-stack">React • Node.js • MongoDB</p>
                    <p>A full-stack web application with real-time features and modern UI/UX design.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">Live Demo</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
                <div class="project-item">
                    <h4>Mobile App</h4>
                    <p class="tech-stack">React Native • Firebase</p>
                    <p>A cross-platform mobile application with offline capabilities and push notifications.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">App Store</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
                <div class="project-item">
                    <h4>3D Visualization Tool</h4>
                    <p class="tech-stack">Three.js • WebGL • GSAP</p>
                    <p>An interactive 3D visualization tool for data presentation and analysis.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">Live Demo</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
            `,
            icon: "🚀"
        },
        {
            id: "skills",
            title: "Skills & Technologies",
            category: "Technical",
            position: { x: -8, z: 0 },
            shortDescription: "Technical skills and expertise",
            content: `
                <h3>Technical Skills</h3>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h4>Frontend Development</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">HTML5</span>
                            <span class="skill-tag">CSS3</span>
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">React</span>
                            <span class="skill-tag">Vue.js</span>
                            <span class="skill-tag">Three.js</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>Backend Development</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">Node.js</span>
                            <span class="skill-tag">Python</span>
                            <span class="skill-tag">Express.js</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">PostgreSQL</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>Tools & Platforms</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">Git</span>
                            <span class="skill-tag">Docker</span>
                            <span class="skill-tag">AWS</span>
                            <span class="skill-tag">Figma</span>
                            <span class="skill-tag">VS Code</span>
                        </div>
                    </div>
                </div>
            `,
            icon: "⚡"
        },
        {
            id: "education",
            title: "Education",
            category: "Academic",
            position: { x: 0, z: 0 },
            shortDescription: "Educational background",
            content: `
                <h3>Educational Background</h3>
                <div class="education-item">
                    <h4>Bachelor of Computer Science</h4>
                    <p class="institution">University Name • 2018 - 2022</p>
                    <p>Focused on software engineering, algorithms, and web development. Graduated with honors.</p>
                    <ul>
                        <li>GPA: 3.8/4.0</li>
                        <li>Dean's List: 3 semesters</li>
                        <li>Capstone Project: AI-powered recommendation system</li>
                    </ul>
                </div>
                <div class="education-item">
                    <h4>Certifications</h4>
                    <ul>
                        <li>AWS Certified Developer Associate</li>
                        <li>Google Cloud Professional Developer</li>
                        <li>MongoDB Database Administrator</li>
                    </ul>
                </div>
            `,
            icon: "🎓"
        },
        {
            id: "achievements",
            title: "Achievements",
            category: "Recognition",
            position: { x: 8, z: 0 },
            shortDescription: "Awards and recognition",
            content: `
                <h3>Achievements & Recognition</h3>
                <div class="achievement-item">
                    <h4>🏆 Best Developer Award</h4>
                    <p class="year">2023</p>
                    <p>Recognized for outstanding contributions to team projects and innovative solutions.</p>
                </div>
                <div class="achievement-item">
                    <h4>🥇 Hackathon Winner</h4>
                    <p class="year">2022</p>
                    <p>First place in regional hackathon for developing an AI-powered accessibility tool.</p>
                </div>
                <div class="achievement-item">
                    <h4>📈 Performance Excellence</h4>
                    <p class="year">2021</p>
                    <p>Consistently exceeded performance targets and delivered high-quality solutions.</p>
                </div>
            `,
            icon: "🏆"
        },
        {
            id: "contact",
            title: "Get In Touch",
            category: "Connect",
            position: { x: 0, z: 8 },
            shortDescription: "Let's work together",
            content: `
                <h3>Let's Connect!</h3>
                <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.</p>
                <div class="contact-methods">
                    <div class="contact-method">
                        <h4>📧 Email</h4>
                        <p>your.email@example.com</p>
                    </div>
                    <div class="contact-method">
                        <h4>💼 LinkedIn</h4>
                        <p><a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
                    </div>
                    <div class="contact-method">
                        <h4>🐙 GitHub</h4>
                        <p><a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
                    </div>
                </div>
                <div class="resume-download">
                    <h4>📄 Download Resume</h4>
                    <p>Get a detailed overview of my experience and skills.</p>
                    <button class="download-btn" onclick="window.open('Soham_Resume.pdf', '_blank')">Download PDF</button>
                </div>
            `,
            icon: "📞"
        }
    ]
};

// How to add new exhibits:
// 1. Copy an existing exhibit object
// 2. Change the id, title, category, and content
// 3. Set a unique position (x, z coordinates)
// 4. Choose an appropriate emoji icon
// 5. The exhibit will automatically appear in the marketplace!

// Position guidelines:
// - x: -8 to 8 (left to right)
// - z: -8 to 8 (back to front)
// - Keep spacing of at least 4 units between exhibits 