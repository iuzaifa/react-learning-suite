import React from 'react'
import QuizJSON from '../api/quizJSON.json'

const QuizComponent = ({ showScreen, setShowScreen, answers, setAnswers }) => {

    const [index, setIndex] = React.useState(0);
    const quizData = QuizJSON[index];

    const isExitsAnswers = answers.find((current, i) => current.id == quizData.id)


    const addAnswers = (id, answerValue) => {
        setAnswers(prevAnswers => {
            const existing = prevAnswers.find(item => item.id === id);
            if (existing) {
                return prevAnswers.map(item =>
                    item.id === id ? { ...item, answers: answerValue } : item
                );
            }
            return [...prevAnswers, { id, answers: answerValue }];
        });
    };

    // const addAnswers = (id, answerValue) => {
    //     const existing = answers.find((item) => item.id === id);

    //     if (existing) {
    //         const updated = answers.map((item) =>
    //             item.id === id ? { ...item, answers: answerValue } : item
    //         );
    //         setAnswers(updated);
    //     } else {
    //         setAnswers([...answers, { id, answers: answerValue }]);
    //     }
    // };



    return (
        <>
            <div className="card p-5 mt-5 bg-light">
                {/* {JSON.stringify(answers)} */}
                <h2>{quizData.id}.&nbsp;  {quizData.question}</h2>
                {/* {
                    quizData.options.map((current, i) => {
                        return <label key={i} htmlFor={current}>
                            <input checked={isExitsAnswers && isExitsAnswers.answers === i} onChange={() => addAnswers(quizData.id, i)} type="radio" name={`question-${quizData.id}`} id={current} value={current} /> {current}
                        </label>
                    })
                } */}

                {
                    quizData.options.map((current, i) => {
                        const radioName = `question-${quizData.id}`; // Unique name for each question
                        return (
                            <label key={i} htmlFor={`${radioName}-${i}`} className="d-block">
                                <input
                                    checked={isExitsAnswers?.answers === i}
                                    onChange={() => addAnswers(quizData.id, i)}
                                    type="radio"
                                    name={radioName} // unique per question
                                    id={`${radioName}-${i}`}
                                    value={current}
                                /> {current}
                            </label>
                        );
                    })

                }

                <div className='d-flex  justify-content-between my-5'>
                    <button onClick={() => setIndex(index - 1)} disabled={index == 0} className='btn text-danger border-danger py-1 px-3'>Previous</button>

                    {
                        QuizJSON.length - 1 === index &&
                        <button onClick={() => (setShowScreen('result'))} className='btn border-success text-success py-1 px-3'>Submit Answers</button>


                    }

                    <button onClick={() => setIndex(index + 1)} disabled={QuizJSON.length - 1 === index} className='btn text-primary border-primary py-1 px-3'>Next</button>



                </div>



            </div>

        </>
    )
}

export default QuizComponent