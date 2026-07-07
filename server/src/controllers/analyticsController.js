import { fetchAnalytics } from "../services/analyticsService.js";

export const getAnalyticsController = async (req, res, next) => {
  try {
    const analytics = await fetchAnalytics();

    return res.status(200).json({
      success: true,
      message: "Analytics fetched successfully",
      data: analytics,
    });
  } catch (error) {
    next(error);
  }
};