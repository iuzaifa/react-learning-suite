import React, { useState } from 'react'
import './App.css'
import WelcomeCard from './components/WelcomeCard'
import QuizComponent from './components/QuizComponent'
import ResultCard from './components/ResultCard'
import SocialLinks from './components/SocialLinks'

function App() {

  const [showScreen, setShowScreen] = useState('welcome');

  const [answers, setAnswers] = useState([]); 



  return (
    <>
      <div className="container py-5">
        <SocialLinks/>
        {showScreen === 'welcome' && (
          <WelcomeCard {...{ showScreen, setShowScreen }} />
        )}


        {
          showScreen === 'quiz' && <QuizComponent 
          showScreen={showScreen} setShowScreen={setShowScreen}
          answers={answers} setAnswers={setAnswers} />
        }


        {showScreen === 'result' && <ResultCard answers={answers} setAnswers={setAnswers} />}


      </div>
    </>
  )
}

export default App
