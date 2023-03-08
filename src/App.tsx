import './App.css';
import { useEffect } from 'react';
import { SurveyEditor } from './components/SurveyEditor';
import { Survey } from './shared/interfaces/Survey/Survey.interface';
import { QuestionType } from './shared/interfaces/Question/Question.interface';
import { CheckboxQuestion } from './shared/interfaces/Question/CheckboxQuestion.interface';
import { RadioQuestion } from './shared/interfaces/Question/RadioQuestion.interface';

function App() {
  const survey: Survey = {
    id: 1,
    title: 'Hey!',
    description: 'How are you doing?',
    questionGroups: [
      {
        id: 1,
        title: 'Personal info',
        questions: [
          {
            id: 1,
            title: 'What is your full name',
            type: QuestionType.TEXT,
            settings: {
              required: true,
            },
          },
          {
            id: 2,
            title: 'What is your email address',
            type: QuestionType.TEXT,
            settings: {
              required: true,
            },
          },
          {
            id: 3,
            title: 'What is your country of residence',
            type: QuestionType.RADIO,
            settings: {
              required: true,
            },
            answerOptions: [
              { id: 1, value: 'Germany' },
              { id: 2, value: 'Egypt' },
              { id: 3, value: 'Other' },
            ],
          } as RadioQuestion,
          {
            id: 3,
            title: 'Can you speak English and German?',
            type: QuestionType.CHECKBOX,
            settings: {
              required: true,
            },
            answerOptions: [
              { id: 1, value: 'I can speak English.' },
              { id: 2, value: 'I can speak German.' },
            ],
          } as CheckboxQuestion,
        ],
      },
      {
        id: 2,
        title: 'Experience Info',
        questions: [
          {
            id: 1,
            title: 'Current or previous role title',
            type: QuestionType.TEXT,
            settings: {
              required: true,
            },
          },
          {
            id: 2,
            title: "Current or previous employer's name",
            type: QuestionType.TEXT,
            settings: {
              required: true,
            },
          },
          {
            id: 3,
            title: 'Do you know react?',
            type: QuestionType.RADIO,
            settings: {
              required: true,
            },
            answerOptions: [
              { id: 1, value: 'No' },
              { id: 2, value: 'Somehow' },
              { id: 3, value: 'Expert' },
            ],
          } as RadioQuestion,
          {
            id: 3,
            title: 'Can you relocate to germany?',
            type: QuestionType.CHECKBOX,
            settings: {
              required: true,
            },
            answerOptions: [
              { id: 1, value: "Yes I'm willing to relocate." },
              { id: 2, value: 'No, I want to work remotely.' },
            ],
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
