import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { sampleOneTransactions } from "../data/mockTransactions";
import { sampleTwoTransactions } from "../data/mockTransactions2";

const STORAGE_KEY = "finance_transactions_v1";
const SAMPLE_KEY  = "finance_active_sample";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [activeSample, setActiveSample] = useState(() => {
    return localStorage.getItem(SAMPLE_KEY) || "sample1";
  });

  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch { /* fall through */ }
    return sampleOneTransactions;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const loadSample = (key) => {
    let data;

    if (key === "sample1") data = sampleOneTransactions;
    else if (key === "sample2") data = sampleTwoTransactions;
    else data = []; // "clear"

    setTransactions(data);
    setActiveSample(key);
    localStorage.setItem(SAMPLE_KEY, key);

    if (key === "clear") {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  };

  const addTransaction = (tx) => {
    setTransactions((prev) => [{ id: Date.now(), ...tx }, ...prev]);
  };

  const updateTransaction = (updated) => {
    setTransactions((prev) => prev.map((t) => t.id === updated.id ? updated : t));
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
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
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});

    const categoryBreakdown = Object.entries(byCategory).map(
      ([name, value]) => ({ name, value })
    );

    const monthlyMap = {};

    transactions.forEach((t) => {
      const month = t.date.slice(0, 7);
      if (!monthlyMap[month]) monthlyMap[month] = { income: 0, expense: 0 };
      monthlyMap[month][t.type] += t.amount;
    });

    const formatMonth = (ym) => {
      const [year, month] = ym.split("-");
      return new Date(year, month - 1).toLocaleString("en-IN", { month: "short" });
    };

    const monthlyTrend = Object.entries(monthlyMap)
      .map(([month, values]) => ({
        month: formatMonth(month),
        ...values,
        balance: values.income - values.expense,
      }))
      .sort((a, b) => a.month.localeCompare(b.month));

    const sortedMonths   = Object.keys(monthlyMap).sort();
    const currentMonth   = sortedMonths.at(-1);
    const previousMonth  = sortedMonths.at(-2);
    const current  = monthlyMap[currentMonth]  || { income: 0, expense: 0 };
    const previous = monthlyMap[previousMonth] || { income: 0, expense: 0 };

    const calcChange = (curr, prev) =>
      prev === 0 ? 0 : Math.round(((curr - prev) / prev) * 100);

    const sorted  = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
    let running   = 0;
    const balanceTrend = sorted.map((t) => {
      running += t.type === "income" ? t.amount : -t.amount;
      return { date: t.date, balance: running };
    });

    return {
      income,
      expense,
      balance,
      categoryBreakdown,
      monthlyTrend,
      balanceTrend,
      incomeChange:  calcChange(current.income,  previous.income),
      expenseChange: calcChange(current.expense, previous.expense),
      balanceChange: calcChange(
        current.income  - current.expense,
        previous.income - previous.expense
      ),
    };
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        activeSample,
        loadSample,
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