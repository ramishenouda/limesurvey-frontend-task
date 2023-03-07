import { Question, QuestionAnswer, QuestionSettings } from './Question.interface';

export interface TextQuestion extends Question {
  answer: TextQuestionAnswer;
  settings: TextQuestionSettings;
}

interface TextQuestionAnswer extends QuestionAnswer {
  value: string;
}

interface TextQuestionSettings extends QuestionSettings {
  minLength?: number;
  maxLength?: number;
}
