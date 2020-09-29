import axios from 'axios'
// Константы

const FETCH_START = 'FETCH_START'
const FETCH_SUCCSESS = 'FETCH_SUCCSESS'
const FETCH_ERROR = 'FETCH_ERROR'
const RENDER_QUIZ = 'RENDER_QUIZ'

// Экшен креэйторы
export const fetchQuizesActionCreator = () => (
  // Асинхронность на этапе раньше изменения стейта
  // Делаем запрос => ждём => получаем данные => делаем диспатч с данными в стейт
  async (dispatch) => {
    dispatch(fetchQuizesStart())
    try {
      const responce = await axios.get('https://reactfire-9a16f.firebaseio.com/quizes.json')
      const serverQuiz = []
      Object.keys(responce.data).forEach((serverKeyObj) => {
        serverQuiz.push(responce.data[serverKeyObj])
      })
      dispatch(fetchQuizesSuccess(serverQuiz))
    } catch (error) {
      dispatch(fetchQuizesError(error))
    }
  }
)

export function fetchQuizesStart() {
  return {
    type: FETCH_START,
  }
}
export function fetchQuizesSuccess(serverQuiz) {
  return {
    type: FETCH_SUCCSESS,
    serverQuiz,
  }
}
export function fetchQuizesError(error) {
  return {
    type: FETCH_ERROR,
    error,
  }
}
export function renderQuizActionCreator() {
  return {
    type: RENDER_QUIZ,
  }
}
// Начально значение стейта
const initialState = {
  fireBaseQuiz: [],
  loading: false,
}

// Редьюсер изметяющий стор
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
