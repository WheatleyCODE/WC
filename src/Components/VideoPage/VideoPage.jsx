import React from 'react';
import s from './VideoPage.module.css';

function VideoPage() {
  return (
    <div className={s.videoMain}>
      <div className={s.video}>Видео</div>
      <div className={s.videoCatalog}>Каталог видео</div>
    </div>
  );
}
export default VideoPage;
