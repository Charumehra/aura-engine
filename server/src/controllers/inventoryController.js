import { fetchInventory } from "../services/inventoryService.js";

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