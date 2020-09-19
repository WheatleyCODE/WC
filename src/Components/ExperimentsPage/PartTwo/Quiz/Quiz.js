import React from 'react'
import ActiveQuiz from './../ActiveQuiz/ActiveQuiz'
import s from './Quiz.module.scss'

class Quiz extends React.Component {

    state = {
        activeQU : 1,
        quizes: [
            {
                idQuest: 1,
                answers: ['40р', '999р', '5000р', '9999р'],
                question: 'Сколько стоит доширак?Сколько стоит доширак?Сколько стоит доширак?Сколько стоит доширак?Сколько стоит доширак?',
                trueAnsver: 0
            },
            {
                idQuest: 2,
                answers: ['Умножить на 10', 'Умножить на 0', 'Умножить на 7', 'Привет'],
                question: 'Как считать возраст котов?',
                trueAnsver: 2
            }
        ],
    }
    render() {
        return(
            <div className={s.quizMain}>
                <h1>Вопрос за 300</h1>
                <div>
                    <span className={s.counter}>{this.state.activeQU} из 12</span>
                    <ActiveQuiz question={this.state.quizes}/>
                </div>
            </div>
        )
    }
}
export default Quiz