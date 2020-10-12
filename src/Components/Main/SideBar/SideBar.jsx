import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

function SideBar() {
  return (
    <div className={s.side_bar}>
      <nav>
        <NavLink className={s.navLink} to="/profile" activeClassName={s.active}>
          <li>
            <i className="fas fa-home" /><span>Моя страница</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/feed" activeClassName={s.active}>
          <li>
            <i className="fal fa-newspaper" /><span>Новости</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/dialogs" activeClassName={s.active}>
          <li>
            <i className="fas fa-comments" /><span>Сообщения</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/friends" activeClassName={s.active}>
          <li>
            <i className="fas fa-user-friends" /><span>Друзья<span className={s.count}>3</span></span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/groups" activeClassName={s.active}>
          <li>
            <i className="fas fa-users" /><span>Сообщества</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/photos" activeClassName={s.active}>
          <li>
            <i className="far fa-camera-retro" /><span>Фотографии</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/music" activeClassName={s.active}>
          <li>
            <i className="fas fa-music" /><span>Музыка</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/video" activeClassName={s.active}>
          <li>
            <i className="fas fa-video" /><span>Видео</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/clips" activeClassName={s.active}>
          <li>
            <i className="far fa-film-alt" /><span>Клипы</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/experiments" activeClassName={s.active}>
          <li>
            <i className="far fa-volleyball-ball" /><span>Experiments</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/games" activeClassName={s.active}>
          <li>
            <i className="fas fa-gamepad" /><span>Игры</span>
          </li>
        </NavLink>
        <hr />
        <NavLink className={s.navLink} to="/pay" activeClassName={s.active}>
          <li>
            <i className="far fa-money-bill-wave" /><span>VK Pay</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/work" activeClassName={s.active}>
          <li>
            <i className="far fa-briefcase" /><span>Работа</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/pay" activeClassName={s.active}>
          <li>
            <i className="fab fa-github" /><span>Git Hub</span>
          </li>
        </NavLink>
        <hr />
        <NavLink className={s.navLink} to="/market" activeClassName={s.active}>
          <li>
            <i className="fas fa-shopping-bag" /><span>Маркет</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/bookmarks" activeClassName={s.active}>
          <li>
            <i className="fas fa-star" /><span>Закладки</span>
          </li>
        </NavLink>
        <NavLink className={s.navLink} to="/docs" activeClassName={s.active}>
          <li>
            <i className="fas fa-file-alt" /><span>Документы</span>
          </li>
        </NavLink>
        <hr />
        <NavLink className={s.navLink} to="/virus" activeClassName={s.active}>
          <li>
            <i className="fas fa-virus" /><span>Коронавирус</span>
          </li>
        </NavLink>
        <hr />
        <NavLink className={s.navLink} to="/like" activeClassName={s.active}>
          <li>
            <i className="fas fa-hashtag" /><span>Популярное</span>
          </li>
        </NavLink>

        <NavLink className={s.navLink} to="/" activeClassName={s.active}>
          <li>
            <i className="fas fa-hashtag" /><span>TestBlock</span>
          </li>
        </NavLink>

        <NavLink
          className={s.navLink}
          to={{
            // Параметры ссылки
            pathname: '/',
            search: '?a=1b=2',
            hash: 'wfm-hash',
          }}
          activeClassName={s.active}
        >
          <li>
            <i className="fas fa-hashtag" /><span>TestBlockGet</span>
          </li>
        </NavLink>
      </nav>
      <div className={s.aside_block}>
        <div className={s.advertising}>Реклама</div><hr />
        <div className={s.advertising}>Реклама</div><hr />
        <div className={s.advertising}>Реклама</div>
      </div>
    </div>
  )
}
export default SideBar
