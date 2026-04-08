# 📊 Finance Insights Dashboard

A modern role-based financial analytics dashboard built with **React (Vite)** that transforms transaction data into actionable insights using interactive visualizations, filtering systems, and smart aggregation logic.

The application is structured as a **multi-layout analytics system** with role-based access control and modular dashboards.

---

## 🚀 Live Demo
https://finance-insights-dashboard.vercel.app/

---

## 🧭 System Architecture (Important)

This project is divided into **3 core layouts**, managed via a fixed navigation system (navbar + sidebar):

### 1️⃣ Dashboard (Overview Layer)
A high-level financial summary view.

#### Includes:
- 📌 KPI Cards:
  - Total Income
  - Total Expense
  - Net Balance
- 📊 Charts:
  - Income vs Expense (Bar Chart)
  - Expense Distribution (Pie Chart)

#### Purpose:
Provides a **quick financial snapshot** for decision-making.

---

### 2️⃣ Transactions Module (Data Control Layer)

A full CRUD + analytics table for raw financial data.

#### Features:
- 📄 Complete transaction listing
- 🔍 Filtering:
  - Income only
  - Expense only
  - All transactions
- ↕️ Sorting:
  - Date (Newest → Oldest)
  - Date (Oldest → Newest)
- ✏️ Admin Controls (Role-based):
  - Add transaction
  - Edit transaction
  - Delete transaction

#### Role System:
- 👤 Viewer:
  - Read-only access
  - Can view and filter data
- 🔐 Admin:
  - Full data manipulation permissions

#### Purpose:
Acts as the **source-of-truth data management layer**.

---

### 3️⃣ Insights Dashboard (Analytics Layer)

A smart analytics engine that converts raw transactions into behavioral insights.

#### Features:
- 💡 Smart Insight Cards:
  - Expense change vs previous month
  - Top spending category identification
  - Spending behavior classification
- 📊 Supporting Visuals:
  - Category-based analysis
  - Trend-based interpretation

#### Purpose:
Moves beyond charts into **decision intelligence layer**.

---

## 🧱 UI Navigation System

- 🧭 Fixed Navbar (global context)
- 📂 Sidebar Navigation (layout switching)
- ⚡ Instant view switching without page reload

This creates a **single-page analytics application experience** similar to SaaS dashboards like Stripe / Notion / Linear.

---

## 🧠 Key Features

### 📌 Financial KPIs
- Total Income tracking
- Total Expense tracking
- Net Balance calculation
- Dynamic top spending category detection

---

### 📊 Data Visualizations
- Income vs Expense comparison (Bar)
- Category-wise expense breakdown (Pie)
- Trend-based analysis charts

Built using **Recharts**.

---

### 💡 Smart Insights Engine
- Month-over-month expense comparison
- Category dominance detection
- Behavioral classification:
  - Increasing spend alert
  - Stable spending pattern
  - Controlled spending indicator

---

## 🧱 Tech Stack

- React.js (Vite)
- JavaScript (ES6+)
- Recharts (Data Visualization)
- Lucide Icons
- CSS (Custom modular styling)

---

## 📂 PROJECT FOLDER STRCUCTURE

```text
finance-insights-dashboard/
│
├── dist/
├── node_modules/
├── public/
│
├── src/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── BalanceChart.jsx
│   │   │   └── ExpenseChart.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Card.css
│   │   │   └── StatCard.jsx
│   │   │
│   │   ├── Insights/
│   │   │   └── InsightCard.jsx
│   │   │
│   │   ├── Layout/
│   │   │   ├── Layout.css
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.css
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── AddTransactionModal.css
│   │   │   ├── TransactionFilters.css
│   │   │   ├── TransactionsPage.css
│   │   │   └── TransactionsTable.css
│   │   │
│   │   └── transactions/
│   │       ├── AddTransactionModal.jsx
│   │       ├── TransactionFilters.jsx
│   │       └── TransactionsTable.jsx
│   │
│   ├── data/
│   │   └── mockTransactions.js
│   │
│   ├── hooks/
│   │   └── useTransactions.js
│   │
│   ├── pages/
│   │   ├── Dashboard.css
│   │   ├── Dashboard.jsx
│   │   ├── Insights.css
│   │   ├── InsightsPage.jsx
│   │   └── TransactionsPage.jsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Core System Logic

### 🔹 Data Model
Transactions are structured as:
- id
- type (income / expense)
- amount
- category
- date

---

### 🔹 Derived Computations
- Income aggregation
- Expense aggregation
- Net balance calculation
- Category grouping
- Time-series trend mapping

---

### 🔹 Role-Based Access Logic
- Viewer → read-only state
- Admin → full CRUD access layer

---

## 🎨 UI/UX Design System

- SaaS-inspired layout structure
- Card-based KPI architecture
- Responsive grid analytics layout
- Clean spacing hierarchy (dashboard-first design)
- Interactive chart components
- Minimal but functional visual language

---

## 📌 Project Intent

This project was built to simulate a **real-world financial analytics SaaS system**, focusing on:

- Data visualization pipelines
- Role-based dashboard architecture
- CRUD + analytics hybrid system
- Derived state computation from raw data
- Multi-view dashboard UX design

---

## 🚀 Future Enhancements

- 🔮 Predictive expense forecasting (AI layer)
- 🔎 Advanced filters (category + date range)
- 📤 Export analytics (PDF/CSV reports)
- 🔔 Budget threshold alerts
- 🌙 Dark mode system overhaul
- 📊 Drill-down per-category analytics

---

## 📷 Preview

(Add screenshots here later)

---

## 👨‍💻 Author

Frontend project focused on:
- Dashboard systems
- Financial analytics UI
- React architecture patterns
- Data-driven UI design

---

## 📜 License

Open-source project for learning and portfolio demonstration purposes.
