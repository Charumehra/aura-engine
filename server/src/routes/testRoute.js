import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const count = await Product.countDocuments();

  res.json({
    products: count,
  });
});

export default router;