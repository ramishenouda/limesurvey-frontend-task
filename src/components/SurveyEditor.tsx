import { useEffect, useState } from 'react';
import { Question } from '../shared/interfaces/Question/Question.interface';
import { QuestionGroup } from '../shared/interfaces/Question/QuestionGroup.interface';
import { Survey } from '../shared/interfaces/Survey/Survey.interface';
import { GSButton } from '../shared/UiComponents/GSButton';
import { GSInput } from '../shared/UiComponents/GSInput';
import { SurveyFooter } from './SurveyFooter';
import { SurveyHeader } from './SurveyHeader';
import { SurveyQuestion } from './SurveyQuestion';

type Props = {
  survey: Survey;
  setSurvey: any;
};

export const SurveyEditor = ({ setSurvey, survey }: Props) => {
  const [questionGroup, setQuestionGroup] = useState<QuestionGroup>({ questions: [] } as any);
  const [newQuestoinGroupTitle, setNewQuestionGroupTitle] = useState('');
  const [addingQuestion, setAddingQuestion] = useState(false);
  const [showGroups, setShowGroups] = useState(false);

  useEffect(() => {
    if (survey.questionGroups![0]) {
      setQuestionGroup(survey.questionGroups![0]);
    }
  }, [survey]);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setSurvey({ ...survey, [name]: value });
  };

  const addQuestionGroup = (event: any) => {
    event.preventDefault();

    if (!survey.questionGroups) {
      survey.questionGroups = [];
    }

    const lastQuestionGroupId = survey.questionGroups[survey.questionGroups?.length - 1].id || 0;

    const newQuestionGroup: QuestionGroup = {
      questions: [],
      title: newQuestoinGroupTitle,
      id: lastQuestionGroupId + 1,
    };

    survey.questionGroups.push(newQuestionGroup);

    setSurvey({ ...survey });
  };

  const addQuestion = (question: Question) => {
    if (!questionGroup?.questions) {
      questionGroup.questions = [];
    }

    question.id = questionGroup.questions.length;
    questionGroup.questions.push(question);

    setQuestionGroup({ ...questionGroup });
  };

  return (
    <>
      <div className="container p-1 mx-auto border-solid rounded-md sm:p-4">
        <div className="container mb-2 border-solid rounded-md h-14 w-36">
          <GSButton onClick={() => setSurvey(null)} label="Go Back" />
        </div>
        <div className="p-2 bg-blue-300">
          <SurveyHeader onChange={handleChange} surveyTitle={survey.title} />
          <div className="block mb-2 h-14 sm:hidden">
            <GSButton onClick={() => setShowGroups(!showGroups)} label="Toggle Groups" />
          </div>
          <div className="flex gap-4">
            <div
              className={`text-lg text-center border w-full sm:w-[300px] p-2 bg-blue-100 rounded-md ${
                showGroups ? 'block sm:block' : 'hidden sm:block'
              }`}
            >
              <h1 className="min-h-[64px] text-2xl flex justify-center items-center">Question Groups</h1>
              {survey.questionGroups?.map((_questionGroup) => {
                return (
                  <div
                    key={_questionGroup.id + _questionGroup.title}
                    onClick={() => setQuestionGroup(_questionGroup)}
                    className={`${
                      _questionGroup.id === questionGroup?.id ? 'bg-blue-300 ' : 'bg-blue-200'
                    } min-h-[50px] flex justify-center items-center cursor-pointer border`}
                  >
                    {_questionGroup.title}
                  </div>
                );
              })}
              <div className="h-12 mt-4 mb-2">
                <form onSubmit={addQuestionGroup} className="flex gap-1">
                  <GSInput
                    onChange={(event) => setNewQuestionGroupTitle(event.target.value)}
                    name="group-name"
                    required={true}
                    placeholder="Question group title"
                  />
                  <div className="h-14">
                    <GSButton type="submit" label="+" />
                  </div>
                </form>
              </div>
            </div>
            <div
              className={`flex-1 p-4 border rounded-md bg-blue-100  ${
                !showGroups ? 'block sm:block' : 'hidden sm:block'
              }`}
            >
              {questionGroup ? (
                <>
                  <h1 className="mb-4 text-3xl">{questionGroup.title}</h1>
                  {questionGroup.questions.map((question, index) => {
                    return (
                      <div className="my-2" key={'surveyQuestion' + question.title + index}>
                        <SurveyQuestion question={question} index={index} />
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
              {addingQuestion ? (
                <SurveyFooter cancelQuestion={() => setAddingQuestion(false)} addQuestion={addQuestion} />
              ) : (
                <div className="w-64 mt-10 h-14">
                  <GSButton
                    size="large"
                    onClick={() => setAddingQuestion(true)}
                    label={`Add ${questionGroup.questions.length ? 'another' : ''} question`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
