import * as THREE from 'three';
import { gsap } from 'gsap';
import { PORTFOLIO_CONFIG } from './config.js';

class MarketplacePortfolio {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.exhibits = [];
        this.isLoaded = false;
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.isMobile = window.innerWidth <= 768;
        
        // Performance optimizations
        this.direction = new THREE.Vector3();
        this.euler = new THREE.Euler(0, 0, 0);
        this.bounds = 35;
        this.moveSpeed = this.isMobile ? 0.05 : 0.1;
        this.rotationX = 0;
        this.rotationY = 0;
        this.keys = {};
        this.isPointerLocked = false;
        
        this.init();
    }

    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupControls();
        this.setupLights();
        this.createField();
        this.createExhibits();
        this.setupEventListeners();
        this.animate();
        this.simulateLoading();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf8f9fa);
        this.scene.fog = new THREE.Fog(0xf8f9fa, 20, 60);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 2, 0);
        
        // Create camera container for proper rotation handling
        this.cameraContainer = new THREE.Object3D();
        this.cameraContainer.add(this.camera);
        this.scene.add(this.cameraContainer);
        
        this.createDirectionArrow();
    }

    createDirectionArrow() {
        const arrowGroup = new THREE.Group();
        
        // Arrow shaft
        const shaftGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
        const shaftMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
        shaft.position.y = 0.5;
        arrowGroup.add(shaft);
        
        // Arrow head
        const headGeometry = new THREE.ConeGeometry(0.15, 0.3, 8);
        const headMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 1.15;
        arrowGroup.add(head);
        
        arrowGroup.position.set(0, 3, 0);
        this.directionArrow = arrowGroup;
        this.scene.add(arrowGroup);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('museum-canvas'),
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    setupControls() {
        document.body.style.cursor = 'default';
        
        // Desktop controls
        document.addEventListener('keydown', (e) => this.keys[e.code] = true);
        document.addEventListener('keyup', (e) => this.keys[e.code] = false);
        
        // Mouse controls
        document.addEventListener('mousemove', (e) => {
            if (this.isPointerLocked) {
                this.rotationY -= e.movementX * 0.002;
                this.rotationX -= e.movementY * 0.002;
                this.rotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, this.rotationX));
            }
        });
        
        // Enable pointer lock on click
        document.addEventListener('click', (e) => {
            if (!this.isMobile && !this.isPointerLocked) {
                document.body.requestPointerLock();
            }
        });
        
        // Handle pointer lock changes
        document.addEventListener('pointerlockchange', () => {
            this.isPointerLocked = document.pointerLockElement !== null;
            document.body.style.cursor = this.isPointerLocked ? 'none' : 'default';
        });
        
        // Mobile touch controls
        if (this.isMobile) {
            this.setupMobileControls();
        }
    }

    setupMobileControls() {
        let touchStartX = 0;
        let touchStartY = 0;
        let initialDistance = 0;
        let isPinching = false;
        let touchStartTime = 0;
        let hasMoved = false;
        const moveThreshold = 15;

        document.addEventListener('touchstart', (e) => {
            e.preventDefault();
            
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
            hasMoved = false;
            
            if (e.touches.length === 2) {
                isPinching = true;
                initialDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
            }
        }, { passive: false });

        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            
            if (e.touches.length === 1 && !isPinching) {
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
            } else if (e.touches.length === 2 && isPinching) {
                const currentDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                
                const pinchDelta = currentDistance - initialDistance;
                if (Math.abs(pinchDelta) > 20) {
                    const moveDirection = pinchDelta > 0 ? -1 : 1;
                    this.direction.set(0, 0, moveDirection);
                    this.direction.applyEuler(this.euler.set(0, this.rotationY, 0));
                    this.cameraContainer.position.add(this.direction.multiplyScalar(this.moveSpeed * 2));
                    
                    // Clamp position
                    this.cameraContainer.position.x = Math.max(-this.bounds, Math.min(this.bounds, this.cameraContainer.position.x));
                    this.cameraContainer.position.z = Math.max(-this.bounds, Math.min(this.bounds, this.cameraContainer.position.z));
                }
            }
        }, { passive: false });

        document.addEventListener('touchend', (e) => {
            e.preventDefault();
            
            const touchDuration = Date.now() - touchStartTime;
            
            if (touchDuration < 300 && !hasMoved && !isPinching) {
                this.handleTableClick(e.changedTouches[0]);
            }
            
            isPinching = false;
            hasMoved = false;
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

    setupLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        // Main directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 10);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 1024; // Reduced for performance
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 100;
        directionalLight.shadow.camera.left = -20;
        directionalLight.shadow.camera.right = 20;
        directionalLight.shadow.camera.top = 20;
        directionalLight.shadow.camera.bottom = -20;
        this.scene.add(directionalLight);

        // Fill light
        const fillLight = new THREE.DirectionalLight(0x87ceeb, 0.3);
        fillLight.position.set(-10, 10, -10);
        this.scene.add(fillLight);
    }

    createField() {
        // Ground plane
        const groundGeometry = new THREE.PlaneGeometry(80, 80);
        const groundMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x90EE90,
            transparent: true,
            opacity: 0.9
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        this.createCompassDirections();
        this.createDecorativeElements();
    }

    createCompassDirections() {
        const directions = [
            { text: 'N', position: [0, 0.01, -2], color: 0xff0000 },
            { text: 'S', position: [0, 0.01, 2], color: 0x00ff00 },
            { text: 'E', position: [2, 0.01, 0], color: 0x0000ff },
            { text: 'W', position: [-2, 0.01, 0], color: 0xffff00 }
        ];

        directions.forEach(dir => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 128;
            canvas.height = 128;
            
            context.fillStyle = 'rgba(0, 0, 0, 0.8)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            const colorStr = dir.color === 0xff0000 ? '255,0,0' : 
                           dir.color === 0x00ff00 ? '0,255,0' : 
                           dir.color === 0x0000ff ? '0,0,255' : '255,255,0';
            context.strokeStyle = `rgb(${colorStr})`;
            context.lineWidth = 4;
            context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
            
            context.fillStyle = 'white';
            context.font = 'bold 60px Arial, sans-serif';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(dir.text, canvas.width / 2, canvas.height / 2);
            
            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.MeshBasicMaterial({ 
                map: texture,
                transparent: true,
                opacity: 0.9
            });
            
            const directionGeometry = new THREE.PlaneGeometry(2, 2);
            const directionMesh = new THREE.Mesh(directionGeometry, material);
            directionMesh.position.set(...dir.position);
            directionMesh.rotation.x = -Math.PI / 2;
            
            directionMesh.userData = { originalPosition: [...dir.position] };
            this.scene.add(directionMesh);
        });
    }

    createDecorativeElements() {
        // Trees around perimeter
        for (let i = 0; i < 8; i++) { // Reduced from 12 to 8 for performance
            const angle = (i / 8) * Math.PI * 2;
            const radius = 35;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            this.createTree(x, z);
        }

        // Clouds
        for (let i = 0; i < 6; i++) { // Reduced from 8 to 6 for performance
            const x = (Math.random() - 0.5) * 60;
            const y = 15 + Math.random() * 10;
            const z = (Math.random() - 0.5) * 60;
            this.createCloud(x, y, z);
        }
    }

    createTree(x, z) {
        const treeGroup = new THREE.Group();
        
        // Trunk
        const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.5, 3);
        const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 1.5;
        trunk.castShadow = true;
        treeGroup.add(trunk);
        
        // Leaves
        const leavesGeometry = new THREE.SphereGeometry(2, 8, 8);
        const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 4;
        leaves.castShadow = true;
        treeGroup.add(leaves);
        
        treeGroup.position.set(x, 0, z);
        this.scene.add(treeGroup);
    }

    createCloud(x, y, z) {
        const cloudGroup = new THREE.Group();
        
        for (let i = 0; i < 4; i++) { // Reduced from 5 to 4 for performance
            const cloudGeometry = new THREE.SphereGeometry(1 + Math.random() * 0.5, 8, 8);
            const cloudMaterial = new THREE.MeshBasicMaterial({ 
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloud.position.set(
                (Math.random() - 0.5) * 3,
                (Math.random() - 0.5) * 1,
                (Math.random() - 0.5) * 3
            );
            cloudGroup.add(cloud);
        }
        
        cloudGroup.position.set(x, y, z);
        this.scene.add(cloudGroup);
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
        
        // Table
        const tableGeometry = new THREE.BoxGeometry(3, 0.2, 2);
        const tableMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const table = new THREE.Mesh(tableGeometry, tableMaterial);
        table.position.y = PORTFOLIO_CONFIG.layout.tableHeight;
        table.castShadow = true;
        table.receiveShadow = true;
        exhibitGroup.add(table);
        
        // Table legs
        const legGeometry = new THREE.BoxGeometry(0.1, PORTFOLIO_CONFIG.layout.tableHeight, 0.1);
        const legMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
        
        const legPositions = [
            [-1.4, PORTFOLIO_CONFIG.layout.tableHeight/2, -0.9],
            [1.4, PORTFOLIO_CONFIG.layout.tableHeight/2, -0.9],
            [-1.4, PORTFOLIO_CONFIG.layout.tableHeight/2, 0.9],
            [1.4, PORTFOLIO_CONFIG.layout.tableHeight/2, 0.9]
        ];
        
        legPositions.forEach(pos => {
            const leg = new THREE.Mesh(legGeometry, legMaterial);
            leg.position.set(...pos);
            leg.castShadow = true;
            exhibitGroup.add(leg);
        });
        
        // Display board
        const boardGeometry = new THREE.PlaneGeometry(2.5, 2);
        const boardMaterial = new THREE.MeshLambertMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.95
        });
        const board = new THREE.Mesh(boardGeometry, boardMaterial);
        board.position.set(0, PORTFOLIO_CONFIG.layout.tableHeight + 1.5, 0);
        board.castShadow = true;
        exhibitGroup.add(board);
        
        // Title
        const titleGeometry = new THREE.PlaneGeometry(2.3, 0.4);
        const titleMaterial = new THREE.MeshBasicMaterial({ color: 0x64ffda });
        const title = new THREE.Mesh(titleGeometry, titleMaterial);
        title.position.set(0, PORTFOLIO_CONFIG.layout.tableHeight + 2.2, 0.01);
        exhibitGroup.add(title);
        
        // Icon
        const iconGeometry = new THREE.SphereGeometry(0.3, 8, 8);
        const iconMaterial = new THREE.MeshBasicMaterial({ color: 0x00bcd4 });
        const icon = new THREE.Mesh(iconGeometry, iconMaterial);
        icon.position.set(0, PORTFOLIO_CONFIG.layout.tableHeight + 0.8, 0.01);
        exhibitGroup.add(icon);
        
        // Glow effect
        const glowGeometry = new THREE.BoxGeometry(3.2, 0.3, 2.2);
        const glowMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x64ffda,
            transparent: true,
            opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(0, PORTFOLIO_CONFIG.layout.tableHeight + 0.1, 0);
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
            delay: index * 0.3,
            ease: "power2.out"
        });
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());
        
        if (!this.isMobile) {
            document.addEventListener('click', (event) => this.onMouseClick(event));
        }
        
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                this.toggleMenu();
            }
        });

        document.getElementById('resume-btn').addEventListener('click', () => {
            window.open('Soham_Resume.pdf', '_blank');
        });

        document.querySelector('.close-btn').addEventListener('click', () => {
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
    }

    hideExhibitInfo() {
        document.getElementById('exhibit-info').classList.add('hidden');
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
            duration: 3,
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

        // Reset and apply rotations
        this.cameraContainer.rotation.set(0, 0, 0);
        this.cameraContainer.rotateY(this.rotationY);
        this.camera.rotation.x = this.rotationX;

        // Movement
        this.direction.set(0, 0, 0);
        if (this.keys['KeyW']) this.direction.z -= 1;
        if (this.keys['KeyS']) this.direction.z += 1;
        if (this.keys['KeyA']) this.direction.x -= 1;
        if (this.keys['KeyD']) this.direction.x += 1;

        this.direction.normalize();
        this.direction.applyEuler(this.euler.set(0, this.rotationY, 0));
        this.cameraContainer.position.add(this.direction.multiplyScalar(this.moveSpeed));

        // Clamp position
        this.cameraContainer.position.x = Math.max(-this.bounds, Math.min(this.bounds, this.cameraContainer.position.x));
        this.cameraContainer.position.z = Math.max(-this.bounds, Math.min(this.bounds, this.cameraContainer.position.z));
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.updateControls();
        
        // Update direction arrow
        if (this.directionArrow) {
            this.directionArrow.position.copy(this.cameraContainer.position);
            this.directionArrow.position.y += 3;
            this.directionArrow.rotation.y = this.rotationY;
        }
        
        // Update compass directions
        this.scene.children.forEach(child => {
            if (child.userData.originalPosition) {
                child.position.x = this.cameraContainer.position.x + child.userData.originalPosition[0];
                child.position.z = this.cameraContainer.position.z + child.userData.originalPosition[2];
                child.position.y = 0.01;
            }
        });
        
        // Exhibit animations
        const time = Date.now() * 0.001;
        this.exhibits.forEach((exhibit, index) => {
            exhibit.rotation.y = Math.sin(time + index) * 0.05;
            exhibit.position.y = Math.sin(time * 2 + index) * 0.1;
            
            exhibit.children.forEach(child => {
                if (child.userData.originalY !== undefined) {
                    child.position.y = child.userData.originalY + Math.sin(time * 3 + index) * 0.2;
                } else if (child.geometry && child.geometry.type === 'SphereGeometry') {
                    child.lookAt(this.camera.position);
                }
            });
        });

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the marketplace portfolio
new MarketplacePortfolio(); 