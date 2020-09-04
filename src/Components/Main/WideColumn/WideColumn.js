import React from 'react';
import s from './WideColumn.module.css';
import Post from './Post/Post'

function WideColumn(props) {

  let newPostElement = React.createRef();

  function alertPost() {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }
  
  let posts = props.postData.map(obj => <Post message={obj.message} id={obj.id} />)

  return (
      <div className={s.wide_column}>
        <div className={s.info_block}></div>
        <div className={s.photo_block}></div>
        <div className={s.news_block}>

          <textarea ref={newPostElement}></textarea>
          <button onClick={alertPost} >Опубликовать</button>
          
        </div>
        <div className={s.postColumn}>
          {posts}
        </div>
      </div>
  )
}
export default WideColumn;