import { Question, QuestionAnswer, QuestionSettings, QuestionType } from './Question.interface';

export interface TextQuestion extends Question {
  answer: TextQuestionAnswer;
  settings?: TextQuestionSettings;
  type: QuestionType.TEXT;
}

interface TextQuestionAnswer extends QuestionAnswer {
  value: string;
}

interface TextQuestionSettings extends QuestionSettings {
  maxLength?: number;
}
