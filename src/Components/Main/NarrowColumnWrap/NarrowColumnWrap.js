import React from 'react';
import s from './NarrowColumnWrap.module.css';
function NarrowColumnWrap() {
  return (
    <div className={s.narrow_column_wrap}>
        <div className={s.avatar_block}>
          <img src="https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1" alt="альтернативный текст" />
          <button className={s.redact_button}>Редактировать</button>
          <button>...</button>
        </div>
        <div className={s.param_block}></div>
        <div className={s.present_block}></div>
        <div className={s.friend_block}></div>
        <div className={s.subscribe_block}></div>
      </div>
  )
}
export default NarrowColumnWrap;