import React from 'react';
import s from './Games.module.css';

function Games() {
  return (
    <div className={s.gameMain}>
      <div className={s.game}>Игры</div>
      <div className={s.vgameCatalog}>Каталог игр</div>
    </div>
  );

}
export default Games;