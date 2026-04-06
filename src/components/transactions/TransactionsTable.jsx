import "../styles/TransactionsTable.css";
import { Pencil, Trash2 } from "lucide-react";

export default function TransactionsTable({
  data,
  role,
  onEdit,
  onDelete,
}) {
  if (!data.length) {
    return <div className="empty-state">No transactions found</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="transactions-table">

        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {data.map((tx) => (
            <tr key={tx.id}>

              <td>{tx.date}</td>
              <td>{tx.category}</td>

              <td className="amount">
                ₹{tx.amount.toLocaleString()}
              </td>

              <td>
                <span
                  className={`badge ${
                    tx.type === "income" ? "income" : "expense"
                  }`}
                >
                  {tx.type}
                </span>
              </td>

              {role === "admin" && (
                <td className="actions-cell">

                  {/* EDIT */}
                  <button
                    onClick={() => onEdit(tx)}
                    className="icon-btn"
                    title="Edit"
                  >
                    <Pencil size={16} />
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => onDelete(tx.id)}
                    className="icon-btn danger"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>

                </td>
              )}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}