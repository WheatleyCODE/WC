import React from 'react';
import s from './NewsMenu.module.css';

function NewsMenu() {
  return (
    <div className={s.DialogsMenu}>
      <div>
        <a href='full'>Новости</a>
        <a href='full'>Фотографии</a>
        <a href='full'>Видеозаиси</a>
        <a href='full'>Подкасты</a>
        <a href='full'>local</a>
        <a href='full'>Коронавирус</a>
        <a href='full'>Рекомендации</a>
        <a href='full'>Поиск</a>
        <hr></hr>
        <a href='full'>Понравилось</a>
        <a href='full'>Обновления</a>
        <a href='full'>Коментарии</a>
      </div>
    </div>
  );
}
export default NewsMenu;