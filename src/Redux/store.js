
// Можно ещё создать систему управления store и state 38,39
// dispatch action и тд...
// action creator и action type и тд..
// Redux мб..
// store.js <----- Система управления <----> components
// store.js -----------------------------------↑

import addPostReducer from "./AddPostReducer"

let store = {

  rerenderEnTree() {
    console.log('Патерн')
  },
  renderTree(fn) {
    this.rerenderEnTree = fn
  },

  state: {
    dialogsData: {
      dialogs: [
        {id: 'qb_wht', name: 'Дмитрий Wheatley', lastMessage: 'Го строить мост? Братанy'},
        {id: 'best', name: 'Леха Lurke', lastMessage: 'Как дела? Что как?'},
        {id: 'easport', name: 'Леголас Legolas', lastMessage: 'Аниме го, а то бан'},
        {id: '21521', name: 'Акакий Бородинскай', lastMessage: 'Что как, изи'},
        {id: 'bear', name: 'Бурый Медведь', lastMessage: 'Привет'},
        {id: 'king', name: 'Кагияма Тобио', lastMessage: 'Мог сыграть лучше'},
        {id: 'sun', name: 'Хината Шоё', lastMessage: 'Спасибо'},
      ]
    },
    friendsData: {
      friends:[
        {id: 'qb_wht', name: 'Дмитрий Wheatley'},
        {id: 'best', name: 'Леха Lurke'},
        {id: 'easport', name: 'Леголас Legolas'},
        {id: '21521', name: 'Акакий Бородинскай'},
        {id: 'bear', name: 'Бурый Медведь'},
        {id: 'king', name: 'Кагияма Тобио'},
        {id: 'sun', name: 'Хината Шоё'},
      ], 
    },
      profileData: {
        posts: [
          {id: 1337, message: 'Hey this is post, really?'},
          {id: 1338, message: 'Новый старый пост'},
        ],
        newPostText: '',
      } 
  },

  dispatch(action) {

      this.state = addPostReducer(this.state, action)
      this.rerenderEnTree(store)

  }
}


export default store