import { orders, trials, type Order, type Trial, type InsertOrder, type InsertTrial } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Order methods
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: number): Promise<Order | undefined>;
  getAllOrders(): Promise<Order[]>;
  updateOrderStatus(id: number, status: string): Promise<Order | undefined>;
  
  // Trial methods
  createTrial(trial: InsertTrial): Promise<Trial>;
  getTrial(id: number): Promise<Trial | undefined>;
  getAllTrials(): Promise<Trial[]>;
  updateTrialStatus(id: number, status: string): Promise<Trial | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const [order] = await db
      .insert(orders)
      .values(insertOrder)
      .returning();
    return order;
  }

  async getOrder(id: number): Promise<Order | undefined> {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order || undefined;
  }

  async getAllOrders(): Promise<Order[]> {
    return await db.select().from(orders);
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const [order] = await db
      .update(orders)
      .set({ status })
      .where(eq(orders.id, id))
      .returning();
    return order || undefined;
  }

  async createTrial(insertTrial: InsertTrial): Promise<Trial> {
    const [trial] = await db
      .insert(trials)
      .values(insertTrial)
      .returning();
    return trial;
  }

  async getTrial(id: number): Promise<Trial | undefined> {
    const [trial] = await db.select().from(trials).where(eq(trials.id, id));
    return trial || undefined;
  }

  async getAllTrials(): Promise<Trial[]> {
    return await db.select().from(trials);
  }

  async updateTrialStatus(id: number, status: string): Promise<Trial | undefined> {
    const [trial] = await db
      .update(trials)
      .set({ status })
      .where(eq(trials.id, id))
      .returning();
    return trial || undefined;
  }
}

export const storage = new DatabaseStorage();
