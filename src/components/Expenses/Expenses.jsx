import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "../../styles/Expenses.css";
import { YEARS_IN_DROPDOWN } from "../../utils/constants";

const Expenses = ({ expenses }) => {
  const [filterYear, setfilterYear] = useState(YEARS_IN_DROPDOWN[0]);

  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expenseItem) => expenseItem.date.getFullYear() <= filterYear
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
