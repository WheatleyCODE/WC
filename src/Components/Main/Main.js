import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import s from './Main.module.css';
import SideBar from './SideBar/SideBar'
import NarrowColumnWrap from './NarrowColumnWrap/NarrowColumnWrap'
import WideColumn from './WideColumn/WideColumn'
import Dialogs from '../Dialogs/Dialogs.jsx'
import DialogsMenu from '../Dialogs/DialogsMenu/DialogsMenu.jsx'
import News from '../News/News';
import NewsMenu from '../News/NewsMenu/NewsMenu';
import Friends from '../Friends/Friends';
import FriendsMenu from '../Friends/FriendsMenu/FriendsMenu';
import Photos from '../Photos/Photos';
import Music from '../Music/Music';
import Video from '../Video/Video';
import ExperimentsPage from '../ExperimentsPage/ExperimentsPage';
import Clips from '../Clips/Clips';
import ClipsMenu from '../Clips/ClipsMenu/ClipsMenu.jsx';
import Groups from '../Groups/Groups';
import GroupsMenu from '../Groups/GroupsMenu/GroupsMenu';
import Authorization from '../Authorization/Authorization.jsx'
import TestBlock from './TestBlock/TestBlock'
import Games from '../Games/Games';
import Daggers from '../Games/Daggers/Daggers';
import MarketPage from '../MarketPage/MarketPage';

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
// Создаём кантейнер <ClipsConteiner> </ClipsConteiner>
const ClipsConteiner = connect(mapStateToProps, mapDispatchToProps) (Clips)
// Которая отрисует нужную компоненту(Clips) в обертке (ClipsConteiner)
function Main(props) {
  return (
      <div className={s.main_div}>
        <SideBar />
        {/* <Switch> */}
        <Route path='/authorization' component={Authorization} />
        <Route path='/' exact component={TestBlock} />
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
        <Route path='/experiments' component={ExperimentsPage} />
        
        <Route path='/clips' render={ () => <ClipsConteiner></ClipsConteiner>} />
        <Route path='/clips' component={ClipsMenu} />

        <Route path='/games' component={Games} />
        <Route path='/daggers' component={Daggers}/>
        <Route path='/market' component={MarketPage}/>

        {/* Обработка страницы 404 */}
        {/* Так же ещё есть редирект */}
        {/* <Route Redirect render={ () => <h1 style={ {color:'red', marginTop:'200px', textAlign: 'center', }}>Ошибка 404</h1>} />
        </Switch> */}
      </div>
  )
}
export default Main;