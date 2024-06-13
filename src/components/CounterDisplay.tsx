type Props = {
  counter: number;
  maxValue: number;
};
export const CounterDisplay = ({ counter, maxValue }: Props) => {
  return (
    <span className={counter === maxValue ? "red-count" : ""}>{counter}</span>
  );
};
