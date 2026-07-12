import "./KPIGrid.css";

export default function KPIGrid({
  income,
  expense,
  balance,
  savingsRate,
  topCategory,
  formatCurrency,
}) {
  return (
    <div className="kpi-grid">
      <div className="kpi-card income">
        <span className="kpi-label">Total income</span>
        <h3 className="kpi-value">{formatCurrency(income)}</h3>
      </div>
      <div className="kpi-card expense">
        <span className="kpi-label">Total expenses</span>
        <h3 className="kpi-value">{formatCurrency(expense)}</h3>
      </div>
      <div className="kpi-card balance">
        <span className="kpi-label">Savings rate</span>
        <h3 className="kpi-value">{savingsRate}%</h3>
      </div>
      <div className="kpi-card highlight">
        <span className="kpi-label">Top spending category</span>
        <h3 className="kpi-value kpi-value--category">
          {topCategory?.name || "—"}
        </h3>
      </div>
    </div>
  );
}