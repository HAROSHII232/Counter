type Props = {
  title: string;
  value: string;
  callback: (value: any) => void;
};
export const SettingField = ({ title, value, callback }: Props) => {
  return (
    <div className="setting-display__field">
      <label>{title}</label>
      <input value={value} type="number" onChange={callback} />
    </div>
  );
};
