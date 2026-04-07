import "./Card.css";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({ title, value, icon, type, change }) => {
  const isPositive = change >= 0;

  return (
    <div className={`card ${type}`}>
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">{icon}</span>
          <span className="card-title">{title}</span>
        </div>

        {change !== undefined && (
          <span
            className={`trend-badge ${
              isPositive ? "positive" : "negative"
            }`}
          >
            {isPositive ? "+" : ""}
            {change}%
          </span>
        )}
      </div>

      <div className="card-value">{value}</div>

      {change !== undefined && (
        <div className="trend-subtext">
          vs last month
        </div>
      )}
    </div>
  );
};

export default StatCard;