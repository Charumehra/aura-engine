import express from "express";
import { getInventoryController } from "../controllers/inventoryController.js";

const router = express.Router();

// GET /api/inventory
router.get("/", getInventoryController);

export default router;