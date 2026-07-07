import Product from "../models/Product.js";

export const getInventory = async (
  filter,
  sort,
  skip,
  limit
) => {
  return await Product.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .lean();
};

export const getTotalProducts = async (filter) => {
  return await Product.countDocuments(filter);
};