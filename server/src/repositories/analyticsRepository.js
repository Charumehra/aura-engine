import Product from "../models/Product.js";

/**
 * KPI Summary
 * - Total SKUs
 * - Total Inventory Value
 * - Out of Stock Items
 */
export const getSummaryAnalytics = async () => {
  const result = await Product.aggregate([
    {
      $group: {
        _id: null,
        totalSKUs: { $sum: 1 },
        inventoryValue: {
          $sum: {
            $multiply: ["$price", "$stockQuantity"],
          },
        },
        outOfStockItems: {
          $sum: {
            $cond: [
              { $eq: ["$stockQuantity", 0] },
              1,
              0,
            ],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalSKUs: 1,
        inventoryValue: {
          $round: ["$inventoryValue", 2],
        },
        outOfStockItems: 1,
      },
    },
  ]);

  return result[0] || {
    totalSKUs: 0,
    inventoryValue: 0,
    outOfStockItems: 0,
  };
};

/**
 * Pie Chart
 * Inventory valuation by category
 */
export const getCategoryDistribution = async () => {
  return await Product.aggregate([
    {
      $group: {
        _id: "$category",
        value: {
          $sum: {
            $multiply: ["$price", "$stockQuantity"],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        value: {
          $round: ["$value", 2],
        },
      },
    },
    {
      $sort: {
        value: -1,
      },
    },
  ]);
};

/**
 * Bar Chart
 * Top 10 lowest stock products
 */
export const getLowStockProducts = async () => {
  return await Product.aggregate([
    {
      $sort: {
        stockQuantity: 1,
      },
    },
    {
      $limit: 10,
    },
    {
      $project: {
        _id: 0,
        productName: 1,
        sku: 1,
        category: 1,
        stockQuantity: 1,
      },
    },
  ]);
};