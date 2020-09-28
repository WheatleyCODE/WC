import React from 'react'
import s from './ActiveQuiz.module.scss'
import AnswersList from './AnswerList/AnswerList.jsx'

const ActiveQuiz = ({ resultClick, calcTrueAnsver, ansverClick, activeQU, question}) => {
  return (
    <div className={s.activeQuizMain}>
      <AnswersList
        resultClick={resultClick}
        calcTrueAnsver={calcTrueAnsver}
        ansverClick={ansverClick}
        activeQU={activeQU}
        question={question}
      />
    </div>
  )
}

export default ActiveQuiz
