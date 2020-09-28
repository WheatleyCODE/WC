import React from 'react'
import ActiveQuiz from './../ActiveQuiz/ActiveQuiz.jsx'
import s from './Quiz.module.scss'

class Quiz extends React.Component {

  state = {
    calcTrueAnsver: 0,
    activeQU: 0,
    quizes: this.props.quiz
  }

  resultClick = (index) => {
    console.log('dsds', index)
    let NewQuiz = this.state.quizes
    NewQuiz[index].click = !this.state.quizes[index].click
    this.setState({
      quizes: NewQuiz
    })
  }

  ansverClick = (indexAnsver) => {
    let currentQuest = this.state.activeQU
    if (indexAnsver === this.state.quizes[currentQuest].trueAnsver) {
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
    console.log(this.state.quizes)
    let activeQuest = this.state.activeQU < this.state.quizes.length ? this.state.activeQU + 1 : this.state.activeQU
    return (
      <div className={s.quizMain}>
        <h2 className={s.h2}>Викторина Wheatley</h2>
        <div className={s.width}>
          <span className={s.counter}>{activeQuest} из {this.state.quizes.length}</span>
          <ActiveQuiz
            resultClick={this.resultClick}
            calcTrueAnsver={this.state.calcTrueAnsver}
            ansverClick={this.ansverClick}
            activeQU={this.state.activeQU}
            question={this.state.quizes}/>
        </div>
      </div>
    )
  }
}
export default Quiz
