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
        
        this.verticalVelocity = 0; // For jetpack and gravity
        this.gravity = -4.9; // Half of Earth's gravity (m/s^2)
        this.jetpackPower = 8; // Upward acceleration when holding space
        this.maxJetpackSpeed = 6; // Max upward speed
        this.groundLevel = 0; // Y position for ground
        
        this.loadingStep = 'Starting...';
        
        this.init();
    }

    init() {
        this.setLoadingStep('Setting up scene...');
        this.setupScene();
        this.setLoadingStep('Setting up camera...');
        this.setupCamera();
        this.setLoadingStep('Setting up renderer...');
        this.setupRenderer();
        this.setLoadingStep('Setting up lights...');
        this.setupLights();
        this.setLoadingStep('Creating field...');
        this.createField();
        this.setLoadingStep('Creating exhibits...');
        this.createExhibits();
        this.setLoadingStep('Setting up controls...');
        this.setupControls();
        this.setLoadingStep('Setting up event listeners...');
        this.setupEventListeners();
        this.setLoadingStep('Starting animation loop...');
        this.animate();
        this.setLoadingStep('Simulating loading...');
        this.simulateLoading();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        // Night sky background and fog
        this.scene.background = new THREE.Color(0x070d1b);
        this.scene.fog = new THREE.Fog(0x070d1b, 40, 120);
        // Create three-body problem simulation in the sky
        this.createThreeBodySimulation();
        // Add stars and shooting stars
        this.stars = [];
        this.shootingStars = [];
        this.createStars(300);
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
        
        // Spawn point at the beginning of the walking path
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
        // Apply greyscale effect to the canvas
        this.renderer.domElement.style.filter = 'grayscale(1)';
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
        
        // Create walking path
        this.createWalkingPath();
        
        // Minimal decorative elements
        this.createMinimalDecorations();
    }

    createWalkingPath() {
        // Create a subtle path along the center
        const pathGeometry = new THREE.PlaneGeometry(2, 35);
        const pathMaterial = new THREE.MeshLambertMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.3
        });
        const path = new THREE.Mesh(pathGeometry, pathMaterial);
        path.rotation.x = -Math.PI / 2;
        path.position.y = 0.01; // Slightly above ground to prevent z-fighting
        
        this.scene.add(path);
        
        // Add path markers at each exhibit position
        const pathPositions = [
            { x: -8, z: -15 }, { x: 8, z: -10 }, { x: -8, z: -5 },
            { x: 8, z: 0 }, { x: -8, z: 5 }, { x: 8, z: 10 }, { x: 0, z: 30 }
        ];
        
        pathPositions.forEach((pos, index) => {
            const markerGeometry = new THREE.CircleGeometry(0.5, 8);
            const markerMaterial = new THREE.MeshLambertMaterial({ 
                color: 0x64ffda,
                transparent: true,
                opacity: 0.4
            });
            const marker = new THREE.Mesh(markerGeometry, markerMaterial);
            marker.rotation.x = -Math.PI / 2;
            marker.position.set(pos.x, 0.02, pos.z);
            
            this.scene.add(marker);
        });
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
        }

        // Check if all bodies are out of camera view
        const frustum = new THREE.Frustum();
        const cameraViewProjectionMatrix = new THREE.Matrix4();
        this.camera.updateMatrixWorld();
        this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld);
        cameraViewProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
        frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
        let allOut = true;
        for (let i = 0; i < this.threeBodyBodies.length; i++) {
            if (frustum.intersectsObject(this.threeBodyBodies[i])) {
                allOut = false;
                break;
            }
        }
        if (allOut) {
            // Remove old bodies and trails
            this.threeBodyBodies.forEach(body => this.scene.remove(body));
            this.threeBodyTrails.forEach(trail => this.scene.remove(trail));
            this.threeBodyBodies = [];
            this.threeBodyTrails = [];
            this.threeBodyVelocities = [];
            // Spawn new system from random directions
            this.spawnRandomThreeBodySystem();
        }

        // Update trails
        this.updateTrails();
    }

    spawnRandomThreeBodySystem() {
        const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1];
        const positions = [];
        const velocities = [];
        const radius = 50;
        for (let i = 0; i < 3; i++) {
            // Random direction on a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = 30 + radius * Math.abs(Math.cos(phi));
            const z = radius * Math.sin(phi) * Math.sin(theta);
            positions.push(new THREE.Vector3(x, y, z));
            // Velocity aimed roughly toward the center
            const toCenter = new THREE.Vector3(0, 30, 0).sub(new THREE.Vector3(x, y, z)).normalize();
            velocities.push(toCenter.multiplyScalar(2 + Math.random() * 2));
        }
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
        // Get the number of exhibits
        const exhibitCount = PORTFOLIO_CONFIG.exhibits.length;
        // Create a walking path with exhibits alternating on both sides
        const pathPositions = [
            { x: -8, z: -15 },   // About Me - Left side
            { x: 8, z: -10 },    // Experience - Right side
            { x: -8, z: -5 },    // Projects - Left side
            { x: 8, z: 0 },      // Skills - Right side
            { x: -8, z: 5 },     // Education - Left side
            { x: 8, z: 10 },     // Achievements - Right side
            { x: 0, z: 30 }      // Contact - Center at very end
        ];
        // Only use as many positions as there are exhibits
        PORTFOLIO_CONFIG.exhibits.forEach((exhibit, index) => {
            this.createExhibit({ ...exhibit, position: pathPositions[index] }, index);
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
        // Enhanced glow effect for hover detection
        const glowGeometry = new THREE.BoxGeometry(3.2, 0.3, 2.2);
        const glowMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x64ffda,
            transparent: true,
            opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(0, 0.6, 0);
        exhibitGroup.add(glow);
        // Add hover glow effect
        const hoverGlowGeometry = new THREE.BoxGeometry(4, 0.5, 3);
        const hoverGlowMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x00ffff,
            transparent: true,
            opacity: 0
        });
        const hoverGlow = new THREE.Mesh(hoverGlowGeometry, hoverGlowMaterial);
        hoverGlow.position.set(0, 0.6, 0);
        exhibitGroup.add(hoverGlow);
        // Add 3D heading above the floppy disk using a canvas texture sprite
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000';
        ctx.font = 'bold 32px Inter, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(data.title, canvas.width / 2, canvas.height / 2);
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(2.5, 0.6, 1);
        sprite.position.set(0, 3.3, 0);
        exhibitGroup.add(sprite);
        // Position and store data
        exhibitGroup.position.set(data.position.x, 0, data.position.z);
        exhibitGroup.userData = { 
            ...data, 
            index, 
            clickable: true,
            hoverGlow: hoverGlow,
            isHovered: false
        };
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

        // Welcome message dismissal
        document.getElementById('start-exploring')?.addEventListener('click', () => {
            const welcomeMessage = document.getElementById('welcome-message');
            if (welcomeMessage) {
                gsap.to(welcomeMessage, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        welcomeMessage.style.display = 'none';
                    }
                });
            }
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
        this.setLoadingStep('Finalizing...');
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

        // --- Jetpack and Gravity Logic ---
        const dt = 1 / 60; // Assume 60 FPS for physics
        if (this.keys['Space']) {
            this.verticalVelocity += this.jetpackPower * dt;
            if (this.verticalVelocity > this.maxJetpackSpeed) this.verticalVelocity = this.maxJetpackSpeed;
        } else {
            this.verticalVelocity += this.gravity * dt;
        }
        this.cameraContainer.position.y += this.verticalVelocity * dt;
        // Clamp to ground
        if (this.cameraContainer.position.y < this.groundLevel) {
            this.cameraContainer.position.y = this.groundLevel;
            this.verticalVelocity = 0;
        }
    }

    updateHoverDetection() {
        if (this.isExhibitOpen || !this.isPointerLocked) return;
        
        // Set mouse position to center of screen for crosshair detection
        this.mouse.x = 0;
        this.mouse.y = 0;
        
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.exhibits, true);
        
        // Reset all hover states
        this.exhibits.forEach(exhibit => {
            if (exhibit.userData.hoverGlow && exhibit.userData.isHovered) {
                exhibit.userData.isHovered = false;
                gsap.to(exhibit.userData.hoverGlow.material, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        // Check for new hover
        if (intersects.length > 0) {
            const exhibit = intersects[0].object.parent;
            if (exhibit.userData.hoverGlow && !exhibit.userData.isHovered) {
                exhibit.userData.isHovered = true;
                gsap.to(exhibit.userData.hoverGlow.material, {
                    opacity: 0.6,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.updateControls();
        this.updateThreeBodySimulation();
        // Night sky: twinkling stars and shooting stars
        this.updateStarsAndShootingStars();
        
        // Optimized exhibit animations with reduced calculations
        if (this.isLoaded) {
            const time = Date.now() * 0.001;
            this.exhibits.forEach((exhibit, index) => {
                const offset = index * 0.5;
                exhibit.rotation.y = Math.sin(time + offset) * 0.05;
                exhibit.position.y = Math.sin(time * 2 + offset) * 0.1;
            });
            
            // Hover detection for glow effect
            this.updateHoverDetection();
        }

        this.renderer.render(this.scene, this.camera);
    }

    createStars(count) {
        // Remove old stars if any
        if (this.stars.length > 0) {
            this.stars.forEach(star => this.scene.remove(star));
            this.stars = [];
        }
        for (let i = 0; i < count; i++) {
            const geometry = new THREE.SphereGeometry(Math.random() * 0.08 + 0.04, 6, 6);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
            // Place stars in a dome above the scene
            const r = 80 + Math.random() * 40;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 0.6; // Only upper hemisphere
            star.position.set(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.cos(phi) + 20,
                r * Math.sin(phi) * Math.sin(theta)
            );
            star.material.opacity = 0.7 + Math.random() * 0.3;
            star.material.transparent = true;
            this.scene.add(star);
            this.stars.push(star);
        }
    }

    maybeSpawnShootingStar() {
        // 1% chance per frame
        if (Math.random() < 0.01 && this.shootingStars.length < 2) {
            const geometry = new THREE.SphereGeometry(0.12, 8, 8);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
            // Start at random edge of dome
            const r = 100;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 0.5;
            star.position.set(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.cos(phi) + 30,
                r * Math.sin(phi) * Math.sin(theta)
            );
            // Velocity toward random direction across sky
            const targetTheta = theta + (Math.random() - 0.5) * Math.PI * 0.5;
            const targetPhi = phi + (Math.random() - 0.2) * 0.3;
            const speed = 2 + Math.random() * 2;
            star.userData.velocity = new THREE.Vector3(
                speed * (Math.sin(targetPhi) * Math.cos(targetTheta) - Math.sin(phi) * Math.cos(theta)),
                speed * (Math.cos(targetPhi) - Math.cos(phi)),
                speed * (Math.sin(targetPhi) * Math.sin(targetTheta) - Math.sin(phi) * Math.sin(theta))
            );
            star.userData.life = 0;
            this.scene.add(star);
            this.shootingStars.push(star);
        }
    }

    updateStarsAndShootingStars() {
        // Twinkle stars
        for (let i = 0; i < this.stars.length; i++) {
            if (Math.random() < 0.1) {
                this.stars[i].material.opacity = 0.5 + Math.random() * 0.5;
            }
        }
        // Shooting stars
        for (let i = this.shootingStars.length - 1; i >= 0; i--) {
            const star = this.shootingStars[i];
            star.position.add(star.userData.velocity);
            star.userData.life += 1;
            star.material.opacity = Math.max(0, 1 - star.userData.life / 40);
            if (star.userData.life > 40) {
                this.scene.remove(star);
                this.shootingStars.splice(i, 1);
            }
        }
        this.maybeSpawnShootingStar();
    }

    setLoadingStep(msg) {
        this.loadingStep = msg;
        const loadingMsg = document.querySelector('#loading-screen .loading-content p');
        if (loadingMsg) loadingMsg.textContent = msg;
    }
}

// Initialize the portfolio
new MarketplacePortfolio(); 