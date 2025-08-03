// Vercel serverless function for LeadSure API
const { Pool, neonConfig } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-serverless');
const ws = require('ws');

neonConfig.webSocketConstructor = ws;

// Schema imports (CommonJS version for Vercel compatibility)
const schema = require('./schema.js');

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool, schema });

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url, method } = req;
  
  try {
    if (method === 'POST' && url.includes('/orders')) {
      const validatedData = schema.insertOrderSchema.parse(req.body);
      const [order] = await db.insert(schema.orders).values(validatedData).returning();
      return res.status(201).json(order);
    }
    
    if (method === 'GET' && url.includes('/orders')) {
      const allOrders = await db.select().from(schema.orders);
      return res.json(allOrders);
    }
    
    if (method === 'POST' && url.includes('/trials')) {
      const validatedData = schema.insertTrialSchema.parse(req.body);
      const [trial] = await db.insert(schema.trials).values(validatedData).returning();
      return res.status(201).json(trial);
    }
    
    if (method === 'GET' && url.includes('/trials')) {
      const allTrials = await db.select().from(schema.trials);
      return res.json(allTrials);
    }
    
    return res.status(404).json({ error: 'API endpoint not found' });
    
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};