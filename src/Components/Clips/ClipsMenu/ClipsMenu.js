import React from 'react';
import s from './ClipsMenu.module.css';
import { NavLink } from 'react-router-dom';


function ClipsMenu() {
  return (
    <div className={s.clipsMenu}>
      <div>
      <nav>
        <NavLink className={s.navLink} exact to='/clips' activeClassName={s.active}>Клип1</NavLink>
        <NavLink className={s.navLink} to='/clips/unread' activeClassName={s.active}>Клип2</NavLink>
        <NavLink className={s.navLink} to='/clips/vaz' activeClassName={s.active}>Клип3</NavLink>
        </nav>
      </div>
    </div>
  )
}
export default ClipsMenu;