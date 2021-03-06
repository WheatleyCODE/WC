import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsMenu.module.css';

function DialogsMenu() {
  return (
    <div className={s.DialogsMenu}>
      <div>
        <nav>
          <NavLink className={s.navLink} exact to="/dialogs" activeClassName={s.active}>Все сообщения</NavLink>
          <NavLink className={s.navLink} to="/dialogs/unread" activeClassName={s.active}>Непрочитанные</NavLink>
          <NavLink className={s.navLink} to="/dialogs/vaz" activeClassName={s.active}>Важные</NavLink>
        </nav>
      </div>
    </div>
  )
}
export default DialogsMenu;
