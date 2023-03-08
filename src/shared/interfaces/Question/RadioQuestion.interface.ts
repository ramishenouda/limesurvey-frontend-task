import { Question, QuestionAnswer, QuestionSettings } from './Question.interface';

export interface RadioQuestion extends Question {
  answer: RadioQuestionAnswer;
  answerOptions: Array<{
    value: string;
    id: number;
  }>;
  settings?: QuestionSettings;
}

interface RadioQuestionAnswer extends QuestionAnswer {
  value: string;
}
