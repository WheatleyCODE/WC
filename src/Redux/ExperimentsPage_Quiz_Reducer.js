import {
  FETCH_START,
  FETCH_SUCCSESS,
  FETCH_ERROR,
  RENDER_QUIZ,
} from './constants'

const initialState = {
  fireBaseQuiz: [],
  loading: false,
}

const ExperimentsPageCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SUCCSESS:
      return {
        ...state,
        fireBaseQuiz: action.serverQuiz,
        loading: false,
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
      }
    case RENDER_QUIZ:
      return {
        fireBaseQuiz: [],
        loading: false,
      }
    default:
      return state
  }
}

export default ExperimentsPageCounterReducer
