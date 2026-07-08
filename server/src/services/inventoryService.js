import mongoose from "mongoose";
import {
  getInventory,
  getTotalProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../repositories/inventoryRepository.js";

import { validateInventoryQuery } from "../utils/queryValidator.js";

export const fetchInventory = async (query) => {
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
    order = "asc",
  } = query;

  page = Number(page);
  limit = Number(limit);

  const skip = (page - 1) * limit;

  const filter = {};

  // Search
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

  // Category
  if (category) {
    filter.category = category;
  }

  // Price Range
  if (minPrice || maxPrice) {
    filter.price = {};

    if (minPrice) filter.price.$gte = Number(minPrice);

    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  // Stock
  if (stock) {
    filter.stockQuantity = {
      $lte: Number(stock),
    };
  }

  const allowedSortFields = [
    "productName",
    "category",
    "price",
    "stockQuantity",
    "reorderLevel",
    "lastUpdated",
  ];

  const sortField = allowedSortFields.includes(sort) ? sort : "productName";

  const mongoSort = {
    [sortField]: order === "desc" ? -1 : 1,
  };

  const products = await getInventory(filter, mongoSort, skip, limit);

  const totalRecords = await getTotalProducts(filter);

  const totalPages = Math.ceil(totalRecords / limit);

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

// Create Product
export const addProduct = async (productData) => {
  return await createProduct(productData);
};

// Get Product By ID
export const fetchProductById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID.");
  }

  const product = await getProductById(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  return product;
};

// Update Product
export const editProduct = async (id, productData) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID.");
  }

  const product = await updateProduct(id, productData);

  if (!product) {
    throw new Error("Product not found.");
  }

  return product;
};

// Delete Product
export const removeProduct = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID.");
  }

  const product = await deleteProduct(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  return product;
};
