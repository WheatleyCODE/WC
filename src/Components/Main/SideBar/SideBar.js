import React from 'react';
import s from './SideBar.module.css';
import { NavLink } from 'react-router-dom';
function SideBar() {
  return (
    <div className={s.side_bar}>
      <nav>
        <NavLink className={s.navLink} to='profile' activeClassName={s.active}><li>Моя страница</li></NavLink>
        <NavLink className={s.navLink} to='news' activeClassName={s.active}><li>Новости</li></NavLink>
        <NavLink className={s.navLink} to='friends' activeClassName={s.active}><li>Друзья</li></NavLink>
        <NavLink className={s.navLink} to='dialogs' activeClassName={s.active}><li>Сообщения</li></NavLink>
        <NavLink className={s.navLink} to='photo' activeClassName={s.active}><li>Фотографии</li></NavLink>
        <NavLink className={s.navLink} to='music' activeClassName={s.active}><li>Музыка</li></NavLink>
        <NavLink className={s.navLink} to='video' activeClassName={s.active}><li>Видео</li></NavLink>
        <NavLink className={s.navLink} to='klips' activeClassName={s.active}><li>Клипы</li></NavLink>
        <NavLink className={s.navLink} to='game' activeClassName={s.active}><li>Игры</li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='pay' activeClassName={s.active}><li>VK Pay</li></NavLink>
        <NavLink className={s.navLink} to='work' activeClassName={s.active}><li>Работа</li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='goods' activeClassName={s.active}><li>Товары</li></NavLink>
        <NavLink className={s.navLink} to='bookmarks' activeClassName={s.active}><li>Закладки</li></NavLink>
        <NavLink className={s.navLink} to='docs' activeClassName={s.active}><li>Документы</li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='virus' activeClassName={s.active}><li>Коронавирус</li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='like' activeClassName={s.active}><li>Популярное</li></NavLink>
      </nav>
      <div className={s.aside_block}></div>
    </div>
  )
}
export default SideBar;