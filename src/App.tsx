import './App.css';
import { useEffect } from 'react';
import { SurveyEditor } from './components/SurveyEditor';
import { Survey } from './shared/interfaces/Survey/Survey.interface';
import { TextQuestion } from './shared/interfaces/Question/TextQuestion.interface';
import { QuestoinType } from './shared/interfaces/Question/Question.interface';

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
            settings: { id: 4, title: 'What is your full name?' },
            type: QuestoinType.TEXT,
            id: 1,
          } as TextQuestion,
        ],
      },
      {
        id: 3,
        title: 'Experience Info',
        questions: [
          {
            settings: { id: 4, title: 'sad?' },
            type: QuestoinType.TEXT,
            id: 2,
          } as TextQuestion,
        ],
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <div className="p-4">
      <SurveyEditor {...survey} />
    </div>
  );
}

export default App;
