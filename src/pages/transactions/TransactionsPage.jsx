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

  const [searchTerm, setSearchTerm] = useState("");

  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const [showModal, setShowModal] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  const [editingTx, setEditingTx] = useState(null);
  const [toast, setToast] = useState(null);

  const processedTransactions = [...transactions]
    .filter((tx) => {
      const typeMatch =
        filterType === "all"
          ? true
          : tx.type === filterType;

      const query = searchTerm.trim().toLowerCase();

      if (!query) return typeMatch;

      const formattedDate = new Date(tx.date)
        .toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .toLowerCase();

      const searchMatch =
        tx.category.toLowerCase().includes(query) ||
        tx.type.toLowerCase().includes(query) ||
        tx.amount.toString().includes(query) ||
        formattedDate.includes(query);

      return typeMatch && searchMatch;
    })
    .sort((a, b) => {
      let comparison = 0;

      switch (sortField) {
        case "amount":
          comparison = a.amount - b.amount;
          break;

        case "category":
          comparison = a.category.localeCompare(
            b.category
          );
          break;

        case "date":
        default:
          comparison =
            new Date(a.date) - new Date(b.date);
          break;
      }

      return sortOrder === "asc"
        ? comparison
        : comparison * -1;
    });

  const handleAdd = (tx) => addTransaction(tx);

  const handleUpdate = (tx) => updateTransaction(tx);

  const handleDelete = (id) => {
    if (!isAuthenticated) {
      setShowAuthPrompt(true);
      return;
    }

    const deleted = transactions.find(
      (t) => t.id === id
    );

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
        subtitle:
          "Add your first transaction to get started",
      };
    }

    if (searchTerm.trim()) {
      return {
        title: "No matching transactions",
        subtitle:
          "Try a different search term or clear filters",
      };
    }

    if (filterType === "income") {
      return {
        title: "No income transactions",
        subtitle:
          "Try changing filters or add income",
      };
    }

    if (filterType === "expense") {
      return {
        title: "No expense transactions",
        subtitle:
          "Try changing filters or add expenses",
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
        <h2 className="transactions-title">
          Transactions
        </h2>

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
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortField={sortField}
            setSortField={setSortField}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            resultCount={
              processedTransactions.length
            }
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
          onClose={() =>
            setShowAuthPrompt(false)
          }
        />
      )}
    </div>
  );
}