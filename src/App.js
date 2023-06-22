import { Component, useState } from "react";

function App() {
  const [state, setFunction] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <p>YARRAK</p>
        <button
          onClick={() => {
            setFunction(!state);
          }}
        >
          {state.toString()}
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
