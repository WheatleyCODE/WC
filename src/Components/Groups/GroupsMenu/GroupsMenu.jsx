import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './GroupsMenu.module.css';

function GroupsMenu() {
  return (
    <div className={s.groupsMenu}>
      <div>
        <nav>
          <NavLink className={s.navLink} exact to="/groups" activeClassName={s.active}>Мои сообщества</NavLink>
          <NavLink className={s.navLink} to="/groups/events" activeClassName={s.active}>Мероприятия</NavLink>
          <NavLink className={s.navLink} to="/groups/catalog" activeClassName={s.active}>Поиск сообществ</NavLink>
          <NavLink className={s.navLink} to="/groups/recomend" activeClassName={s.active}>Рекомендации</NavLink>
          <hr />
          <NavLink className={s.navLink} to="/groups/popular" activeClassName={s.active}>Популярные сообщества</NavLink>
        </nav>
      </div>
    </div>
  );
}
export default GroupsMenu;
