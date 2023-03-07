import './App.css';
import { useEffect } from 'react';
import { SurveyEditor } from './components/SurveyEditor';
import { Survey } from './shared/interfaces/Survey/Survey.interface';
import { TextQuestion } from './shared/interfaces/Question/TextQuestion.interface';

function App() {
  const survey: Survey = {
    id: 1,
    title: 'Hey!',
    description: 'How are you doing?',
    questionGroups: [
      {
        id: 2,
        title: 'Personal info',
        questions: [
          {
            settings: { id: 4, label: 'What is your full name?' },
          } as TextQuestion,
        ],
      },
    ],
  };

  useEffect(() => {}, []);

  return <SurveyEditor {...survey} />;
}

export default App;
