import React from 'react';
import s from './WideColumn.module.css';
import Post from './Post/Post'

function WideColumn() {
  return (
      <div className={s.wide_column}>
        <div className={s.info_block}></div>
        <div className={s.photo_block}></div>
        <div className={s.news_block}></div>
        <Post message='Hey this is post' />
        <Post message='Really?' />
        <Post message='HAPPY BIRTHDAY!!?' />
      </div>
  )
}
export default WideColumn;