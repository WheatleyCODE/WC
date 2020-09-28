import React from 'react';
import s from './PhotosPage.module.css';

function PhotosPage() {
  return (
    <div className={s.photosMain}>
      <div className={s.alboms}>Мои альбомы</div>
      <div className={s.photos}>Мои фотографии</div>
    </div>
  );
}
export default PhotosPage;
