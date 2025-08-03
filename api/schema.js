// ES module version of shared schema for Vercel API functions
import { pgTable, serial, text, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Payment method enum
export const paymentMethodEnum = pgEnum('payment_method', ['wise', 'binance', 'bank_transfer']);

// Status enum  
export const statusEnum = pgEnum('status', ['pending', 'processing', 'completed', 'cancelled']);

// Orders table
export const orders = pgTable('orders', {
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
export const trials = pgTable('trials', {
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
export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertTrialSchema = createInsertSchema(trials).omit({
  id: true, 
  createdAt: true,
  updatedAt: true
});