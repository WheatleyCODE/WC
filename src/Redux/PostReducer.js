const ADD_NEW_TEXT_POST = 'ADD-NEW-TEXT-POST'

export const addNewTextPostActionCreator = (text) => {
    return {type: ADD_NEW_TEXT_POST, newText: text}
  }

export const postReducer = (state, action) => {
    if (action.type === ADD_NEW_TEXT_POST) {
    state.newPostText = action.newText
    } 
return state
}
export default postReducer