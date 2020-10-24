import React from 'react';
import s from './News.module.css';

function News() {
  return (
    <div className={s.newsMain}>
      <div className={s.newsUser}>
        NewsUser
      </div>

      <div className={s.history}>
        history
      </div>

      <div className={s.newsBlock}>
        Новости
      </div>
      <div className={s.newsBlock}>
        Новости
      </div>
      <div className={s.newsBlock}>
        Новости
      </div>
    </div>
  );
}
export default News;
