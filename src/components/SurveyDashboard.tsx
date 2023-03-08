import { Survey } from '../shared/interfaces/Survey/Survey.interface';

type Props = {
  surveys: Array<Survey>;
  setSurvey: React.Dispatch<React.SetStateAction<Survey | undefined>>;
  setUserSurveys: React.Dispatch<React.SetStateAction<Survey[] | undefined>>;
};

export const SurveyDashboard = ({ surveys, setUserSurveys, setSurvey }: Props) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8 p-4 mx-auto border w-fit">
        {surveys.map((survey) => {
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
    </>
  );
};
