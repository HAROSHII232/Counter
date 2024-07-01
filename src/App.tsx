import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { CounterSettings } from "./components/counterSettings/CounterSettings";

function App() {
  const [counter, setCounter] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);
  const [inputMaxValue, setInputMaxValue] = useState("");
  const [inputStartValue, setInputStartValue] = useState("");

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(startValue);
  };

  const applySettings = () => {
    const maxVal = parseFloat(inputMaxValue);
    const startVal = parseFloat(inputStartValue);

    setMaxValue(maxVal);
    setStartValue(startVal);
    setCounter(startVal);
  };

  return (
    <div className="App">
      <CounterSettings
        maxValue={inputMaxValue}
        startValue={inputStartValue}
        applySettings={applySettings}
        setInputMaxValue={setInputMaxValue}
        setInputStartValue={setInputStartValue}
      />

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
