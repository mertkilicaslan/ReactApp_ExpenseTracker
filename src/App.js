import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  { id: "e1", title: "Protein", amount: 698, date: new Date(2023, 11, 21) },
  { id: "e2", title: "Creatine", amount: 31, date: new Date(2021, 2, 11) },
  { id: "e3", title: "BCAA", amount: 99, date: new Date(2022, 5, 15) },
];
const App = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10 ** 4).toString(),
    };
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
