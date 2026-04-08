import "./Sidebar.css";

const Sidebar = ({ setPage, activePage }) => {
  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <div>
      <div
        className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
        onClick={() => handleClick("dashboard")}
      >
        Dashboard
      </div>

      <div
        className={`nav-item ${activePage === "transactions" ? "active" : ""}`}
        onClick={() => handleClick("transactions")}
      >
        Transactions
      </div>

      <div
        className={`nav-item ${activePage === "insights" ? "active" : ""}`}
        onClick={() => handleClick("insights")}
      >
        Insights
      </div>
    </div>
  );
};

export default Sidebar;