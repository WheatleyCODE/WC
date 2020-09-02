import React from 'react';
import s from './WideColumn.module.css';
import Post from './Post/Post'

function WideColumn() {

  let postData = [
    {id: '#1337', message: 'Hey this is post'},
    {id: '#1338', message: 'The best technplpgies'},
    {id: '#1339', message: '42? Realy? Cool!'},
  ]
  let posts = postData.map(obj => <Post message={obj.message} id={obj.id} />)
  return (
      <div className={s.wide_column}>
        <div className={s.info_block}></div>
        <div className={s.photo_block}></div>
        <div className={s.news_block}></div>
        
        {posts}
      </div>
  )
}
export default WideColumn;