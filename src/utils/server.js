import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

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

// Load visitors data
async function loadVisitors() {
    try {
        const data = await fs.readFile(VISITORS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading visitors:', error);
        return {};
    }
}

// Save visitors data
async function saveVisitors(visitors) {
    try {
        await fs.writeFile(VISITORS_FILE, JSON.stringify(visitors, null, 2));
    } catch (error) {
        console.error('Error saving visitors:', error);
    }
}

// Load visits data
async function loadVisits() {
    try {
        const data = await fs.readFile(VISITS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading visits:', error);
        return [];
    }
}

// Save visits data
async function saveVisits(visits) {
    try {
        await fs.writeFile(VISITS_FILE, JSON.stringify(visits, null, 2));
    } catch (error) {
        console.error('Error saving visits:', error);
    }
}

// Get visitor location from IP
async function getVisitorLocation(ip) {
    try {
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
            city: 'Unknown'
        };
    }
}

// API Routes
app.post('/api/visit', async (req, res) => {
    try {
        const ip = req.ip || req.connection.remoteAddress;
        const userAgent = req.get('User-Agent');
        const referer = req.get('Referer');
        
        // Get visitor location
        const location = await getVisitorLocation(ip);
        
        // Load current data
        const visitors = await loadVisitors();
        const visits = await loadVisits();
        
        // Create visitor ID (hash of IP + User Agent)
        const visitorId = Buffer.from(ip + userAgent).toString('base64').slice(0, 16);
        
        // Update visitors data
        if (!visitors[visitorId]) {
            visitors[visitorId] = {
                id: visitorId,
                ip: ip,
                userAgent: userAgent,
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
            ip: ip,
            location: location,
            userAgent: userAgent,
            referer: referer
        });
        
        // Keep only last 1000 visits to prevent file from growing too large
        if (visits.length > 1000) {
            visits.splice(0, visits.length - 1000);
        }
        
        // Save data
        await saveVisitors(visitors);
        await saveVisits(visits);
        
        console.log(`Visit recorded: ${Object.keys(visitors).length} total visitors, ${visits.length} total visits`);
        
        res.json({
            success: true,
            visitorId: visitorId,
            totalVisitors: Object.keys(visitors).length,
            totalVisits: visits.length
        });
    } catch (error) {
        console.error('Error recording visit:', error);
        res.status(500).json({ success: false, error: 'Failed to record visit' });
    }
});

app.get('/api/stats', async (req, res) => {
    try {
        const visitors = await loadVisitors();
        const visits = await loadVisits();
        
        // Calculate location statistics
        const locationStats = {};
        Object.values(visitors).forEach(visitor => {
            const country = visitor.location.country;
            const region = visitor.location.region;
            
            if (!locationStats[country]) {
                locationStats[country] = { total: 0, regions: {} };
            }
            
            locationStats[country].total++;
            
            if (!locationStats[country].regions[region]) {
                locationStats[country].regions[region] = 0;
            }
            locationStats[country].regions[region]++;
        });
        
        res.json({
            success: true,
            totalVisitors: Object.keys(visitors).length,
            totalVisits: visits.length,
            locationStats: locationStats
        });
    } catch (error) {
        console.error('Error getting stats:', error);
        res.status(500).json({ success: false, error: 'Failed to get stats' });
    }
});

// Serve the main application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// Initialize and start server
initializeData().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📊 Visitor counter API available at http://localhost:${PORT}/api`);
    });
}).catch(console.error); 