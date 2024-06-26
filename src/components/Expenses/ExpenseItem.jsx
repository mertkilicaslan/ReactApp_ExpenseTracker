import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "../../styles/ExpenseItem.css";

const ExpenseItem = (props) => {
  let { title, amount, date } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
