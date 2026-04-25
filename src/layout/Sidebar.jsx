import "./Sidebar.css";

const Sidebar = ({ setPage, activePage }) => {
  const navItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "transactions", label: "Transactions" },
    { key: "insights", label: "Insights" },
  ];

  return (
    <div className="sidebar-inner">
      <nav className="nav-group" aria-label="Sidebar Navigation">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`nav-item ${activePage === item.key ? "active" : ""}`}
            onClick={() => setPage(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;