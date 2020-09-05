
// Можно ещё создать систему управления store и state 38,39
// dispatch action и тд...
// action creator и action type и тд..
// Redux мб..
// store.js <----- Система управления <----> components
// store.js -----------------------------------↑

const ADD_POST = 'ADD-POST'
const ADD_NEW_TEXT_POST = 'ADD-NEW-TEXT-POST'

let store = {

  rerenderEnTree() {
    console.log('Патерн')
  },
  renderTree(fn) {
    this.rerenderEnTree = fn
  },


  state: {
    dialogsData: [
      {id: 'qb_wht', name: 'Дмитрий Wheatley', lastMessage: 'Го строить мост? Братанy'},
      {id: 'best', name: 'Леха Lurke', lastMessage: 'Как дела? Что как?'},
      {id: 'easport', name: 'Леголас Legolas', lastMessage: 'Аниме го, а то бан'},
      {id: '21521', name: 'Акакий Бородинскай', lastMessage: 'Что как, изи'},
      {id: 'bear', name: 'Бурый Медведь', lastMessage: 'Привет'},
      {id: 'king', name: 'Кагияма Тобио', lastMessage: 'Мог сыграть лучше'},
      {id: 'sun', name: 'Хината Шоё', lastMessage: 'Спасибо'},
    ],
    postData: [
      {id: 1337, message: 'Hey this is post, really?'},
      {id: 1338, message: 'Новый старый пост'},
    ],
    friendData: [
      {id: 'qb_wht', name: 'Дмитрий Wheatley'},
      {id: 'best', name: 'Леха Lurke'},
      {id: 'easport', name: 'Леголас Legolas'},
      {id: '21521', name: 'Акакий Бородинскай'},
      {id: 'bear', name: 'Бурый Медведь'},
      {id: 'king', name: 'Кагияма Тобио'},
      {id: 'sun', name: 'Хината Шоё'},
    ],
      newPostText: '',
  },

  addNewTextPost(newText) {
    this.state.newPostText = newText
    this.rerenderEnTree(store)
  },
 
  addPost() {
    let arr = store.state.postData
    let newPost = {
      id: arr[arr.length - 1].id + 1 ,
      message: store.state.newPostText
    }
      if (newPost.message !== '') {
        arr.push(newPost)
        this.state.newPostText = ''
        this.rerenderEnTree(store)
      } else {
        let message = ['Д','а','р','о','в','а',' ','м','и','с','т','е','р',' ','Л','у','р','е','ч','е','к',]
        message.forEach((elem, index) => {
          setTimeout(() => {
            this.state.newPostText += elem
            this.rerenderEnTree(store)
          }, index*100)
        })
      }
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {

      let arr = store.state.postData
      let newPost = {
        id: arr[arr.length - 1].id + 1 ,
        message: store.state.newPostText
      }
        if (newPost.message !== '') {
          arr.push(newPost)
          this.state.newPostText = ''
          this.rerenderEnTree(store)
        } else {
          let message = ['Д','а','р','о','в','а',' ','м','и','с','т','е','р',' ','Л','у','р','е','ч','е','к',]
          message.forEach((elem, index) => {
            setTimeout(() => {
              this.state.newPostText += elem
              this.rerenderEnTree(store)
            }, index*100)
          })
        }

    } else if(action.type === 'ADD-NEW-TEXT-POST') {

      this.state.newPostText = action.newText
      this.rerenderEnTree(store)

    }
  }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const addNewTextPostActionCreator = (text) => {
  return {type: ADD_NEW_TEXT_POST, newText: text}
}


export default store