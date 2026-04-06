import { useState } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/TransactionsPage";
import Insights from "./pages/InsightsPage";

function App() {
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("admin");

  const renderPage = () => {
    if (page === "dashboard") return <Dashboard role={role} />;
    if (page === "transactions") return <Transactions role={role} />;
    if (page === "insights") return <Insights role={role} />;
  };

  return (
    <Layout
      setPage={setPage}
      activePage={page}
      role={role}
      setRole={setRole}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;