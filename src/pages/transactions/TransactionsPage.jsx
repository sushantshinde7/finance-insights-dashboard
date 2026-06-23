import { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import TransactionFilters from "./components/TransactionFilters";
import AddTransactionModal from "./components/AddTransactionModal";
import AuthPrompt from "../../components/auth/AuthPrompt";

import { useTransactions } from "../../context/TransactionContext";
import { useAuth } from "../../context/AuthContext";

import "./transactions.css";

export default function TransactionsPage() {
  const {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  } = useTransactions();

  const { isAuthenticated } = useAuth();

  const [filterType, setFilterType] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  const [showModal, setShowModal] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  const [editingTx, setEditingTx] = useState(null);
  const [toast, setToast] = useState(null);

  const processedTransactions = [...transactions]
    .filter((tx) =>
      filterType === "all" ? true : tx.type === filterType
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  const handleAdd = (tx) => addTransaction(tx);

  const handleUpdate = (tx) => updateTransaction(tx);

  const handleDelete = (id) => {
    if (!isAuthenticated) {
      setShowAuthPrompt(true);
      return;
    }

    const deleted = transactions.find((t) => t.id === id);

    if (!deleted) return;

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

  const getEmptyState = () => {
    if (transactions.length === 0) {
      return {
        title: "No transactions yet",
        subtitle: "Add your first transaction to get started",
      };
    }

    if (filterType === "income") {
      return {
        title: "No income transactions",
        subtitle: "Try changing filters or add income",
      };
    }

    if (filterType === "expense") {
      return {
        title: "No expense transactions",
        subtitle: "Try changing filters or add expenses",
      };
    }

    return {
      title: "No transactions found",
      subtitle: "Try adjusting filters",
    };
  };

  const emptyState = getEmptyState();

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2 className="transactions-title">Transactions</h2>

        <button
          className="add-btn"
          onClick={() => {
            if (!isAuthenticated) {
              setShowAuthPrompt(true);
              return;
            }

            setShowModal(true);
          }}
        >
          + Add
        </button>
      </div>

      <div className="card transactions-panel">
        <div className="panel-filters">
          <TransactionFilters
            filterType={filterType}
            setFilterType={setFilterType}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>

        <div className="panel-divider" />

        <div className="panel-table">
          <TransactionsTable
            data={processedTransactions}
            emptyState={emptyState}
            onAddClick={() => {
              if (!isAuthenticated) {
                setShowAuthPrompt(true);
                return;
              }

              setShowModal(true);
            }}
            onEdit={(tx) => {
              if (!isAuthenticated) {
                setShowAuthPrompt(true);
                return;
              }

              setEditingTx(tx);
              setShowModal(true);
            }}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {toast && (
        <div className="toast">
          <span>{toast.message}</span>

          <button
            className="toast-action"
            onClick={toast.onAction}
          >
            {toast.actionLabel}
          </button>
        </div>
      )}

      {showModal && (
        <AddTransactionModal
          key={editingTx ? editingTx.id : "new"}
          mode={editingTx ? "edit" : "add"}
          initialData={editingTx}
          onClose={() => {
            setShowModal(false);
            setEditingTx(null);
          }}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
        />
      )}

      {showAuthPrompt && (
        <AuthPrompt
          onClose={() => setShowAuthPrompt(false)}
        />
      )}
    </div>
  );
}