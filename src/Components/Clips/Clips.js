import React from 'react';
import s from './Clips.module.css';


function Clips(props) {
  console.log(props)
  return (
    <div className={s.сlipsMain}>
      <div className={s.clipshDialogs}>
        Клипы
      </div>
    </div>
  )
}
export default Clips;
