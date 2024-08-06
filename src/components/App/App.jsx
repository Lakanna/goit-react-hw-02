// import { useState, useEffect } from 'react'

import { useState } from 'react'
import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'



function App() {
  const [grades, setGrade]= useState({
	good: 0,
	neutral: 0,
	bad: 0
  })
    const updateFeedback = feedbackType => {
        // Тут використовуй сеттер, щоб оновити стан
        setGrade({...grades, feedbackType: feedbackType+1})
}
 
    return (
        <>
            <Description />
            <Options listStats={grades} onClick={updateFeedback} />
            <Feedback listStats={grades}/>
        </>
  )
}


export default App
