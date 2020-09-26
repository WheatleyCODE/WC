import profileReducer from './ProfileReducer';
import friendsReducer from './FriendsReducer';
import dialogsReducer from './DialogsReducer';
import experimentsPageCounterReducer from './ExperimentsPageCounterReducer'

const { createStore, combineReducers } = require('redux');

let reducers = combineReducers({
  profileData: profileReducer,
  friendsData: friendsReducer,
  dialogsData: dialogsReducer,
  ExperimentsCounterData: experimentsPageCounterReducer,
})

let store = createStore(reducers)

export default store
