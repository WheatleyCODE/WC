import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <header className= {s.main_header}>
      <div className= {s.button_panel}>
        <div className={s.logo}>
          <i class="fa fa-vk" aria-hidden="true"></i>
        </div>
        <div className={s.search}>
          <input placeholder='Поиск'></input>
        </div>
        <div className={s.noti}><i class="fa fa-bell" aria-hidden="true"></i></div>
        <div className={s.music}>music</div>
        <div className={s.logIn}>logIn</div>
      </div>
    </header>
  );
}
export default Header;