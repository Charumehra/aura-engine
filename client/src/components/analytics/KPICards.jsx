const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
};

const KPICards = ({ summary }) => {
  const cards = [
    {
      title: "Total SKUs",
      value: summary.totalSKUs.toLocaleString(),
    },
    {
      title: "Inventory Value",
      value: formatCurrency(summary.inventoryValue),
    },
    {
      title: "Out of Stock",
      value: summary.outOfStockItems,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <p className="text-gray-500 text-sm">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-slate-800">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default KPICards;