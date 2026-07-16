import "./InsightsOverview.css";

function getStatus(savingsRate) {
  if (savingsRate < 0) return "bad";
  if (savingsRate >= 20) return "good";
  return "warning";
}

const STATUS_LABEL = {
  good: "On track",
  warning: "Needs attention",
  bad: "Overspending",
};

function getNarrative(savingsRate, expenseChange) {
  if (savingsRate < 0) {
    return "You spent more than you earned this month — expenses outpaced income.";
  }

  if (savingsRate >= 40) {
    return expenseChange > 10
      ? "You're saving exceptionally well, even with spending up this month."
      : "You're saving exceptionally well — well above the recommended 20%.";
  }

  if (savingsRate >= 20) {
    return expenseChange > 10
      ? "You're meeting your savings target, though spending picked up recently."
      : "You're meeting your savings target and keeping spending in check.";
  }

  return expenseChange > 10
    ? "Savings are below target and spending is climbing — worth a closer look."
    : "Savings are below the recommended 20% this month.";
}

/**
 * InsightsOverview
 * Replaces InsightsHeader + KPIGrid.
 * One continuous surface: the verdict (narrative + balance) sits directly
 * above the composition (income / expense / top category) that explains it,
 * separated by a hairline instead of a second bordered card.
 */
export default function InsightsOverview({
  balance,
  savingsRate,
  expenseChange,
  income,
  expense,
  topCategory,
  formatCurrency,
}) {
  const status = getStatus(savingsRate);
  const narrative = getNarrative(savingsRate, expenseChange);
  const isExpenseUp = expenseChange >= 0;

  return (
    <section className={`insights-overview status-${status}`}>
      {/* VERDICT */}
      <div className="overview-verdict">
        <div className="verdict-top">
          <span className="overview-eyebrow">Financial Insights</span>
          <span className={`overview-status-chip status-${status}`}>
            {STATUS_LABEL[status]}
          </span>
        </div>

        <h1 className="verdict-headline">{narrative}</h1>

        <div className="verdict-stat">
          <span className="verdict-stat-label">Net balance this month</span>

          <div className="verdict-stat-row">
            <span className="verdict-stat-value">
              {formatCurrency(balance)}
            </span>

            <span
              className={`verdict-stat-trend ${isExpenseUp ? "up" : "down"}`}
            >
              {isExpenseUp ? "▲" : "▼"} {Math.abs(expenseChange).toFixed(1)}%
              vs last month
            </span>
          </div>
        </div>
      </div>

      {/* COMPOSITION — the receipt behind the verdict above */}
      <div className="overview-composition">
        <div className="composition-item">
          <span className="composition-label">Total income</span>
          <span className="composition-value income">
            {formatCurrency(income)}
          </span>
        </div>

        <div className="composition-divider" aria-hidden="true" />

        <div className="composition-item">
          <span className="composition-label">Total expenses</span>
          <span className="composition-value expense">
            {formatCurrency(expense)}
          </span>
        </div>

        <div className="composition-divider" aria-hidden="true" />

        <div className="composition-item">
          <span className="composition-label">Top spending category</span>
          <span className="composition-value category">
            {topCategory?.name || "—"}
          </span>
        </div>
      </div>
    </section>
  );
}