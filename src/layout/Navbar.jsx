import "./Navbar.css";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();

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
        {!isAuthenticated ? (
          <>
            <button className="nav-auth-btn">Login</button>

            <button className="nav-auth-btn primary">Sign Up</button>
          </>
        ) : (
          <button className="nav-auth-btn">Logout</button>
        )}

        <button
          className={`theme-toggle ${theme}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <Sun className="theme-icon sun-icon" size={18} />
          <Moon className="theme-icon moon-icon" size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
