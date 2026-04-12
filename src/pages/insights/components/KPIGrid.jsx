import "./KPIGrid.css";


export default function KPIGrid({
  income,
  expense,
  balance,
  topCategory,
  formatCurrency,
}) {
  return (
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
  );
}