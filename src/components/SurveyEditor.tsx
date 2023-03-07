import { Survey } from '../shared/interfaces/Survey/Survey.interface';

export const SurveyEditor = (survey: Survey) => {
  return (
    <div>
      <h1>{survey?.title}</h1>
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
