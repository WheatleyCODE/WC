import React from 'react'
import './Post.scss'

const Post = ({ param }) => {
  console.log(param)
  return (
    <div className="postMain">
      <div className="authorBlock">
        <img alt='avatar' src={param.authorAvatar} />
        <div className="info">
          <span className="author">{param.authorFirstName} {param.authorLastName}</span>
          <span className="date">{param.date}</span>
          <span className="menu"><i className="far fa-caret-down" /></span>
        </div>
      </div>
      <p>{param.text}</p>
    </div>
  )
}

export default Post
