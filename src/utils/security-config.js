/**
 * Security Configuration for Portfolio Website
 * This file contains all security-related configurations and validation rules
 */

// Security constants
export const SECURITY_CONFIG = {
    // Rate limiting settings
    RATE_LIMIT: {
        GENERAL: {
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // 100 requests per window
            message: 'Too many requests from this IP, please try again later.'
        },
        API: {
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 10, // 10 requests per window for API endpoints
            message: 'API rate limit exceeded, please try again later.'
        },
        AUTH: {
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 5, // 5 authentication attempts per window
            message: 'Too many authentication attempts, please try again later.'
        }
    },

    // Input validation rules
    VALIDATION: {
        IP_ADDRESS: {
            maxLength: 45, // IPv6 max length
            pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^::1$|^127\.0\.0\.1$|^(?:192\.168\.|10\.|172\.(?:1[6-9]|2[0-9]|3[0-1])\.)/
        },
        USER_AGENT: {
            maxLength: 500,
            forbiddenPatterns: [
                /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                /javascript:/gi,
                /vbscript:/gi,
                /on\w+\s*=/gi,
                /<iframe/gi,
                /<object/gi,
                /<embed/gi
            ]
        },
        REFERER: {
            maxLength: 2000,
            allowedProtocols: ['http:', 'https:'],
            forbiddenDomains: ['malicious-site.com', 'evil-domain.org']
        },
        JSON_PAYLOAD: {
            maxSize: '10kb'
        }
    },

    // CORS configuration
    CORS: {
        PRODUCTION: [
            'https://soham-chousalkar.github.io',
            'https://yourdomain.com'
        ],
        DEVELOPMENT: [
            'http://localhost:3000',
            'http://localhost:5173',
            'http://localhost:5174'
        ],
        METHODS: ['GET', 'POST'],
        ALLOWED_HEADERS: ['Content-Type', 'User-Agent', 'Referer'],
        CREDENTIALS: false
    },

    // Content Security Policy
    CSP: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"]
    },

    // HTTP Security Headers
    HEADERS: {
        HSTS: {
            maxAge: 31536000, // 1 year
            includeSubDomains: true,
            preload: true
        },
        X_FRAME_OPTIONS: 'DENY',
        X_CONTENT_TYPE_OPTIONS: 'nosniff',
        X_XSS_PROTECTION: '1; mode=block',
        REFERRER_POLICY: 'strict-origin-when-cross-origin'
    }
};

// Input sanitization functions
export function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    
    // Remove null bytes and control characters
    let sanitized = input.replace(/[\x00-\x1F\x7F]/g, '');
    
    // Trim whitespace
    sanitized = sanitized.trim();
    
    // HTML entity encoding for special characters
    sanitized = sanitized
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    
    return sanitized;
}

// Input validation functions
export function validateIP(ip) {
    if (!ip || typeof ip !== 'string') return false;
    if (ip.length > SECURITY_CONFIG.VALIDATION.IP_ADDRESS.maxLength) return false;
    return SECURITY_CONFIG.VALIDATION.IP_ADDRESS.pattern.test(ip);
}

export function validateUserAgent(userAgent) {
    if (!userAgent || typeof userAgent !== 'string') return false;
    if (userAgent.length > SECURITY_CONFIG.VALIDATION.USER_AGENT.maxLength) return false;
    
    // Check for forbidden patterns
    for (const pattern of SECURITY_CONFIG.VALIDATION.USER_AGENT.forbiddenPatterns) {
        if (pattern.test(userAgent)) return false;
    }
    
    return true;
}

export function validateReferer(referer) {
    if (!referer) return true; // Referer is optional
    
    if (typeof referer !== 'string') return false;
    if (referer.length > SECURITY_CONFIG.VALIDATION.REFERER.maxLength) return false;
    
    try {
        const url = new URL(referer);
        
        // Check protocol
        if (!SECURITY_CONFIG.VALIDATION.REFERER.allowedProtocols.includes(url.protocol)) {
            return false;
        }
        
        // Check for forbidden domains
        for (const domain of SECURITY_CONFIG.VALIDATION.REFERER.forbiddenDomains) {
            if (url.hostname.includes(domain)) return false;
        }
        
        return true;
    } catch {
        return false;
    }
}

// Data validation functions
export function validateJSONStructure(data, expectedType) {
    if (expectedType === 'object') {
        return data && typeof data === 'object' && !Array.isArray(data);
    }
    if (expectedType === 'array') {
        return Array.isArray(data);
    }
    return false;
}

// Security logging
export function logSecurityEvent(event, details) {
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        event,
        details,
        severity: 'INFO'
    };
    
    console.log(`🔒 [SECURITY] ${timestamp} - ${event}:`, details);
    
    // In production, you might want to log to a security monitoring service
    // or send alerts for suspicious activities
}

// Threat detection
export function detectSuspiciousActivity(req) {
    const suspicious = [];
    
    // Check for suspicious headers
    const suspiciousHeaders = ['x-forwarded-for', 'x-real-ip', 'x-forwarded-proto'];
    for (const header of suspiciousHeaders) {
        if (req.get(header)) {
            suspicious.push(`Suspicious header: ${header}`);
        }
    }
    
    // Check for suspicious user agent patterns
    const userAgent = req.get('User-Agent');
    if (userAgent) {
        if (userAgent.includes('curl') || userAgent.includes('wget')) {
            suspicious.push('Bot-like user agent');
        }
        if (userAgent.length > 200) {
            suspicious.push('Unusually long user agent');
        }
    }
    
    // Check for suspicious IP patterns
    const ip = req.ip;
    if (ip && (ip.includes('..') || ip.includes('--'))) {
        suspicious.push('Suspicious IP format');
    }
    
    return suspicious;
}

// Export default configuration
export default SECURITY_CONFIG;
