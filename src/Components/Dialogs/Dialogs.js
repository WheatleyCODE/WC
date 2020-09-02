import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';


function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.searchDialogs}>
        <input placeholder='Поиск...'></input>
      </div>
      <Dialog />
      <Dialog />
      <Dialog />
      <Dialog />
      <Dialog />
      <Dialog />
      <Dialog />
      <Dialog />
      <Dialog />
      <Dialog />
    </div>
  )
}
export default Dialogs;