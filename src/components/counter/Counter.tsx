import { Button } from "../Button";
import { CounterDisplay } from "../CounterDisplay";

type Props = {
  counter: number;
  maxValue: number;
  startValue: number;
  incrementCounter: () => void;
  resetCounter: () => void;
};

export const Counter = ({
  counter,
  maxValue,
  startValue,
  incrementCounter,
  resetCounter,
}: Props) => {
  return (
    <div className="board">
      <CounterDisplay counter={counter} maxValue={maxValue} />
      <div className="btn-wrapper">
        <Button
          title={"INC"}
          onClick={incrementCounter}
          isDisabled={counter >= maxValue}
        />
        <Button
          title={"RESET"}
          onClick={resetCounter}
          isDisabled={counter === startValue}
        />
      </div>
    </div>
  );
};
