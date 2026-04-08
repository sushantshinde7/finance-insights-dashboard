import "./Navbar.css";

const Navbar = ({ role, setRole }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Finance Insights</h2>
      </div>

      <div className="navbar-right">
        <button className="theme-toggle">🌙</button>

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