import React from 'react';
import s from './DialogsMenu.module.css';


function DialogsMenu() {
  return (
    <div className={s.DialogsMenu}>
      <div>
        <a href='full'>Все сообщения</a>
        <a href='unread'>Непрочитанные</a>
        <a href='star'>Важные</a>
      </div>
    </div>
  )
}
export default DialogsMenu;