import "./TransactionFilters.css";

export default function TransactionFilters({
  filterType,
  setFilterType,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="filters">
      {/* LEFT: TYPE FILTER */}
      <div className="filter-tabs">
        <button
          className={`tab ${filterType === "all" ? "active" : ""}`}
          onClick={() => setFilterType("all")}
        >
          All
        </button>

        <button
          className={`tab ${filterType === "income" ? "active" : ""}`}
          onClick={() => setFilterType("income")}
        >
          Income
        </button>

        <button
          className={`tab ${filterType === "expense" ? "active" : ""}`}
          onClick={() => setFilterType("expense")}
        >
          Expense
        </button>
      </div>

      {/* RIGHT: SORT */}
      <div className="filter-actions">
        <button
          className="sort-btn"
          onClick={() =>
            setSortOrder(sortOrder === "desc" ? "asc" : "desc")
          }
        >
          {sortOrder === "desc" ? "Newest ↓" : "Oldest ↑"}
        </button>
      </div>
    </div>
  );
}