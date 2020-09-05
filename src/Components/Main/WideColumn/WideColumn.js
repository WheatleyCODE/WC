import React from 'react';
import s from './WideColumn.module.css';
import Post from './Post/Post'
import { addNewTextPostActionCreator, addPostActionCreator } from '../../../Redux/store';

function WideColumn(props) {

  
 
  let newPostElement = React.createRef();

  function onChangefn() {
    let text = newPostElement.current.value
    props.store.dispatch( addNewTextPostActionCreator(text) )
  }

  function printPost() {
    props.store.dispatch( addPostActionCreator() )
  }

  let posts = props.store.state.postData.map(obj => <Post message={obj.message} id={obj.id} />)
  
  return (
      <div className={s.wide_column}>
        <div className={s.info_block}></div>
        <div className={s.photo_block}></div>
        <div className={s.news_block}>
          <textarea onChange={onChangefn} value={props.store.state.newPostText} ref={newPostElement}></textarea>
          <button onClick={printPost} >Опубликовать</button>
          
        </div>
        <div className={s.postColumn}>
          {posts}
        </div>
      </div>
  )
}
export default WideColumn;