import "./TransactionFilters.css";
import { SlidersHorizontal } from "lucide-react";

export default function TransactionFilters({
  searchTerm,
  setSearchTerm,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  resultCount,
  activeFilterCount,
  onOpenFilters,
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
        <button
          className="filters-trigger"
          onClick={onOpenFilters}
        >
          <SlidersHorizontal size={16} />

          <span>Filters</span>

          {activeFilterCount > 0 && (
            <span className="filters-badge">
              {activeFilterCount}
            </span>
          )}
        </button>

        <div className="filter-actions">
          <select
            className="filter-select"
            value={sortField}
            onChange={(e) =>
              setSortField(e.target.value)
            }
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="category">Category</option>
          </select>

          <select
            className="filter-select"
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value)
            }
          >
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>

          <div className="results-count">
            {resultCount} Transaction
            {resultCount !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}