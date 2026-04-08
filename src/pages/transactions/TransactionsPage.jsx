import { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import TransactionFilters from "./components/TransactionFilters";
import AddTransactionModal from "./components/AddTransactionModal";
import { useTransactions } from "../../hooks/useTransactions";

import "./transactions.css";

export default function TransactionsPage({ role }) {
  const {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  } = useTransactions();

  const [filterType, setFilterType] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  const [showModal, setShowModal] = useState(false);
  const [editingTx, setEditingTx] = useState(null);
  const [toast, setToast] = useState(null);

  const processedTransactions = [...transactions]
    .filter((tx) => (filterType === "all" ? true : tx.type === filterType))
    .sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  const handleAdd = (tx) => addTransaction(tx);

  const handleUpdate = (tx) => updateTransaction(tx);

  const handleDelete = (id) => {
    const deleted = transactions.find((t) => t.id === id);

    deleteTransaction(id);

    setToast({
      message: "Transaction deleted",
      actionLabel: "Undo",
      onAction: () => {
        addTransaction(deleted);
        setToast(null);
      },
    });

    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2 className="transactions-title">Transactions</h2>

        {role === "admin" && (
          <button className="add-btn" onClick={() => setShowModal(true)}>
            + Add
          </button>
        )}
      </div>

      <div className="transactions-card">
        <TransactionFilters
          filterType={filterType}
          setFilterType={setFilterType}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>

      {toast && (
        <div className="toast">
          <span>{toast.message}</span>
          <button className="toast-action" onClick={toast.onAction}>
            {toast.actionLabel}
          </button>
        </div>
      )}

      <div className="transactions-card">
        <TransactionsTable
          data={processedTransactions}
          role={role}
          onEdit={(tx) => {
            setEditingTx(tx);
            setShowModal(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      {showModal && (
        <AddTransactionModal
          key={editingTx ? editingTx.id : "new"}
          mode={editingTx ? "edit" : "add"}
          initialData={editingTx}
          onClose={() => setShowModal(false)}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}