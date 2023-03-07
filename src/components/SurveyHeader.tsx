import { ChangeEvent, useState } from 'react';
import { Input } from '../shared/UiComponents/Input';

type Props = {
  surveyTitle: string;
};

export const SurveyHeader = ({ surveyTitle }: Props) => {
  const [title, setTitle] = useState(surveyTitle);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <header className="container">
      <div className="mb-2 w-1/4">
        <Input
          label="Survey title"
          defaultValue={title}
          placeholder="Survey title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
        />
      </div>
    </header>
  );
};
