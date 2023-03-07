export interface Question {
  id: number;
  title: string;
  answer?: QuestionAnswer | Array<QuestionAnswer>;
  settings: QuestionSettings;
  type: QuestionType;
}

export interface QuestionAnswer {
  id: number;
}

export interface QuestionSettings {
  id: number;
  required?: boolean;
}

export enum QuestionType {
  TEXT = 'Text',
  RADIO = 'Radio',
  CHECKBOX = 'Checkbox',
}
