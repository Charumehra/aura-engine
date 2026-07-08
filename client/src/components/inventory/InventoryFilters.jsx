const categories = [
  "",
  "Electronics",
  "Apparel",
  "Furniture",
  "Books",
  "Sports",
  "Home",
  "Beauty",
  "Toys",
  "Automotive",
];

const InventoryFilters = ({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  maxStock,
  setMaxStock,
}) => {
  const clearFilters = () => {
    setCategory("");
    setMaxPrice("");
    setMaxStock("");
  };

  return (
    <div className="bg-white shadow rounded-xl p-5">
      <div className="flex flex-wrap items-end gap-4">
        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-4 py-2 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((item) => (
              <option key={item || "all"} value={item}>
                {item || "All Categories"}
              </option>
            ))}
          </select>
        </div>

        {/* Maximum Price */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Maximum Price
          </label>

          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="e.g. 500"
            className="border rounded-lg px-4 py-2 w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Maximum Stock */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Maximum Stock
          </label>

          <input
            type="number"
            min="0"
            value={maxStock}
            onChange={(e) => setMaxStock(e.target.value)}
            placeholder="e.g. 20"
            className="border rounded-lg px-4 py-2 w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearFilters}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default InventoryFilters;