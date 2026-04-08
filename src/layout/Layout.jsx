import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children, setPage, activePage, role, setRole }) => {
  return (
    <div className="layout">
      <Navbar role={role} setRole={setRole} />

      <div className="layout-body">
        <div className="sidebar">
          <Sidebar setPage={setPage} activePage={activePage} />
        </div>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;