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
import AuthorizationBlock from '../AuthorizationBlock/AuthorizationBlock'
import Games from '../GamesPage/GamesPage';
import Daggers from '../GamesPage/Daggers/Daggers';
import MarketPage from '../MarketPage/MarketPage';
import SCSSLearn from '../../Learning/SCSS_Learn/SCSS_Learn'
import HooksLearn from '../../Learning/Hooks_Learn/Hooks_Learn'
import ReactLearn from '../../Learning/React_Learn/React_Learn'
import BrandPage from '../MarketPage/BrandGoods/BrandGoods'

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
      {/* <Switch> */}
      <Route path="/authorization" component={Authorization} />
      <Route path="/" exact component={AuthorizationBlock} />
      <Route path="/profile" render={() => <div style={{ display: 'flex' }}><SideBar /><NarrowColumnWrap /><WideColumn /></div>} />
      <Route path="/dialogs" render={() => <div style={{ display: 'flex' }}><SideBar /><Dialogs store={store} /><DialogsMenu /></div>} />
      <Route path="/feed" render={() => <div style={{ display: 'flex' }}><SideBar /><News store={store} /><NewsMenu /></div>} />
      <Route path="/groups" render={() => <div style={{ display: 'flex' }}><SideBar /><Groups store={store} /><GroupsMenu /></div>} />
      <Route path="/friends" render={() => <div style={{ display: 'flex' }}><SideBar /><Friends store={store} /><FriendsMenu /></div>} />

      <Route path="/photos" render={() => <div style={{ display: 'flex' }}><SideBar /><Photos /></div>} />

      <Route path="/music" render={() => <div style={{ display: 'flex' }}><SideBar /><Music /></div>} />
      <Route path="/video" render={() => <div style={{ display: 'flex' }}><SideBar /><Video /></div>} />
      <Route path="/experiments" render={() => <div style={{ display: 'flex' }}><SideBar /><ExperimentsPage /></div>} />
      <Route path="/clips" render={() => <div style={{ display: 'flex' }}><SideBar /><ClipsConteiner /><ClipsMenu /></div>} />

      <Route path="/games" render={() => <div style={{ display: 'flex' }}><SideBar /><Games /></div>} />
      <Route path="/daggers" render={() => <div style={{ display: 'flex' }}><SideBar /><Daggers /></div>} />
      <Route path="/market" render={() => <div style={{ display: 'flex' }}><SideBar /><MarketPage /></div>} />

      <Route path="/scss" render={() => <div style={{ display: 'flex' }}><SideBar /><SCSSLearn /></div>} />
      <Route path="/hooks" render={() => <div style={{ display: 'flex' }}><SideBar /><HooksLearn /></div>} />
      <Route path="/react" render={() => <div style={{ display: 'flex' }}><SideBar /><ReactLearn /></div>} />

      <Route path="/market-Apple" render={() => <div style={{ display: 'flex' }}><SideBar /><BrandPage /></div>} />

      {/* Обработка страницы 404 */}
      {/* Так же ещё есть редирект */}
      {/* <Route Redirect render={ () => <h1 style={ {color:'red', marginTop:'200px', textAlign: 'center', }}>Ошибка 404</h1>} />
      </Switch> */}
    </div>
  )
}
export default Main;
