import React from 'react'
import './UserCircle.scss'

const UserCircle = ({ elements, length = 6, text = true }) => {

  const userCircle = elements.map((obj, index) => {
    if (index < length) {
      return (
        <div key={obj.id} className="CircleMain">
          <img src={obj.url} alt={obj.id} />
          {text ? <span className="span">{obj.firstName}</span> : null}
        </div>
      )
    }
    return ''
  })
  return (
    <>
      {userCircle}
    </>
  )
}
export default UserCircle
