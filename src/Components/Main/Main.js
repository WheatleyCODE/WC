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
import Friends from '../Friends/Friends.jsx';
import FriendsMenu from '../Friends/FriendsMenu/FriendsMenu.jsx';
import Photos from '../PhotosPage/PhotosPage';
import Music from '../MusicPage/MusicPage';
import Video from '../VideoPage/VideoPage';
import ExperimentsPage from '../ExperimentsPage/ExperimentsPage.jsx';
import Clips from '../Clips/Clips';
import ClipsMenu from '../Clips/ClipsMenu/ClipsMenu.jsx';
import Groups from '../Groups/Groups.jsx';
import GroupsMenu from '../Groups/GroupsMenu/GroupsMenu.jsx';
import Authorization from '../AuthorizationPage/AuthorizationPage'
import TestBlock from './TestBlock/TestBlock'
import Games from '../GamesPage/GamesPage';
import Daggers from '../GamesPage/Daggers/Daggers.jsx';
import MarketPage from '../MarketPage/MarketPage';
import SCSS_Learn from '../../Learning/SCSS_Learn/SCSS_Learn'
import Hooks_Learn from '../../Learning/Hooks_Learn/Hooks_Learn'

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
        <Route path='/scss' component={SCSS_Learn} />
        <Route path='/hooks' component={Hooks_Learn} />

        {/* Обработка страницы 404 */}
        {/* Так же ещё есть редирект */}
        {/* <Route Redirect render={ () => <h1 style={ {color:'red', marginTop:'200px', textAlign: 'center', }}>Ошибка 404</h1>} />
        </Switch> */}
      </div>
  )
}
export default Main;