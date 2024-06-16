import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "../../styles/NewExpense.css";

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
          Add a new expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
