let initialState = {
    friends:[
      {id: 'qb_wht', name: 'Дмитрий Wheatley'},
      {id: 'best', name: 'Леха Lurke'},
      {id: 'easport', name: 'Леголас Legolas'},
      {id: '21521', name: 'Акакий Бородинскай'},
      {id: 'bear', name: 'Бурый Медведь'},
      {id: 'king', name: 'Кагияма Тобио'},
      {id: 'sun', name: 'Хината Шоё'},
    ], 
  }

const friendsReducer = (state = initialState, action) => {
    return state
}

export default friendsReducer