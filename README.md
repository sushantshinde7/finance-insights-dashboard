# 📊 Finance Insights Dashboard

A modern financial analytics dashboard built with **React + Vite** that transforms raw transaction data into actionable financial insights through interactive visualizations, derived analytics, and role-based data controls.

Designed to simulate a **real-world SaaS-style analytics platform**, with modular dashboard architecture, responsive navigation, and intelligent insight generation.

---

## 🚀 Live Demo

🔗 https://finance-insights-dashboard.vercel.app/

---

## ✨ Core Features

### Dashboard Overview
- KPI cards for Total Income, Total Expense, and Net Balance
- Income vs Expense comparison chart
- Expense distribution by category
- Financial snapshot for quick analysis

### Transactions Module
- Full transaction CRUD functionality
- Filter by income / expense / all
- Sort by latest / oldest date
- Context-aware empty states
- Admin-only data mutation controls

### Insights Dashboard
- Month-over-month expense comparison
- Dynamic top spending category detection
- Spending behavior classification logic
- Supporting trend and category analytics

---

## 🏗 Architecture & Engineering Highlights

### Role-Based Access Control
- **Viewer:** Read-only dashboard access
- **Admin:** Full CRUD capabilities

### Derived Analytics Engine
Raw transaction data is transformed into:
- Aggregated KPI metrics
- Category distributions
- Time-series chart datasets
- Behavioral insight summaries

### Modular Frontend Architecture
- Feature-based folder structure
- Component-level CSS separation
- Reusable custom hooks for business logic
- Scalable multi-layout dashboard organization

---

## 🎨 UX / UI Features

- Dark / Light mode support
- Responsive collapsible sidebar
- Mobile drawer navigation with backdrop
- ESC key sidebar close support
- Scroll lock when mobile drawer is open
- Refined empty states and contextual CTAs
- Accessible and responsive dashboard layout

---

## 🛠 Tech Stack

- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **Recharts**
- **Lucide React**
- **Custom Modular CSS**

---

## 📂 Project Structure

```text
src/
├── layout/          # Shared navigation/layout system
├── pages/
│   ├── dashboard/   # KPI + charts overview
│   ├── transactions/# CRUD + table controls
│   └── insights/    # Derived analytics engine
├── hooks/           # Reusable business logic
├── data/            # Mock transaction source
└── styles/          # Global design system
```

---

## 🎯 What This Project Demonstrates

- Building complex dashboard interfaces
- Designing scalable React architecture
- Managing derived/computed application state
- Implementing responsive SaaS-style UX patterns
- Translating raw data into analytical UI systems

---

## 🔮 Future Enhancements

- Advanced date/category filtering
- CSV / PDF export support
- Budget alerts / thresholds
- Predictive expense forecasting
- Drill-down category analytics

---

## 📸 Preview

_Add screenshots / GIFs here_

---

## 📄 License

Open source for learning and portfolio purposes.
