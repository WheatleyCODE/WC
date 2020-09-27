import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

function Dialog({ id, name, lastMessage }) {
  function alertId() {
    alert(id)
  }

  return (
    <NavLink className={s.link} to={`/dialogs/${id}`}>
      <div onClick={alertId} className={s.dialog}>
        <img alt='avatar' src='https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' />
        <div className={s.info}>
          <span>{name}</span>
          <span className={s.lastMessage}>{lastMessage}</span>
          <span className={s.time}>Сегодня</span>
        </div>
      </div>
    </NavLink>
  );
}
export default Dialog;
