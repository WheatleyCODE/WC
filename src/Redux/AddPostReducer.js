const ADD_POST = 'ADD-POST'
const ADD_NEW_TEXT_POST = 'ADD-NEW-TEXT-POST'

export const addNewTextPostActionCreator = (text) => {
    return {type: ADD_NEW_TEXT_POST, newText: text}
  }
export const addPostActionCreator = () => ({type: ADD_POST})

const addPostReducer = (state, action) => {
    if (action.type === ADD_POST) {
        
        let arr = state.profileData.posts
        let newPost = {
            id: arr[arr.length - 1].id + 1,
            message: state.profileData.newPostText
        }
        if (newPost.message !== '') {
            arr.push(newPost)
            state.profileData.newPostText = ''
        } 
    } else if (action.type === ADD_NEW_TEXT_POST) {
        state.profileData.newPostText = action.newText
    } 
    
return state
}

export default addPostReducer