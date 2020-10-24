import axios from 'axios'
import {
  ADD_ONE,
  SUB_ONE,
  ADD_NUMBER,
  SUB_NUMBER,
  DISABLE_BUTTONS,
  ANABLE_BUTTONS,
  FETCH_START,
  FETCH_SUCCSESS,
  FETCH_ERROR,
  RENDER_QUIZ,
  ADD_FAVORITE,
  ADD_LIKE,
  FETCH_GOODS_START,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_ERROR,
  ADD_POST,
  ADD_NEW_TEXT_POST,
  ADD_NEW_STATUS,
  PUSH_USER_ONE,
  PUSH_USER_TWO,
  PUSH_USER_TREE,
} from './constants'

// Exp Page Counter
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

// Exp Page Quiz
export const fetchQuizesActionCreator = () => (
  // Асинхронность на этапе раньше изменения стейта
  // Делаем запрос => ждём => получаем данные => делаем диспатч с данными в стейт(стор)
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

// Market Page Goods
export const AddFavoriteGoodActionCreator = (obj) => (
  { type: ADD_FAVORITE, obj }
)
export const AddLikeGoodActionCreator = (obj) => (
  { type: ADD_LIKE, obj }
)
export const fetchGoodsStartAC = () => ({ type: FETCH_GOODS_START })
export const fetchGoodsSuccessAC = (serverGoods) => ({ type: FETCH_GOODS_SUCCESS, serverGoods })
export const fetchQuizesErrorAC = (error) => ({ type: FETCH_GOODS_ERROR, error })

export const fetchGoodsActionCreator = () => (
  async (dispatch) => {
    dispatch(fetchGoodsStartAC())
    try {
      const responce = await axios.get('https://reactfire-9a16f.firebaseio.com/goods.json')
      // const serverGoods = []
      // Object.keys(responce.data).forEach((serverKeyObj) => {
      //   serverGoods.push(responce.data[serverKeyObj])
      // })
      const serverGoods = Object.values(responce.data).flat(1)
      dispatch(fetchGoodsSuccessAC(serverGoods))
    } catch (error) {
      dispatch(fetchQuizesErrorAC(error))
    }
  }
)

// Profile Page
export const addNewTextPostActionCreator = (text) => (
  { type: ADD_NEW_TEXT_POST, newText: text }
)

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text })
export const addNewStatusActionCreator = (text) => ({ type: ADD_NEW_STATUS, newStatus: text })
export const pushUserOneActionCreator = () => ({ type: PUSH_USER_ONE })
export const pushUserTwoActionCreator = () => ({ type: PUSH_USER_TWO })
export const pushUserThreeActionCreator = () => ({ type: PUSH_USER_TREE })
