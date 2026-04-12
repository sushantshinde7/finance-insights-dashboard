import "./InsightCards.css";


export default function InsightCards({
  expenseChange,
  topCategory,
}) {
  return (
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
  );
}