import './App.css';
import { useEffect, useState } from 'react';
import { SurveyEditor } from './components/SurveyEditor';
import { Survey } from './shared/interfaces/Survey/Survey.interface';
import { getAllSurveys } from './services/survey.service';
import { SurveyDashboard } from './components/SurveyDashboard';

function App() {
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
    <div className="mb-2">
      <div className="w-full p-4 text-4xl bg-blue-400 navbar">
        <span className="p-2 bg-blue-300 rounded-md">GeniusSurvey</span>
      </div>
      {!userSurveys && <p className="mt-4 text-4xl text-center">Loading...</p>}
      <div className="p-4">
        {userSurveys && !survey && (
          <SurveyDashboard setUserSurveys={setUserSurveys} setSurvey={setSurvey} surveys={userSurveys} />
        )}
      </div>
      <div>{survey && <SurveyEditor survey={{ ...survey }} setSurvey={setSurvey} />}</div>
    </div>
  );
}

export default App;
