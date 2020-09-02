import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <header className= {s.main_header}>
      <div className= {s.button_panel}>
        <div className={s.logo}>VK</div>
        <div className={s.search}>
          <input placeholder='Поиск'></input>
        </div>
        <div className={s.noti}>not</div>
        <div className={s.music}>m</div>
        <div className={s.logIn}>log</div>
      </div>
    </header>
  );
}
export default Header;