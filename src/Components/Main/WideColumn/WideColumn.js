import React from 'react';
import s from './WideColumn.module.css';
import Post from './Post/Post'

function WideColumn(props) {
  let newPostElement = React.createRef();

  function onChangefn() {
    let text = newPostElement.current.value
    props.addNewTextPost(text)
    
  }

  function printPost() {
    props.addPost()
  }
  let posts = props.postData.map(obj => <Post message={obj.message} id={obj.id} />)

  return (
      <div className={s.wide_column}>
        <div className={s.info_block}></div>
        <div className={s.photo_block}></div>
        <div className={s.news_block}>

          <textarea onChange={onChangefn} value={props.newPostText} ref={newPostElement}></textarea>
          <button onClick={printPost} >Опубликовать</button>
          
        </div>
        <div className={s.postColumn}>
          {posts}
        </div>
      </div>
  )
}
export default WideColumn;