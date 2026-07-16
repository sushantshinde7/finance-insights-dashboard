import { useNavigate } from "react-router-dom";
import { useTransactions } from "../../context/TransactionContext";
import { ROUTES } from "../../routes/routes";

import InsightsOverview from "./components/InsightsOverview";
import InsightCards from "./components/InsightCards";
import ChartsSection from "./components/ChartsSection";

import "./insights.css";

export default function InsightsPage() {
  const navigate = useNavigate();
  const {
    transactions,
    income,
    expense,
    balance,
    categoryBreakdown,
    monthlyTrend,
    balanceTrend,
    expenseChange,
  } = useTransactions();

  const formatCurrency = (v) => `₹${v.toLocaleString("en-IN")}`;

  /* ── Derived values ─────────────────────────────────────── */
  const topCategory = [...categoryBreakdown].sort(
    (a, b) => b.value - a.value,
  )[0];

  const savingsRate =
    income > 0 ? Math.round(((income - expense) / income) * 100) : 0;

  const biggestTx = [...transactions].sort((a, b) => b.amount - a.amount)[0];

  const highestMonth = [...monthlyTrend].sort(
    (a, b) => b.expense - a.expense,
  )[0];

  /* ── Empty state ────────────────────────────────────────── */
  const isEmpty =
    !monthlyTrend?.length &&
    !balanceTrend?.length &&
    !categoryBreakdown?.length;

  if (isEmpty) {
    return (
      <div className="insights-container">
        <InsightsHeader />
        <div className="insights-empty">
          <div className="insights-empty-icon" aria-hidden="true">
            📊
          </div>
          <h3 className="insights-empty-title">No insights available yet</h3>
          <p className="insights-empty-subtitle">
            Add transactions to unlock charts and financial insights
          </p>
          <button
            className="insights-empty-cta"
            onClick={() => navigate(ROUTES.TRANSACTIONS)}
          >
            Go to transactions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="insights-container">
      <InsightsOverview
        balance={balance}
        savingsRate={savingsRate}
        expenseChange={expenseChange}
        income={income}
        expense={expense}
        topCategory={topCategory}
        formatCurrency={formatCurrency}
      />

      {/* SECTION — SPENDING PATTERNS */}
      <section className="insights-section">
        <h3 className="insights-section-label">Spending patterns</h3>
        <InsightCards
          expenseChange={expenseChange}
          biggestTx={biggestTx}
          highestMonth={highestMonth}
          topCategory={topCategory}
          expense={expense}
          formatCurrency={formatCurrency}
        />
      </section>

      {/* SECTION — CHARTS */}
      <section className="insights-section">
        <h3 className="insights-section-label">Trends and breakdown</h3>
        <ChartsSection
          monthlyTrend={monthlyTrend}
          balanceTrend={balanceTrend}
          categoryBreakdown={categoryBreakdown}
          topCategory={topCategory}
          expenseChange={expenseChange}
          formatCurrency={formatCurrency}
          formatMonth={(m) => m}
        />
      </section>
    </div>
  );
}
