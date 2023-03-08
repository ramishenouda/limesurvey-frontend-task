import { useEffect } from 'react';
import { CheckboxQuestion } from '../shared/interfaces/Question/CheckboxQuestion.interface';
import { Question, QuestionType } from '../shared/interfaces/Question/Question.interface';
import { TextQuestion } from '../shared/interfaces/Question/TextQuestion.interface';
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
      <GSTextarea
        placeholder="Write your answer here."
        name={`text-question-answer${question.id}${question.title}`}
      ></GSTextarea>
    </div>
  );
};

const RenderRadioAndCheckboxQuestion = ({ question, index }: Props<CheckboxQuestion>) => {
  return (
    <div className="p-2 rounded-md">
      <p className="mb-2 text-xl">
        <span className="text-base text-slate-800">{index}.</span> {question.title}
      </p>
      <ul>
        {question.answerOptions.map((answerOption) => {
          return <li>{answerOption.value}</li>;
        })}
      </ul>
    </div>
  );
};
