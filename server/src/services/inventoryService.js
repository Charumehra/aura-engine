import {
  getInventory,
  getTotalProducts,
} from "../repositories/inventoryRepository.js";

import { validateInventoryQuery } from "../utils/queryValidator.js";

export const fetchInventory = async (query) => {
  // Validate query parameters
  validateInventoryQuery(query);

  let {
    page = 1,
    limit = 50,
    search = "",
    category,
    minPrice,
    maxPrice,
    stock,
    sort = "productName",
  } = query;

  // Convert pagination values
  page = Number(page);
  limit = Number(limit);

  const skip = (page - 1) * limit;

  // MongoDB Filter
  const filter = {};

  // Search by Product Name or SKU
  if (search) {
    filter.$or = [
      {
        productName: {
          $regex: search,
          $options: "i",
        },
      },
      {
        sku: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  // Category Filter
  if (category) {
    filter.category = category;
  }

  // Price Range Filter
  if (minPrice || maxPrice) {
    filter.price = {};

    if (minPrice) {
      filter.price.$gte = Number(minPrice);
    }

    if (maxPrice) {
      filter.price.$lte = Number(maxPrice);
    }
  }

  // Low Stock Filter
  if (stock) {
    filter.stockQuantity = {
      $lte: Number(stock),
    };
  }

  // Allowed Sort Fields
  const allowedSortFields = [
    "productName",
    "price",
    "stockQuantity",
    "category",
    "lastUpdated",
  ];

  let sortField = sort;
  let sortOrder = 1;

  if (sort.startsWith("-")) {
    sortField = sort.substring(1);
    sortOrder = -1;
  }

  if (!allowedSortFields.includes(sortField)) {
    sortField = "productName";
    sortOrder = 1;
  }

  const mongoSort = {
    [sortField]: sortOrder,
  };

  // Fetch Products
  const products = await getInventory(
    filter,
    mongoSort,
    skip,
    limit
  );

  // Count Total Records
  const totalRecords = await getTotalProducts(filter);

  const totalPages = Math.max(
    1,
    Math.ceil(totalRecords / limit)
  );

  return {
    products,
    pagination: {
      totalRecords,
      totalPages,
      currentPage: page,
      limit,
      hasNextPage: page < totalPages,
    },
  };
};