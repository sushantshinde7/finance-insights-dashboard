# 📊 Finance Insights Dashboard

A modern financial analytics dashboard built with **React (Vite)** that visualizes personal transactions using interactive charts and intelligent insights.  
The project focuses on transforming raw transaction data into meaningful financial patterns using dynamic calculations and data visualization.

---

## 🚀 Live Demo
[finance-dashboard-live](https://finance-insights-dashboard.vercel.app/)

---

## 🧠 Key Features

### 📌 Financial KPIs
- Total Income tracking
- Total Expense tracking
- Net Balance calculation
- Top Spending Category detection (dynamic)

---

### 📊 Data Visualizations
- 📈 Income vs Expense (Bar Chart)
- 🍩 Expense Breakdown by Category (Pie Chart)
- 📉 Balance Trend over time (Line Chart)
- 📆 Monthly Financial Trends

Built using **Recharts** for interactive and responsive visualization.

---

### 💡 Smart Insights Engine
Automatically generated insights based on transaction data:

- Expense change comparison with previous month
- Identification of top spending driver category
- Behavioral analysis of spending patterns:
  - Increasing expenses warning
  - Stable spending indicator
  - Positive savings behavior detection

---

## 🧱 Tech Stack

- React.js (Vite)
- JavaScript (ES6+)
- Recharts (Data Visualization)
- CSS (Custom modern UI styling)
- Lucide Icons


---

## ⚙️ Core Logic

### 🔹 Data Source
All insights are generated from a mock transaction dataset (`mockTransactions.js`), which simulates real-world financial activity.

---

### 🔹 Computed Metrics
- Income = sum of income transactions
- Expense = sum of expense transactions
- Balance = Income - Expense
- Category Breakdown = grouped expense aggregation
- Monthly Trend = time-series aggregation of transactions

---

### 🔹 Smart Insight Logic
The system calculates:
- Month-over-month expense changes
- Dominant spending category
- Spending behavior classification (increasing/stable/controlled)

---

## 🎨 UI/UX Highlights

- Modern SaaS-style dashboard layout
- Responsive 2-column analytics grid
- KPI-first hierarchy design
- Card-based visual system with elevation effects
- Clean spacing system for readability
- Subtle hover interactions for better UX feedback

---

## 📌 Purpose of Project

This project was built to practice:

- Real-world data visualization
- Financial analytics UI design
- Component-based architecture in React
- Derived state calculations from raw data
- Building dashboard-style interfaces similar to SaaS products (Stripe / Notion analytics style)

---

## 🚀 Future Improvements

- 🔮 AI-based spending predictions
- 🔎 Filters (monthly/yearly/category-wise)
- 📊 Drill-down analytics per category
- 📄 Export reports (PDF/CSV)
- 🔔 Budget alerts system
- 🌙 Dark mode optimization

---

## 📷 Preview

(Add screenshot here later)

---

## 👨‍💻 Author

Built as a frontend development project focused on mastering:
- React dashboards
- Data visualization
- UI/UX for analytics systems

---

## 📜 License

This project is open-source and free to use for learning purposes.
