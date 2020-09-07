import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend'
import { NavLink } from 'react-router-dom';

function Friends(props) {

  let renderFriend = props.store.getState().friendsData.friends.map((obj) => {
    return <Friend id={obj.id} name={obj.name}/>
  })

  return (
    <div className={s.friendsMain}>
    
      <div className={s.newFriendsBlock}>
        <div className={s.friendsRequestsHead}>
          <span>Заявки в друзья</span>
          <span>Показать все</span>
        </div>
        <hr></hr>
        <div className={s.friendsRequests}>Новый друг</div>
      </div >

      <div className={s.friendsList}>
        <div className={s.friendsListHead}>
          <div>
            <NavLink className={s.navLink} to='/friends/s'>Все друзья</NavLink>
            <NavLink className={s.navLink} to='/friends/d'>Друзья онлайн</NavLink>
          </div>
          <button>Найти друзей</button>
        </div>
        <hr></hr>
        
        {renderFriend}

      </div>
    </div>
  );
}
export default Friends;