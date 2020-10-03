import React from 'react'
import { fetchQuizesActionCreator, renderQuizActionCreator } from 'Redux/actions'
import { connect } from 'react-redux'
import s from './PartTwo.module.scss'
import Layout from './hoc/Layout/Layout'
import Quiz from './Quiz/Quiz'
import QuizCreator from './QuizCreator/QuizCreator'
import Loader from '../../UI/Loader/Loader'

class PartTwo extends React.Component {

  state = {
    quiz: '',
  }

  componentDidMount() {
    // Удодобно можно дестрактить только с хуками.
    this.props.fetchQuizes()
  }

  renderQuiz = (serverQuiz) => {
    this.setState({
      quiz: <Quiz quiz={serverQuiz} />,
    })
    this.props.renderQiuz()
  }

  render() {
    return (
      <div className={s.partTwoMain}>
        <Layout>
          {this.state.quiz}
          {this.props.loading ? <Loader/> : null}
          {
            this.props.fireBaseQuiz.map((elem, index) => {
              return (
                <button type="button" onClick={() => { this.renderQuiz(elem) }} className={s.serverQuiz} key={index}>
                  <h4>Начать тест №{index + 1} вопросов:</h4>
                </button>
              )
            })
          }
        </Layout>
        <QuizCreator rerenderQuiz={() => {
          this.fetchResponse()
        }}
        />
      </div>
    )
  }
}

function mapStateToPrpst(state) {
  return {
    fireBaseQuiz: state.experimentsQuizData.fireBaseQuiz,
    loading: state.experimentsQuizData.loading,
  }
}

function mapDispathToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizesActionCreator()),
    renderQiuz: () => dispatch(renderQuizActionCreator())
  }
}

export default connect(mapStateToPrpst, mapDispathToProps)(PartTwo)
