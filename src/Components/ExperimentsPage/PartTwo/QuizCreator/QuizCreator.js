import React from 'react'
import s from './QuizCreator.module.scss'
import Input from '../../../UI/Input/Input'
import createControl from '../../../Form/FormFraemwork'
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
        rightAnswerId: 1,
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }
    addQuestHandler = () => {

    }
    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

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
        console.log(event.target.value)
    }
    render() {
        return (
            <div className={s.quizCreatorMain}>
                <div className={s.quizCreatorDiv}>
                    <h3>QuizCreator</h3>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <hr className={s.hr}/>
                        <Select
                            label="Выберите правильный ответ"
                            value={this.state.rightAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                { text: 1, value: 1 },
                                { text: 2, value: 2 },
                                { text: 3, value: 3 },
                                { text: 4, value: 4 }
                            ]}
                        />
                        <button onClick={this.addQuestHandler}>Добавить воппрос</button>
                        <button onClick={this.createQuizHandler}>Создать тест</button>
                    </form>
                </div>

            </div>
        )
    }
}