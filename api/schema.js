// ES module version of shared schema for Vercel API functions (matching original schema)
import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Orders table (matching original schema)
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  whatsappNumber: text('whatsapp_number').notNull(),
  apolloFilterLink: text('apollo_filter_link').notNull(),
  numberOfLeads: integer('number_of_leads').notNull(),
  paymentMethod: text('payment_method').notNull(),
  additionalRequirements: text('additional_requirements'),
  totalPrice: integer('total_price').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Trials table (matching original schema)
export const trials = pgTable('trials', {
  id: serial('id').primaryKey(), 
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  whatsappNumber: text('whatsapp_number').notNull(),
  apolloFilterLink: text('apollo_filter_link').notNull(),
  businessType: text('business_type').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Create insert schemas (matching original)
export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  status: true
});

export const insertTrialSchema = createInsertSchema(trials).omit({
  id: true, 
  createdAt: true,
  status: true
});