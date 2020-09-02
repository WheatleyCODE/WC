import React from 'react';
import s from './Dialog.module.css';

function Dialog() {
  return (
    <div className={s.dialog}>
      <img alt='avatar' src='https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false'/>
      <div className={s.info}>
        <span>Путин Путин</span>
        <span className={s.lastMessage}>Го строить мост?</span>
        <span className={s.time}>Сегодня</span>
      </div>
    </div>
  );
}
export default Dialog;