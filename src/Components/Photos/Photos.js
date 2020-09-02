import React from 'react';
import s from './Photos.module.css';

function Photos() {
  return (
    <div className={s.photosMain}>
      <div className={s.alboms}>Мои альбомы</div>
      <div className={s.photos}>Мои фотографии</div>
    </div>
  );

}
export default Photos;