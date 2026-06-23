import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

import { ThemeProvider } from "./context/ThemeContext";
import { TransactionProvider } from "./context/TransactionContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TransactionProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </TransactionProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
