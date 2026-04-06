import "../styles/TransactionFilters.css";

export default function TransactionFilters({
  filterType,
  setFilterType,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="filters-container">
      <div className="filters-inner">
        {/* Filter group */}
        <div className="filter-group">
          <label className="filter-label">Type</label>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Sort group */}
        <div className="filter-group">
          <label className="filter-label">Sort</label>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="filter-select"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>
    </div>
  );
}
