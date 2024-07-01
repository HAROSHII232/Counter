type Props = {
  counter: number;
  maxValue: number;
};
export const CounterDisplay = ({ counter, maxValue }: Props) => {
  return (
    <div className="counter-display">
      <span className={counter === maxValue ? "red-count" : ""}>{counter}</span>
    </div>
  );
};
