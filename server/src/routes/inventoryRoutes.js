import express from "express";
import validateProduct from "../middleware/validateProduct.js";

import {
  getInventoryController,
  createProductController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} from "../controllers/inventoryController.js";


const router = express.Router();

// Inventory List
router.get("/", getInventoryController);

// Get Single Product
router.get("/:id", getProductByIdController);

// Create Product
router.post(
  "/",
  validateProduct,
  createProductController
);

// Update Product
router.put(
  "/:id",
  validateProduct,
  updateProductController
);

// Delete Product
router.delete(
  "/:id",
  deleteProductController
);

export default router;