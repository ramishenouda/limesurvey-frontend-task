import { useEffect, useState } from 'react';
import { QuestionGroup } from '../shared/interfaces/Question/QuestionGroup.interface';
import { Survey } from '../shared/interfaces/Survey/Survey.interface';
import { SurveyFooter } from './SurveyFooter';
import { SurveyHeader } from './SurveyHeader';
import { SurveyQuestion } from './SurveyQuestion';

export const SurveyEditor = (survey: Survey) => {
  const [questionGroup, setQuestionGroup] = useState<QuestionGroup>();

  useEffect(() => {
    setQuestionGroup(survey.questionGroups![0] ?? null);
  }, [survey]);

  return (
    <div>
      <SurveyHeader surveyTitle={survey.title} />
      <div className="flex gap-4">
        <div>
          {survey.questionGroups?.map((questionGroup) => {
            return <div>{questionGroup.title}</div>;
          })}
        </div>
        <div className="flex-1">
          {questionGroup ? (
            questionGroup.questions.map((question) => {
              return <SurveyQuestion {...question} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <SurveyFooter />
    </div>
  );
};
