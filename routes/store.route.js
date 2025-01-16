import express from "express";
import * as storeController from "../controllers/store.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Get all stores
router.get("/", authMiddleware, storeController.getAllStores);

// Get a single store by ID
router.get("/:id", authMiddleware, storeController.getStoreById);

// Create a new store
router.post("/", authMiddleware, storeController.createStore);

// Update a store by ID
router.put("/:id", authMiddleware, storeController.updateStore);

// Delete a store by ID
router.delete("/:id", authMiddleware, storeController.deleteStore);

export default router;
