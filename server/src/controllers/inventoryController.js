import {
  fetchInventory,
  addProduct,
  fetchProductById,
  editProduct,
  removeProduct,
} from "../services/inventoryService.js";

export const getInventoryController = async (req, res, next) => {
  try {
    const result = await fetchInventory(req.query);

    res.status(200).json({
      success: true,
      message: "Inventory fetched successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/inventory
export const createProductController = async (
  req,
  res,
  next
) => {
  try {
    const product = await addProduct(req.body);

    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/inventory/:id
export const getProductByIdController = async (
  req,
  res,
  next
) => {
  try {
    const product = await fetchProductById(req.params.id);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/inventory/:id
export const updateProductController = async (
  req,
  res,
  next
) => {
  try {
    const product = await editProduct(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/inventory/:id
export const deleteProductController = async (
  req,
  res,
  next
) => {
  try {
    await removeProduct(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};