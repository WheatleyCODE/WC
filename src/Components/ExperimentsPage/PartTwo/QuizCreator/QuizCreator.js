import React from 'react'
import s from './QuizCreator.module.scss'
import Input from '../../../UI/Input/Input'
import {createControl, validate, validateForm} from '../../../Form/FormFraemwork'
import Select from '../../../UI/Select/Select'
import axios from 'axios'

function createControlOptional(number) {
    return createControl({
        label: `Вариант ответа ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, { reqired: true })
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {reqired: true}),
        option1: createControlOptional(1),
        option2: createControlOptional(2),
        option3: createControlOptional(3),
        option4: createControlOptional(4),
    }
}

export default class QuizCreator extends React.Component {

    state = {
        quiz: [],
        isFormValid: false,
        trueAnsver: 0,
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }
    addQuestHandler = (event) => {
      event.preventDefault()

      const quiz = this.state.quiz.concat()
      const index = quiz.length + 1

      const {question, option1, option2, option3, option4} = this.state.formControls

      const questionItem = {
          question: question.value,
          idQuest: index,
          trueAnsver: this.state.trueAnsver,
          right: false,
          click: false,
          answers: [
            option1.value, option2.value, option3.value, option4.value
          ]
      }
      quiz.push(questionItem)

      this.setState({
          quiz,
          isFormValid: false,
          trueAnsver: 0,
          formControls: createFormControls()
      })
    }

    createQuizHandler = async (event) => {
      event.preventDefault()
        try {
            const response = await axios.post('https://reactfire-9a16f.firebaseio.com/quizes.json', this.state.quiz)
            console.log(response.data)

            this.setState({
                quiz: [],
                isFormValid: false,
                trueAnsver: 0,
                formControls: createFormControls()
            })
        } catch (e) {
            console.log(e)
        }
        // axios.post('https://reactfire-9a16f.firebaseio.com/quizes.json', this.state.quiz)
        //     .then( response => {
        //         console.log(response)
        //     })
        //     .catch( err => {
        //         console.log(err)
        //     })
        
        this.props.rerenderQuiz()

    }
    
    changeHandler = (value, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }
    
        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)
    
        formControls[controlName] = control
    
        this.setState({
          formControls,
          isFormValid: validateForm(formControls)
        })
    }
    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
             return( 
                 <>
             <Input
                 key = {controlName + index}
                 type = {control.type}
                 value = {control.value}
                 label = {control.label}
                 valid = {control.valid}
                 touched = {control.touched}
                 shouldValidate = {!!control.validation}
                 errorMessage = {control.errorMessage}
                 onChange = { event => this.changeHandler(event.target.value, controlName)}
             />
             { index === 0? <hr className={s.hr}/> : null }
             </>
             )
         })
    }
    selectHandler = event => {
       this.setState({
        trueAnsver: +event.target.value
       })

    }
    render() {
        return (
            <div className={s.quizCreatorMain}>
                <div className={s.quizCreatorDiv}>
                    <h3>Создать тест</h3>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <hr className={s.hr}/>
                        <Select
                            label="Выберите правильный ответ"
                            value={this.state.trueAnsver}
                            onChange={this.selectHandler}
                            options={[
                                { text: 1, value: 0 },
                                { text: 2, value: 1 },
                                { text: 3, value: 2 },
                                { text: 4, value: 3 }
                            ]}
                        />
                        <button disabled={!this.state.isFormValid} onClick={this.addQuestHandler}>Добавить вопрос</button>
                        <button disabled={this.state.quiz.length === 0} onClick={this.createQuizHandler}>Создать тест</button>
                    </form>
                </div>

            </div>
        )
    }
}