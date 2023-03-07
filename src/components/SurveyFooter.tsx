import { useState } from 'react';
import { CheckboxQuestion } from '../shared/interfaces/Question/CheckboxQuestion.interface';
import { Question, QuestionType } from '../shared/interfaces/Question/Question.interface';

import { Button } from '../shared/UiComponents/Button';
import { Input } from '../shared/UiComponents/Input';
import { Select } from '../shared/UiComponents/Select';
import { GSSwitch } from '../shared/UiComponents/Switch';

type Props = {
  addQuestion: (question: Question) => void;
};

export const SurveyFooter = ({ addQuestion }: Props) => {
  const [questionType, setQuestionType] = useState<QuestionType>(QuestionType.TEXT);
  const [question, setQuestion] = useState<Question>({ type: QuestionType.TEXT } as any);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    if (name === 'type') {
      setQuestionType(value);
    } else if (name === 'required') {
      setQuestion({ ...question, [name]: checked });
      return;
    }

    setQuestion({ ...question, [name]: value });
  };

  const addOption = () => {
    const _question = question as CheckboxQuestion;
    if (!_question.answerOptions) {
      _question.answerOptions = [];
    }

    _question.answerOptions.push({ value: '', id: _question.answerOptions.length });

    setQuestion({ ..._question });
  };

  const handleOptionChange = (event: any) => {};
  const removeOption = (answerOptionId: number) => {};

  const sendQuestionToParent = (event: any) => {
    event.preventDefault();
    addQuestion({ ...question });
  };

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
    <section>
      <h1 className="mt-12 mb-2 text-2xl">Add Question</h1>
      <form onSubmit={sendQuestionToParent} className="p-4 border border-solid">
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
        <div className="mt-3">
          {questionType !== QuestionType.TEXT && (
            <>
              {(question as CheckboxQuestion).answerOptions?.length ? (
                <>
                  {(question as CheckboxQuestion).answerOptions.map((answerOption) => {
                    return (
                      <div className="flex gap-2 my-2">
                        <div className="w-full">
                          <Input
                            key={'answerOption' + answerOption.id}
                            name={answerOption.id.toString()}
                            onChange={handleOptionChange}
                            placeholder="Option text"
                            required={true}
                          />
                        </div>
                        <div className="w-20">
                          <Button
                            onClick={() => removeOption(answerOption.id)}
                            type="submit"
                            size="large"
                            variant="outlined"
                            label="X"
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
              <div className="w-40">
                <Button size="large" label="+ Add Option" onClick={addOption} />
              </div>
            </>
          )}
        </div>
        <div className="mt-4 ml-auto flex items-center justify-end w-[320px] gap-4">
          <Button type="submit" label="Add Question" />
          <Button variant="outlined" label="Cancel" onClick={cancel} />
        </div>
      </form>
    </section>
  );
};
