import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';


function Dialogs() {

  let dialogsData = [
    {id: 'qb_wht', name: 'Дмитрий', lastMessage: 'Го строить мост?'},
    {id: 'best', name: 'Леха', lastMessage: 'Как дела?'},
    {id: 'easport', name: 'Леголас', lastMessage: 'Аниме го'},
    {id: '21521', name: 'Акакий', lastMessage: 'Что как'},
    {id: 'bear', name: 'Бурый', lastMessage: 'Привет'},
    {id: 'king', name: 'Кагияма Тобио', lastMessage: 'Мог сыграть лучше'},
    {id: 'sun', name: 'Хината Шоё', lastMessage: 'Спасибо'}
  ]
  let dialogElem = dialogsData.map((obj) => {
    return <Dialog lastMessage={obj.lastMessage} name={obj.name} id={obj.id} />
  })

  return (
    <div className={s.dialogs}>
      <div className={s.searchDialogs}>
        <input placeholder='Поиск...'></input>
      </div>

      {dialogElem}
      
    </div>
  )
}
export default Dialogs;
