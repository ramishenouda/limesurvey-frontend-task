import './App.css';
import { useEffect } from 'react';
import { SurveyEditor } from './components/SurveyEditor';
import { Survey } from './shared/interfaces/Survey/Survey.interface';
import { TextQuestion } from './shared/interfaces/Question/TextQuestion.interface';
import { QuestionType } from './shared/interfaces/Question/Question.interface';

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
            title: 'What is your full name?',
            settings: { id: 4 },
            type: QuestionType.TEXT,
            id: 1,
          } as TextQuestion,
        ],
      },
      {
        id: 3,
        title: 'Experience Info',
        questions: [
          {
            title: 'sad?',
            settings: { id: 4 },
            type: QuestionType.TEXT,
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
