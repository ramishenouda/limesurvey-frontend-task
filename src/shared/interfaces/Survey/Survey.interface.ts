import { QuestionGroup } from '../Question/QuestionGroup.interface';

export interface Survey {
  id?: number;
  title: string;
  questionGroups: Array<QuestionGroup>;
}
