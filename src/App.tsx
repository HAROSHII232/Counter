import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { CounterDisplay } from "./components/CounterDisplay";
import { MaxValueDisplay } from "./components/MaxValueDisplay";
import { ProgressBar } from "./components/ProgressBar";

function App() {
  const minCount = 0;
  const getRandomValue = () => Math.ceil(Math.random() * 10);
  const getProgressBarPercentage = (step: number, maxValue: number) =>
    (step / maxValue) * 100;

  const [counter, setCounter] = useState(minCount);
  const [maxValue, setMaxValue] = useState(getRandomValue);
  const [progress, setProgress] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    setProgress(getProgressBarPercentage(counter + 1, maxValue));
  };
  const resetCounter = () => {
    setMaxValue(getRandomValue);
    setCounter(minCount);
    setProgress(0);
  };

  return (
    <div className="App">
      <MaxValueDisplay maxValue={maxValue} />
      <CounterDisplay counter={counter} maxValue={maxValue} />
      <ProgressBar progress={progress} />
      <Button
        title={"Inc"}
        onClick={incrementCounter}
        isDisabled={counter >= maxValue}
      />
      <Button
        title={"Reset"}
        onClick={resetCounter}
        isDisabled={counter === minCount}
      />
    </div>
  );
}

export default App;
