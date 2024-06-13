type Props = {
  title: string;
  isDisabled: boolean;
  onClick: () => void;
};
export const Button = ({ title, isDisabled, onClick }: Props) => {
  return (
    <button className="btn" onClick={onClick} disabled={isDisabled}>
      {title}
    </button>
  );
};
