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
import Groups from '../Groups/Groups';
import GroupsMenu from '../Groups/GroupsMenu/GroupsMenu';
import { connect } from 'react-redux';


// Создаём кантейнер <ClipsConteiner> </ClipsConteiner>
let mapStateToProps = (state) => {
 return {
    dialogsData:state.dialogsData.dialogs
 }
}
let mapDispatchToProps = (dispatch) => {
  return {
   nameFunc:  () => {
     console.log('функция')
   }
 }
}
const ClipsConteiner = connect (mapStateToProps, mapDispatchToProps) (Clips)
//Которой нужно обвернуть нужную компоненту = Dialog


function Main(props) {
  return (
    <BrowserRouter>
      <div className={s.main_div}>
        <SideBar />
        <Route path='/profile' component={NarrowColumnWrap} />
        <Route path='/profile' render={ () => <WideColumn store = {props.store} />} />

        <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} />
        <Route path='/dialogs' component={DialogsMenu} />

        <Route path='/feed' component={News} />
        <Route path='/feed' component={NewsMenu} />

        <Route path='/groups' component={Groups} />
        <Route path='/groups' component={GroupsMenu} />

        <Route path='/friends' render={ () => <Friends store ={props.store}/>} />
        <Route path='/friends' component={FriendsMenu} />

        <Route path='/photos' component={Photos} />

        <Route path='/music' component={Music} />
        <Route path='/video' component={Video} />
        <Route path='/game' component={Games} />
        
        <ClipsConteiner><Route path='/clips' component={Clips} /></ClipsConteiner>
        <Route path='/clips' component={ClipsMenu} />

      </div>
    </BrowserRouter>
  )
}
export default Main;