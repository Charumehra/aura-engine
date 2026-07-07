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

// Create Product
export const createProduct = async (productData) => {
  return await Product.create(productData);
};

// Get Product By ID
export const getProductById = async (id) => {
  return await Product.findById(id);
};

// Update Product
export const updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(
    id,
    productData,
    {
      new: true,
      runValidators: true,
    }
  );
};

// Delete Product
export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};