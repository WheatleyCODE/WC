import React from 'react';
import s from './FriendsMenu.module.css';
import { NavLink } from 'react-router-dom';

function FriendsMenu() {
  return (
    <div className={s.friendsMenu}>
    <div>
      <nav>
      <NavLink className={s.navLink} exact to='/friends' activeClassName={s.active}>Мои друзья</NavLink>
      <NavLink className={s.navLink} to='/friends/request' activeClassName={s.active}>Заявки в друзья</NavLink>
      <NavLink className={s.navLink} to='/friends/book' activeClassName={s.active}>Телефонная книга</NavLink>
      <NavLink className={s.navLink} to='/friends/new' activeClassName={s.active}>Новые друзья</NavLink>
      <NavLink className={s.navLink} to='/friends/search' activeClassName={s.active}>Поиск друзей</NavLink>
      <hr />
      <NavLink className={s.navLink} to='/friends/list' activeClassName={s.active}>Списки друзей</NavLink>
      </nav>
    </div>
  </div>
  );
}
export default FriendsMenu;