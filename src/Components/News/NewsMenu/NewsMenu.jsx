import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NewsMenu.module.css';

function NewsMenu() {
  return (
    <div className={s.DialogsMenu}>
      <div>
        <nav>
          <NavLink className={s.navLink} exact to='/feed' activeClassName={s.active}>Новости</NavLink>
          <NavLink className={s.navLinkUnder} to='/feed/photo' activeClassName={s.active}>Фотографии</NavLink>
          <NavLink className={s.navLinkUnder} to='/feed/video' activeClassName={s.active}>Видеозаписи</NavLink>
          <NavLink className={s.navLinkUnder} to='/feed/cast' activeClassName={s.active}>Подкасты</NavLink>
          <NavLink className={s.navLinkUnder} to='/feed/local' activeClassName={s.active}>Локал</NavLink>
          <NavLink className={s.navLinkUnder} to='/feed/virus' activeClassName={s.active}>Коронавирус</NavLink>
          <NavLink className={s.navLink} to='/feed/recom' activeClassName={s.active}>Рекомендации</NavLink>
          <NavLink className={s.navLink} to='/feed/searth' activeClassName={s.active}>Поиск</NavLink>
          <hr />
          <NavLink className={s.navLink} to='/feed/like' activeClassName={s.active}>Понравилось</NavLink>
          <NavLink className={s.navLink} to='/feed/refresh' activeClassName={s.active}>Обновления</NavLink>
          <NavLink className={s.navLink} to='/feed/coments' activeClassName={s.active}>Коментарии</NavLink>
        </nav>
      </div>
    </div>
  );
}
export default NewsMenu;