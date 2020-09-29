import reduxThunk from 'redux-thunk'
import ProfilePage_Reducer from './ProfilePage_Reducer';
import friendsReducer from './FriendsPage_Reducer';
import DialogsPage_Reducer from './DialogsPage_Reducer';
import ExperimentsPage_Counter_Reducer from './ExperimentsPage_Counter_Reducer'
import marketPage_Goods_Reducer from './MarketPage_Goods_Reducer'
import experimentsPage_Quiz_Reducer from './ExperimentsPage_Quiz_Reducer'

const {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} = require('redux');

const composeEnhancers =
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action)
//   console.log('Middleware', store.getState())
//   return result
// }

const reducers = combineReducers({
  profileData: ProfilePage_Reducer,
  friendsData: friendsReducer,
  dialogsData: DialogsPage_Reducer,
  experimentsCounterData: ExperimentsPage_Counter_Reducer,
  experimentsQuizData: experimentsPage_Quiz_Reducer,
  marketPageGoodsData: marketPage_Goods_Reducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store
