import "./Card.css";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({ title, value, icon, type, trend, trendLabel }) => {
  const isPositive = trend >= 0;

  return (
    <div className={`card ${type}`}>
      {/* TOP ROW */}
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">{icon}</span>
          <span className="card-title">{title}</span>
        </div>

        {trend !== undefined && (
          <div
            className={`card-trend ${
              isPositive ? "positive" : "negative"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>

      {/* VALUE */}
      <div className="card-value">{value}</div>

      {/* SUBTEXT */}
      {trendLabel && (
        <div className="card-subtext">{trendLabel}</div>
      )}
    </div>
  );
};

export default StatCard;