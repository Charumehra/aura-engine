import express from "express";
import { getAnalyticsController } from "../controllers/analyticsController.js";

const router = express.Router();

// GET /api/analytics
router.get("/", getAnalyticsController);

export default router;