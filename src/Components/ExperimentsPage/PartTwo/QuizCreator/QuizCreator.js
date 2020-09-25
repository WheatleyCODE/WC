import React from 'react'
import s from './QuizCreator.module.scss'
import Input from '../../../UI/Input/Input'
import {createControl, validate, validateForm} from '../../../Form/FormFraemwork'
import Select from '../../../UI/Select/Select'

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
        rightAnswerId: 1,
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
          id: index,
          rightAnswerId: this.state.rightAnswerId,
          answer: [
              {text: option1.value, id: option1.id},
              {text: option2.value, id: option2.id},
              {text: option3.value, id: option3.id},
              {text: option4.value, id: option4.id}
          ]
      }
      quiz.push(questionItem)

      this.setState({
          quiz,
          isFormValid: false,
          rightAnswerId: 1,
          formControls: createFormControls()
      })
    }

    createQuizHandler = (event) => {
        event.preventDefault()

        console.log(this.state.quiz)
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
           rightAnswerId: +event.target.value
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
                            value={this.state.rightAnswerId}
                            onChange={this.selectHandler}
                            options={[
                                { text: 1, value: 1 },
                                { text: 2, value: 2 },
                                { text: 3, value: 3 },
                                { text: 4, value: 4 }
                            ]}
                        />
                        <button disabled={!this.state.isFormValid} onClick={this.addQuestHandler}>Добавить воппрос</button>
                        <button disabled={this.state.quiz.length === 0} onClick={this.createQuizHandler}>Создать тест</button>
                    </form>
                </div>

            </div>
        )
    }
}