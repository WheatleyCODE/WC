// Импорт хука
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Hook_useMyHook.scss'

// Создаём свой хук
// Это обычная функция исппользующая обычные хуки
function useMyHookLogger(value) {
  useEffect(() => {
    console.log('value changed:', value)
  }, [value])
}

function useMyHookInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const clear = () => {
    setValue('')
  }

  return {
    bind: { value, onChange },
    value,
    clear,
  }
}
// usehooks.com
function Hook_useMyHook() {

  // const [name, setName] = useState('name')
  const [lastName, setlastName] = useState('lastName')

  // const chancgeHandlerName = (event) => {
  //   setName(event.target.value)
  // }
  const chancgeHandlerLastName = (event) => {
    setlastName(event.target.value)
  }

  const input = useMyHookInput('Name')
  useMyHookLogger(input.value)

  return (
    <div className="hooksBlock">
      <h3>Hook_useMyHook</h3>
      <input {...input.bind} type="text" />
      <button type="button" onClick={() => { input.clear() }}>Очистить Name</button>

      <input onChange={chancgeHandlerLastName} value={lastName} type="text" />
      <h1>{input.value} {lastName}</h1>
    </div>
  )
}

export default Hook_useMyHook
