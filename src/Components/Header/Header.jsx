import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './Header.module.scss';

function Header(props) {
  const { isLogin, avatar, firstName, lastName } = props
  const [showTopMenu, setShowTopMenu] = useState(false)
  const [ showMusicMenu, setShowMusicMenu ] = useState(false)

  const clickHandler = () => {
    setShowTopMenu((prev) => !prev)
  }

  const clickHandlerMusic = () => {
    setShowMusicMenu((prev) => !prev)
  }
  return (
    <header className={s.main_header}>
      <div className={s.button_panel}>
        <div className={s.logo}>
          <i className="fab fa-vk" />
        </div>
        <div className={s.search}>
          <input placeholder="Поиск" />
        </div>
        <div className={s.noti}><i className="fas fa-bell" /></div>
        {isLogin ? <div onClick={clickHandlerMusic} className={s.music}>
          <i className="fas fa-music" />
          {showMusicMenu ? <div className={s.musicMenu}>
            <i class="fad fa-music-slash"></i>
            </div> : null}
          </div> : null}
        {isLogin ? <div onClick={clickHandler} className={s.logIn}><span>{firstName}</span><img src={avatar} alt="avatar" />
          { showTopMenu ? (<div className={s.topProfileMenu}>
            <button type="button">{firstName} {lastName}</button>
            <button type="button">Настройки</button>
            <button type="button">Помощь</button>
            <button type="button">Выйти</button>
          </div>) : null}
        </div> : null}
      </div>
    </header>
  );
}
function mapStateToProps(state) {
  return {
    isLogin: state.profileData.isLogin,
    avatar: state.profileData.user.avatar,
    firstName: state.profileData.user.firstName,
    lastName: state.profileData.user.lastName,
  }
}
export default connect(mapStateToProps, null)(Header);
