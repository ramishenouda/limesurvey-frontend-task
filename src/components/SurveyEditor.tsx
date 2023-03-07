import { useEffect, useState } from 'react';
import { QuestionGroup } from '../shared/interfaces/Question/QuestionGroup.interface';
import { Survey } from '../shared/interfaces/Survey/Survey.interface';
import { SurveyFooter } from './SurveyFooter';
import { SurveyHeader } from './SurveyHeader';
import { SurveyQuestion } from './SurveyQuestion';

export const SurveyEditor = (_survey: Survey) => {
  const [questionGroup, setQuestionGroup] = useState<QuestionGroup>();
  const [survey, setSurvey] = useState<Survey>(_survey);

  useEffect(() => {
    setQuestionGroup(survey.questionGroups![0] ?? null);
  }, [survey]);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log({ name }, { value });
    setSurvey({ ...survey, [name]: value });
  };

  return (
    <div className="container p-2 mx-auto border-solid">
      <SurveyHeader onChange={handleChange} surveyTitle={survey.title} />
      <div className="flex gap-4">
        <div className="text-lg text-center border min-w-[300px]">
          <h1 className="min-h-[60px] text-2xl flex justify-center items-center">Question Groups</h1>
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
            questionGroup.questions.map((question) => {
              return (
                <>
                  <h1 className="mb-4 text-3xl">{questionGroup.title}</h1>
                  <SurveyQuestion key={question.id + question.settings.title} {...question} />
                </>
              );
            })
          ) : (
            <></>
          )}
          <SurveyFooter />
        </div>
      </div>
    </div>
  );
};
