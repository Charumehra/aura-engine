export const validateInventoryQuery = (query) => {
  let {
    page = 1,
    limit = 50,
    minPrice,
    maxPrice,
    stock,
  } = query;

  page = Number(page);
  limit = Number(limit);

  if (isNaN(page) || page < 1) {
    throw new Error("Page must be greater than or equal to 1.");
  }

  if (isNaN(limit) || limit < 1 || limit > 100) {
    throw new Error("Limit must be between 1 and 100.");
  }

  if (minPrice && isNaN(Number(minPrice))) {
    throw new Error("Minimum price must be a valid number.");
  }

  if (maxPrice && isNaN(Number(maxPrice))) {
    throw new Error("Maximum price must be a valid number.");
  }

  if (stock && isNaN(Number(stock))) {
    throw new Error("Stock must be a valid number.");
  }
};