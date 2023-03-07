import { useState } from 'react';
import { QuestoinType } from '../shared/interfaces/Question/Question.interface';

import { Button } from '../shared/UiComponents/Button';
import { Input } from '../shared/UiComponents/Input';
import { Select } from '../shared/UiComponents/Select';

export const SurveyFooter = () => {
  const questionTypesOptions = [
    {
      label: QuestoinType.TEXT,
      value: QuestoinType.TEXT,
    },
    {
      label: QuestoinType.CHECKBOX,
      value: QuestoinType.CHECKBOX,
    },
    {
      label: QuestoinType.RADIO,
      value: QuestoinType.RADIO,
    },
  ];

  const [questionType, setQuestionType] = useState<QuestoinType>(QuestoinType.TEXT);

  const handleChange = (event: any) => {
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;
  };

  const addQuestion = () => {};
  const cancel = () => {};

  return (
    <div className="p-4 border border-solid">
      <div className="flex items-center justify-center gap-2">
        <div className="min-w-[200px]">
          <Select
            options={questionTypesOptions}
            name="questionType"
            onChange={handleChange}
            label="Question Type"
            required={true}
            defaultValue={questionTypesOptions[0].value}
          />
        </div>
        <div className="flex-1">
          <p className="text-gray-500">Question Title:</p>
          <Input
            placeholder="Example: what is your current notice period?"
            name="questionLabel"
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className="mt-4 ml-auto flex items-center justify-end w-[200px] gap-4">
        <Button label="Add" onClick={addQuestion}></Button>
        <Button variant="outlined" label="Cancel" onClick={cancel}></Button>
      </div>
    </div>
  );
};
