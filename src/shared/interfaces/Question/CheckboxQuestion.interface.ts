import { Question, QuestionAnswer, QuestionSettings } from './Question.interface';

export interface CheckboxQuestion extends Question {
  answer: Array<CheckboxQuestionAnswer>;
  answerOptions: Array<{
    value: string;
    id: number;
  }>;
  settings?: QuestionSettings;
}

interface CheckboxQuestionAnswer extends QuestionAnswer {
  value: string;
}
