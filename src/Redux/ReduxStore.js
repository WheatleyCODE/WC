import profileReducer from "./ProfileReducer";


const { createStore, combineReducers } = require("redux");

f
let reducers = combineReducers({
    profileReducer: profileReducer,
})
let store = createStore()

export default store