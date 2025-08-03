// CommonJS version of shared schema for Vercel API functions
const { pgTable, serial, text, integer, timestamp, pgEnum } = require('drizzle-orm/pg-core');
const { createInsertSchema } = require('drizzle-zod');
const { z } = require('zod');

// Payment method enum
const paymentMethodEnum = pgEnum('payment_method', ['wise', 'binance', 'bank_transfer']);

// Status enum  
const statusEnum = pgEnum('status', ['pending', 'processing', 'completed', 'cancelled']);

// Orders table
const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  whatsapp: text('whatsapp').notNull(),
  apolloLinks: text('apollo_links').array().notNull(),
  leadQuantity: integer('lead_quantity').notNull(),
  paymentMethod: paymentMethodEnum('payment_method').notNull(),
  totalPrice: integer('total_price').notNull(),
  status: statusEnum('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// Trials table
const trials = pgTable('trials', {
  id: serial('id').primaryKey(), 
  name: text('name').notNull(),
  email: text('email').notNull(),
  whatsapp: text('whatsapp').notNull(),
  businessType: text('business_type').notNull(),
  status: statusEnum('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// Create insert schemas
const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

const insertTrialSchema = createInsertSchema(trials).omit({
  id: true, 
  createdAt: true,
  updatedAt: true
});

module.exports = {
  orders,
  trials,
  insertOrderSchema,
  insertTrialSchema,
  paymentMethodEnum,
  statusEnum
};