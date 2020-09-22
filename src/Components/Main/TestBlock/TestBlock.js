import React from 'react'
const TestBlock = props => {
    console.log(props)

    // Програмная навигация когда есть параметры пропс
    let OnButtonClik = () => {
       props.history.push('/')
    }
    return(
        <div>
            <h1>Hello!</h1>
            <h1>Hello!</h1>
            <h1>Hello!</h1>
            <h1>Hello!</h1>
            <button onClick={OnButtonClik}>Мейн</button>
        </div>
    )
}
export default TestBlock