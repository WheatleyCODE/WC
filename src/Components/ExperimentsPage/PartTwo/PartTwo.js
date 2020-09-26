import React from 'react'
import s from './PartTwo.module.scss'
import Layout from './hoc/Layout/Layout'
import Quiz from './Quiz/Quiz'
import QuizCreator from './QuizCreator/QuizCreator'
import axios from 'axios'
import Loader from '../../UI/Loader/Loader'

class PartTwo extends React.Component {
    renderQuiz = (serverQuiz) => {
        this.setState({
          quiz: <Quiz quiz={serverQuiz} />,
          button: '',
          serverTests: '',
        })  
    }

    state = {
        quiz: '',
        button: <button className={s.startButton} onClick={this.renderQuiz}>НАЧАТЬ</button>,
        serverTests: '',
        loading: true,
    }

    componentDidMount() {
      this.fetchResponse()
    }

    fetchResponse() {
      axios.get('https://reactfire-9a16f.firebaseio.com/quizes.json').then(response => {
        // console.log(response.data)

        const renderQyest = []
        renderQyest.push(Object.keys(response.data).map((elem, index) => {
          const serverQuiz = response.data[elem]
          return <div className={s.serverQuiz} onClick={() => {
            this.renderQuiz(serverQuiz)
          }} key={elem + index}><h4>Начать тест №{index + 1} вопросов: {serverQuiz.length}</h4></div>

        }))
        // console.log(renderQyest)

        this.setState({
            serverTests: renderQyest,
            loading: false
        })
 
      })
    }
    

    render() {
        return (
            <div className={s.partTwoMain}>
                <Layout>
                    {this.state.quiz}
                    {/* {this.state.button} */}
                    {this.state.serverTests}
                    {
                        this.state.loading? <Loader/> : null
                    }
                </Layout>
                  <QuizCreator rerenderQuiz={() => {
                    this.fetchResponse()
                  }}/>
            </div>
        )
    }
}
export default PartTwo
