type Props = {
  progress: number;
};
export const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="progress-bar">
      <div
        style={{ width: `${progress}%` }}
        className=" progress-bar__fill"
      ></div>
    </div>
  );
};
