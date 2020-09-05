let rerenderEnTree = () => {
  
}

export function renderTree(fn) {
  rerenderEnTree = fn
}


let state = {
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
  ],
    newPostText: '',
}


export function addNewTextPost(newText) {
  state.newPostText = newText
  rerenderEnTree(addPost, state, addNewTextPost)
}

export function addPost () {
  let arr = state.postData
  let newPost = {
    id: arr[arr.length - 1].id + 1 ,
    message: state.newPostText
  }
    if (newPost.message !== '') {
      arr.push(newPost)
      state.newPostText = ''
      rerenderEnTree(addPost, state, addNewTextPost)
    } else {

      let message = ['Д','а','р','о','в','а',' ','м','и','с','т','е','р',' ','Л','у','р','е','ч','е','к',]
      message.forEach((elem, index) => {
        setTimeout(() => {
          state.newPostText += elem
          rerenderEnTree(addPost, state, addNewTextPost)
        }, index*100)
      })
    }
}

export default state