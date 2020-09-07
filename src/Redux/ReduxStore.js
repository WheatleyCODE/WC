import profileReducer from "./ProfileReducer";
import friendsReducer from "./FriendsReducer";
import dialogsReducer from "./DialogsReducer";



const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profileData: profileReducer,
    friendsData: friendsReducer,
    dialogsData: dialogsReducer
})
let store = createStore(reducers)

window.st = store

export default store