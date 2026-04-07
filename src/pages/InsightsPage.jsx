import { useTransactions } from "../hooks/useTransactions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";

import "./Insights.css";

const COLORS = ["#3b82f6", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function InsightsPage() {
  const {
    income,
    expense,
    balance,
    categoryBreakdown,
    monthlyTrend,
    balanceTrend,
  } = useTransactions();

  // -------------------------
  // FORMAT HELPERS
  // -------------------------
  const formatCurrency = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  const formatMonth = (month) => {
    const date = new Date(month + "-01");
    return date.toLocaleString("en-IN", { month: "short" }); // Apr, May
  };

  // -------------------------
  // PIE % LABEL
  // -------------------------
  const renderPieLabel = ({ percent }) =>
    `${(percent * 100).toFixed(0)}%`;

  const topCategory =
    [...categoryBreakdown].sort((a, b) => b.value - a.value)[0];

  // -------------------------
  // SMART INSIGHTS
  // -------------------------
  const totalThisMonth = expense;

  const prevMonthExpense =
    monthlyTrend?.[monthlyTrend.length - 2]?.expense || 0;

  const expenseChange =
    prevMonthExpense === 0
      ? 0
      : ((totalThisMonth - prevMonthExpense) / prevMonthExpense) * 100;

  //const topDriverCategory = topCategory;

  return (
    <div className="insights-container">

      {/* HEADER */}
      <div className="insights-header">
        <h2>Financial Insights</h2>
        <p>AI-style breakdown of your spending behavior</p>
      </div>

      {/* KPI */}
      <div className="kpi-grid">
        <div className="kpi-card income">
          <span>Total Income</span>
          <h3>{formatCurrency(income)}</h3>
        </div>

        <div className="kpi-card expense">
          <span>Total Expense</span>
          <h3>{formatCurrency(expense)}</h3>
        </div>

        <div className="kpi-card balance">
          <span>Net Balance</span>
          <h3>{formatCurrency(balance)}</h3>
        </div>

        <div className="kpi-card highlight">
          <span>Top Spending Category</span>
          <h3>{topCategory?.name || "-"}</h3>
        </div>
      </div>

      {/* SMART INSIGHTS */}
      <div className="insight-grid">

        <div className="insight-card danger">
          <h4>Expense Change</h4>
          <p>
            You spent{" "}
            <b className={expenseChange >= 0 ? "up" : "down"}>
              {Math.abs(expenseChange).toFixed(1)}%
            </b>{" "}
            {expenseChange >= 0 ? "more" : "less"} than last month.
          </p>
        </div>

        <div className="insight-card warning">
          <h4>Top Driver</h4>
          <p>
            Your spending is mainly driven by{" "}
            <b>{topCategory?.name || "N/A"}</b>.
          </p>
        </div>

        <div className="insight-card info">
          <h4>Spending Behavior</h4>
          <p>
            {expenseChange > 20
              ? "Your expenses are rising quickly. Consider reviewing non-essential spending."
              : expenseChange > 0
              ? "Your spending is slightly increasing."
              : "Good control — your expenses are stable or decreasing."}
          </p>
        </div>
      </div>

      {/* CHART GRID */}
      <div className="insights-grid">

        {/* BAR CHART */}
        <div className="chart-card span-2">
          <div className="chart-title">Income vs Expense Trend</div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyTrend}>
              <XAxis
                dataKey="month"
                tickFormatter={formatMonth}
              />
              <YAxis />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                labelFormatter={(label) => formatMonth(label)}
              />
              <Bar dataKey="income" fill="#16a34a" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expense" fill="#ef4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="chart-card">
          <div className="chart-title">Expense Breakdown</div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryBreakdown}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label={renderPieLabel}
              >
                {categoryBreakdown.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => formatCurrency(value)}
              />

              <Legend
                verticalAlign="bottom"
                height={36}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LINE CHART */}
        <div className="chart-card span-2">
          <div className="chart-title">Balance Movement</div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={balanceTrend}>
              <XAxis
                dataKey="date"
                tickFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                  })
                }
              />
              <YAxis />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                labelFormatter={(label) =>
                  new Date(label).toLocaleDateString("en-IN")
                }
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* FOOTER */}
      <div className="insight-footer">
        More insights coming soon...
      </div>

    </div>
  );
}