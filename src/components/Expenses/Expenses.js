import React, { useState } from "react";

import Card from "../UI/Card";
import "../../styles/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filterYear, setfilterYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expenseItem) => expenseItem.date.getFullYear() >= filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
