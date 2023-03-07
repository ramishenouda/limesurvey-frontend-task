import { Question, QuestionAnswer, QuestionSettings } from './Question.interface';

export interface RadioQuestion extends Question {
  answer: RadioQuestionAnswer;
  settings: RadioQuestionSettings;
}

interface RadioQuestionAnswer extends QuestionAnswer {
  value: string;
}

interface RadioQuestionSettings extends QuestionSettings {
  options: Array<{
    value: string;
    id: number;
  }>;
}
