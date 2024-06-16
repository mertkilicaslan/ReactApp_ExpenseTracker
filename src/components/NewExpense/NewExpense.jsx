import React, { useState } from "react";

import "../../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddNewExpenseTabOpened, setAddNewExpenseTabOpened] = useState(false);

  return (
    <div className="new-expense">
      {isAddNewExpenseTabOpened ? (
        <ExpenseForm
          onSaveExpenseData={props.onSaveExpenseData}
          setAddNewExpenseTabOpened={setAddNewExpenseTabOpened}
        />
      ) : (
        <button onClick={() => setAddNewExpenseTabOpened(true)}>
          Add new Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
