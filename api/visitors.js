// Visitor tracking API — Vercel Serverless Function
// Backend: Turso (libSQL) — stores unique visitor UUIDs
import { createClient } from '@libsql/client';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function createDB() {
    return createClient({
        url: process.env.DATABASE_URL,
        authToken: process.env.DATABASE_TOKEN,
    });
}

export default async (req, res) => {
    // CORS headers — allow portfolio origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    const client = createDB();

    try {
        if (req.method === 'POST') {
            const { visitorId } = req.body || {};

            // Validate UUID format before DB write
            if (!visitorId || !UUID_REGEX.test(visitorId)) {
                return res.status(400).json({ error: 'Invalid or missing visitorId' });
            }

            // INSERT OR IGNORE ensures a single visitor ID is only counted once
            await client.execute(
                `INSERT OR IGNORE INTO visitors (visitor_id) VALUES (?)`,
                [visitorId]
            );

            const stats = await client.execute(`SELECT COUNT(*) as count FROM visitors`);
            return res.status(200).json({ count: Number(stats.rows[0].count) });
        }

        // GET — return current unique visitor count
        const stats = await client.execute(`SELECT COUNT(*) as count FROM visitors`);
        return res.status(200).json({ count: Number(stats.rows[0].count) });

    } catch (err) {
        console.error('[visitors.js] DB error:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
    } finally {
        client.close?.();
    }
};
