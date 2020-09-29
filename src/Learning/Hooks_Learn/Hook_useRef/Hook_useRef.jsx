// Импорт хука
import React, { useRef, useState, useEffect } from 'react'
import './Hook_useRef.scss'

function Hook_useRef() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')

  // Создаёт объект в пепременную со значением 1
  const renderCount = useRef(1)

  // Привязываем кнопку
  const buttonRef = useRef(null)

  // Получаем предидущее значение стейта
  const prevValue = useRef('')

  useEffect(() => {
    prevValue.current = value
  }, [value])

  useEffect(() => {
    // Бесконечный цикл так как setRenderCount вызывает перерисовку компонента
    // setRenderCount((prev) => prev + 1)

    // Нет бесконечного цикла так как renderCount.current не вызывает перерисовку
    // Но значение сохраняет
    renderCount.current++

    // useRef нужно использовать если нужно что-то сохранить между хуками
    // Без перерисовки

    // Допустим получаем стили кнопки
    buttonRef.current.style.backgroundColor = '#ccc'
    console.log(buttonRef.current.style.backgroundColor)
  })

  return (
    <div className="hooksBlock">
      <h3>Hook_useRef</h3>
      {/* Что бы обратиться к значению добавленного с помощью
          useRef нужно наисать ИмяПеременной.current */}
      <h2>{value}</h2>
      <h1>Количество: {renderCount.current}</h1>
      <button onClick={() => {setValue(10 + Math.random())}} type="button">Клац</button>
      <button ref={buttonRef} type="button">Button Ref</button>
      <h2>Прошлое состояние: {prevValue.current}</h2>
    </div>
  )
}

export default Hook_useRef
