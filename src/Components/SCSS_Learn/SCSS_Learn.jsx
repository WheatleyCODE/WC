import React from 'react'
import s from './SCSS_Learn.scss'

const SCSS_Learn = () => {
  return (
    <div className="flex">
      <div className={s.lala}>test</div>
      <div className="block first">SCSS_Learn</div>
      <div className="block first">SCSS_Learn</div>
      <div className="block">
        <ul>
          <li>Элемент</li>
          <li>Элемент</li>
          <li>Элемент</li>
          <li>Элемент</li>
        </ul>
      </div>
      <div className="block text">Что-то text</div>
      <div className="block text"><p><a href="/sad">sadadads</a></p></div>
      <div className="block text big"><a href="/sad">sadadsadadaads</a></div>
    </div>
  )
}

export default SCSS_Learn
