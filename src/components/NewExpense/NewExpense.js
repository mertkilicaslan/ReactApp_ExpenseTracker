import React, { useState } from "react";

import "../../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [openAddNewExpenseTab, setOpenAddNewExpenseTab] = useState(true);

  return (
    <div className="new-expense">
      {openAddNewExpenseTab ? (
        <button
          onClick={() => {
            setOpenAddNewExpenseTab(false);
          }}
        >
          Add new Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={props.onSaveExpenseData}
          setOpenAddNewExpenseTab={setOpenAddNewExpenseTab}
        />
      )}
    </div>
  );
};

export default NewExpense;
