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
import Photos from '../Photos/Photos';
import Music from '../Music/Music';
import Video from '../Video/Video';
import Games from '../Games/Games';
import Clips from '../Clips/Clips';
import ClipsMenu from '../Clips/ClipsMenu/ClipsMenu';

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

        <Route path='/photos' component={Photos} />

        <Route path='/music' component={Music} />
        <Route path='/video' component={Video} />
        <Route path='/game' component={Games} />
        
        <Route path='/clips' component={Clips} />
        <Route path='/clips' component={ClipsMenu} />



      </div>
    </BrowserRouter>
  )
}
export default Main;