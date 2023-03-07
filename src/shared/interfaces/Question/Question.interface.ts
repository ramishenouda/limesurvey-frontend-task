export interface Question {
  id: number;
  answer?: QuestionAnswer;
  settings: QuestionSettings;
}

export interface QuestionAnswer {
  id: number;
}

export interface QuestionSettings {
  id: number;
  label: string;
  required?: boolean;
  isVisible?: {
    questionId: number;
    answerId: number;
  };
}
