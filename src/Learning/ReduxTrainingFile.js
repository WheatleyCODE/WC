const redux = require('redux')

const initialState = {
  counter: 0,
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {
        counter: state.counter + 1,
      }
    case 'SUB_ONE':
      return {
        counter: state.counter - 1,
      }
    case 'ADD_NUMBER':
      return {
        counter: state.counter + action.value,
      }
    default:
      return state
  }
}

// Store
const store = redux.createStore(reducer)

// Subscribe
store.subscribe(() => {
  console.log(store.getState())
})

// Actions
const addCounter = { type: 'ADD_ONE' }

store.dispatch(addCounter)
store.dispatch({ type: 'SUB_ONE' })
store.dispatch({ type: 'ADD_NUMBER', value: 20 })
