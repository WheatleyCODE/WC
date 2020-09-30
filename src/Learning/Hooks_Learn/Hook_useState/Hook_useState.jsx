// Импорт хука
import React, { useState } from 'react'
import './Hook_useState.scss'

function veryBigComputeInitialCounter() {
  console.log('Очень большое и долгое вычесление')
  return (1 + 1 + 1 + 1) / 4 - 1
}

function Hook_useState() {

  // Передаём начальное состояние
  // const counterState = useState(10)

  // Первый элемент сам стейт
  // console.log(counterState[0])

  // Второй элемент функция меняющая стейт
  // console.log(counterState[1])

  /* ///////////////////////////////////////////////////////// */

  // Инициализация хука более правильная
  // const [counter, setCounter] = useState(0)

  // Вычисление начального состояния вызывается каждый раз что не есть хорошо для ппроиводительности
  // const [counter, setCounter] = useState(veryBigComputeInitialCounter())

  // ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
  // Правила хуков 1) Их можно исппользовать только в функциональных компонентах
  // 2) Их нельзы вызывать в результате какого либо выражения наппример if(true)

  // Так большое и сложное вычесление вызывается только 1 раз.
  const [counter, setCounter] = useState(() => {
    return veryBigComputeInitialCounter()
  })

  // Состояние объект
  const [state, setState] = useState({
    title: 'Это счетчик!',
    date: Date.now(),
    money: 'Что-то, что мы бы не хотели потерять',
  })

  // Изменяем стейт
  function AddOne() {
    /* Вызываем setCounter 2 раза, но рименяется он только один раз */
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    /* Вызываем setCounter 2 раза, только теперь счетчик увеличивается на 2 */
    // Вызов setCounter и его изменение на основе предыдущего состояния
    // prevCounter = Предыдущее состояние
    setCounter((prevCounter) => {
      return prevCounter + 1
    })

    // Best prectics
    // Тоже самое что и выше только локаничней
    setCounter((prev) => prev + 1)
  }

  // Изменяем стейт
  function SubOne() {
    setCounter(counter - 1)
  }

  // Делать такое нельзя
  // if (true) {
  //   state = useState(0)
  // }

  function updateTittle() {
    // setState заменяет весь объект целиком
    // money пропадает
    setState({
      title: 'Новое название',
      date: Date.now(),
    })

    // money в порядке
    setState({
      ...state,
      title: 'Новое название',
      date: Date.now(),
    })

    // money в порядке (Другой вариант)
    setState((prev) => {
      return {
        ...prev,
        title: 'Новое название',
        date: Date.now(),
      }
    })
  }
  return (
    <div className="hooksBlock">
      <h3>Hook_useState</h3>
      <h1>Счетчик: {counter}</h1>
      <button onClick={AddOne} type="button">Добавить</button>
      <button onClick={SubOne} type="button">Убрать</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={updateTittle} type="button">Изменить Объект</button>
    </div>
  )
}

export default Hook_useState
