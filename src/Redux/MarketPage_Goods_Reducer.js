// Константы
const ADD_FAVORITE = 'ADD_FAVORITE'
const ADD_MORE_GOODS = 'ADD_MORE_GOODS'
const ADD_LIKE = 'ADD_LIKE'

// Экшен креэйторы
export const AddFavoriteGoodActionCreator = (obj) => (
  { type: ADD_FAVORITE, obj }
)
export const AddLikeGoodActionCreator = (obj) => (
  { type: ADD_LIKE, obj }
)
export const AddMoreGoodsActionCreator = () => (
  { type: ADD_MORE_GOODS }
)

// Начально значение стейта
const initialState = {
  InterestGoods: [
    { likeCount: 5, like: false, isFavorite: false, id: '#100', name: 'Очень красивая кружка', price: '600р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Apple', discription: 'Кружка изготовлена из прочного полевошпатного фарфора. Эта практичная столовая посуда классического дизайна подойдет для ежедневного использования и сервировки любых блюд и напитков.' },
    { likeCount: 6, like: false, isFavorite: false, id: '#101', name: 'Самая большая книжка', price: '800р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Глуховский INC', discription: '«Текст» – первый реалистический роман Дмитрия Глуховского, автора «Метро 2033/2034/2035», «Будущего» и «Сумерек»!' },
    { likeCount: 3, like: false, isFavorite: false, id: '#102', name: 'Обычная шишка', price: '30р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'forest', brand: 'Forest Life', discription: 'Отборная кедровая шишка с Алтайского края 8 - 12 см в длину. ' },
    { likeCount: 333, like: false, isFavorite: false, id: '#103', name: 'Лесной Зайчишка', price: '4.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'live', brand: 'Forest Life', discription: 'Наш из России. Срок поставки декабрь — март. В стоимость входит ящик для зайцев. Размер ящика 1.5х0.4х0.4м. В одном ящике сидят шесть  зайцев раздельно. Мин. количество — 6 шт.' },
    { likeCount: 1, like: false, isFavorite: false, id: '#104', name: 'Кружка', price: '300р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Apple', discription: 'Кружка изготовлена из прочного полевошпатного фарфора. Эта практичная столовая посуда классического дизайна подойдет для ежедневного использования и сервировки любых блюд и напитков.' },
    { likeCount: 2, like: false, isFavorite: false, id: '#105', name: 'Книжка', price: '400р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'home', brand: 'Глуховский INC', discription: '«Текст» – первый реалистический роман Дмитрия Глуховского, автора «Метро 2033/2034/2035», «Будущего» и «Сумерек»!' },
    { likeCount: 10, like: false, isFavorite: false, id: '#106', name: 'Шишка', price: '15р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'forest', brand: 'Forest Life', discription: 'Отборная кедровая шишка с Алтайского края 8 - 12 см в длину.' },
    { likeCount: 257, like: false, isFavorite: false, id: '#107', name: 'Зайчишка', price: '3.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://www.bilbeo.com/wp-content/uploads/konica-minolta-digital-camera.jpg', category: 'live', brand: 'Forest Life', discription: 'Наш из России. Срок поставки декабрь — март. В стоимость входит ящик для зайцев. Размер ящика 1.5х0.4х0.4м. В одном ящике сидят шесть  зайцев раздельно. Мин. количество — 6 шт.' },
  ],
  Goods1: [
    { likeCount: 1, like: false, isFavorite: false, id: '#201', name: 'Ножик', price: '200р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg', 'https://all-brick.ru/assets/images/tovar/kirpich-obicovochnyj/braer/braer-muskat-terra-1-0-nf-h.jpg'], img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'home', brand: 'Apple', discription: 'Нож Ратник КАМПО - это гражданский аналог армейского клинка и штык-ножа 6x9. Нож Кампо Ратник 6x9 оснащен удобной рукоятью из термоэластопласта. Это полимерный материал, гарантирующий надежную фиксацию и исключающий скольжение даже в мокрой ладони.' },
    { likeCount: 255, like: false, isFavorite: false, id: '#202', name: 'Ёжик', price: '3.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg', 'https://all-brick.ru/assets/images/tovar/kirpich-obicovochnyj/braer/braer-muskat-terra-1-0-nf-h.jpg'], img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'home', brand: 'Forest Life', discription: 'Самый известный из ежей — ёж европейский или обыкновенный лесной ёжик. Обыкновенный ёж — животное небольших размеров. Длина его тела составляет 20—30 см.' },
    { likeCount: 30, like: false, isFavorite: false, id: '#203', name: 'Йог-жик', price: '5.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg', 'https://all-brick.ru/assets/images/tovar/kirpich-obicovochnyj/braer/braer-muskat-terra-1-0-nf-h.jpg'], img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'forest', brand: 'Глуховский INC', discription: 'Йога у всех инструкторов разная, потому что инструктора разные и мотивы ведения занятий сильно отличаются. Основной вопрос, который нужно задать: «Зачем инструктор преподает йогу?».' },
    { likeCount: 121, like: false, isFavorite: false, id: '#204', name: 'Вжик', price: '1.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg', 'https://all-brick.ru/assets/images/tovar/kirpich-obicovochnyj/braer/braer-muskat-terra-1-0-nf-h.jpg'], img: 'https://yt3.ggpht.com/a/AGF-l7_jrRJOmvoYrIlIro1ZSbZCrYy27uJCYb5m2A=s900-c-k-c0xffffffff-no-rj-mo', category: 'live', brand: 'Forest Life', discription: 'Вжик (оригинальное английское название Zipper, Fly) — один из главных положительных персонажей мультфильма. Вжик способен проникать в такие места, куда остальные члены команды спасателей добраться попросту не могут.' },
  ],
  Goods2: [
    { likeCount: 10, like: false, isFavorite: false, id: '#305', name: 'Курс по HTML + CSS', price: '1.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'home', brand: 'Высшая школа программирования', discription: 'Учебная программа “Разработка программного обеспечения” создана для тех, кто хочет стать профессионалом в программировании и рассчитана на тех, кто только начинает путь программиста или хочет заполнить пробелы в IT-образовании. Главная цель Компьютерной Академии ШАГ – трудоустройство каждого выпускника.' },
    { likeCount: 10, like: false, isFavorite: false, id: '#306', name: 'Курс по JS От 0 до Гуру', price: '5.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'home', brand: 'Высшая школа программирования', discription: 'Учебная программа “Разработка программного обеспечения” создана для тех, кто хочет стать профессионалом в программировании и рассчитана на тех, кто только начинает путь программиста или хочет заполнить пробелы в IT-образовании. Главная цель Компьютерной Академии ШАГ – трудоустройство каждого выпускника.' },
    { likeCount: 10, like: false, isFavorite: false, id: '#307', name: 'MERN Stack за день', price: '10.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'forest', brand: 'Высшая школа программирования', discription: 'Учебная программа “Разработка программного обеспечения” создана для тех, кто хочет стать профессионалом в программировании и рассчитана на тех, кто только начинает путь программиста или хочет заполнить пробелы в IT-образовании. Главная цель Компьютерной Академии ШАГ – трудоустройство каждого выпускника.' },
    { likeCount: 10, like: false, isFavorite: false, id: '#308', name: 'Стань Senior`ом за месяц', price: '30.000р', otherImg: ['https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg', 'https://sc02.alicdn.com/kf/HTB1G38vyMKTBuNkSne1q6yJoXXaI/231560739/HTB1G38vyMKTBuNkSne1q6yJoXXaI.jpg'], img: 'https://the-istore.gr/wp-content/uploads/2017/10/iPhone7_AppleSiliconeDarkBlue_1.jpg', category: 'live', brand: 'Высшая школа программирования', discription: 'Учебная программа “Разработка программного обеспечения” создана для тех, кто хочет стать профессионалом в программировании и рассчитана на тех, кто только начинает путь программиста или хочет заполнить пробелы в IT-образовании. Главная цель Компьютерной Академии ШАГ – трудоустройство каждого выпускника.' },
  ],
}

// Редьюсер изметяющий стор
const MarketPage_Goods_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      const NewState = state
      console.log(Object.values(NewState))

      if (action.obj.isFavorite) {
        Object.values(NewState).forEach((array) => {
          array.forEach((elem) => {
            if (elem.id === action.obj.id) {
              console.log('нашел', elem.id, action.obj.id)
              elem.isFavorite = false
            }
          })
        })
      } else {
        Object.values(NewState).forEach((array) => {
          array.forEach((elem) => {
            if (elem.id === action.obj.id) {
              console.log('нашел', elem.id, action.obj.id)
              elem.isFavorite = true
            }
          })
        })
      }
      return {
        ...NewState,
      }
    }
    case ADD_LIKE: {
      const NewState = state
      console.log(Object.values(NewState))
      console.log(action.obj.like)

      if (action.obj.like) {
        Object.values(NewState).forEach((array) => {
          array.forEach((elem) => {
            if (elem.id === action.obj.id) {
              console.log('нашел', elem.id, action.obj.id)
              elem.like = false
              elem.likeCount = elem.likeCount - 1
              console.log(elem.likeCount)
            }
          })
        })
        console.log('Меняем на False')
      } else {
        Object.values(NewState).forEach((array) => {
          array.forEach((elem) => {
            if (elem.id === action.obj.id) {
              console.log('нашел', elem.id, action.obj.id)
              elem.like = true
              elem.likeCount = elem.likeCount + 1
              console.log(elem.likeCount)
            }
          })
        })
        console.log('Меняем на True')
      }
      return {
        ...NewState,
      }
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
