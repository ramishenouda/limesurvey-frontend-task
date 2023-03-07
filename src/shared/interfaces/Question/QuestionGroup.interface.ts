import { Question } from './Question.interface';

export interface QuestionGroup {
  id: number;
  title: string;
  questions: Array<Question>;
}
