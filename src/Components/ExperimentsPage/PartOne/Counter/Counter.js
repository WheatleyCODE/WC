import React from 'react'
import Auxiliary from '../hoc/Auxiliary'


export default class Counter extends React.Component {
    state = {
        count: 0
    }

    addCounter = () => {
        // Правильное изменение стайта
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    SubCounter = () => {
        // Правильное изменение стайта
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        //Отображение без корневого элемента с помощью массива
        // return [

        //         <h2 key='1'>► {this.state.count} ◄</h2>,
        //         <button key='2' onClick={this.addCounter}>+</button>,
        //         <button key='3' onClick={this.SubCounter}>-</button>
            
        // ]
        //Отображение без корневого элемента с помощью React.Fragment
        return (
            <Auxiliary>
                <h2 key='1'>► {this.state.count} ◄</h2>
                <button key='2' onClick={this.addCounter}>+</button>
                <button key='3' onClick={this.SubCounter}>-</button>
            </Auxiliary>
        )

        // return (
        //     <>
        //         <h2 key='1'>► {this.state.count} ◄</h2>
        //         <button key='2' onClick={this.addCounter}>+</button>
        //         <button key='3' onClick={this.SubCounter}>-</button>
        //     </>
        // )
    }
}