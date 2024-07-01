import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { CounterSettings } from "./components/counterSettings/CounterSettings";

function App() {
  const startValue = 0;
  const startMaxValue = 5;

  const [counter, setCounter] = useState(startValue);
  const [maxValue, setMaxValue] = useState(startMaxValue);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(startValue);
  };

  return (
    <div className="App">
      <CounterSettings maxValue={maxValue} startValue={startValue} />

      <Counter
        counter={counter}
        maxValue={maxValue}
        startValue={startValue}
        incrementCounter={incrementCounter}
        resetCounter={resetCounter}
      />
    </div>
  );
}

export default App;
