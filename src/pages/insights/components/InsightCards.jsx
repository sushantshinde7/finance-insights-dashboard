import "./InsightCards.css";

export default function InsightCards({
  expenseChange,
  topCategory,
  biggestTx,
  highestMonth,
  savingsRate,
  formatCurrency,
}) {
  const isIncrease = expenseChange >= 0;

  const behaviorText =
    expenseChange > 20
      ? "Expenses rising fast — review non-essential spending."
      : expenseChange > 0
      ? "Spending is slightly increasing this period."
      : "Spending is stable or decreasing — good control.";

  return (
    <div className="insight-grid">

      <div className="insight-card danger">
        <h4>Expense change</h4>
        <div className="insight-value">
          <span className={isIncrease ? "up" : "down"}>
            {isIncrease ? "+" : "−"}{Math.abs(expenseChange).toFixed(1)}%
          </span>
        </div>
        <p>{isIncrease ? "Higher than last month" : "Lower than last month"}</p>
      </div>

      <div className="insight-card warning">
        <h4>Top spending category</h4>
        <div className="insight-value">{topCategory?.name || "—"}</div>
        <p>
          {topCategory
            ? `${formatCurrency(topCategory.value)} spent in this category`
            : "No expense data"}
        </p>
      </div>

      <div className="insight-card info">
        <h4>Spending behavior</h4>
        <div className="insight-value small">
          {expenseChange > 20 ? "Rising" : expenseChange > 0 ? "Moderate" : "Controlled"}
        </div>
        <p>{behaviorText}</p>
      </div>

      {biggestTx && (
        <div className="insight-card neutral">
          <h4>Largest transaction</h4>
          <div className="insight-value small">{biggestTx.category}</div>
          <p>{formatCurrency(biggestTx.amount)} on{" "}
            {new Date(biggestTx.date).toLocaleDateString("en-IN", {
              day: "2-digit", month: "short", year: "numeric",
            })}
          </p>
        </div>
      )}

      {highestMonth && (
        <div className="insight-card neutral">
          <h4>Highest spending month</h4>
          <div className="insight-value small">{highestMonth.month}</div>
          <p>{formatCurrency(highestMonth.expense)} in expenses</p>
        </div>
      )}

      <div className="insight-card info">
        <h4>Savings rate</h4>
        <div className="insight-value">
          <span className={savingsRate >= 20 ? "down" : "up"}>
            {savingsRate}%
          </span>
        </div>
        <p>
          {savingsRate >= 40
            ? "Excellent — well above the recommended 20%"
            : savingsRate >= 20
            ? "Good — meeting the recommended savings target"
            : "Below 20% — consider reducing discretionary spending"}
        </p>
      </div>

    </div>
  );
}