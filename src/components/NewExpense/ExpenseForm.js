import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setEnteredTitle(value);
    } else if (name === "amount") {
      setEnteredAmount(value);
    } else if (name === "date") {
      setEnteredDate(value);
    }
  };

  const inputClearHandler = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    inputClearHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={enteredTitle}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            name="date"
            value={enteredDate}
            min="2020-01-01"
            max="2023-13-31"
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
