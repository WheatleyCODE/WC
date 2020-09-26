import reduxThunk from 'redux-thunk'
import profileReducer from './ProfileReducer';
import friendsReducer from './FriendsReducer';
import dialogsReducer from './DialogsReducer';
import experimentsPageCounterReducer from './ExperimentsPageCounterReducer'
const { createStore, combineReducers, applyMiddleware } = require('redux');

let reducers = combineReducers({
  profileData: profileReducer,
  friendsData: friendsReducer,
  dialogsData: dialogsReducer,
  ExperimentsCounterData: experimentsPageCounterReducer,
})

let store = createStore(reducers, applyMiddleware( reduxThunk ))

export default store
