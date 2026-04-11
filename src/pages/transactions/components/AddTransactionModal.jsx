import { useEffect, useState } from "react";
import "./AddTransactionModal.css";

export default function AddTransactionModal({
  onClose,
  onAdd,
  onUpdate,
  mode = "add",
  initialData,
}) {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const [initialSnapshot, setInitialSnapshot] = useState(null);

  // PREFILL for edit
  useEffect(() => {
    if (mode === "edit" && initialData) {
      const data = {
        ...initialData,
        amount: String(initialData.amount),
      };

      setForm(data);
      setInitialSnapshot(data);
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // dirty check
  const isDirty = JSON.stringify(form) !== JSON.stringify(initialSnapshot);

  // ✅ VALIDATION
  const isValid = form.date && form.amount && form.category;

  const handleSubmit = () => {
    if (!isValid) return;

    const payload = {
      ...form,
      amount: Number(form.amount),
    };

    if (mode === "edit") {
      if (!isDirty) {
        onClose();
        return;
      }

      onUpdate(payload);
    } else {
      onAdd(payload);
    }

    onClose();
  };

  return (
    // ✅ OVERLAY CLICK CLOSE
    <div className="modal-overlay" onClick={onClose}>
      {/* ✅ STOP PROPAGATION */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">
          {mode === "edit" ? "Edit Transaction" : "Add Transaction"}
        </h3>

        <div className="modal-form">
          <input
            type="date" autoFocus
            name="date"
            value={form.date}
            onChange={handleChange}
            className="modal-input"
          />

          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={form.amount}
            onChange={handleChange}
            className="modal-input"
          />

          <input
            type="text"
            name="category"
            placeholder="e.g. Food, Salary"
            value={form.category}
            onChange={handleChange}
            className="modal-input"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="modal-input"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="modal-actions">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>

          {/* disable when form invalid */}
          <button
            onClick={handleSubmit}
            className="btn-primary"
            disabled={!isValid}
          >
            {mode === "edit" ? "Save Changes" : "Add Transaction"}
          </button>
        </div>
      </div>
    </div>
  );
}
