import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filterYear, setfilterYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {expenses
        .filter((expenseItem) => expenseItem.date.getFullYear() > filterYear)
        .map((expenseItem) => {
          return (
            <ExpenseItem
              key={expenseItem.id}
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
