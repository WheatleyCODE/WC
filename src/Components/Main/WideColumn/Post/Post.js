import React from 'react';
import s from './Post.module.css';

function Post(props) {

  return (
        <div className={s.post_block}>
          <h4>{props.message}</h4>
          <h5>{props.id}</h5>
        </div>
  )
}
export default Post;