import { useEffect, useState } from 'react';
import { getAllSurveys } from '../services/survey.service';
import { Survey } from '../shared/interfaces/Survey/Survey.interface';
import { SurveyEditor } from './SurveyEditor';

export const SurveyDashboard = () => {
  const [survey, setSurvey] = useState<Survey>();
  const [userSurveys, setUserSurveys] = useState<Array<Survey>>();

  useEffect(() => {
    getAllSurveys()
      .then((response) => response.json())
      .then((surveys) => {
        setUserSurveys(surveys);
      });
  }, []);

  return (
    <>
      {!userSurveys && <p className="mt-4 text-4xl text-center">Loading...</p>}
      {userSurveys && !survey && (
        <div className="flex flex-wrap items-center justify-center gap-8 p-4 mx-auto border w-fit">
          {userSurveys.map((survey) => {
            return (
              <div
                onClick={() => setSurvey(survey)}
                className="flex items-center justify-center h-40 text-2xl transition-all duration-500 bg-blue-200 border rounded-md cursor-pointer hover:bg-blue-300 w-80 sm:text-4xl sm:w-96"
                key={survey.title + 'survey'}
              >
                {survey.title}
              </div>
            );
          })}
        </div>
      )}
      <div>{survey && <SurveyEditor survey={survey} setSurvey={setSurvey} />}</div>
    </>
  );
};
