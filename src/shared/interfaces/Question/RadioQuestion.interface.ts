import { Question } from './Question.interface';

export interface RadioQuestion extends Question {
  answerOptions: Array<{
    value: string;
    id: number;
  }>;
}
