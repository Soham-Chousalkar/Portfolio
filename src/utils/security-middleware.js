/**
 * Security Middleware for Portfolio Website
 * This file contains all security-related middleware functions
 */

import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { SECURITY_CONFIG, logSecurityEvent, detectSuspiciousActivity } from './security-config.js';

// Rate limiting middleware
export const createRateLimiters = () => {
    const generalLimiter = rateLimit({
        windowMs: SECURITY_CONFIG.RATE_LIMIT.GENERAL.windowMs,
        max: SECURITY_CONFIG.RATE_LIMIT.GENERAL.max,
        message: {
            error: SECURITY_CONFIG.RATE_LIMIT.GENERAL.message
        },
        standardHeaders: true,
        legacyHeaders: false,
        handler: (req, res) => {
            logSecurityEvent('RATE_LIMIT_EXCEEDED', {
                ip: req.ip,
                userAgent: req.get('User-Agent'),
                endpoint: req.path
            });
            res.status(429).json({
                success: false,
                error: SECURITY_CONFIG.RATE_LIMIT.GENERAL.message
            });
        }
    });

    const apiLimiter = rateLimit({
        windowMs: SECURITY_CONFIG.RATE_LIMIT.API.windowMs,
        max: SECURITY_CONFIG.RATE_LIMIT.API.max,
        message: {
            error: SECURITY_CONFIG.RATE_LIMIT.API.message
        },
        standardHeaders: true,
        legacyHeaders: false,
        handler: (req, res) => {
            logSecurityEvent('API_RATE_LIMIT_EXCEEDED', {
                ip: req.ip,
                userAgent: req.get('User-Agent'),
                endpoint: req.path
            });
            res.status(429).json({
                success: false,
                error: SECURITY_CONFIG.RATE_LIMIT.API.message
            });
        }
    });

    const authLimiter = rateLimit({
        windowMs: SECURITY_CONFIG.RATE_LIMIT.AUTH.windowMs,
        max: SECURITY_CONFIG.RATE_LIMIT.AUTH.max,
        message: {
            error: SECURITY_CONFIG.RATE_LIMIT.AUTH.message
        },
        standardHeaders: true,
        legacyHeaders: false,
        handler: (req, res) => {
            logSecurityEvent('AUTH_RATE_LIMIT_EXCEEDED', {
                ip: req.ip,
                userAgent: req.get('User-Agent'),
                endpoint: req.path
            });
            res.status(429).json({
                success: false,
                error: SECURITY_CONFIG.RATE_LIMIT.AUTH.message
            });
        }
    });

    return { generalLimiter, apiLimiter, authLimiter };
};

// Helmet security middleware
export const createHelmetConfig = () => {
    return helmet({
        contentSecurityPolicy: {
            directives: SECURITY_CONFIG.CSP
        },
        hsts: SECURITY_CONFIG.HEADERS.HSTS,
        frameguard: { action: 'deny' },
        noSniff: true,
        xssFilter: true,
        referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
    });
};

// CORS configuration middleware
export const createCorsConfig = () => {
    const origins = process.env.NODE_ENV === 'production' 
        ? SECURITY_CONFIG.CORS.PRODUCTION 
        : SECURITY_CONFIG.CORS.DEVELOPMENT;

    return {
        origin: (origin, callback) => {
            // Allow requests with no origin (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            
            if (origins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                logSecurityEvent('CORS_VIOLATION', { origin, allowedOrigins: origins });
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: SECURITY_CONFIG.CORS.CREDENTIALS,
        methods: SECURITY_CONFIG.CORS.METHODS,
        allowedHeaders: SECURITY_CONFIG.CORS.ALLOWED_HEADERS,
        optionsSuccessStatus: 200
    };
};

// Request validation middleware
export const validateRequest = (req, res, next) => {
    // Check for suspicious activity
    const suspicious = detectSuspiciousActivity(req);
    if (suspicious.length > 0) {
        logSecurityEvent('SUSPICIOUS_ACTIVITY_DETECTED', {
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            suspicious: suspicious
        });
    }

    // Validate request size
    const contentLength = parseInt(req.get('Content-Length') || '0');
    if (contentLength > 10240) { // 10KB limit
        logSecurityEvent('REQUEST_TOO_LARGE', {
            ip: req.ip,
            contentLength,
            endpoint: req.path
        });
        return res.status(413).json({
            success: false,
            error: 'Request entity too large'
        });
    }

    // Validate content type for POST requests
    if (req.method === 'POST' && req.get('Content-Type') !== 'application/json') {
        logSecurityEvent('INVALID_CONTENT_TYPE', {
            ip: req.ip,
            contentType: req.get('Content-Type'),
            endpoint: req.path
        });
        return res.status(400).json({
            success: false,
            error: 'Invalid content type. Expected application/json'
        });
    }

    next();
};

// Input sanitization middleware
export const sanitizeInputs = (req, res, next) => {
    // Sanitize query parameters
    if (req.query) {
        Object.keys(req.query).forEach(key => {
            if (typeof req.query[key] === 'string') {
                req.query[key] = req.query[key].trim();
            }
        });
    }

    // Sanitize body parameters
    if (req.body) {
        Object.keys(req.body).forEach(key => {
            if (typeof req.body[key] === 'string') {
                req.body[key] = req.body[key].trim();
            }
        });
    }

    next();
};

// Security headers middleware
export const addSecurityHeaders = (req, res, next) => {
    // Additional security headers
    res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
    res.setHeader('X-Download-Options', 'noopen');
    res.setHeader('X-Powered-By', 'Portfolio Website');
    
    // Remove server information
    res.removeHeader('Server');
    
    next();
};

// Error handling middleware
export const errorHandler = (error, req, res, next) => {
    logSecurityEvent('UNHANDLED_ERROR', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        endpoint: req.path,
        error: error.message,
        stack: error.stack
    });

    // Don't expose internal error details in production
    const isProduction = process.env.NODE_ENV === 'production';
    
    res.status(500).json({
        success: false,
        error: isProduction ? 'Internal server error' : error.message
    });
};

// 404 handler for unknown routes
export const notFoundHandler = (req, res) => {
    logSecurityEvent('UNKNOWN_ROUTE_ACCESSED', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        method: req.method,
        path: req.path
    });

    res.status(404).json({
        success: false,
        error: 'Endpoint not found'
    });
};

// Request logging middleware
export const requestLogger = (req, res, next) => {
    const start = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - start;
        const logData = {
            method: req.method,
            path: req.path,
            status: res.statusCode,
            duration: `${duration}ms`,
            ip: req.ip,
            userAgent: req.get('User-Agent')
        };

        if (res.statusCode >= 400) {
            logSecurityEvent('REQUEST_ERROR', logData);
        } else {
            console.log(`📝 [REQUEST] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`);
        }
    });

    next();
};

// Export all middleware
export default {
    createRateLimiters,
    createHelmetConfig,
    createCorsConfig,
    validateRequest,
    sanitizeInputs,
    addSecurityHeaders,
    errorHandler,
    notFoundHandler,
    requestLogger
};
