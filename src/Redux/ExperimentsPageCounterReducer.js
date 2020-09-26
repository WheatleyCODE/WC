// Константы
const ADD_ONE = 'ADD_ONE'
const SUB_ONE = 'SUB_ONE'
const ADD_NUMBER = 'ADD_NUMBER'
const SUB_NUMBER = 'SUB_NUMBER'

// Экшен креэйторы
export const AddOneActionCreator = () => (
  { type: ADD_ONE }
)
export const SubOneActionCreator = () => (
  { type: SUB_ONE }
)
export const AddNumberActionCreator = (value) => (
  { type: ADD_NUMBER, value }
)
export const SubNumberActionCreator = (value) => (
  { type: SUB_NUMBER, value }
)
export const AddAsyncActionCreator = (value) => (
  (dispatch) => {
    setTimeout(() => dispatch(AddNumberActionCreator(value)), 3000)
  }
)

// Начально значение стейта
const initialState = {
  counter: 100,
}

// Редьюсер изметяющий стор
const ExperimentsPageCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        counter: state.counter + 1,
      }
    case SUB_ONE:
      return {
        counter: state.counter - 1,
      }
    case ADD_NUMBER:
      return {
        counter: state.counter + action.value,
      }
    case SUB_NUMBER:
      return {
        counter: state.counter - action.value,
      }
    default:
      return state
  }
}

export default ExperimentsPageCounterReducer
