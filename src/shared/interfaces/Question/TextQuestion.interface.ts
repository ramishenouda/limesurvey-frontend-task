import { Question, QuestionAnswer, QuestionSettings, QuestoinType } from './Question.interface';

export interface TextQuestion extends Question {
  answer: TextQuestionAnswer;
  settings: TextQuestionSettings;
  type: QuestoinType.TEXT;
}

interface TextQuestionAnswer extends QuestionAnswer {
  value: string;
}

interface TextQuestionSettings extends QuestionSettings {
  minLength?: number;
  maxLength?: number;
}
