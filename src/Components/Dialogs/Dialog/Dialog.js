import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

function Dialog(props) {
  return (
    <NavLink className={s.link} to={`/dialogs/${props.id}`}>
      <div className={s.dialog}>
        <img alt='avatar' src='https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' />
        <div className={s.info}>
          <span>{props.name}</span>
          <span className={s.lastMessage}>{props.lastMessage}</span>
          <span className={s.time}>Сегодня</span>
        </div>
      </div>
    </NavLink>
  );
}
export default Dialog;