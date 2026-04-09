import { Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import StatCard from "./components/StatCard";
import BalanceChart from "./components/BalanceChart";
import ExpenseChart from "./components/ExpenseChart";
import { useTransactions } from "../../hooks/useTransactions";

import "./dashboard.css";

const Dashboard = () => {
  const {
    transactions,
    income,
    expense,
    balance,
    incomeChange,
    expenseChange,
    balanceChange,
  } = useTransactions();

  return (
    <div className="dashboard">
      <div className="cards-row">
        <StatCard
          title="Total Balance"
          value={`₹${balance.toLocaleString()}`}
          icon={<Wallet size={18} />}
          type="balance"
          change={balanceChange}
        />

        <StatCard
          title="Income"
          value={`₹${income.toLocaleString()}`}
          icon={<ArrowUpRight size={18} />}
          type="income"
          change={incomeChange}
        />

        <StatCard
          title="Expenses"
          value={`₹${expense.toLocaleString()}`}
          icon={<ArrowDownRight size={18} />}
          type="expense"
          change={expenseChange}
        />
      </div>

      <div className="charts-row">
        <div className="card chart-card">
          <BalanceChart transactions={transactions} />
        </div>

        <div className="chart-card expense-chart">
          <ExpenseChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
