import "./Card.css";

const StatCard = ({ title, value, icon, type }) => {
  return (
    <div className={`card ${type}`}>
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">{icon}</span>
          <span className="card-title">{title}</span>
        </div>
      </div>

      <div className="card-value">{value}</div>
    </div>
  );
};

export default StatCard;