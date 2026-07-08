export const exportToCSV = (data, fileName = "inventory") => {
  if (!data || data.length === 0) {
    alert("No data available to export.");
    return;
  }

  const headers = [
    "Product Name",
    "SKU",
    "Category",
    "Price",
    "Cost",
    "Stock Quantity",
    "Reorder Level",
    "Last Updated",
  ];

  const rows = data.map((product) => [
    product.productName,
    product.sku,
    product.category,
    product.price,
    product.cost,
    product.stockQuantity,
    product.reorderLevel,
    new Date(product.lastUpdated).toLocaleDateString(),
  ]);

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map((value) => `"${value ?? ""}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${fileName}.csv`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};