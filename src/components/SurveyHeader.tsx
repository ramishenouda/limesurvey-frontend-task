import { Input } from '../shared/UiComponents/Input';

type Props = {
  surveyTitle: string;
  onChange: (event: any) => void;
};

export const SurveyHeader = ({ surveyTitle, onChange }: Props) => {
  return (
    <div className="w-[300px] mb-2">
      <Input
        label="Survey title"
        defaultValue={surveyTitle}
        placeholder="Survey title"
        name="title"
        type="text"
        onChange={onChange}
        required={true}
      />
    </div>
  );
};
