import React from 'react'
import s from './ActiveQuiz.module.scss'
import AnswersList from './AnswerList/AnswerList'

const ActiveQuiz = props => {
    return(
        <div className={s.activeQuizMain}>
            <AnswersList resultClick={props.resultClick} calcTrueAnsver={props.calcTrueAnsver} ansverClick={props.ansverClick} activeQU={props.activeQU} question={props.question} />
        </div>
    )
} 

export default ActiveQuiz