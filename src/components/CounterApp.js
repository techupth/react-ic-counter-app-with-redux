import { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(0);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleSubtractCounter = () => {
    setCounter(counter - 1);
  };

  const handleResetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={handleAddCounter}>+</button>
        <button onClick={handleSubtractCounter}>-</button>
        <button onClick={handleResetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
