import React from 'react';
import s from './Music.module.css';

function Music() {
  return (
    <div className={s.musicMain}>
      <div className={s.activeTrac}>Активный трек</div>
      <div className={s.player}>Плейер и треки</div>
    </div>
  );

}
export default Music;