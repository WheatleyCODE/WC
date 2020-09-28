import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend.jsx'
import s from './Friends.module.css';

function Friends(props) {

  const renderFriend = props.store.getState().friendsData.friends.map((obj) => {
    return <Friend id={obj.id} name={obj.name}/>
  })

  return (
    <div className={s.friendsMain}>
      <div className={s.newFriendsBlock}>
        <div className={s.friendsRequestsHead}>
          <span>Заявки в друзья</span>
          <span>Показать все</span>
        </div>
        <hr />
        <div className={s.friendsRequests}>Новый друг</div>
      </div>

      <div className={s.friendsList}>
        <div className={s.friendsListHead}>
          <div>
            <NavLink className={s.navLink} to='/friends/s'>Все друзья</NavLink>
            <NavLink className={s.navLink} to='/friends/d'>Друзья онлайн</NavLink>
          </div>
          <button type="button">Найти друзей</button>
        </div>
        <hr />
        {renderFriend}
      </div>
    </div>
  );
}
export default Friends;
