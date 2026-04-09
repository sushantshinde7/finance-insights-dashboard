import "./StatCard.css";

const StatCard = ({ title, value, icon, type, change }) => {
  const isPositive = change > 0;
  const isNeutral = change === 0;

  return (
    <div className={`card stat-card ${type}`}>
      {/* HEADER */}
      <div className="stat-header">
        <div className="stat-title-group">
          <span className="stat-icon">{icon}</span>
          <span className="stat-title">{title}</span>
        </div>
      </div>

      {/* VALUE */}
      <div className="stat-value">{value}</div>

      {/* TREND */}
      {change !== undefined && (
        <div className="stat-trend">
          <span
            className={`trend-badge ${
              isNeutral ? "neutral" : isPositive ? "positive" : "negative"
            }`}
          >
            {isPositive ? "+" : ""}
            {change}%
          </span>

          <span className="trend-text">vs last month</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
