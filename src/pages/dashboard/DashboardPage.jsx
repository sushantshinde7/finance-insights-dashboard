import { Wallet, ArrowUpRight, ArrowDownRight, ArrowRight, PiggyBank } from "lucide-react";
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

  /* ── Savings rate ────────────────────────────────────────────
     Shared by the insight line and the Savings Rate stat card.
  ────────────────────────────────────────────────────────────── */
  const savingsRate = income > 0
    ? Math.round(((income - expense) / income) * 100)
    : 0;

  /* ── Quick insight ───────────────────────────────────────────
     One derived line from existing analytics, plus a tone so the
     page header can carry the same red/amber/green language as
     Insights — just as a quiet dot, not a status chip.
  ────────────────────────────────────────────────────────────── */
  const insight = (() => {
    if (!transactions.length) return null;

    if (expenseChange < -20)
      return {
        text: `Expenses dropped ${Math.abs(expenseChange)}% vs last month — your best controlled month recently.`,
        tone: "good",
      };
    if (expenseChange > 20)
      return {
        text: `Expenses rose ${expenseChange}% vs last month. Worth reviewing non-essential spending.`,
        tone: "bad",
      };
    if (savingsRate > 40)
      return {
        text: `You're saving ${savingsRate}% of your income — strong financial position.`,
        tone: "good",
      };
    if (savingsRate < 10)
      return {
        text: `Savings rate is ${savingsRate}%. Income and expenses are close — watch the gap.`,
        tone: "warning",
      };
    return {
      text: `Savings rate is ${savingsRate}% this period.`,
      tone: "neutral",
    };
  })();

  /* ── Charts intro ────────────────────────────────────────────
     One line tying the charts back to the insight above them,
     framed as the "proof" rather than a new, disconnected topic.
  ────────────────────────────────────────────────────────────── */
  const chartsIntro = insight
    ? insight.tone === "good"
      ? "Here's what got you here."
      : insight.tone === "bad" || insight.tone === "warning"
      ? "Here's where it's showing up."
      : "Here's the movement behind the numbers."
    : null;

  /* ── Balance card tone ────────────────────────────────────────
     Total Balance is the page's headline number, so it carries
     the same tone as the header dot instead of a static color —
     one shared signal instead of a decoration repeated by itself.
  ────────────────────────────────────────────────────────────── */
  const balanceCardType =
    insight && insight.tone !== "neutral"
      ? `balance-${insight.tone}`
      : "balance";

  /* ── Recent transactions ────────────────────────────────────
     Last 5 by date — shown in the bottom strip.
  ────────────────────────────────────────────────────────────── */
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="dashboard">

      {/* PAGE HEADER — one flowing unit, not a boxed hero */}
      <div className="dashboard-header">
        <div className="dashboard-heading-row">
          <h2 className="dashboard-title">Overview</h2>
          {periodLabel && (
            <span className="dashboard-period">{periodLabel}</span>
          )}
        </div>

        {insight && (
          <p className="dashboard-insight">
            <span
              className={`insight-dot dot-${insight.tone}`}
              aria-hidden="true"
            />
            {insight.text}
          </p>
        )}
      </div>

      {/* STAT CARDS — 4 equal metrics, no forced height/width mismatch */}
      <div className="cards-row">
        <StatCard
          title="Total Balance"
          value={`₹${balance.toLocaleString("en-IN")}`}
          icon={<Wallet size={18} />}
          type={balanceCardType}
          change={balanceChange}
        />
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
        <StatCard
          title="Savings Rate"
          value={`${savingsRate}%`}
          icon={<PiggyBank size={18} />}
          type="savings"
        />
      </div>

      {/* CHARTS */}
      <div className="dashboard-charts-block">
        {chartsIntro && <p className="dashboard-charts-intro">{chartsIntro}</p>}
        <div className="charts-row">
          <div className="card chart-card">
            <BalanceChart transactions={transactions} />
          </div>
          <div className="card chart-card">
            <ExpenseChart transactions={transactions} />
          </div>
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
