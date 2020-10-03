import {
  ADD_ONE,
  SUB_ONE,
  ADD_NUMBER,
  SUB_NUMBER,
  DISABLE_BUTTONS,
  ANABLE_BUTTONS,
} from './constants'

const initialState = {
  counter: 0,
  disable: false,
}

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
