import { Button } from "../Button";
import { SettingField } from "../settingField/settingField";

type Props = {
  maxValue: number;
  startValue: number;
};
export const CounterSettings = ({ maxValue, startValue }: Props) => {
  return (
    <div className="board">
      <div className="settings-display">
        <SettingField title="max value:" value={maxValue} callback={() => {}} />
        <SettingField
          title="start value:"
          value={startValue}
          callback={() => {}}
        />
      </div>
      <div className="btn-wrapper">
        <Button title={"SET"} onClick={() => {}} isDisabled={false} />
      </div>
    </div>
  );
};
