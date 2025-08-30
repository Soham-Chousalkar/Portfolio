import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
    createRateLimiters, 
    createHelmetConfig, 
    createCorsConfig,
    validateRequest,
    sanitizeInputs,
    addSecurityHeaders,
    errorHandler,
    notFoundHandler,
    requestLogger
} from './security-middleware.js';
import { 
    sanitizeInput, 
    validateIP, 
    validateUserAgent, 
    validateReferer,
    validateJSONStructure,
    logSecurityEvent 
} from './security-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize security middleware
const { generalLimiter, apiLimiter } = createRateLimiters();
const helmetConfig = createHelmetConfig();
const corsConfig = createCorsConfig();

// Apply security middleware
app.use(helmetConfig);
app.use(cors(corsConfig));
app.use(generalLimiter);
app.use('/api/', apiLimiter);
app.use(validateRequest);
app.use(sanitizeInputs);
app.use(addSecurityHeaders);
app.use(requestLogger);

// Body parsing with size limits
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// Data storage - Fixed paths
const VISITORS_FILE = path.join(__dirname, 'assets/data/visitors.json');
const VISITS_FILE = path.join(__dirname, 'assets/data/visits.json');

// Ensure data directory exists
async function ensureDataDirectory() {
    const dataDir = path.dirname(VISITORS_FILE);
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

// Initialize data files if they don't exist
async function initializeData() {
    await ensureDataDirectory();
    
    try {
        await fs.access(VISITORS_FILE);
    } catch {
        await fs.writeFile(VISITORS_FILE, JSON.stringify({}));
    }
    
    try {
        await fs.access(VISITS_FILE);
    } catch {
        await fs.writeFile(VISITS_FILE, JSON.stringify([]));
    }
}

// Load visitors data with error handling
async function loadVisitors() {
    try {
        const data = await fs.readFile(VISITORS_FILE, 'utf8');
        const parsed = JSON.parse(data);
        
        // Validate data structure
        if (!validateJSONStructure(parsed, 'object')) {
            logSecurityEvent('INVALID_VISITORS_DATA_STRUCTURE', { data: typeof parsed });
            console.warn('Invalid visitors data structure, resetting...');
            return {};
        }
        
        return parsed;
    } catch (error) {
        console.error('Error loading visitors:', error);
        return {};
    }
}

// Save visitors data with validation
async function saveVisitors(visitors) {
    try {
        if (!validateJSONStructure(visitors, 'object')) {
            throw new Error('Invalid visitors data structure');
        }
        
        await fs.writeFile(VISITORS_FILE, JSON.stringify(visitors, null, 2));
    } catch (error) {
        console.error('Error saving visitors:', error);
        throw error;
    }
}

// Load visits data with error handling
async function loadVisits() {
    try {
        const data = await fs.readFile(VISITS_FILE, 'utf8');
        const parsed = JSON.parse(data);
        
        // Validate data structure
        if (!validateJSONStructure(parsed, 'array')) {
            logSecurityEvent('INVALID_VISITS_DATA_STRUCTURE', { data: typeof parsed });
            console.warn('Invalid visits data structure, resetting...');
            return [];
        }
        
        return parsed;
    } catch (error) {
        console.error('Error loading visits:', error);
        return [];
    }
}

// Save visits data with validation
async function saveVisits(visits) {
    try {
        if (!validateJSONStructure(visits, 'array')) {
            throw new Error('Invalid visits data structure');
        }
        
        await fs.writeFile(VISITS_FILE, JSON.stringify(visits, null, 2));
    } catch (error) {
        console.error('Error saving visits:', error);
        throw error;
    }
}

// Get visitor location from IP with validation
async function getVisitorLocation(ip) {
    try {
        // Validate IP first
        if (!validateIP(ip)) {
            logSecurityEvent('INVALID_IP_ADDRESS', { ip });
            return {
                country: 'Unknown',
                region: 'Unknown',
                city: 'Unknown',
                timezone: 'UTC'
            };
        }

        // For development, use a mock location
        if (ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
            return {
                country: 'United States',
                region: 'California',
                city: 'San Francisco',
                timezone: 'America/Los_Angeles'
            };
        }
        
        // In production, you would use a real IP geolocation service
        // For now, we'll use a mock response
        const mockLocations = [
            { country: 'United States', region: 'California', city: 'San Francisco' },
            { country: 'United States', region: 'New York', city: 'New York' },
            { country: 'United States', region: 'Texas', city: 'Austin' },
            { country: 'Canada', region: 'Ontario', city: 'Toronto' },
            { country: 'United Kingdom', region: 'England', city: 'London' },
            { country: 'Germany', region: 'Berlin', city: 'Berlin' },
            { country: 'India', region: 'Maharashtra', city: 'Mumbai' },
            { country: 'Australia', region: 'New South Wales', city: 'Sydney' }
        ];
        
        const randomIndex = Math.floor(Math.random() * mockLocations.length);
        return mockLocations[randomIndex];
    } catch (error) {
        console.error('Error getting location:', error);
        return {
            country: 'Unknown',
            region: 'Unknown',
            city: 'Unknown',
            timezone: 'UTC'
        };
    }
}

// API Routes with comprehensive security
app.post('/api/visit', async (req, res) => {
    try {
        // Input validation and sanitization
        const ip = req.ip || req.connection.remoteAddress;
        const userAgent = req.get('User-Agent');
        const referer = req.get('Referer');
        
        // Validate all inputs
        if (!validateIP(ip)) {
            logSecurityEvent('INVALID_IP_IN_REQUEST', { ip, endpoint: '/api/visit' });
            return res.status(400).json({ 
                success: false, 
                error: 'Invalid IP address' 
            });
        }
        
        if (!validateUserAgent(userAgent)) {
            logSecurityEvent('INVALID_USER_AGENT_IN_REQUEST', { userAgent, endpoint: '/api/visit' });
            return res.status(400).json({ 
                success: false, 
                error: 'Invalid user agent' 
            });
        }
        
        if (!validateReferer(referer)) {
            logSecurityEvent('INVALID_REFERER_IN_REQUEST', { referer, endpoint: '/api/visit' });
            return res.status(400).json({ 
                success: false, 
                error: 'Invalid referer' 
            });
        }
        
        // Sanitize inputs
        const sanitizedIP = sanitizeInput(ip);
        const sanitizedUserAgent = sanitizeInput(userAgent);
        const sanitizedReferer = referer ? sanitizeInput(referer) : '';
        
        // Get visitor location
        const location = await getVisitorLocation(sanitizedIP);
        
        // Load current data
        const visitors = await loadVisitors();
        const visits = await loadVisits();
        
        // Create visitor ID (hash of IP + User Agent) - more secure
        const visitorId = Buffer.from(sanitizedIP + sanitizedUserAgent + Date.now().toString())
            .toString('base64')
            .slice(0, 16)
            .replace(/[^a-zA-Z0-9]/g, '');
        
        // Update visitors data
        if (!visitors[visitorId]) {
            visitors[visitorId] = {
                id: visitorId,
                ip: sanitizedIP,
                userAgent: sanitizedUserAgent,
                firstVisit: new Date().toISOString(),
                location: location,
                visitCount: 0
            };
        }
        
        visitors[visitorId].lastVisit = new Date().toISOString();
        visitors[visitorId].visitCount++;
        
        // Add visit record
        visits.push({
            visitorId: visitorId,
            timestamp: new Date().toISOString(),
            ip: sanitizedIP,
            location: location,
            userAgent: sanitizedUserAgent,
            referer: sanitizedReferer
        });
        
        // Keep only last 1000 visits to prevent file from growing too large
        if (visits.length > 1000) {
            visits.splice(0, visits.length - 1000);
        }
        
        // Save data
        await saveVisitors(visitors);
        await saveVisits(visits);
        
        logSecurityEvent('VISIT_RECORDED_SUCCESSFULLY', {
            visitorId,
            totalVisitors: Object.keys(visitors).length,
            totalVisits: visits.length
        });
        
        res.json({
            success: true,
            visitorId: visitorId,
            totalVisitors: Object.keys(visitors).length,
            totalVisits: visits.length
        });
    } catch (error) {
        console.error('Error recording visit:', error);
        logSecurityEvent('VISIT_RECORDING_ERROR', { error: error.message });
        res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
});

app.get('/api/stats', async (req, res) => {
    try {
        const visitors = await loadVisitors();
        const visits = await loadVisits();
        
        // Calculate location statistics
        const locationStats = {};
        Object.values(visitors).forEach(visitor => {
            if (visitor && visitor.location) {
                const country = visitor.location.country || 'Unknown';
                const region = visitor.location.region || 'Unknown';
                
                if (!locationStats[country]) {
                    locationStats[country] = { total: 0, regions: {} };
                }
                
                locationStats[country].total++;
                
                if (!locationStats[country].regions[region]) {
                    locationStats[country].regions[region] = 0;
                }
                locationStats[country].regions[region]++;
            }
        });
        
        res.json({
            success: true,
            totalVisitors: Object.keys(visitors).length,
            totalVisits: visits.length,
            locationStats: locationStats
        });
    } catch (error) {
        console.error('Error getting stats:', error);
        logSecurityEvent('STATS_RETRIEVAL_ERROR', { error: error.message });
        res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
});

// Security endpoint to check if server is running
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        security: 'enabled'
    });
});

// Apply 404 handler for unknown API routes
app.use('/api/*', notFoundHandler);

// Serve the main application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

// Apply global error handler
app.use(errorHandler);

// Initialize and start server
initializeData().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📊 Visitor counter API available at http://localhost:${PORT}/api`);
        console.log(`🔒 Security features enabled:`);
        console.log(`   - Helmet (Security Headers)`);
        console.log(`   - Rate Limiting (General: 100/15min, API: 10/15min)`);
        console.log(`   - Input Validation & Sanitization`);
        console.log(`   - CORS Protection`);
        console.log(`   - Request Logging & Monitoring`);
        console.log(`   - Threat Detection`);
    });
}).catch(console.error); 