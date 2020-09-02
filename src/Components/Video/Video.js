import React from 'react';
import s from './Video.module.css';

function Video() {
  return (
    <div className={s.videoMain}>
      <div className={s.video}>Видео</div>
      <div className={s.videoCatalog}>Каталог видео</div>
    </div>
  );

}
export default Video;