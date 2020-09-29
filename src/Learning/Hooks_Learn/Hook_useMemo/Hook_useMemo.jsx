// Импорт хука
import React, { useState, useMemo, useEffect } from 'react'
import './Hook_useMemo.scss'

// создаём задержку
function complexCompute(number) {
  let i = 0
  // 10 дохреналионов итераций
  while (i < 1000000000) i++
  return number * 2
}

function Hook_useMemo() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  // вычисляем на основе состояния значение
  // const computed = complexCompute(number)

  // Кешируем вычисление
  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number] /* сюда нужно передать зависимость */)

  // При пересовке у этого вычисления будет такаяже задержка как complexCompute
  // При рендере будет вызываться useEffect
  // const style = {
  //   color: colored ? 'red' : 'black',
  // }

  // Решаем проблему вызова useEffect с помощью useMemo (Кешируем)
  const style = useMemo(() => {
    return {
      color: colored ? 'red' : 'black',
    }
  }, [colored])

  // Это эфект будет вызываться каждый рендер
  // Так как style при новом рендере перезаписывается
  // obj не равен obj происходит вызов колбека useEffect
  useEffect(() => {
    console.log('Style changed')
  }, [style])

  return (
    <div className="hooksBlock">
      <h3 style={style}>Hook_useMemo</h3>
      <h1>{computed}</h1>
      <button onClick={() => { setNumber((prev) => prev + 1) }} type="button">Прибавить</button>
      <button onClick={() => { setNumber((prev) => prev - 1) }} type="button">Вычесть</button>

      {/* Очень долгая задержка без useMemo */}
      <button onClick={() => { setColored((prev) => !prev) }} type="button">{colored.toString()}</button>
    </div>
  )
}

export default Hook_useMemo
