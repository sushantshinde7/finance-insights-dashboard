import "./TransactionFilters.css";

export default function TransactionFilters({
  filterType,
  setFilterType,
  searchTerm,
  setSearchTerm,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  resultCount,
}) {
  return (
    <div className="filters-wrapper">
      {/* SEARCH */}

      <div className="search-row">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search category, amount, type, date..."
          className="search-input"
        />
      </div>

      {/* CONTROLS */}

      <div className="filters">
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

        <div className="filter-actions">
          <select
            className="filter-select"
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="category">Category</option>
          </select>

          <select
            className="filter-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>

          <div className="results-count">
            {resultCount} Transaction{resultCount !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}