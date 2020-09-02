import React from 'react';
import s from './SideBar.module.css';
import { NavLink } from 'react-router-dom';
function SideBar() {
  return (
    <div className={s.side_bar}>
      <nav>
        <NavLink className={s.navLink} to='/profile' activeClassName={s.active}><li><i class="fa fa-home" aria-hidden="true"></i><span>Моя страница</span></li></NavLink>
        <NavLink className={s.navLink} to='/news' activeClassName={s.active}><li><i class="fa fa-newspaper-o" aria-hidden="true"></i><span>Новости</span></li></NavLink>
        <NavLink className={s.navLink} to='/friends' activeClassName={s.active}><li><i class="fa fa-user" aria-hidden="true"></i><span>Друзья<span className={s.count} >3</span></span></li></NavLink>
        <NavLink className={s.navLink} to='/dialogs' activeClassName={s.active}><li><i class="fa fa-comments" aria-hidden="true"></i><span>Сообщения</span></li></NavLink>
        <NavLink className={s.navLink} to='/photos' activeClassName={s.active}><li><i class="fa fa-camera" aria-hidden="true"></i><span>Фотографии</span></li></NavLink>
        <NavLink className={s.navLink} to='/music' activeClassName={s.active}><li><i class="fa fa-music" aria-hidden="true"></i><span>Музыка</span></li></NavLink>
        <NavLink className={s.navLink} to='/video' activeClassName={s.active}><li><i class="fa fa-video-camera" aria-hidden="true"></i><span>Видео</span></li></NavLink>
        <NavLink className={s.navLink} to='/clips' activeClassName={s.active}><li><i class="fa fa-film" aria-hidden="true"></i><span>Клипы</span></li></NavLink>
        <NavLink className={s.navLink} to='/game' activeClassName={s.active}><li><i class="fa fa-gamepad" aria-hidden="true"></i><span>Игры</span></li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='/pay' activeClassName={s.active}><li><i class="fa fa-usd" aria-hidden="true"></i><span>VK Pay</span></li></NavLink>
        <NavLink className={s.navLink} to='/work' activeClassName={s.active}><li><i class="fa fa-briefcase" aria-hidden="true"></i><span>Работа</span></li></NavLink>
        <NavLink className={s.navLink} to='/pay' activeClassName={s.active}><li><i class="fa fa-usd" aria-hidden="true"></i><span>Git Hub</span></li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='/goods' activeClassName={s.active}><li><i class="fa fa-shopping-bag" aria-hidden="true"></i><span>Товары</span></li></NavLink>
        <NavLink className={s.navLink} to='/bookmarks' activeClassName={s.active}><li><i class="fa fa-star" aria-hidden="true"></i><span>Закладки</span></li></NavLink>
        <NavLink className={s.navLink} to='/docs' activeClassName={s.active}><li><i class="fa fa-file" aria-hidden="true"></i><span>Документы</span></li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='/virus' activeClassName={s.active}><li><i class="fa fa-asterisk" aria-hidden="true"></i><span>Коронавирус</span></li></NavLink>
        <hr></hr>
        <NavLink className={s.navLink} to='/like' activeClassName={s.active}><li><i class="fa fa-hashtag" aria-hidden="true"></i><span>Популярное</span></li></NavLink>
      </nav>
      <div className={s.aside_block}>
        <div className={s.advertising}>Реклама</div><hr />
        <div className={s.advertising}>Реклама</div><hr />
        <div className={s.advertising}>Реклама</div>
      </div>
    </div>
  )
}
export default SideBar;