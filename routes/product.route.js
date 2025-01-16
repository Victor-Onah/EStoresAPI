import * as productController from "../controllers/product.controller.js";
import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Get all products
router.get("/", authMiddleware, productController.getAllProducts);

// Get a single product by ID
router.get("/:id", authMiddleware, productController.getProductById);

// Create a new product
router.post("/", authMiddleware, productController.createProduct);

// Update a product by ID
router.put("/:id", authMiddleware, productController.updateProduct);

// Delete a product by ID
router.delete("/:id", authMiddleware, productController.deleteProduct);

export default router;
