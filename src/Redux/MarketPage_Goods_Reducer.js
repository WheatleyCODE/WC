// Константы
const DELETE_IMG = 'DELETE_IMG'
const ADD_MORE_GOODS = 'ADD_MORE_GOODS'

// Экшен креэйторы
export const deleteImgGActionCreator = (object, goodId) => (
  { type: DELETE_IMG, id: goodId, obj: object }
)
export const AddMoreGoodsActionCreator = () => (
  { type: ADD_MORE_GOODS }
)

// Начально значение стейта
const initialState = {
  InterestGoods: [
    { id: '#100', name: 'Очень красивая кружка', price: '600р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Apple' },
    { id: '#101', name: 'Самая большая книжка', price: '800р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Глуховский INC' },
    { id: '#102', name: 'Обычная шишка', price: '30р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'forest', brand: 'Forest Life' },
    { id: '#103', name: 'Лесной Зайчишка', price: '4.000р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'live', brand: 'Forest Life' },
    { id: '#104', name: 'Кружка', price: '300р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Apple' },
    { id: '#105', name: 'Книжка', price: '400р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Глуховский INC' },
    { id: '#106', name: 'Шишка', price: '15р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'forest', brand: 'Forest Life' },
    { id: '#107', name: 'Зайчишка', price: '3.000р', img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'live', brand: 'Forest Life' },
  ],
  Goods1: [
    { id: '#201', name: 'Ножик', price: '200р', img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'home', brand: 'Apple' },
    { id: '#202', name: 'Ёжик', price: '3.000р', img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'home', brand: 'Forest Life' },
    { id: '#203', name: 'Йог-жик', price: '5.000р', img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'forest', brand: 'Глуховский INC' },
    { id: '#204', name: 'Вжик(Fly)', price: '1.000р', img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'live', brand: 'Forest Life' },   
  ],
  Goods2: [
    { id: '#305', name: 'Курс по HTML + CSS', price: '1.000р', img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'home', brand: 'Высшая школа программирования' },
    { id: '#306', name: 'Курс по JS От 0 до Гуру', price: '5.000р', img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'home', brand: 'Высшая школа программирования' },
    { id: '#307', name: 'MERN Stack за день', price: '10.000р', img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'forest', brand: 'Высшая школа программирования' },
    { id: '#308', name: 'Стань Senior`ом за месяц', price: '30.000р', img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'live', brand: 'Высшая школа программирования' },   
  ],
  MoreGoods: [0],
  
}

// Редьюсер изметяющий стор
const MarketPage_Goods_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_IMG: {
      const NewElem = { ...action.obj }
      NewElem.img = 'https://yt3.ggpht.com/a/AATXAJwLiCLXJ636YgKutJLa7PEEtGZH1Sl8fWWNrWKu=s900-c-k-c0xffffffff-no-rj-mo'

      if (action.id.startsWith('#1')) {
        const NewArray = [...state.InterestGoods]
        NewArray.forEach((objc, index) => {
          if (objc.id === action.id) {
            NewArray[index] = NewElem
            state.InterestGoods = NewArray
          }
        })
      } else if (action.id.startsWith('#2')) {
        const NewArray = [...state.Goods1]
        NewArray.forEach((objc, index) => {
          if (objc.id === action.id) {
            NewArray[index] = NewElem
            state.Goods1 = NewArray
          }
        })
      } else if (action.id.startsWith('#3')) {
        const NewArray = [...state.Goods2]
        NewArray.forEach((objc, index) => {
          if (objc.id === action.id) {
            NewArray[index] = NewElem
            state.Goods2 = NewArray
          }
        })
      }
      return { ...state }
    }
    case ADD_MORE_GOODS: {
      return {
        ...state,
        MoreGoods: state.MoreGoods.push(0),
      }
    }
    default:
      return { ...state }
  }
}

export default MarketPage_Goods_Reducer
