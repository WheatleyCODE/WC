import React from 'react'
import ActiveQuiz from './../ActiveQuiz/ActiveQuiz'
import s from './Quiz.module.scss'

class Quiz extends React.Component {

    state = {
        calcTrueAnsver: 0,
        activeQU : 0,
        quizes: [
            {
                idQuest: 1,
                answers: ['Голубое', 'Красное', 'Зелёное', 'Розовое'],
                question: 'Какого цвета небо?',
                trueAnsver: 0,
                right: false,
            },
            {
                idQuest: 2,
                answers: ['Умножить на 10', 'Умножить на 0', 'Умножить на 7', 'Привет'],
                question: 'Как считать возраст котов?',
                trueAnsver: 2,
                right: false,
            },
            {
                idQuest: 3,
                answers: ['путэн', 'Путин', 'путен', 'патин'],
                question: 'Лучший президент?',
                trueAnsver: 1,
                right: false,
            },
        ],
    }

    ansverClick = (indexAnsver) => {

       let currentQuest = this.state.activeQU

        if(indexAnsver === this.state.quizes[currentQuest].trueAnsver) {
            console.log('Правильно')
            let NewActiveQU = this.state.activeQU + 1
            let NewCalcTrueAnsver = this.state.calcTrueAnsver + 1
            let NewQuizes = this.state.quizes
            NewQuizes[currentQuest].right = true
            this.setState({
                activeQU: NewActiveQU,
                calcTrueAnsver: NewCalcTrueAnsver,
                quizes: NewQuizes
            })
        } else {
            console.log('Неправильно')
            let NewActiveQU = this.state.activeQU + 1
            this.setState({
                activeQU: NewActiveQU
            })
        }
    }

    render() {
        let activeQuest = this.state.activeQU < this.state.quizes.length ? this.state.activeQU + 1 : this.state.activeQU
        return(
            <div className={s.quizMain}>
                <h2 className={s.h2}>Ответьте на вопросы</h2>
                <div className={s.width}>
                    <span className={s.counter}>{activeQuest} из {this.state.quizes.length}</span>
                    <ActiveQuiz calcTrueAnsver={this.state.calcTrueAnsver} ansverClick={this.ansverClick} activeQU={this.state.activeQU} question={this.state.quizes}/>
                </div>
            </div>
        )
    }
}
export default Quiz