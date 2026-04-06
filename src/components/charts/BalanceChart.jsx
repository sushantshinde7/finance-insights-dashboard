import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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
    <div className="chart-inner">
      <h4 className="chart-title">Balance Trend</h4>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;