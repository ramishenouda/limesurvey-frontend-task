import './App.css';
import { useEffect } from 'react';
import { SurveyEditor } from './components/SurveyEditor';
import { Survey } from './shared/interfaces/Survey/Survey.interface';
import { QuestionType } from './shared/interfaces/Question/Question.interface';
import { CheckboxQuestion } from './shared/interfaces/Question/CheckboxQuestion.interface';

function App() {
  const survey: Survey = {
    id: 1,
    title: 'Hey!',
    description: 'How are you doing?',
    questionGroups: [
      {
        id: 2,
        title: 'Personal info',
        questions: [],
      },
      {
        id: 3,
        title: 'Experience Info',
        questions: [
          {
            title: 'sad?',
            type: QuestionType.CHECKBOX,
            answerOptions: [
              {
                id: 1,
                value: 'omk 7lwa',
              },
            ],
            id: 2,
          } as CheckboxQuestion,
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
