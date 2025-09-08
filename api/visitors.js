// Optimal minimal visitor tracking
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL || 'libsql://portfolio-baneen.aws-us-east-2.turso.io',
  authToken: process.env.DATABASE_TOKEN || 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NTczNjM1NTgsImlkIjoiMzgxZDcxNDgtMTg5Yy00ZWRkLTk1OGYtY2RjMjIxZWE0MWFmIiwicmlkIjoiNzgyM2VmOTYtNTE1OC00ZTg5LTk2NzItNDBlODNmMWFjMDM3In0.og_IeMfmh2I_rpOdmgGTEL1t4zQomkFeZAHm9vWabC5wdOMS-_9_LcGu_15Kxvr_HybIq5TGRVRQEXxyBgc1Ag'
});

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'POST') {
    await client.execute(`INSERT OR IGNORE INTO visitors (visitor_id) VALUES (?)`, [req.body.visitorId]);
    const stats = await client.execute(`SELECT COUNT(*) as count FROM visitors`);
    return res.json({ count: stats.rows[0].count });
  }
  
  const stats = await client.execute(`SELECT COUNT(*) as count FROM visitors`);
  return res.json({ count: stats.rows[0].count });
};
