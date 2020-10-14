import React from 'react'
import './Post.scss'

const Post = ({ param }) => {
  console.log(param)
  return (
    <div className="postMain">
      <h1>{param.text}</h1>
    </div>
  )
}

export default Post
