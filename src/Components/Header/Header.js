import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';



function Header() {
  return (
    <header className= {s.main_header}>
      <div className= {s.button_panel}>
        <div className={s.logo}>
          <i className="fa fa-vk" aria-hidden="true"></i>
        </div>
        <div className={s.search}>
          <input placeholder='Поиск'></input>
        </div>
        <div className={s.noti}><i className="fa fa-bell" aria-hidden="true"></i></div>
        <div className={s.music}>music</div>
        <div className={s.logIn}><div className={s.AuthorizationMain}><NavLink className={s.navLink} to='/authorization'><span>Войти</span></NavLink></div></div>
      </div>
    </header>
  );
}
export default Header;