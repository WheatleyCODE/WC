import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

function Friend(props) {
  let alertId = () => {
    alert(props.id)
  }
  return (
    
        <NavLink className={s.link} to={`#`}>
          <div onClick={alertId} className={s.friend}>
            <img alt='avatar' src='https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' />
            <div className={s.info}>
              <span>{props.name}</span>
              <span className={s.writeMessage}>Написать сообщение</span>
              <span className={s.menu}>...</span>
            </div>
          </div>
        </NavLink>
        
  );
}
export default Friend;