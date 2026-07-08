import "./ErrorFallback.css";

export default function ErrorFallback() {
  return (
    <div className="error-fallback">
      <div className="error-fallback-card">
        <div className="error-fallback-icon">⚠️</div>

        <h1>Something went wrong</h1>

        <p>
          An unexpected error occurred while loading Finsights.
        </p>

        <button
          className="error-fallback-btn"
          onClick={() => window.location.reload()}
        >
          Reload Application
        </button>
      </div>
    </div>
  );
}