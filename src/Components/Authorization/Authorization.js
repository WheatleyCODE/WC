import React from 'react'
import Input from '../UI/Input/Input'
import s from './Authorization.module.scss'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

class Authorization extends React.Component {

    state = {
        formControls: {
            email:{
                value: '',
                type: 'email',
                label: 'Emeil',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    reqiured : true,
                    email: true,
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    reqiured : true,
                    minLengh: 6,
                }
            }
        },
        isFormValid : false,
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }
    validateControl(value, validation) {
        if(!validation) {
            return true
        }

        let isValid = true

        if(validation.reqiured) {
            isValid = value.trim() !== '' && isValid
        }
        if(validation.email) {
            isValid = validateEmail(value) && isValid
        }   
        if(validation.minLengh) {
            isValid = value.length >= validation.minLengh && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {

        const formControls = { ...this.state.formControls}
        const control = { ...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach( name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }
    renderInputs() {
       return Object.keys(this.state.formControls).map((controlName, index) => {
           const control = this.state.formControls[controlName]
            return <Input
                key = {controlName + index}
                type = {control.type}
                value = {control.value}
                label = {control.label}
                valid = {control.valid}
                touched = {control.touched}
                shouldValidate = {!!control.validation}
                errorMessage = {control.errorMessage}
                onChange = { event => this.onChangeHandler(event, controlName)}
            />
        })
    }
    render() {



        return(
        <div className={s.authorizationMain}>
            <div className={s.authorization}>
                    <div className={s.authorizationElem}>
                        <form onSubmit={this.submitHandler}>
                            
                            {this.renderInputs()}

                            <div>
                                <button disabled={!this.state.isFormValid} onClick={this.loginHandler} >Войти</button>
                                <button disabled={!this.state.isFormValid} onClick={this.registerHandler} >Зарегистрироваться</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
        )
    }
}
export default Authorization