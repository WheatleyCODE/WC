// Импорт хука
import React, { useState, useEffect } from 'react'
import './Hook_useEffect.scss'

function Hook_useEffect() {
  const [type, setType] = useState('users')
  const [date, setData] = useState([])
  const [pos, setPos] = useState({ x: 0, y: 0})

  // Передаём колбек, будет вызываться каждый раз как будет происходить рендер НОВОГО компонента
  // Но только один раз при рендеринге НОВОГО эфекта
  // useEffect(() => {
  //   console.log('render')
  // })

  // Передаём доп параментр deps в массиве которого указываем
  // От чего записит вызов функции колбека
  useEffect(() => {
    // Вызовится этот колбек если стейт type измениться
    console.log('Type is', type)

    // Изменяется состояние -> вызывается useEffect -> делается нужный запрос ->
    // Получаем данные -> запихиваем данные в стейт -> отображаем
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [type])

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }

  // useEffect нужен для выполнения неких сайд эфектов
  // За чем-то следить и выполнять то что нам нужно когда deps измениться
  useEffect(() => {

    // Эмуляция life цикла ComponentDidMount когда комппоненты зарендерился и готов к работе
    console.log('ComponentDidMount')

    // Когда копмонет зарендериться -> добавляем прослушку события на Window ->
    // запихиваем в стейт -> отображаем
    window.addEventListener('mousemove', mouseMoveHandler)

    // Все добавленные прослушки нужно удалять
    // return вызовется когда компонент Hook_useEffect будет удален
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  // console.log('Component Render')

  return (
    <div className="hooksBlock">
      <h3>Hook_useEffect</h3>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')} type="button">Пользователи</button>
      <button onClick={() => setType('todos')} type="button">Todo</button>
      <button onClick={() => setType('posts')} type="button">Посты</button>
      <pre>{JSON.stringify(date)}</pre>
      <pre>{JSON.stringify(pos)}</pre>
    </div>
  )
}

export default Hook_useEffect
