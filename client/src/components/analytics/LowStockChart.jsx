import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const LowStockChart = ({ data }) => {
  const CustomXAxisTick = ({ x, y, payload }) => {
    const words = payload.value.split(" ");

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={10}
          dy={16}
          textAnchor="middle"
          fill="#475569"
          fontSize={12}
        >
          {words.map((word, index) => (
            <tspan key={index} x="0" dy={index === 0 ? 0 : 14}>
              {word}
            </tspan>
          ))}
        </text>
      </g>
    );
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">
        Top 10 Lowest Stock Products
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="productName"
            interval={0}
            height={60}
            tick={<CustomXAxisTick />}
          />

          <Tooltip />

          <Bar dataKey="stockQuantity" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LowStockChart;
