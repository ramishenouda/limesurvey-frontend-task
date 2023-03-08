import { useEffect, useState } from 'react';
import { Question } from '../shared/interfaces/Question/Question.interface';
import { QuestionGroup } from '../shared/interfaces/Question/QuestionGroup.interface';
import { Survey } from '../shared/interfaces/Survey/Survey.interface';
import { GSButton } from '../shared/UiComponents/GSButton';
import { SurveyFooter } from './SurveyFooter';
import { SurveyHeader } from './SurveyHeader';
import { SurveyQuestion } from './SurveyQuestion';

export const SurveyEditor = (_survey: Survey) => {
  const [questionGroup, setQuestionGroup] = useState<QuestionGroup>({ questions: [] } as any);
  const [survey, setSurvey] = useState<Survey>(_survey);
  const [addingQuestion, setAddingQuestion] = useState(false);

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

  const addQuestion = (question: Question) => {
    if (!questionGroup?.questions) {
      questionGroup.questions = [];
    }

    question.id = questionGroup.questions.length;
    questionGroup.questions.push(question);

    setQuestionGroup({ ...questionGroup });
  };

  return (
    <div className="container p-2 mx-auto border-solid">
      <SurveyHeader onChange={handleChange} surveyTitle={survey.title} />
      <div className="flex gap-4">
        <div className="text-lg text-center border min-w-[300px]">
          <h1 className="min-h-[64px] text-2xl flex justify-center items-center">Question Groups</h1>
          <hr />
          {survey.questionGroups?.map((_questionGroup) => {
            return (
              <div
                key={_questionGroup.id + _questionGroup.title}
                onClick={() => setQuestionGroup(_questionGroup)}
                className={`${
                  _questionGroup.id === questionGroup?.id ? 'bg-slate-400 ' : 'bg-slate-200'
                } min-h-[50px] flex justify-center items-center cursor-pointer`}
              >
                {_questionGroup.title}
              </div>
            );
          })}
        </div>
        <div className="flex-1 p-4 border">
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
            <div className="w-56 mt-10 h-14">
              <GSButton
                size="large"
                variant="outlined"
                onClick={() => setAddingQuestion(true)}
                label={`Add ${questionGroup.questions.length ? 'another' : ''} question`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
