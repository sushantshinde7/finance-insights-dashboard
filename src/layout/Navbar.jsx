import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ role, setRole, sidebarOpen, setSidebarOpen }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button
          className={`hamburger-btn ${sidebarOpen ? "active" : ""}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          <span />
          <span />
          <span />
        </button>

        <h2>Finance Insights</h2>
      </div>

      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="role-select"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;