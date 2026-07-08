import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page-container">
      <div className="error-page-bg-pattern"></div>

      <div className="error-page-content">
        <h1 className="error-page-code">404</h1>

        <h2 className="error-page-title">Page not found</h2>

        <p className="error-page-message">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or never existed.
        </p>

        <div className="error-page-actions">
          <button onClick={() => navigate("/")} className="error-btn-primary">
            Go Back Home
          </button>

          <button onClick={() => navigate(-1)} className="error-btn-secondary">
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
