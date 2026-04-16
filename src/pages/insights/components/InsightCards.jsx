import "./InsightCards.css";

export default function InsightCards({
  expenseChange,
  topCategory,
}) {
  const isIncrease = expenseChange >= 0;

  const behaviorText =
    expenseChange > 20
      ? "Expenses are rising fast. Consider reviewing non-essential spending."
      : expenseChange > 0
      ? "Spending is slightly increasing."
      : "Spending is stable or decreasing. Good control.";

  return (
    <div className="insight-grid">

      {/* EXPENSE CHANGE */}
      <div className="insight-card danger">
        <h4>Expense Change</h4>

        <div className="insight-value">
          <span className={isIncrease ? "up" : "down"}>
            {Math.abs(expenseChange).toFixed(1)}%
          </span>
        </div>

        <p>
          {isIncrease ? "Higher than last month" : "Lower than last month"}
        </p>
      </div>

      {/* TOP CATEGORY */}
      <div className="insight-card warning">
        <h4>Top Spending Category</h4>

        <div className="insight-value">
          {topCategory?.name || "—"}
        </div>

        <p>Primary driver of your expenses</p>
      </div>

      {/* BEHAVIOR */}
      <div className="insight-card info">
        <h4>Spending Behavior</h4>

        <div className="insight-value small">
          {expenseChange > 20
            ? "High"
            : expenseChange > 0
            ? "Moderate"
            : "Controlled"}
        </div>

        <p>{behaviorText}</p>
      </div>

    </div>
  );
}