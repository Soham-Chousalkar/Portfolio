import * as THREE from 'three';
import { gsap } from 'gsap';
import { PORTFOLIO_CONFIG } from './config.js';

class MarketplacePortfolio {
    constructor() {
        // Core Three.js objects
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.cameraContainer = null;
        
        // Performance optimizations
        this.exhibits = [];
        this.isLoaded = false;
        this.isMobile = window.innerWidth <= 768;
        this.isPointerLocked = false;
        this.isExhibitOpen = false;
        
        // Reusable objects to avoid garbage collection
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.direction = new THREE.Vector3();
        this.euler = new THREE.Euler(0, 0, 0);
        
        // Movement and controls
        this.bounds = 35;
        this.moveSpeed = this.isMobile ? 0.05 : 0.1;
        this.rotationX = 0;
        this.rotationY = 0;
        this.keys = {};
        
        // Performance settings
        this.shadowMapSize = this.isMobile ? 512 : 1024;
        this.geometrySegments = this.isMobile ? 6 : 8;
        
        // Three-body problem simulation
        this.threeBodyBodies = [];
        this.threeBodyTrails = [];
        this.threeBodyVelocities = [];
        this.threeBodyMasses = [40, 70, 120];
        this.gravityConstant = 0.7;
        this.trailLength = 1000;
        this.trailOpacity = 0.3;
        this.boundaryRadius = 30;
        this.boundaryCenter = new THREE.Vector3(0, 30, 0);
        this.threeBodyRadius = 2.5;
        
        this.init();
    }

    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLights();
        this.createField();
        this.createExhibits();
        this.setupControls();
        this.setupEventListeners();
        this.animate();
        this.simulateLoading();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf8f9fa);
        this.scene.fog = new THREE.Fog(0xf8f9fa, 20, 60);
        
        // Create three-body problem simulation in the sky
        this.createThreeBodySimulation();
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 2, 0);
        
        // Camera container for proper rotation handling
        this.cameraContainer = new THREE.Object3D();
        this.cameraContainer.add(this.camera);
        this.scene.add(this.cameraContainer);
        
        // Spawn point outside exhibit area
        this.cameraContainer.position.set(0, 0, 20);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('museum-canvas'),
            antialias: !this.isMobile, // Disable antialiasing on mobile for performance
            alpha: true,
            powerPreference: "high-performance"
        });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Optimized shadow settings
        if (!this.isMobile) {
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        }
        
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    setupLights() {
        // Ambient light for overall illumination
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambientLight);

        // Main directional light with optimized shadows
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(40, 80, 40); // Sun high in the sky
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 10;
        directionalLight.shadow.camera.far = 200;
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 100;
        directionalLight.shadow.camera.bottom = -100;
        this.scene.add(directionalLight);

        // Optionally, add a visible sun sphere
        const sunGeometry = new THREE.SphereGeometry(6, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xfff7b2 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.position.copy(directionalLight.position);
        this.scene.add(sun);
    }

    createField() {
        // Simple ground plane
        const groundGeometry = new THREE.PlaneGeometry(80, 80);
        const groundMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x90EE90,
            transparent: true,
            opacity: 0.9
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        
        if (!this.isMobile) {
            ground.receiveShadow = true;
        }
        
        this.scene.add(ground);
        
        // Minimal decorative elements
        this.createMinimalDecorations();
    }

    createMinimalDecorations() {
        // Reduced number of trees for performance
        for (let i = 0; i < (this.isMobile ? 4 : 6); i++) {
            const angle = (i / (this.isMobile ? 4 : 6)) * Math.PI * 2;
            const radius = 35;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            this.createSimpleTree(x, z);
        }

        // Fewer clouds
        for (let i = 0; i < (this.isMobile ? 3 : 4); i++) {
            const x = (Math.random() - 0.5) * 60;
            const y = 15 + Math.random() * 10;
            const z = (Math.random() - 0.5) * 60;
            this.createSimpleCloud(x, y, z);
        }
    }

    createSimpleTree(x, z) {
        const treeGroup = new THREE.Group();
        
        // Simplified trunk
        const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.5, 3, this.geometrySegments);
        const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 1.5;
        
        if (!this.isMobile) {
            trunk.castShadow = true;
        }
        
        treeGroup.add(trunk);
        
        // Simplified leaves
        const leavesGeometry = new THREE.SphereGeometry(2, this.geometrySegments, this.geometrySegments);
        const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 4;
        
        if (!this.isMobile) {
            leaves.castShadow = true;
        }
        
        treeGroup.add(leaves);
        treeGroup.position.set(x, 0, z);
        this.scene.add(treeGroup);
    }

    createSimpleCloud(x, y, z) {
        const cloudGroup = new THREE.Group();
        
        // Fewer cloud spheres
        for (let i = 0; i < (this.isMobile ? 2 : 3); i++) {
            const cloudGeometry = new THREE.SphereGeometry(1 + Math.random() * 0.5, this.geometrySegments, this.geometrySegments);
            const cloudMaterial = new THREE.MeshBasicMaterial({ 
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloud.position.set(
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 1,
                (Math.random() - 0.5) * 2
            );
            cloudGroup.add(cloud);
        }
        
        cloudGroup.position.set(x, y, z);
        this.scene.add(cloudGroup);
    }

    createThreeBodySimulation() {
        // Create three bodies with different colors
        const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1];
        const positions = [
            new THREE.Vector3(-20, 30, -20),
            new THREE.Vector3(20, 30, 20),
            new THREE.Vector3(0, 30, -40)
        ];
        // Much higher initial velocities for more speed
        const velocities = [
            new THREE.Vector3(2, 0, 2),
            new THREE.Vector3(-1.5, 0, -2),
            new THREE.Vector3(0, 0, 2.5)
        ];

        for (let i = 0; i < 3; i++) {
            const geometry = new THREE.SphereGeometry(this.threeBodyRadius, 24, 24);
            const material = new THREE.MeshStandardMaterial({ 
                color: colors[i],
                metalness: 0.3,
                roughness: 0.7
            });
            const body = new THREE.Mesh(geometry, material);
            body.position.copy(positions[i]);
            body.castShadow = true;
            body.receiveShadow = true;
            this.scene.add(body);
            this.threeBodyBodies.push(body);

            // Create trail
            const trailGeometry = new THREE.BufferGeometry();
            const trailMaterial = new THREE.LineBasicMaterial({ 
                color: colors[i],
                transparent: true,
                opacity: this.trailOpacity
            });
            const trail = new THREE.Line(trailGeometry, trailMaterial);
            this.scene.add(trail);
            this.threeBodyTrails.push(trail);

            // Store velocity
            this.threeBodyVelocities.push(velocities[i]);
        }
    }

    updateThreeBodySimulation() {
        if (this.threeBodyBodies.length === 0) return;

        const dt = 0.016; // Time step (60 FPS)
        const positions = this.threeBodyBodies.map(body => body.position.clone());
        const accelerations = this.threeBodyBodies.map(() => new THREE.Vector3());

        // Calculate gravitational forces between all pairs
        for (let i = 0; i < this.threeBodyBodies.length; i++) {
            for (let j = i + 1; j < this.threeBodyBodies.length; j++) {
                const diff = positions[j].clone().sub(positions[i]);
                const distance = diff.length();
                const force = this.gravityConstant * this.threeBodyMasses[i] * this.threeBodyMasses[j] / (distance * distance);
                const forceVector = diff.normalize().multiplyScalar(force);
                accelerations[i].add(forceVector.clone().divideScalar(this.threeBodyMasses[i]));
                accelerations[j].sub(forceVector.clone().divideScalar(this.threeBodyMasses[j]));
            }
        }

        // Update velocities and positions
        for (let i = 0; i < this.threeBodyBodies.length; i++) {
            this.threeBodyVelocities[i].add(accelerations[i].multiplyScalar(dt));
            this.threeBodyBodies[i].position.add(this.threeBodyVelocities[i].clone().multiplyScalar(dt));

            // Hard boundary at the horizon
            const relativePos = this.threeBodyBodies[i].position.clone().sub(this.boundaryCenter);
            const distanceFromCenter = relativePos.length();
            if (distanceFromCenter > this.boundaryRadius) {
                const normal = relativePos.clone().normalize();
                this.threeBodyBodies[i].position.copy(
                    this.boundaryCenter.clone().add(normal.clone().multiplyScalar(this.boundaryRadius - 0.01))
                );
                const velocity = this.threeBodyVelocities[i];
                const dotProduct = velocity.dot(normal);
                velocity.sub(normal.clone().multiplyScalar(2 * dotProduct));
                if (velocity.dot(normal) > 0) {
                    velocity.sub(normal.clone().multiplyScalar(2 * velocity.dot(normal)));
                }
                velocity.multiplyScalar(0.8); // Lose a fifth of momentum at boundary
            }
        }

        // Update trails
        this.updateTrails();
    }

    updateTrails() {
        for (let i = 0; i < this.threeBodyTrails.length; i++) {
            const trail = this.threeBodyTrails[i];
            const body = this.threeBodyBodies[i];
            
            // Get current positions from trail geometry
            let positions = trail.geometry.attributes.position;
            if (!positions || positions.count === 0) {
                // Initialize trail
                const initialPositions = new Float32Array(this.trailLength * 3);
                for (let j = 0; j < this.trailLength; j++) {
                    initialPositions[j * 3] = body.position.x;
                    initialPositions[j * 3 + 1] = body.position.y;
                    initialPositions[j * 3 + 2] = body.position.z;
                }
                trail.geometry.setAttribute('position', new THREE.BufferAttribute(initialPositions, 3));
                return;
            }

            // Shift positions and add new position
            const newPositions = new Float32Array(this.trailLength * 3);
            for (let j = 0; j < this.trailLength - 1; j++) {
                newPositions[j * 3] = positions.getX(j + 1);
                newPositions[j * 3 + 1] = positions.getY(j + 1);
                newPositions[j * 3 + 2] = positions.getZ(j + 1);
            }
            
            // Add current position at the end
            newPositions[(this.trailLength - 1) * 3] = body.position.x;
            newPositions[(this.trailLength - 1) * 3 + 1] = body.position.y;
            newPositions[(this.trailLength - 1) * 3 + 2] = body.position.z;

            trail.geometry.setAttribute('position', new THREE.BufferAttribute(newPositions, 3));
            trail.geometry.computeBoundingSphere();
        }
    }

    createExhibits() {
        const positions = [
            { x: -12, z: -12 }, { x: 0, z: -12 }, { x: 12, z: -12 },
            { x: -12, z: 0 }, { x: 0, z: 0 }, { x: 12, z: 0 },
            { x: 0, z: 12 }
        ];
        
        PORTFOLIO_CONFIG.exhibits.forEach((exhibit, index) => {
            const position = positions[index] || exhibit.position;
            this.createExhibit({ ...exhibit, position }, index);
        });
    }

    createExhibit(data, index) {
        const exhibitGroup = new THREE.Group();
        
        // Main display board (floppy disk)
        const boardGeometry = new THREE.PlaneGeometry(2.5, 2);
        const boardMaterial = new THREE.MeshLambertMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.95
        });
        const board = new THREE.Mesh(boardGeometry, boardMaterial);
        board.position.set(0, 2, 0);
        
        if (!this.isMobile) {
            board.castShadow = true;
        }
        
        exhibitGroup.add(board);
        
        // Title bar
        const titleGeometry = new THREE.PlaneGeometry(2.3, 0.4);
        const titleMaterial = new THREE.MeshBasicMaterial({ color: 0x64ffda });
        const title = new THREE.Mesh(titleGeometry, titleMaterial);
        title.position.set(0, 2.7, 0.01);
        exhibitGroup.add(title);
        
        // Icon sphere
        const iconGeometry = new THREE.SphereGeometry(0.3, this.geometrySegments, this.geometrySegments);
        const iconMaterial = new THREE.MeshBasicMaterial({ color: 0x00bcd4 });
        const icon = new THREE.Mesh(iconGeometry, iconMaterial);
        icon.position.set(0, 1.3, 0.01);
        exhibitGroup.add(icon);
        
        // Glow effect
        const glowGeometry = new THREE.BoxGeometry(3.2, 0.3, 2.2);
        const glowMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x64ffda,
            transparent: true,
            opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(0, 0.6, 0);
        exhibitGroup.add(glow);
        
        // Position and store data
        exhibitGroup.position.set(data.position.x, 0, data.position.z);
        exhibitGroup.userData = { ...data, index, clickable: true };
        
        this.exhibits.push(exhibitGroup);
        this.scene.add(exhibitGroup);
        
        // Entrance animation
        gsap.from(exhibitGroup.position, {
            y: -10,
            duration: 1.5,
            delay: index * 0.2, // Reduced delay for faster loading
            ease: "power2.out"
        });
    }

    setupControls() {
        document.body.style.cursor = 'default';
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => this.keys[e.code] = true);
        document.addEventListener('keyup', (e) => this.keys[e.code] = false);
        
        // Mouse controls with throttling for performance
        let lastMouseMove = 0;
        const mouseThrottle = 16; // ~60fps
        
        document.addEventListener('mousemove', (e) => {
            if (!this.isPointerLocked || this.isExhibitOpen) return;
            
            const now = Date.now();
            if (now - lastMouseMove < mouseThrottle) return;
            lastMouseMove = now;
            
            this.rotationY -= e.movementX * 0.002;
            this.rotationX -= e.movementY * 0.002;
            this.rotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, this.rotationX));
        });
        
        // Unified click handler
        document.addEventListener('click', (e) => {
            if (!this.isMobile && !this.isPointerLocked && !this.isExhibitOpen) {
                document.body.requestPointerLock();
            }
            this.onMouseClick(e);
        });
        
        // Pointer lock handling
        document.addEventListener('pointerlockchange', () => {
            this.isPointerLocked = document.pointerLockElement !== null;
            if (!this.isExhibitOpen) {
                document.body.style.cursor = this.isPointerLocked ? 'none' : 'default';
            }
        });
        
        // Mobile controls
        if (this.isMobile) {
            this.setupMobileControls();
        }
    }

    setupMobileControls() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartTime = 0;
        let hasMoved = false;
        const moveThreshold = 15;

        document.addEventListener('touchstart', (e) => {
            e.preventDefault();
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
            hasMoved = false;
        }, { passive: false });

        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            
            if (e.touches.length === 1) {
                const touchX = e.touches[0].clientX;
                const touchY = e.touches[0].clientY;
                const deltaX = touchX - touchStartX;
                const deltaY = touchY - touchStartY;
                const distance = Math.hypot(deltaX, deltaY);

                if (distance > moveThreshold) {
                    hasMoved = true;
                    this.rotationY += deltaX * 0.008;
                    this.rotationX -= deltaY * 0.008;
                    this.rotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, this.rotationX));
                }

                touchStartX = touchX;
                touchStartY = touchY;
            }
        }, { passive: false });

        document.addEventListener('touchend', (e) => {
            e.preventDefault();
            
            const touchDuration = Date.now() - touchStartTime;
            
            if (touchDuration < 300 && !hasMoved) {
                this.handleTableClick(e.changedTouches[0]);
            }
        }, { passive: false });
    }

    handleTableClick(touch) {
        this.mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.exhibits, true);

        if (intersects.length > 0) {
            const exhibit = intersects[0].object.parent;
            if (exhibit.userData.clickable) {
                this.showExhibitInfo(exhibit.userData);
            }
        }
    }

    setupEventListeners() {
        // Debounced resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.onWindowResize(), 100);
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                this.toggleMenu();
            }
        });

        // UI event listeners
        document.getElementById('resume-btn')?.addEventListener('click', () => {
            window.open('Soham_Resume.pdf', '_blank');
        });

        document.querySelector('.close-btn')?.addEventListener('click', () => {
            this.hideExhibitInfo();
        });

        document.querySelectorAll('.menu-btn[data-section]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.navigateToSection(e.target.dataset.section);
            });
        });
    }

    onMouseClick(event) {
        let clientX, clientY;
        
        if (event.touches) {
            clientX = event.changedTouches[0].clientX;
            clientY = event.changedTouches[0].clientY;
        } else if (this.isPointerLocked) {
            clientX = window.innerWidth / 2;
            clientY = window.innerHeight / 2;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }
        
        this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.exhibits, true);

        if (intersects.length > 0) {
            const exhibit = intersects[0].object.parent;
            if (exhibit.userData.clickable) {
                this.showExhibitInfo(exhibit.userData);
            }
        }
    }

    showExhibitInfo(exhibitData) {
        document.getElementById('exhibit-title').textContent = exhibitData.title;
        document.getElementById('exhibit-category').textContent = exhibitData.category;
        document.getElementById('exhibit-body').innerHTML = exhibitData.content;
        
        const exhibitInfo = document.getElementById('exhibit-info');
        exhibitInfo.classList.remove('hidden');
        exhibitInfo.classList.add('fade-in');
        
        this.isExhibitOpen = true;
        this.isPointerLocked = false;
        document.exitPointerLock();
        document.body.style.cursor = 'default';
        
        const crosshair = document.getElementById('crosshair');
        if (crosshair) crosshair.style.display = 'none';
    }

    hideExhibitInfo() {
        document.getElementById('exhibit-info').classList.add('hidden');
        
        this.isExhibitOpen = false;
        document.body.style.cursor = 'default';
        
        const crosshair = document.getElementById('crosshair');
        if (crosshair) crosshair.style.display = 'block';
    }

    toggleMenu() {
        document.getElementById('menu').classList.toggle('hidden');
    }

    navigateToSection(section) {
        const exhibit = this.exhibits.find(e => e.userData.id === section);
        if (exhibit) {
            gsap.to(this.cameraContainer.position, {
                x: exhibit.position.x,
                z: exhibit.position.z + 5,
                duration: 2,
                ease: "power2.inOut"
            });
            this.toggleMenu();
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.isMobile = window.innerWidth <= 768;
    }

    simulateLoading() {
        const progressBar = document.querySelector('.loading-progress');
        const loadingScreen = document.getElementById('loading-screen');
        
        gsap.to(progressBar, {
            width: '100%',
            duration: 2, // Reduced loading time
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(loadingScreen, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadingScreen.style.display = 'none';
                        this.isLoaded = true;
                    }
                });
            }
        });
    }

    updateControls() {
        if (!this.isLoaded) return;

        // Apply rotations efficiently
        this.cameraContainer.rotation.set(0, 0, 0);
        this.cameraContainer.rotateY(this.rotationY);
        this.camera.rotation.x = this.rotationX;

        // Movement with optimized vector operations
        this.direction.set(0, 0, 0);
        if (this.keys['KeyW']) this.direction.z -= 1;
        if (this.keys['KeyS']) this.direction.z += 1;
        if (this.keys['KeyA']) this.direction.x -= 1;
        if (this.keys['KeyD']) this.direction.x += 1;

        if (this.direction.lengthSq() > 0) {
            this.direction.normalize();
            this.direction.applyEuler(this.euler.set(0, this.rotationY, 0));
            this.cameraContainer.position.add(this.direction.multiplyScalar(this.moveSpeed));
            
            // Clamp position
            this.cameraContainer.position.x = Math.max(-this.bounds, Math.min(this.bounds, this.cameraContainer.position.x));
            this.cameraContainer.position.z = Math.max(-this.bounds, Math.min(this.bounds, this.cameraContainer.position.z));
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.updateControls();
        this.updateThreeBodySimulation();
        
        // Optimized exhibit animations with reduced calculations
        if (this.isLoaded) {
            const time = Date.now() * 0.001;
            this.exhibits.forEach((exhibit, index) => {
                const offset = index * 0.5;
                exhibit.rotation.y = Math.sin(time + offset) * 0.05;
                exhibit.position.y = Math.sin(time * 2 + offset) * 0.1;
            });
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the portfolio
new MarketplacePortfolio(); 