import { Wallet, ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "./components/StatCard";
import BalanceChart from "./components/BalanceChart";
import ExpenseChart from "./components/ExpenseChart";
import { useTransactions } from "../../context/TransactionContext";
import { ROUTES } from "../../routes/routes";
import "./dashboard.css";

export default function DashboardPage() {
  const {
    transactions,
    income,
    expense,
    balance,
    incomeChange,
    expenseChange,
    balanceChange,
  } = useTransactions();

  /* ── Period label ───────────────────────────────────────────
     Find the most recent transaction date and use its month
     as the "current period" label in the page header.
  ────────────────────────────────────────────────────────────── */
  const periodLabel = (() => {
    if (!transactions.length) return null;
    const latest = [...transactions].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )[0];
    return new Date(latest.date).toLocaleString("en-IN", {
      month: "long",
      year: "numeric",
    });
  })();

  /* ── Quick insight sentence ─────────────────────────────────
     One derived sentence from existing analytics.
     No new data needed — just reads what context already has.
  ────────────────────────────────────────────────────────────── */
  const quickInsight = (() => {
    if (!transactions.length) return null;
    const savingsRate = income > 0
      ? Math.round(((income - expense) / income) * 100)
      : 0;
    if (expenseChange < -20)
      return `Expenses dropped ${Math.abs(expenseChange)}% vs last month — your best controlled month recently.`;
    if (expenseChange > 20)
      return `Expenses rose ${expenseChange}% vs last month. Worth reviewing non-essential spending.`;
    if (savingsRate > 40)
      return `You're saving ${savingsRate}% of your income — strong financial position.`;
    if (savingsRate < 10)
      return `Savings rate is ${savingsRate}%. Income and expenses are close — watch the gap.`;
    return `Savings rate is ${savingsRate}% this period.`;
  })();

  /* ── Recent transactions ────────────────────────────────────
     Last 5 by date — shown in the bottom strip.
  ────────────────────────────────────────────────────────────── */
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="dashboard">

      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <h2 className="dashboard-title">Overview</h2>
          {periodLabel && (
            <span className="dashboard-period">
              Data through {periodLabel}
            </span>
          )}
        </div>
        {quickInsight && (
          <p className="dashboard-insight">{quickInsight}</p>
        )}
      </div>

      {/* STAT CARDS — Balance dominant, Income + Expense secondary */}
      <div className="cards-row">
        <div className="cards-primary">
          <StatCard
            title="Total Balance"
            value={`₹${balance.toLocaleString("en-IN")}`}
            icon={<Wallet size={18} />}
            type="balance"
            change={balanceChange}
          />
        </div>
        <div className="cards-secondary">
          <StatCard
            title="Income"
            value={`₹${income.toLocaleString("en-IN")}`}
            icon={<ArrowUpRight size={18} />}
            type="income"
            change={incomeChange}
          />
          <StatCard
            title="Expenses"
            value={`₹${expense.toLocaleString("en-IN")}`}
            icon={<ArrowDownRight size={18} />}
            type="expense"
            change={expenseChange}
          />
        </div>
      </div>

      {/* CHARTS */}
      <div className="charts-row">
        <div className="card chart-card">
          <BalanceChart transactions={transactions} />
        </div>
        <div className="card chart-card">
          <ExpenseChart transactions={transactions} />
        </div>
      </div>

      {/* RECENT TRANSACTIONS STRIP */}
      {recentTransactions.length > 0 && (
        <div className="card recent-section">
          <div className="recent-header">
            <h3 className="recent-title">Recent transactions</h3>
            <Link to={ROUTES.TRANSACTIONS} className="recent-view-all">
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="recent-list">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="recent-row">
                <div className="recent-row-left">
                  <span className={`recent-dot recent-dot--${tx.type}`} aria-hidden="true" />
                  <div>
                    <span className="recent-category">{tx.category}</span>
                    <span className="recent-date">
                      {new Date(tx.date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <span className={`recent-amount recent-amount--${tx.type}`}>
                  {tx.type === "income" ? "+" : "−"}₹{tx.amount.toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOTTOM LINK */}
      <div className="dashboard-footer">
        <Link to={ROUTES.INSIGHTS} className="dashboard-footer-link">
          View detailed financial insights <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}