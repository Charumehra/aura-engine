import {
  getSummaryAnalytics,
  getCategoryDistribution,
  getLowStockProducts,
} from "../repositories/analyticsRepository.js";

export const fetchAnalytics = async () => {
  // Run all aggregation pipelines simultaneously
  const [
    summary,
    categoryDistribution,
    lowStockProducts,
  ] = await Promise.all([
    getSummaryAnalytics(),
    getCategoryDistribution(),
    getLowStockProducts(),
  ]);

  return {
    summary,
    categoryDistribution,
    lowStockProducts,
  };
};