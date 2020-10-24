import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewStatusActionCreator, addNewTextPostActionCreator, addPostActionCreator } from 'Redux/actions';
import s from './WideColumn.module.scss';
import Post from './Post/Post'
import UserPhoto from './UserPhoto/UserPhoto'

function WideColumn(props) {
  const user = { ...props.profileData.user }
  const photo = [...props.profileData.photo]
  const posts = [...props.profileData.posts.posts]
  const [moreInfo, setMoreInfo] = useState(false)
  const [changeStatus, setChangeStatus] = useState(false)
  const userPost = posts.map((obj) => {
    return <Post key={obj.id} param={obj} />
  })
  const moreInfoContent = (
    <div>
      <span className={s.university}>Образование: {user.university}</span>
      <span className={s.work}>Занятие: {user.work}</span>
      <span className={s.languages}>Языки: {user.languages.join(' ')}</span>
      <span className={s.university}>Образование: {user.university}</span>
      <span className={s.work}>Занятие: {user.work}</span>
      <span className={s.languages}>Языки: {user.languages.join(' ')}</span>
    </div>
  )
  const showMoreInfo = () => {
    setMoreInfo((prev) => !prev)
  }

  const onChangeHandler = (event) => {
    props.addNewText(event.target.value)
  }

  const changeStatusClickHandler = () => {
    setChangeStatus((prev) => !prev)
  }
  const statusChangeHandler = (event) => {
    props.addNewStatus(event.target.value)
  }

  return (
    <div className={s.wide_column}>
      <div className={s.info_block}>
        <div className={s.nameBlock}>
          <span className={s.name}>{user.firstName} {user.lastName}</span>
          <button type="button" onClick={changeStatusClickHandler} className={s.status}>{user.userStatus}</button>
          { changeStatus
            ? <div className={s.changeStatus}>
                <input onChange={statusChangeHandler} value={user.userStatus} type="text" />
                  <button onClick={changeStatusClickHandler} type="button">Сохранить</button>
              </div>
            : null }

        </div>
        <hr />
        <div className={s.moreInfo}>
          <span className={s.sity}>Город: {user.sity}</span>
          <button onClick={showMoreInfo} type="button">Показать дополнительную информацию</button>
        </div>
        <div className={s.more}>
          {moreInfo ? moreInfoContent : null}
        </div>
        <hr />
        <div className={s.numbersBlock}>
          <span className={s.numbers}>10 <br /> <span>Друзей</span></span>
          <span className={s.numbers}>20 <br /> <span>Подписчика</span></span>
          <span className={s.numbers}>40 <br /> <span>Фотографий</span></span>
          <span className={s.numbers}>50 <br /> <span>Видео</span></span>
        </div>
      </div>
      <div className={s.photo_block}>
        <span>Фотографии {user.firstName}: {photo.length}</span>
        <div className={s.photoContainer}>
          <UserPhoto photo={photo} />
        </div>
      </div>
      <div className={s.news_block}>
        <div className={s.avatarBlock}>
          <img src={user.avatar} alt="avatar" />
        </div>
        <input placeholder="Что у вас нового?" value={props.profileData.posts.postText} onChange={onChangeHandler} />
        <div className={s.storyPanel}>
          <button type="button"><i className="fal fa-camera-alt" /></button>
          <button type="button"><i className="fal fa-play-circle" /></button>
          <button type="button"><i className="fal fa-music" /></button>
          <button type="button"><i className="fal fa-newspaper" /></button>
          <button className={s.pushContent} type="button" onClick={() => { props.addPost() }}>Опубликовать</button>
        </div>
      </div>
      <div className={s.postColumn}>
        {userPost}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    profileData: state.profileData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    addNewText: (text) => dispatch(addNewTextPostActionCreator(text)),
    addNewStatus: (text) => dispatch(addNewStatusActionCreator(text)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WideColumn);
