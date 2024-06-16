import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./utils/constants";

const App = () => {
  const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = (expenseData) => {
    expenseData.id = Math.floor(Math.random() * 10 ** 4).toString(); // random enough to generate a unique identifier
    setExpensesList((prevExpenses) => [...prevExpenses, expenseData]);
  };

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses expenses={expensesList} />
    </div>
  );
};

export default App;
