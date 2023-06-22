import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "Protein", amount: 698, date: new Date(2023, 11, 21) },
    { id: "e2", title: "Creatine", amount: 31, date: new Date(2021, 2, 11) },
    { id: "e3", title: "BCAA", amount: 99, date: new Date(2022, 5, 15) },
  ];

  return (
    <div className="App">
      <h2 className="App-header">Let's get started</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
