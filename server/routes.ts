import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema, insertTrialSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Order routes
  app.post("/api/orders", async (req, res) => {
    try {
      const validatedData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/orders", async (req, res) => {
    try {
      const orders = await storage.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const order = await storage.getOrder(id);
      if (!order) {
        res.status(404).json({ message: "Order not found" });
        return;
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Trial routes
  app.post("/api/trials", async (req, res) => {
    try {
      const validatedData = insertTrialSchema.parse(req.body);
      const trial = await storage.createTrial(validatedData);
      res.status(201).json(trial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/trials", async (req, res) => {
    try {
      const trials = await storage.getAllTrials();
      res.json(trials);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/trials/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const trial = await storage.getTrial(id);
      if (!trial) {
        res.status(404).json({ message: "Trial not found" });
        return;
      }
      res.json(trial);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
