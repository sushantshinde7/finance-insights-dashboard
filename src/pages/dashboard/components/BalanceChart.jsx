import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "./BalanceChart.css";

const BalanceChart = ({ transactions }) => {
  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  let running = 0;

  const data = sorted.map((tx) => {
    running += tx.type === "income" ? tx.amount : -tx.amount;

    return {
      date: tx.date,
      balance: running,
    };
  });

  return (
    <div className="chart">
      <div className="chart-header">
        <h4 className="chart-title">Balance Trend</h4>
        <span className="chart-subtitle">Running balance over time</span>
      </div>

      <div className="chart-body">
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="chart-grid" />

            <XAxis dataKey="date" className="chart-axis" />
            <YAxis className="chart-axis" />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="var(--color-primary)"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="tooltip-value">
          ₹{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default BalanceChart;