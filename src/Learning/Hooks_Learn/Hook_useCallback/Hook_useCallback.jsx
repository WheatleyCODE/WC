// Импорт хука
import React, { useState, useCallback } from 'react'
import './Hook_useCallback.scss'
import ItemsList from './ItemsList'

function Hook_useCallback() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'red' : 'black',
  }

  // Каждый раз создаём массив из количества элементов указанные в стейте
  // Условно говоря делаем тоже самое что и useMemo только для функций
  const generateItemsFromAPI = useCallback(() => {
    // Теперь элемент ItemsList не рендериться когда ненужно
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
  }, [count])

  return (
    <div className="hooksBlock">
      <h3>Hook_useCallback</h3>
      <h1 style={styles}>Количество элементов:{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)} type="button">Добавить</button>
      <button onClick={() => setColored((prev) => !prev)} type="button">Изменить</button>
      {/* Прокидываем в копмонент функцию */}
      {/* Проблема в том что этот компонент рендериться когда мы его не меняем */}
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  )
}

export default Hook_useCallback
