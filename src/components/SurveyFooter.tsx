import { useState } from 'react';
import { Question, QuestionType } from '../shared/interfaces/Question/Question.interface';

import { Button } from '../shared/UiComponents/Button';
import { Input } from '../shared/UiComponents/Input';
import { Select } from '../shared/UiComponents/Select';
import { GSSwitch } from '../shared/UiComponents/Switch';

export const SurveyFooter = () => {
  const [questionType, setQuestionType] = useState<QuestionType>(QuestionType.TEXT);
  const [question, setQuestion] = useState<Question>({} as any);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    console.log({ name }, { value }, { checked });

    if (name === 'type') {
      setQuestionType(value);
    }

    setQuestion({ ...question, [name]: value });
  };

  const addQuestion = () => {};
  const cancel = () => {};

  const questionTypeOptions = [
    {
      label: QuestionType.TEXT,
      value: QuestionType.TEXT,
    },
    {
      label: QuestionType.CHECKBOX,
      value: QuestionType.CHECKBOX,
    },
    {
      label: QuestionType.RADIO,
      value: QuestionType.RADIO,
    },
  ];

  return (
    <div className="p-4 border border-solid">
      <div className="flex items-center justify-center gap-2">
        <div className="min-w-[200px]">
          <p className="text-lg">Question Title:</p>
          <Select
            options={questionTypeOptions}
            name="type"
            onChange={handleChange}
            label="Question Type"
            required={true}
            value={questionType}
          />
        </div>
        <div className="flex-1">
          <p className="text-lg">Question Title:</p>
          <Input
            placeholder="Example: what is your current notice period?"
            name="title"
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div>
        <h1 className="my-4 text-lg">Question Settings</h1>
        <div>
          Required: <GSSwitch name="required" onChange={handleChange} />
        </div>
        {questionType === QuestionType.TEXT && (
          <div className="flex items-center gap-4 justify-items-center">
            <div>Max length: </div>
            <div>
              <Input
                type="number"
                maxNumericValue={1000}
                name="maxLength"
                onChange={handleChange}
                placeholder="unlimited"
              />
            </div>
          </div>
        )}
      </div>
      <div className="mt-3">{questionType !== QuestionType.TEXT && <> Options </>}</div>
      <div className="mt-4 ml-auto flex items-center justify-end w-[320px] gap-4">
        <Button label="Add Question" onClick={addQuestion}></Button>
        <Button variant="outlined" label="Cancel" onClick={cancel}></Button>
      </div>
    </div>
  );
};
