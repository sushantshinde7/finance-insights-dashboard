import { useTransactions } from "../../hooks/useTransactions";

import InsightsHeader from "./components/InsightsHeader";
import KPIGrid from "./components/KPIGrid";
import InsightCards from "./components/InsightCards";
import ChartsSection from "./components/ChartsSection";

import "./insights.css";

export default function InsightsPage() {
  const {
    income,
    expense,
    balance,
    categoryBreakdown,
    monthlyTrend,
    balanceTrend,
  } = useTransactions();

  // ================= HELPERS =================

  const formatCurrency = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  const formatMonth = (month) => {
    const date = new Date(month + "-01");
    return date.toLocaleString("en-IN", { month: "short" });
  };

  // ================= DERIVED DATA =================

  const topCategory =
    [...categoryBreakdown].sort((a, b) => b.value - a.value)[0];

  const prevMonthExpense =
    monthlyTrend?.[monthlyTrend.length - 2]?.expense || 0;

  const expenseChange =
    prevMonthExpense === 0
      ? 0
      : ((expense - prevMonthExpense) / prevMonthExpense) * 100;

  return (
    <div className="insights-container">
      
      <InsightsHeader />

      <KPIGrid
        income={income}
        expense={expense}
        balance={balance}
        topCategory={topCategory}
        formatCurrency={formatCurrency}
      />

      <InsightCards
        expenseChange={expenseChange}
        topCategory={topCategory}
      />

      <ChartsSection
        monthlyTrend={monthlyTrend}
        balanceTrend={balanceTrend}
        categoryBreakdown={categoryBreakdown}
        formatCurrency={formatCurrency}
        formatMonth={formatMonth}
      />

      <div className="insight-footer">
        More insights coming soon...
      </div>

    </div>
  );
}