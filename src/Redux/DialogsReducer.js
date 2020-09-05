const ADD_POST = 'ADD-POST'

export const addPostActionCreator = () => ({type: ADD_POST})

const dialogsReducer = (state, action) => {
    if (action.type === ADD_POST) {
        
        let arr = state.postData
        let newPost = {
            id: arr[arr.length - 1].id + 1,
            message: state.newPostText
        }
        if (newPost.message !== '') {
            arr.push(newPost)
            state.newPostText = ''
        } 
    }
return state
}

export default dialogsReducer