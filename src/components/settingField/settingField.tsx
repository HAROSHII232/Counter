type Props = {
  title: string;
  value: number;
  callback: () => void;
};
export const SettingField = ({ title, value, callback }: Props) => {
  return (
    <div className="setting-display__field">
      <span>{title}</span>
      <input value={value} type="number" onChange={callback} />
    </div>
  );
};
