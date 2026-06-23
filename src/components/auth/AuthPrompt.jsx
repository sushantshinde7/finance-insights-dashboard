import "./AuthPrompt.css";

export default function AuthPrompt({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="auth-prompt"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Sign in required</h3>

        <p>
          Create an account to add, edit and manage your
          financial data.
        </p>

        <div className="auth-prompt-actions">
          <button className="btn-secondary" onClick={onClose}>
            Maybe Later
          </button>

          <button className="btn-primary">
            Login
          </button>

          <button className="btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}