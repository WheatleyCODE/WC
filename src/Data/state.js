import { rerenderEnTree } from "../render"

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
    {id: 1338, message: 'The best technplpgies!!!'},
    {id: 1339, message: '42? Realy? Cool! 123'},
  ]
}

 export function addPost (postMessage) {
  let arr = state.postData
  let newPost = {
    id: arr[arr.length - 1].id + 1 ,
    message: `${postMessage}`
  }
  arr.push(newPost)
  rerenderEnTree(addPost, state)
}

export default state