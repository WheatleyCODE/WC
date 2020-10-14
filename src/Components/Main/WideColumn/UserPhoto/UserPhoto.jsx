import React from 'react'
import './UserPhoto.scss'

const UserPhoto = ({ photo }) => {
  const userPhoto = photo.length > 0
    ? photo.map((obj, index) => {
      if (index < 4) {
        return <div className="userPhotoMain" key={obj.id}><img src={obj.url} alt="Картинка" /></div>
      }
      return ''
    })
    : <h1>Сорре фото нет</h1>
  return(
    <>
      {userPhoto}
    </>
  )
}

export default UserPhoto
