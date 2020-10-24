import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserCircle from './UserCircle/UserCircle'
import s from './NarrowColumnWrap.module.scss';

function NarrowColumnWrap(props) {
  const [alert, setAlert] = useState(true)
  const closeAlert = () => {
    setAlert((prev) => !prev)
  }

  const { avatar } = props
  const presents = [...props.profileData.presents]
  const friends = [...props.profileData.friends]
  const subscribe = [...props.profileData.subscribe]
  const alertMessage = props.profileData.alert

  return (
    <div className={s.narrow_column_wrap}>
      <div className={s.avatar_block}>
        <div className={s.avatarImage}>
          <img src={avatar} alt="альтернативный текст" />
          <button type="button" className={s.delete}>
            <i className="fas fa-times" />
          </button>
          <div className={s.avatarMenu}>
            <div><i className="fas fa-upload" /><span>Обновить фотографию</span></div>
            <div><i className="fal fa-draw-circle" /><span>Изменить миниатюру</span></div>
            <div><i className="fal fa-smile" /><span>Добавить эффекты</span></div>
          </div>
        </div>
        <button type="button" className={s.redact_button}>Редактировать</button>
        <button type="button"><i className="far fa-ellipsis-h" /></button>
      </div>
      {alert ? <div className={s.param_block}><span className={s.iconBlue}><i className="fad fa-school" /> {alertMessage}</span><button onClick={closeAlert} type="button"><i className="fas fa-times" /></button></div> : null}
      <div className={s.present_block}>
        <span>Подарки: {presents.length}</span>
        <UserCircle text={false} length={3} elements={presents} />
      </div>
      <div className={s.friend_block}>
        <span>Друзья: {friends.length}</span>
        <UserCircle elements={friends} />
        <hr />
        <span>Друзья online: {friends.length}</span>
        <UserCircle elements={friends} />
      </div>
      <div className={s.subscribe_block}>
        <span>Группы: {subscribe.length}</span>
        <UserCircle elements={subscribe} />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    avatar: state.profileData.user.avatar,
    profileData: state.profileData,
  }
}

export default connect(mapStateToProps, null)(NarrowColumnWrap);
