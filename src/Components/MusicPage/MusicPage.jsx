import React from 'react';
import s from './MusicPage.module.css';

function MusicPage() {
  return (
    <div className={s.musicMain}>
      <div className={s.activeTrac}>Активный трек</div>
      <div className={s.player}>Плейер и треки</div>
    </div>
  );
}
export default MusicPage;