import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from 'Redux/actions';
import s from './WideColumn.module.scss';
import Post from './Post/Post'
import UserPhoto from './UserPhoto/UserPhoto'

function WideColumn(props) {
  const user = { ...props.profileData.user }
  const photo = [...props.profileData.photo]
  const posts = [...props.profileData.posts]
  console.log(posts)
  const [moreInfo, setMoreInfo] = useState(false)
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

  return (
    <div className={s.wide_column}>
      <div className={s.info_block}>
        <div className={s.nameBlock}>
          <span className={s.name}>{user.firstName} {user.lastName}</span>
          <span className={s.status}>{user.userStatus}</span>
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
        <textarea />
        <button type="button" onClick={() => { props.addPost() }}>Опубликовать</button>
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WideColumn);
