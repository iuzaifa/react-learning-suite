import React from 'react'

const WelcomeCard = ({showScreen, setShowScreen }) => {
    return (
        <>
            <div className='card p-5 mt-5 bg-light text-center'>
                <h1>📜 Welcome to the General Knowledge Quiz 📜</h1>
                <p>Test your brain with 20 exciting questions covering history, science, geography, and more. Challenge yourself and discover new facts.</p>

                <div className='d-flex.align-items-center.justify-content-center mt-3'>
                    <button className='btn btn-success p-2 px-5 border' onClick={() => setShowScreen('quiz')}>Start Quiz</button>
                </div>
            </div>



            

        </>

    )
}

export default WelcomeCard