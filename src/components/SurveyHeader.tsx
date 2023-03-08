import { GSInput } from '../shared/UiComponents/GSInput';

type Props = {
  surveyTitle: string;
  onChange: (event: any) => void;
};

export const SurveyHeader = ({ surveyTitle, onChange }: Props) => {
  return (
    <div className="sm:w-[300px] mb-2 bg-blue-100 rounded-md">
      <GSInput
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
