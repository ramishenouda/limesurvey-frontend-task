import { Survey } from '../shared/interfaces/Survey/Survey.interface';
import { SurveyHeader } from './SurveyHeader';

export const SurveyEditor = (survey: Survey) => {
  return (
    <div>
      <SurveyHeader surveyTitle={survey.title} />
      {survey.questionGroups?.map((questionGroup) => {
        return (
          <>
            <h3>{questionGroup.title}</h3>
            {questionGroup.questions.map((question) => {
              return <>{question.settings.label}</>;
            })}
          </>
        );
      })}
    </div>
  );
};
