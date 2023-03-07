import { Question, QuestionAnswer, QuestionSettings } from './Question.interface';

export interface CheckboxQuestion extends Question {
  answer: Array<CheckboxQuestionAnswer>;
  settings: CheckboxQuestionSettings;
}

interface CheckboxQuestionAnswer extends QuestionAnswer {
  value: string;
}

interface CheckboxQuestionSettings extends QuestionSettings {
  options: Array<{
    value: string;
    id: number;
  }>;
}
