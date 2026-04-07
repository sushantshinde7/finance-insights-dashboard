import { Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import BalanceChart from "../components/charts/BalanceChart";
import ExpenseChart from "../components/charts/ExpenseChart";
import { useTransactions } from "../hooks/useTransactions";

import "./Dashboard.css";

const Dashboard = () => {
  const {
    transactions,
    income,
    expense,
    balance,
    incomeTrend,
    expenseTrend,
    balanceTrendPercent,
  } = useTransactions();

  return (
    <div className="dashboard">
      <div className="cards-row">
        <StatCard
          title="Total Balance"
          value={`₹${balance.toLocaleString()}`}
          icon={<Wallet size={18} />}
          type="balance"
          trend={balanceTrendPercent}
          trendLabel="vs last month"
        />

        <StatCard
          title="Income"
          value={`₹${income.toLocaleString()}`}
          icon={<ArrowUpRight size={18} />}
          type="income"
          trend={incomeTrend}
          trendLabel="vs last month"
        />

        <StatCard
          title="Expenses"
          value={`₹${expense.toLocaleString()}`}
          icon={<ArrowDownRight size={18} />}
          type="expense"
          trend={expenseTrend}
          trendLabel="vs last month"
        />
      </div>

      <div className="charts-row">
        <div className="chart-card">
          <BalanceChart transactions={transactions} />
        </div>

        <div className="chart-card">
          <ExpenseChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;