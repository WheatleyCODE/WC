import reduxThunk from 'redux-thunk'
import profileReducer from './ProfileReducer';
import friendsReducer from './FriendsReducer';
import dialogsReducer from './DialogsReducer';
import experimentsPageCounterReducer from './ExperimentsPageCounterReducer'
import marketPage_Goods_Reducer from './MarketPage_Goods_Reducer'
import experimentsPage_Quiz_Reducer from './ExperimentsPage_Quiz_Reducer'

const {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} = require('redux');

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action)
//   console.log('Middleware', store.getState())
//   return result
// }

const reducers = combineReducers({
  profileData: profileReducer,
  friendsData: friendsReducer,
  dialogsData: dialogsReducer,
  experimentsCounterData: experimentsPageCounterReducer,
  experimentsQuizData: experimentsPage_Quiz_Reducer,
  marketPageGoodsData: marketPage_Goods_Reducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store
