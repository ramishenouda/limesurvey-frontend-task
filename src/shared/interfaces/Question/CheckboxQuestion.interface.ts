import { Question, QuestionAnswer } from './Question.interface';

export interface CheckboxQuestion extends Question {
  answer: Array<QuestionAnswer>;
  answerOptions: Array<{
    value: string;
    id: number;
  }>;
}
