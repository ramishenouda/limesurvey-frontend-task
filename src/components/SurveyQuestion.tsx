import { useEffect } from 'react';
import { CheckboxQuestion } from '../shared/interfaces/Question/CheckboxQuestion.interface';
import { Question, QuestionType } from '../shared/interfaces/Question/Question.interface';
import { TextQuestion } from '../shared/interfaces/Question/TextQuestion.interface';
import { GSCheckbox } from '../shared/UiComponents/GSCheckbox';
import { GSRadioGroup } from '../shared/UiComponents/GSRadioGroup';
import { GSTextarea } from '../shared/UiComponents/GSTextarea';

type Props<T> = {
  question: T;
  index: number;
};

export const SurveyQuestion = ({ question, index }: Props<Question>) => {
  useEffect(() => {}, []);

  return (
    <div>
      {question.type === QuestionType.TEXT && <RenderTextQuestion question={question as TextQuestion} index={index} />}
      {question.type !== QuestionType.TEXT && (
        <RenderRadioAndCheckboxQuestion question={question as CheckboxQuestion} index={index} />
      )}
    </div>
  );
};

const RenderTextQuestion = ({ question, index }: Props<TextQuestion>) => {
  return (
    <div className="p-2 rounded-md">
      <p className="mb-2 text-xl">
        <span className="text-base text-slate-800">{index}.</span> {question.title}
      </p>
      <GSTextarea placeholder="Write your answer here." name={`text-question-answer-${question.id}`}></GSTextarea>
    </div>
  );
};

const RenderRadioAndCheckboxQuestion = ({ question, index }: Props<CheckboxQuestion>) => {
  const answerOptions = question.answerOptions.map((answerOption) => {
    return {
      value: answerOption.value,
      label: answerOption.value,
    };
  });

  return (
    <div className="p-2 rounded-md">
      <p className="mb-2 text-xl">
        <span className="text-base text-slate-800">{index}.</span> {question.title}
      </p>
      <div className="pl-5 text-lg">
        {question.type === QuestionType.CHECKBOX && (
          <GSCheckbox options={answerOptions} name={`radio-checkbox-answer-${question.id}`} />
        )}
        {question.type === QuestionType.RADIO && (
          <GSRadioGroup options={answerOptions} name={`radio-checkbox-answer-${question.id}`} />
        )}
      </div>
    </div>
  );
};
