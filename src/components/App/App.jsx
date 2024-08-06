// import { useState, useEffect } from 'react'

import { useState } from 'react'
import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'



function App() {
  const [grades, setGrade]= useState({
	good: 0,
	neutral: 0,
	bad: 0
  })
    const updateFeedback = (feedbackType) => {
        // Тут використовуй сеттер, щоб оновити стан
        setGrade({ ...grades,  [feedbackType]: grades[feedbackType]+1})
    }
    
    const resetState = () => {
    setGrade({good: 0, neutral: 0,	bad: 0})
}

    const totalFeedback = grades.good + grades.bad + grades.neutral;
    const positiveFeedback = Math.round(((grades.good + grades.neutral)/ totalFeedback) * 100)

   
 
    return (
        <>
            <Description />
            <Options listStats={grades} handleClick={updateFeedback} totalFeedback={totalFeedback} resetState={resetState} />
            { totalFeedback === 0  && <Notification />}
            { totalFeedback !== 0 && <Feedback listStats={grades} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}  />}
        </>
  )
}


export default App
