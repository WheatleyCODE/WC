import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';

function Dialogs({ store }) {
  const dialogElem = store.getState().dialogsData.dialogs.map((obj) => {
    return <Dialog lastMessage={obj.lastMessage} name={obj.name} id={obj.id} />
  })

  return (
    <div className={s.dialogs}>
      <div className={s.searchDialogs}>
        <input placeholder="Поиск..."></input>
      </div>

      {dialogElem}
    </div>
  )
}
export default Dialogs;
