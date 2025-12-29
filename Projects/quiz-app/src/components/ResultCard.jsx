import React from 'react'
import QuizJSON from '../api/quizJSON.json'



const ResultCard = ({ answers, setAnswers }) => {
  const safeAnswers = Array.isArray(answers) ? answers : [];

  const totalQuestions = QuizJSON.length;
  const attemptsQuestions = safeAnswers.length;

  const totalCorrect = answers.length > 0 ? answers.filter(current => {
    const quiz = QuizJSON.find(q => q.id === current.id);
    return quiz?.correct_option === quiz?.options[current.answers];
  }) : [];

  const totalWrong = answers.length > 0 ? answers.filter(current => {
    const quiz = QuizJSON.find(q => q.id === current.id);
    return quiz?.correct_option !== quiz?.options[current.answers];
  }) : [];


  return (
    <div className="card p-5 mt-5 bg-light">
      {/* {JSON.stringify(safeAnswers)} */}
      <div className="text-center">
        <p className='text-success'>
          Thank you for participating in the quiz. Your responses have been recorded.
        </p>
        <h1 className="fw-bold">
          Congratulation You Got <br />
          <span className='text-success'>{totalCorrect.length}</span> /
          <span className='text-secondary'>{totalQuestions}</span> 🎉
        </h1>

        <div className="row">
          <div className="col-2 mx-auto">
            <p className='text-danger'>
              Wrong Answers: <br /> {totalWrong.length}
            </p>
          </div>
          <div className="col-2 mx-auto">
            <p className='text-success'>
              Correct Answers: <br /> {totalCorrect.length}
            </p>
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          className='btn border-primary text-primary'
        >
          Re Attempt
        </button>
      </div>
    </div>
  );
};


export default ResultCard