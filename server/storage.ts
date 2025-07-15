import { orders, trials, type Order, type Trial, type InsertOrder, type InsertTrial } from "@shared/schema";

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

export class MemStorage implements IStorage {
  private orders: Map<number, Order>;
  private trials: Map<number, Trial>;
  private currentOrderId: number;
  private currentTrialId: number;

  constructor() {
    this.orders = new Map();
    this.trials = new Map();
    this.currentOrderId = 1;
    this.currentTrialId = 1;
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const order: Order = {
      ...insertOrder,
      id,
      status: "pending",
      createdAt: new Date(),
      additionalRequirements: insertOrder.additionalRequirements || null,
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getAllOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (order) {
      const updatedOrder = { ...order, status };
      this.orders.set(id, updatedOrder);
      return updatedOrder;
    }
    return undefined;
  }

  async createTrial(insertTrial: InsertTrial): Promise<Trial> {
    const id = this.currentTrialId++;
    const trial: Trial = {
      ...insertTrial,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.trials.set(id, trial);
    return trial;
  }

  async getTrial(id: number): Promise<Trial | undefined> {
    return this.trials.get(id);
  }

  async getAllTrials(): Promise<Trial[]> {
    return Array.from(this.trials.values());
  }

  async updateTrialStatus(id: number, status: string): Promise<Trial | undefined> {
    const trial = this.trials.get(id);
    if (trial) {
      const updatedTrial = { ...trial, status };
      this.trials.set(id, updatedTrial);
      return updatedTrial;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
