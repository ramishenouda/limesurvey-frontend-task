import { useState } from 'react';
import { CheckboxQuestion } from '../shared/interfaces/Question/CheckboxQuestion.interface';
import { Question, QuestionType } from '../shared/interfaces/Question/Question.interface';
import { TextQuestion } from '../shared/interfaces/Question/TextQuestion.interface';

import { Button } from '../shared/UiComponents/Button';
import { Input } from '../shared/UiComponents/Input';
import { Select } from '../shared/UiComponents/Select';
import { GSSwitch } from '../shared/UiComponents/Switch';

type Props = {
  addQuestion: (question: Question) => void;
  cancelQuestion: () => void;
};

export const SurveyFooter = ({ addQuestion, cancelQuestion }: Props) => {
  const [questionType, setQuestionType] = useState<QuestionType>(QuestionType.TEXT);
  const [question, setQuestion] = useState<Question>({ type: QuestionType.TEXT } as any);
  const [error, setError] = useState('');

  const emptyQuestion: Question = {
    id: 999,
    title: '',
    type: QuestionType.TEXT,
    settings: {},
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    if (name === 'required') {
      if (!question.settings) {
        question.settings = {};
      }

      question.settings.required = checked;
      setQuestion({ ...question });
      return;
    }

    if (name === 'type') {
      setQuestionType(value);
    }

    setQuestion({ ...question, [name]: value });
  };

  const addOption = () => {
    const _question = question as CheckboxQuestion;
    if (!_question.answerOptions) {
      _question.answerOptions = [];
    }

    const lastQuestionOption = _question.answerOptions[_question.answerOptions.length - 1];
    _question.answerOptions.push({ value: '', id: lastQuestionOption?.id + 1 || 0 });

    setError('');
    setQuestion({ ..._question });
  };

  const handleOptionChange = (event: any, index: number) => {
    const value = event.target.value;
    const _question = question as CheckboxQuestion;

    const answerOption = _question.answerOptions[index];
    if (!answerOption) {
      return;
    }

    answerOption.value = value;

    setQuestion({ ..._question });
  };

  const removeOption = (answerOptionId: number) => {
    const _question = question as CheckboxQuestion;
    if (!_question.answerOptions) {
      return;
    }

    _question.answerOptions = _question.answerOptions.filter((answerOption) => answerOption.id !== answerOptionId);
    setQuestion({ ..._question });
  };

  const sendQuestionToParent = (event: any) => {
    event.preventDefault();
    const _question = question as CheckboxQuestion;

    if (_question.type !== QuestionType.TEXT && !_question.answerOptions?.length) {
      setError('Please add at least one option.');
      return;
    }

    setError('');
    addQuestion({ ...question });

    emptyQuestion.id = question.id + 1;
    emptyQuestion.type = question.type;

    setQuestion({ ...emptyQuestion });
  };

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
            <p className="text-lg">Question type:</p>
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
            <p className="text-lg">Question title:</p>
            <Input
              placeholder="Example: what is your current notice period?"
              name="title"
              onChange={handleChange}
              required={true}
              value={question.title || ''}
            />
          </div>
        </div>
        <div className="mt-3">
          <hr />
          <h1 className="my-4 text-xl">Question Settings</h1>
          <div className="mb-4">
            Required: <GSSwitch name="required" onChange={handleChange} />
          </div>
          {questionType === QuestionType.TEXT && (
            <TextQuestionFooter setQuestion={setQuestion} question={{ ...question } as TextQuestion} />
          )}
          <hr />
          {questionType !== QuestionType.TEXT && (
            <>
              <h1 className="my-4 text-xl"> Answer options</h1>
              {(question as CheckboxQuestion).answerOptions?.length ? (
                <>
                  {(question as CheckboxQuestion).answerOptions.map((answerOption, index) => {
                    return (
                      <div key={'surveyFooterAnswerOption' + answerOption.id + index} className="flex gap-2 my-2">
                        <div className="w-full">
                          <Input
                            name={'answerOptionId' + answerOption.id.toString()}
                            onChange={(event) => handleOptionChange(event, index)}
                            placeholder="Option text"
                            required={true}
                            defaultValue={answerOption.value}
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
                <p className="mt-2 text-red-400 text-md w-72">{error}</p>
              </div>
            </>
          )}
        </div>
        <div className="mt-4 ml-auto flex items-center justify-end w-[320px] gap-4">
          <Button type="submit" label="Save" />
          <Button variant="outlined" label="Cancel" onClick={cancelQuestion} />
        </div>
      </form>
    </section>
  );
};

type TextQuestionProps = {
  setQuestion: any;
  question: TextQuestion;
};

const TextQuestionFooter = ({ setQuestion, question }: TextQuestionProps) => {
  const handleChange = (event: any) => {
    const value = event.target.value;

    console.log(question);
    if (!question.settings) {
      question.settings = {};
    }

    question.settings.maxLength = value;

    setQuestion({ ...question });
  };

  return (
    <div className="flex items-center gap-4 justify-items-center">
      <div>Max length: </div>
      <div>
        <Input
          type="number"
          maxNumericValue={1000}
          name="maxLength"
          onChange={handleChange}
          placeholder="unlimited"
          value={question.settings?.maxLength || ''}
        />
      </div>
    </div>
  );
};
