import './App.css';
import { useEffect, useState } from 'react';
import { SurveyEditor } from './components/SurveyEditor';
import { Survey } from './shared/interfaces/Survey/Survey.interface';
import { getAllSurveys } from './services/survey.service';

function App() {
  const [survey, setSurvey] = useState<Survey>();

  useEffect(() => {
    getAllSurveys()
      .then((response) => response.json())
      .then((data) => {
        const firstSurvey = data[0];
        setSurvey(firstSurvey);
      });
  }, []);

  return (
    <div className="p-4">
      {survey ? (
        <SurveyEditor {...survey} />
      ) : (
        <div className="flex items-center justify-center h-[90vh] text-4xl">Loading surveys...</div>
      )}
    </div>
  );
}

export default App;
