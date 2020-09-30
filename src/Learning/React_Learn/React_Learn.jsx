import React from 'react'
import { useState } from 'react'
import './React_Learn.scss'

const React_Learn = () => {

  const [bool, setBool] = useState(false)

  // Инлайн стили.
  const styles = {
    border: '1px solid black',
  }

  // Динамические классы
  const classes = ['reactLearnBlock']
  if (bool) {
    classes.push('done')
  }

  const OnChangeHandler = () => {
    setBool((prev) => !prev)
  }

  // 1) Почекать контекст
  // 2) Я знаю все нужна практика!

  return (
    <div className="reactLearnMain">
      <h1>React TotoriaL</h1>
      <div style={styles} className="reactLearnBlock">
        <h3>Click</h3>
        <input onChange={OnChangeHandler} type="checkbox" />
      </div>
      <div className={classes.join(' ')}><h3>Block</h3></div>
      <div className="reactLearnBlock"><h3>Block</h3></div>
    </div>
  )
}
export default React_Learn
