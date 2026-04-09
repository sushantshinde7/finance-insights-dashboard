import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./ExpenseChart.css";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

const ExpenseChart = ({ transactions }) => {
  const grouped = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, tx) => {
      acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
      return acc;
    }, {});

  const data = Object.entries(grouped).map(([name, value]) => ({
    name,
    value,
  }));

  // ✅ FIX: compute AFTER data exists
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="chart">
      <div className="chart-header">
        <h4 className="chart-title">Expense Breakdown</h4>
        <span className="chart-subtitle">Category-wise distribution</span>
      </div>

      <div className="chart-body">
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={85}
              innerRadius={50}
              paddingAngle={2}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* CENTER TEXT */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="pie-center-text"
            >
              ₹{total.toLocaleString()}
            </text>

            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="tooltip-label">{payload[0].name}</p>
        <p className="tooltip-value">
          ₹{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default ExpenseChart;