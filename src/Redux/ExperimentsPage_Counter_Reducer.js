// Константы
const ADD_ONE = 'ADD_ONE'
const SUB_ONE = 'SUB_ONE'
const ADD_NUMBER = 'ADD_NUMBER'
const SUB_NUMBER = 'SUB_NUMBER'

const DISABLE_BUTTONS = 'DISABLE_BUTTONS'
const ANABLE_BUTTONS = 'ANABLE_BUTTONS'

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
export const disableButtonsActionCreator = () => (
  { type: DISABLE_BUTTONS }
)
export const anableButtonsActionCreator = () => (
  { type: ANABLE_BUTTONS }
)
export const AddAsyncActionCreator = (value) => (
  // Асинхронность на этапе раньше изменения стейта
  (dispatch) => {
    // Блокиривка кнопок
    dispatch(disableButtonsActionCreator())
    setTimeout(() => {
      dispatch(AddNumberActionCreator(value))
      // Разблокировка кнопок
      dispatch(anableButtonsActionCreator())
    }, 2000)
  }
)

// Начально значение стейта
const initialState = {
  counter: 0,
  disable: false,
}

// Редьюсер изметяющий стор
const ExperimentsPage_Counter_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case SUB_ONE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.value,
      }
    case SUB_NUMBER:
      return {
        ...state,
        counter: state.counter - action.value,
      }
    case DISABLE_BUTTONS:
      return {
        ...state,
        disable: true,
      }
    case ANABLE_BUTTONS:
      return {
        ...state,
        disable: false,
      }
    default:
      return state
  }
}

export default ExperimentsPage_Counter_Reducer
