import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { mockTransactions } from "../data/mockTransactions";

const STORAGE_KEY = "finance_transactions_v1";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return mockTransactions;
      }
    }

    return mockTransactions;
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions((prev) => [
      { id: Date.now(), ...tx },
      ...prev,
    ]);
  };

  const updateTransaction = (updated) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === updated.id ? updated : t
      )
    );
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  const analytics = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expense;

    const byCategory = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => {
        acc[t.category] =
          (acc[t.category] || 0) + t.amount;

        return acc;
      }, {});

    const categoryBreakdown =
      Object.entries(byCategory).map(
        ([name, value]) => ({
          name,
          value,
        })
      );

    const monthlyMap = {};

    transactions.forEach((t) => {
      const month = t.date.slice(0, 7);

      if (!monthlyMap[month]) {
        monthlyMap[month] = {
          income: 0,
          expense: 0,
        };
      }

      monthlyMap[month][t.type] += t.amount;
    });

    const formatMonth = (ym) => {
      const [year, month] = ym.split("-");

      const date = new Date(year, month - 1);

      return date.toLocaleString("en-IN", {
        month: "short",
      });
    };

    const monthlyTrend = Object.entries(monthlyMap)
      .map(([month, values]) => ({
        month: formatMonth(month),
        ...values,
        balance:
          values.income - values.expense,
      }))
      .sort((a, b) =>
        a.month.localeCompare(b.month)
      );

    const sortedMonths =
      Object.keys(monthlyMap).sort();

    const currentMonth =
      sortedMonths.at(-1);

    const previousMonth =
      sortedMonths.at(-2);

    const current =
      monthlyMap[currentMonth] || {
        income: 0,
        expense: 0,
      };

    const previous =
      monthlyMap[previousMonth] || {
        income: 0,
        expense: 0,
      };

    const calcChange = (curr, prev) => {
      if (!prev || prev === 0) return 0;

      return Math.round(
        ((curr - prev) / prev) * 100
      );
    };

    const incomeChange = calcChange(
      current.income,
      previous.income
    );

    const expenseChange = calcChange(
      current.expense,
      previous.expense
    );

    const balanceChange = calcChange(
      current.income - current.expense,
      previous.income - previous.expense
    );

    const sorted = [...transactions].sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    );

    let running = 0;

    const balanceTrend = sorted.map((t) => {
      running +=
        t.type === "income"
          ? t.amount
          : -t.amount;

      return {
        date: t.date,
        balance: running,
      };
    });

    return {
      income,
      expense,
      balance,
      categoryBreakdown,
      monthlyTrend,
      balanceTrend,
      incomeChange,
      expenseChange,
      balanceChange,
    };
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        ...analytics,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}