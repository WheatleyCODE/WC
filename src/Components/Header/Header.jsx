import React from 'react';
import { connect } from 'react-redux';
import s from './Header.module.css';

function Header(props) {
  const { isLogin, avatar, firstName } = props
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
        {isLogin ? <div className={s.music}>music</div> : null}
        {isLogin ? <div className={s.logIn}><span>{firstName}</span><img src={avatar} alt="avatar" /></div> : null}
      </div>
    </header>
  );
}
function mapStateToProps(state) {
  return {
    isLogin: state.profileData.isLogin,
    avatar: state.profileData.user.avatar,
    firstName: state.profileData.user.firstName,
  }
}
export default connect(mapStateToProps, null)(Header);
