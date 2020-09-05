

let store = {

  rerenderEnTree() {
    console.log('Патерн')
  },
  renderTree(fn) {
    this.rerenderEnTree = fn
  },


  state: {
    dialogsData: [
      {id: 'qb_wht', name: 'Дмитрий', lastMessage: 'Го строить мост? Братанy'},
      {id: 'best', name: 'Леха', lastMessage: 'Как дела? Что как?'},
      {id: 'easport', name: 'Леголас', lastMessage: 'Аниме го, а то бан'},
      {id: '21521', name: 'Акакий', lastMessage: 'Что как, изи'},
      {id: 'bear', name: 'Бурый', lastMessage: 'Привет'},
      {id: 'king', name: 'Кагияма Тобио', lastMessage: 'Мог сыграть лучше'},
      {id: 'sun', name: 'Хината Шоё', lastMessage: 'Спасибо'}
    ],
    postData: [
      {id: 1337, message: 'Hey this is post, really?'},
      {id: 1338, message: 'Новый старый пост'},
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
  }
  
}



export default store