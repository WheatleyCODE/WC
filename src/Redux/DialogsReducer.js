let initialState = {
    dialogs: [
      {id: 'qb_wht', name: 'Дмитрий Wheatley', lastMessage: 'Го строить мост? Братанy'},
      {id: 'best', name: 'Леха Lurke', lastMessage: 'Как дела? Что как?'},
      {id: 'easport', name: 'Леголас Legolas', lastMessage: 'Аниме го, а то бан'},
      {id: '21521', name: 'Акакий Бородинскай', lastMessage: 'Что как, изи'},
      {id: 'bear', name: 'Бурый Медведь', lastMessage: 'Привет'},
      {id: 'king', name: 'Кагияма Тобио', lastMessage: 'Мог сыграть лучше'},
      {id: 'sun', name: 'Хината Шоё', lastMessage: 'Спасибо'},
    ]
  }

const dialogsReducer = (state = initialState, action) => {
    return state
}

export default dialogsReducer