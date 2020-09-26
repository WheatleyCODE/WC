const ADD_POST = 'ADD-POST'
const ADD_NEW_TEXT_POST = 'ADD-NEW-TEXT-POST'

export const addNewTextPostActionCreator = (text) => (
  { type: ADD_NEW_TEXT_POST, newText: text }
)

export const addPostActionCreator = () => ({ type: ADD_POST })

const initialState = {
  posts: [
    { id: 1337, message: 'Hey this is post, really?' },
    { id: 1338, message: 'Новый старый пост' },
  ],
  newPostText: '',
}

// const profileReducer = (state = initialState, action) => {
//   if (action.type === ADD_POST) {
//     const arr = state.posts
//     const newPost = {
//       id: arr[arr.length - 1].id + 1,
//       message: state.newPostText,
//     }
//     if (newPost.message !== '') {
//       arr.push(newPost)
//       state.newPostText = ''
//     }
//   } else if (action.type === ADD_NEW_TEXT_POST) {
//     state.newPostText = action.newText
//   }
//   return state
// }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPosts = [...state.posts]
      const newPost = {
        id: newPosts[newPosts.length - 1].id + 1,
        message: state.newPostText,
      }
      if (newPost.message !== '') {
        newPosts.push(newPost)
      }
      return {
        ...state,
        newPostText: '',
        posts: newPosts,
      }
    }
    case ADD_NEW_TEXT_POST:
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state
  }
}
export default profileReducer
