import "./StatCard.css";

const StatCard = ({ title, value, icon, type, change }) => {
  const isPositive = change >= 0;

  return (
    <div className={`card ${type}`}>
      {/* HEADER */}
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">{icon}</span>
          <span className="card-title">{title}</span>
        </div>
      </div>

      {/* VALUE */}
      <div className="card-value">{value}</div>

      {/* TREND (grouped properly) */}
      {change !== undefined && (
        <div className="card-trend-row">
          <span
            className={`trend-badge ${
              isPositive ? "positive" : "negative"
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