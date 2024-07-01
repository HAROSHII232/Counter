import { Button } from "../Button";
import { SettingField } from "../settingField/settingField";

type Props = {
  maxValue: string;
  startValue: string;
  applySettings: () => void;
  setInputMaxValue: (value: string) => void;
  setInputStartValue: (value: string) => void;
};

export const CounterSettings = ({
  maxValue,
  startValue,
  applySettings,
  setInputMaxValue,
  setInputStartValue,
}: Props) => {
  return (
    <div className="board">
      <div className="settings-display">
        <SettingField
          title="max value:"
          value={maxValue}
          callback={(e) => setInputMaxValue(e.target.value)}
        />
        <SettingField
          title="start value:"
          value={startValue}
          callback={(e) => {
            setInputStartValue(e.target.value);
          }}
        />
      </div>
      <div className="btn-wrapper">
        <Button title={"SET"} onClick={applySettings} isDisabled={false} />
      </div>
    </div>
  );
};
