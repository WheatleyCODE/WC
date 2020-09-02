import React from 'react';
import s from './Main.module.css';
import SideBar from './SideBar/SideBar'
import NarrowColumnWrap from './NarrowColumnWrap/NarrowColumnWrap'
import WideColumn from './WideColumn/WideColumn'
import Dialogs from '../Dialogs/Dialogs'
import DialogsMenu from '../Dialogs/DialogsMenu/DialogsMenu'
import { Route, BrowserRouter } from 'react-router-dom';
import News from '../News/News';
import NewsMenu from '../News/NewsMenu/NewsMenu';
import Friends from '../Friends/Friends';
import FriendsMenu from '../Friends/FriendsMenu/FriendsMenu';

function Main() {
  return (
    <BrowserRouter>
      <div className={s.main_div}>
        <SideBar />
        <Route path='/profile' component={NarrowColumnWrap} />
        <Route path='/profile' component={WideColumn} />

        <Route path='/dialogs' component={Dialogs} />
        <Route path='/dialogs' component={DialogsMenu} />

        <Route path='/news' component={News} />
        <Route path='/news' component={NewsMenu} />

        <Route path='/friends' component={Friends} />
        <Route path='/friends' component={FriendsMenu} />

      </div>
    </BrowserRouter>
  )
}
export default Main;