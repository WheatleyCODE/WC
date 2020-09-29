import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import s from './Main.module.css';
import SideBar from './SideBar/SideBar'
import NarrowColumnWrap from './NarrowColumnWrap/NarrowColumnWrap'
import WideColumn from './WideColumn/WideColumn'
import Dialogs from '../Dialogs/Dialogs'
import DialogsMenu from '../Dialogs/DialogsMenu/DialogsMenu'
import News from '../News/News';
import NewsMenu from '../News/NewsMenu/NewsMenu';
import Friends from '../Friends/Friends';
import FriendsMenu from '../Friends/FriendsMenu/FriendsMenu';
import Photos from '../PhotosPage/PhotosPage';
import Music from '../MusicPage/MusicPage';
import Video from '../VideoPage/VideoPage';
import ExperimentsPage from '../ExperimentsPage/ExperimentsPage';
import Clips from '../Clips/Clips';
import ClipsMenu from '../Clips/ClipsMenu/ClipsMenu';
import Groups from '../Groups/Groups';
import GroupsMenu from '../Groups/GroupsMenu/GroupsMenu';
import Authorization from '../AuthorizationPage/AuthorizationPage'
import TestBlock from './TestBlock/TestBlock'
import Games from '../GamesPage/GamesPage';
import Daggers from '../GamesPage/Daggers/Daggers';
import MarketPage from '../MarketPage/MarketPage';
import SCSS_Learn from '../../Learning/SCSS_Learn/SCSS_Learn'
import Hooks_Learn from '../../Learning/Hooks_Learn/Hooks_Learn'

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData.dialogs,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    nameFunc: dispatch({ type: 'ADD_ADD' }),
  }
}
// Создаём кантейнер <ClipsConteiner> </ClipsConteiner>
const ClipsConteiner = connect(mapStateToProps, mapDispatchToProps) (Clips)
// Которая отрисует нужную компоненту(Clips) в обертке (ClipsConteiner)
function Main({ store }) {
  return (
    <div className={s.main_div}>
      <SideBar />
      {/* <Switch> */}
      <Route path="/authorization" component={Authorization} />
      <Route path="/" exact component={TestBlock} />
      <Route path="/profile" component={NarrowColumnWrap} />
      <Route path="/profile" render={() => <WideColumn store={store} />} />

      <Route path="/dialogs" render={() => <Dialogs store={store} />} />
      <Route path="/dialogs" component={DialogsMenu} />

      <Route path="/feed" component={News} />
      <Route path="/feed" component={NewsMenu} />

      <Route path="/groups" component={Groups} />
      <Route path="/groups" component={GroupsMenu} />

      <Route path="/friends" render={() => <Friends store={store} />} />
      <Route path="/friends" component={FriendsMenu} />

      <Route path="/photos" component={Photos} />

      <Route path="/music" component={Music} />
      <Route path="/video" component={Video} />
      <Route path="/experiments" component={ExperimentsPage} />

      <Route path="/clips" render={() => <ClipsConteiner />} />
      <Route path="/clips" component={ClipsMenu} />

      <Route path="/games" component={Games} />
      <Route path="/daggers" component={Daggers} />
      <Route path="/market" component={MarketPage} />
      <Route path="/scss" component={SCSS_Learn} />
      <Route path="/hooks" component={Hooks_Learn} />

      {/* Обработка страницы 404 */}
      {/* Так же ещё есть редирект */}
      {/* <Route Redirect render={ () => <h1 style={ {color:'red', marginTop:'200px', textAlign: 'center', }}>Ошибка 404</h1>} />
      </Switch> */}
    </div>
  )
}
export default Main;