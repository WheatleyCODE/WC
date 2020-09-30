// Импорт хука
import React, { useReducer } from 'react'
import './Hook_useReducer.scss'

function Hook_useReducer() {
  const ADD = 'ADD'
  const SUB = 'SUB'

  const addAC = () => ({ type: ADD })
  const subAC = () => ({ type: SUB })

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          counter: state.counter + 20,
          text: 'ADD',
        }
      case SUB:
        return {
          ...state,
          counter: state.counter - 20,
          text: 'SUB',
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    counter: 100,
    text: '@@@',
  })
  return (
    <div className="hooksBlock">
      <h3>Hook_useReducer</h3>
      <h1>{state.counter}</h1>
      <h2>{state.text}</h2>
      <button onClick={() => { dispatch(addAC()) }} type="button">ADD</button>
      <button onClick={() => { dispatch(subAC()) }} type="button">SUB</button>
    </div>
  )
}

export default Hook_useReducer
