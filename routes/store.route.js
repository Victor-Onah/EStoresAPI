import express from "express";
import * as storeController from "../controllers/store.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, storeController.getAllStores);
router.get("/:id", authMiddleware, storeController.getStoreById);
router.post("/create", authMiddleware, storeController.createStore);
router.put("/update/:id", authMiddleware, storeController.updateStore);
router.put("/update/:id/name", authMiddleware, storeController.updateStoreName);
router.put("/update/:id/description", authMiddleware, storeController.updateStoreDescription);
router.delete("/:id", authMiddleware, storeController.deleteStore);

export default router;
