import React from 'react'
import { NavLink } from 'react-router-dom'
import './TestBlock.scss'

const TestBlock = (props) => {
  console.log(props)

  // Програмная навигация когда есть параметры пропс
  // const OnButtonClik = () => {
  //   props.history.push('/')
  // }

  return (
    <div className="testBlock">
      <NavLink to="/profile">
        <button type="button">Мейн</button>
      </NavLink>
    </div>
  )
}
export default TestBlock
