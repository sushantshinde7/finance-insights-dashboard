import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6"];

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

  return (
    <div className="chart-inner">
      <h4 className="chart-title">Expense Breakdown</h4>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            cx="50%"
            cy="50%"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;