import React from 'react'
import s from './PartTwo.module.scss'
import Layout from './hoc/Layout/Layout'
import Quiz from './Quiz/Quiz'

class PartTwo extends React.Component {

    state = {
        quiz: '',
    }

    renderQuiz = () => {
      this.setState({
        quiz: <Quiz />
      })  
    }

    render() {
        return (
            <div className={s.partTwoMain}>
                <Layout>
                    {this.state.quiz}
                    <button onClick={this.renderQuiz}>Показать векторину</button>
                </Layout>
            </div>
        )
    }
}
export default PartTwo