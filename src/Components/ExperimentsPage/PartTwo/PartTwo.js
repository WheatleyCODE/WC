import React from 'react'
import s from './PartTwo.module.scss'
import Layout from './hoc/Layout/Layout'
import Quiz from './Quiz/Quiz'

class PartTwo extends React.Component {

    renderQuiz = () => {
        this.setState({
          quiz: <Quiz />,
          button: ''
        })  
    }

    state = {
        quiz: '',
        button: <button className={s.startButton} onClick={this.renderQuiz}>НАЧАТЬ</button>,
    }

    render() {
        return (
            <div className={s.partTwoMain}>
                <Layout>
                    {this.state.quiz}
                    {this.state.button}
                </Layout>
            </div>
        )
    }
}
export default PartTwo