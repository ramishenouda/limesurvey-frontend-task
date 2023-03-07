export interface Question {
  id: number;
  answer?: QuestionAnswer | Array<QuestionAnswer>;
  settings: QuestionSettings;
  type: QuestoinType;
}

export interface QuestionAnswer {
  id: number;
}

export interface QuestionSettings {
  id: number;
  title: string;
  required?: boolean;
  isVisible?: {
    questionId: number;
    answerId: number;
  };
}

export enum QuestoinType {
  TEXT = 'Text',
  RADIO = 'Radio',
  CHECKBOX = 'Checkbox',
}
