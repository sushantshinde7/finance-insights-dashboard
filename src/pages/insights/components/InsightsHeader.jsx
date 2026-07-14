import "./InsightsHeader.css";

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

export default function InsightsHeader({
  balance,
  savingsRate,
  expenseChange,
  formatCurrency,
}) {
  const status = getStatus(savingsRate);
  const narrative = getNarrative(savingsRate, expenseChange);
  const isExpenseUp = expenseChange >= 0;

  return (
    <section className="insights-hero">
      <div className="insights-hero-top">
        <span className="insights-eyebrow">Financial Insights</span>
        <span className={`insights-status-chip status-${status}`}>
          {STATUS_LABEL[status]}
        </span>
      </div>

      <h1 className="insights-hero-headline">{narrative}</h1>

      <div className="insights-hero-stat">
        <span className="hero-stat-label">Net balance this month</span>

        <div className="hero-stat-row">
          <span className="hero-stat-value">{formatCurrency(balance)}</span>

          <span className={`hero-stat-trend ${isExpenseUp ? "up" : "down"}`}>
            {isExpenseUp ? "▲" : "▼"} {Math.abs(expenseChange).toFixed(1)}%
            vs last month
          </span>
        </div>
      </div>
    </section>
  );
}