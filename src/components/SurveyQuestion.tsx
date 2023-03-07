import { useEffect } from 'react';
import { Question, QuestionType } from '../shared/interfaces/Question/Question.interface';
import { TextQuestion } from '../shared/interfaces/Question/TextQuestion.interface';

export const SurveyQuestion = (question: Question) => {
  useEffect(() => {}, []);

  return <div>{question.type === QuestionType.TEXT && <RenderTextQuestion {...(question as TextQuestion)} />}</div>;
};

const RenderTextQuestion = (question: TextQuestion) => {
  return <>{question.title}</>;
};
