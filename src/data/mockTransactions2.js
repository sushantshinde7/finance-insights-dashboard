// Sample 2 — Senior professional / dual income household
// Higher salary band, EMI, investments, kids' education, insurance,
// consulting income on top of salary, visible savings dip mid-year,
// more category diversity for richer charts and filter exploration

export const sampleTwoTransactions = [
  // =========================
  // JULY 2025
  // =========================
  { id: 101, date: "2025-07-01", amount: 95000, category: "Salary",           type: "income"  },
  { id: 102, date: "2025-07-01", amount: 52000, category: "Spouse Salary",    type: "income"  },
  { id: 103, date: "2025-07-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 104, date: "2025-07-05", amount: 8000,  category: "School Fees",      type: "expense" },
  { id: 105, date: "2025-07-07", amount: 4500,  category: "Groceries",        type: "expense" },
  { id: 106, date: "2025-07-10", amount: 2200,  category: "Electricity",      type: "expense" },
  { id: 107, date: "2025-07-12", amount: 3500,  category: "Dining Out",       type: "expense" },
  { id: 108, date: "2025-07-15", amount: 12000, category: "LIC Premium",      type: "expense" },
  { id: 109, date: "2025-07-18", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 110, date: "2025-07-22", amount: 1800,  category: "Gym",              type: "expense" },
  { id: 111, date: "2025-07-28", amount: 2500,  category: "Transport",        type: "expense" },

  // =========================
  // AUGUST 2025
  // =========================
  { id: 112, date: "2025-08-01", amount: 95000, category: "Salary",           type: "income"  },
  { id: 113, date: "2025-08-01", amount: 52000, category: "Spouse Salary",    type: "income"  },
  { id: 114, date: "2025-08-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 115, date: "2025-08-06", amount: 15000, category: "Consulting",       type: "income"  },
  { id: 116, date: "2025-08-08", amount: 4200,  category: "Groceries",        type: "expense" },
  { id: 117, date: "2025-08-10", amount: 8000,  category: "School Fees",      type: "expense" },
  { id: 118, date: "2025-08-14", amount: 6500,  category: "Shopping",         type: "expense" },
  { id: 119, date: "2025-08-18", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 120, date: "2025-08-22", amount: 3200,  category: "Dining Out",       type: "expense" },
  { id: 121, date: "2025-08-26", amount: 1800,  category: "Gym",              type: "expense" },

  // =========================
  // SEPTEMBER 2025
  // =========================
  { id: 122, date: "2025-09-01", amount: 95000, category: "Salary",           type: "income"  },
  { id: 123, date: "2025-09-01", amount: 52000, category: "Spouse Salary",    type: "income"  },
  { id: 124, date: "2025-09-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 125, date: "2025-09-05", amount: 4800,  category: "Groceries",        type: "expense" },
  { id: 126, date: "2025-09-08", amount: 8000,  category: "School Fees",      type: "expense" },
  { id: 127, date: "2025-09-10", amount: 2800,  category: "Electricity",      type: "expense" },
  { id: 128, date: "2025-09-14", amount: 18000, category: "Consulting",       type: "income"  },
  { id: 129, date: "2025-09-17", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 130, date: "2025-09-20", amount: 9500,  category: "Car Service",      type: "expense" },
  { id: 131, date: "2025-09-25", amount: 4000,  category: "Dining Out",       type: "expense" },

  // =========================
  // OCTOBER 2025 — festive spending
  // =========================
  { id: 132, date: "2025-10-01", amount: 95000, category: "Salary",           type: "income"  },
  { id: 133, date: "2025-10-01", amount: 52000, category: "Spouse Salary",    type: "income"  },
  { id: 134, date: "2025-10-02", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 135, date: "2025-10-05", amount: 25000, category: "Diwali Shopping",  type: "expense" },
  { id: 136, date: "2025-10-08", amount: 12000, category: "Gifts",            type: "expense" },
  { id: 137, date: "2025-10-10", amount: 4500,  category: "Groceries",        type: "expense" },
  { id: 138, date: "2025-10-12", amount: 20000, category: "Annual Bonus",     type: "income"  },
  { id: 139, date: "2025-10-15", amount: 8000,  category: "School Fees",      type: "expense" },
  { id: 140, date: "2025-10-20", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 141, date: "2025-10-25", amount: 1800,  category: "Gym",              type: "expense" },

  // =========================
  // NOVEMBER 2025
  // =========================
  { id: 142, date: "2025-11-01", amount: 95000, category: "Salary",           type: "income"  },
  { id: 143, date: "2025-11-01", amount: 52000, category: "Spouse Salary",    type: "income"  },
  { id: 144, date: "2025-11-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 145, date: "2025-11-06", amount: 4200,  category: "Groceries",        type: "expense" },
  { id: 146, date: "2025-11-08", amount: 8000,  category: "School Fees",      type: "expense" },
  { id: 147, date: "2025-11-12", amount: 22000, category: "Consulting",       type: "income"  },
  { id: 148, date: "2025-11-15", amount: 18000, category: "Health Insurance", type: "expense" },
  { id: 149, date: "2025-11-18", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 150, date: "2025-11-22", amount: 3500,  category: "Dining Out",       type: "expense" },
  { id: 151, date: "2025-11-26", amount: 2200,  category: "Transport",        type: "expense" },

  // =========================
  // DECEMBER 2025 — year-end travel
  // =========================
  { id: 152, date: "2025-12-01", amount: 95000, category: "Salary",           type: "income"  },
  { id: 153, date: "2025-12-01", amount: 52000, category: "Spouse Salary",    type: "income"  },
  { id: 154, date: "2025-12-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 155, date: "2025-12-08", amount: 35000, category: "Year-End Trip",    type: "expense" },
  { id: 156, date: "2025-12-10", amount: 8000,  category: "Gifts",            type: "expense" },
  { id: 157, date: "2025-12-12", amount: 30000, category: "Annual Bonus",     type: "income"  },
  { id: 158, date: "2025-12-15", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 159, date: "2025-12-20", amount: 6000,  category: "Dining Out",       type: "expense" },
  { id: 160, date: "2025-12-26", amount: 12000, category: "New Appliance",    type: "expense" },

  // =========================
  // JANUARY 2026 — salary hike
  // =========================
  { id: 161, date: "2026-01-01", amount: 105000,category: "Salary",           type: "income"  },
  { id: 162, date: "2026-01-01", amount: 58000, category: "Spouse Salary",    type: "income"  },
  { id: 163, date: "2026-01-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 164, date: "2026-01-06", amount: 9000,  category: "School Fees",      type: "expense" },
  { id: 165, date: "2026-01-09", amount: 4500,  category: "Groceries",        type: "expense" },
  { id: 166, date: "2026-01-14", amount: 65000, category: "New Laptop",       type: "expense" },
  { id: 167, date: "2026-01-18", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 168, date: "2026-01-22", amount: 25000, category: "Consulting",       type: "income"  },
  { id: 169, date: "2026-01-26", amount: 2500,  category: "Transport",        type: "expense" },

  // =========================
  // FEBRUARY 2026
  // =========================
  { id: 170, date: "2026-02-01", amount: 105000,category: "Salary",           type: "income"  },
  { id: 171, date: "2026-02-01", amount: 58000, category: "Spouse Salary",    type: "income"  },
  { id: 172, date: "2026-02-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 173, date: "2026-02-06", amount: 4800,  category: "Groceries",        type: "expense" },
  { id: 174, date: "2026-02-10", amount: 8500,  category: "Medical",          type: "expense" },
  { id: 175, date: "2026-02-14", amount: 9000,  category: "Anniversary Trip", type: "expense" },
  { id: 176, date: "2026-02-18", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 177, date: "2026-02-22", amount: 4200,  category: "Dining Out",       type: "expense" },
  { id: 178, date: "2026-02-25", amount: 1800,  category: "Gym",              type: "expense" },

  // =========================
  // MARCH 2026 — tax season + investment
  // =========================
  { id: 179, date: "2026-03-01", amount: 105000,category: "Salary",           type: "income"  },
  { id: 180, date: "2026-03-01", amount: 58000, category: "Spouse Salary",    type: "income"  },
  { id: 181, date: "2026-03-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 182, date: "2026-03-06", amount: 30000, category: "PPF Investment",   type: "expense" },
  { id: 183, date: "2026-03-10", amount: 20000, category: "Consulting",       type: "income"  },
  { id: 184, date: "2026-03-12", amount: 4500,  category: "Groceries",        type: "expense" },
  { id: 185, date: "2026-03-16", amount: 9000,  category: "School Fees",      type: "expense" },
  { id: 186, date: "2026-03-20", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 187, date: "2026-03-25", amount: 3500,  category: "Dining Out",       type: "expense" },

  // =========================
  // APRIL 2026
  // =========================
  { id: 188, date: "2026-04-01", amount: 105000,category: "Salary",           type: "income"  },
  { id: 189, date: "2026-04-01", amount: 58000, category: "Spouse Salary",    type: "income"  },
  { id: 190, date: "2026-04-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 191, date: "2026-04-06", amount: 9000,  category: "School Fees",      type: "expense" },
  { id: 192, date: "2026-04-09", amount: 4200,  category: "Groceries",        type: "expense" },
  { id: 193, date: "2026-04-14", amount: 18000, category: "Car Insurance",    type: "expense" },
  { id: 194, date: "2026-04-18", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 195, date: "2026-04-22", amount: 28000, category: "Consulting",       type: "income"  },
  { id: 196, date: "2026-04-26", amount: 2800,  category: "Transport",        type: "expense" },

  // =========================
  // MAY 2026 — big vacation, savings dip
  // =========================
  { id: 197, date: "2026-05-01", amount: 105000,category: "Salary",           type: "income"  },
  { id: 198, date: "2026-05-01", amount: 58000, category: "Spouse Salary",    type: "income"  },
  { id: 199, date: "2026-05-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 200, date: "2026-05-06", amount: 75000, category: "Europe Trip",      type: "expense" },
  { id: 201, date: "2026-05-08", amount: 4500,  category: "Groceries",        type: "expense" },
  { id: 202, date: "2026-05-12", amount: 9000,  category: "School Fees",      type: "expense" },
  { id: 203, date: "2026-05-18", amount: 8000,  category: "Shopping",         type: "expense" },
  { id: 204, date: "2026-05-24", amount: 1800,  category: "Gym",              type: "expense" },

  // =========================
  // JUNE 2026 — recovery month
  // =========================
  { id: 205, date: "2026-06-01", amount: 105000,category: "Salary",           type: "income"  },
  { id: 206, date: "2026-06-01", amount: 58000, category: "Spouse Salary",    type: "income"  },
  { id: 207, date: "2026-06-03", amount: 28000, category: "Home Loan EMI",    type: "expense" },
  { id: 208, date: "2026-06-06", amount: 4800,  category: "Groceries",        type: "expense" },
  { id: 209, date: "2026-06-10", amount: 35000, category: "Consulting",       type: "income"  },
  { id: 210, date: "2026-06-12", amount: 9000,  category: "School Fees",      type: "expense" },
  { id: 211, date: "2026-06-15", amount: 5000,  category: "Mutual Funds",     type: "expense" },
  { id: 212, date: "2026-06-18", amount: 2800,  category: "Electricity",      type: "expense" },
  { id: 213, date: "2026-06-22", amount: 3500,  category: "Dining Out",       type: "expense" },
  { id: 214, date: "2026-06-26", amount: 2500,  category: "Transport",        type: "expense" },
];