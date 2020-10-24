import {
  ADD_POST,
  ADD_NEW_TEXT_POST,
  PUSH_USER_ONE,
  PUSH_USER_TWO,
  PUSH_USER_TREE,
  ADD_NEW_STATUS,
} from './constants'

const initialState = {
  isLogin: true,
  user: {
    firstName: 'Дмитрий',
    lastName: 'Бажаев',
    avatar: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1',
    userStatus: 'Не в сети',
    sity: 'Нижний Новгород',
    languages: ['Русский', 'Английский'],
    university: 'ННГУ им Лобачевского',
    work: 'Front-end developer',
  },
  alert: 'Укажите вашу школу',
  posts: {
    postText: '',
    posts: [
      { id: '1', text: 'Самый лучший пост', date: '12 сен 2020', authorFirstName: 'Дмитрий', authorLastName: 'Бажаев', authorAvatar: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1'},
      { id: '2', text: 'Второй лучший пост в мире', date: '15 сен 2020', authorFirstName: 'Дмитрий', authorLastName: 'Бажаев', authorAvatar: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1'},
    ],
  },
  photo: [
    { id: 'pho1', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
    { id: 'pho2', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
    { id: 'pho3', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
    { id: 'pho4', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
    { id: 'pho5', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
  ],
  presents: [
    { url: 'https://vk.com/images/gift/1095/96.png', id: 'pre1' },
    { url: 'https://vk.com/sticker/4-418-96', id: 'pre2' },
    { url: 'https://vk.com/sticker/4-312-96', id: 'pre3' },
    { url: 'https://vk.com/sticker/4-312-96', id: 'pre4' },
    { url: 'https://vk.com/sticker/4-312-96', id: 'pre5' },
  ],
  friends: [
    { id: 'qb_wht', firstName: 'Дмитрий', lastName: 'Wheatley', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
    { id: 'best', firstName: 'Лёха', lastName: 'Lurke', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
    { id: 'easport', firstName: 'Леголас', lastName: 'Legolas', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
    { id: '21521', firstName: 'Аркадий', lastName: 'Борода', url: 'https://yt3.ggpht.com/a/AATXAJwKtPihONCHGwm_dvM8J2lZs873VdcJfQpaXSUkaQ=s800-c-k-c0xffffffff-no-rj-mo' },
    { id: 'bear', firstName: 'Юрий', lastName: 'Ду', url: 'https://yt3.ggpht.com/a/AATXAJwKtPihONCHGwm_dvM8J2lZs873VdcJfQpaXSUkaQ=s800-c-k-c0xffffffff-no-rj-mo' },
    { id: 'king', firstName: 'Кагеяма', lastName: 'Тобио', url: 'https://yt3.ggpht.com/a/AATXAJwKtPihONCHGwm_dvM8J2lZs873VdcJfQpaXSUkaQ=s800-c-k-c0xffffffff-no-rj-mo' },
    { id: 'sun', firstName: 'Хината', lastName: 'Шое', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
  ],
  subscribe: [
    { id: 'panzar1', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
    { id: 'panzar2', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
    { id: 'panzar3', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
  ],
}

const ProfilePage_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = state.posts.posts
      if (state.posts.postText) {
        newPost.push({ id: '3', text: state.posts.postText, date: Date.now(), authorFirstName: 'Дмитрий', authorLastName: 'Бажаев', authorAvatar: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1'},)
        state.posts.postText = ''
      }
      return {
        ...state,
        ...newPost,
      }
    }
    case ADD_NEW_TEXT_POST:
      state.posts.postText = action.newText
      return {
        ...state,
      }
    case ADD_NEW_STATUS:
      state.user.userStatus = action.newStatus
      return {
        ...state,
      }
    case PUSH_USER_ONE:
      return {
        isLogin: true,
        user: {
          firstName: 'Дмитрий',
          lastName: 'Бажаев',
          avatar: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1',
          userStatus: 'Не в сети',
          sity: 'Нижний Новгород',
          languages: ['Русский', 'Английский'],
          university: 'ННГУ им Лобачевского',
          work: 'Front-end developer',
        },
        posts: [
          { text: 'Дмитрий Бажаев one', id: '1' },
          { text: 'Дмитрий Бажаев two', id: '2' },
        ],
        photo: [
          { id: 'pho1', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
          { id: 'pho2', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
          { id: 'pho3', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
          { id: 'pho4', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
          { id: 'pho5', url: 'https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1' },
        ],
        presents: [
          { url: 'https://vk.com/images/gift/1095/96.png', id: 'pre1' },
          { url: 'https://vk.com/sticker/4-418-96', id: 'pre2' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre3' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre4' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre5' },
        ],
        friends: [
          { id: 'qb_wht', firstName: 'Дмитрий', lastName: 'Wheatley', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'best', firstName: 'Лёха', lastName: 'Lurke', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'easport', firstName: 'Леголас', lastName: 'Legolas', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: '21521', firstName: 'Аркадий', lastName: 'Борода', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'bear', firstName: 'Юрий', lastName: 'Ду', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'king', firstName: 'Кагеяма', lastName: 'Тобио', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'sun', firstName: 'Хината', lastName: 'Шое', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
        ],
        subscribe: [
          { id: 'panzar1', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
          { id: 'panzar2', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
          { id: 'panzar3', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
        ],
      }
    case PUSH_USER_TWO:
      return {
        isLogin: true,
        user: {
          firstName: 'Енот',
          lastName: 'Енотович',
          avatar: 'https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo',
          userStatus: 'Пожилой Енот',
          sity: 'Нижний Новгород',
          languages: ['Русский', 'Английский, Енотский'],
          university: 'ННГУ им Лобачевского',
          work: 'Front-end developer',
        },
        posts: [
          { text: 'Енотский пост one', id: '1' },
          { text: 'Енотский пост two', id: '2' },
          { text: 'Енотский пост three', id: '3' },
        ],
        photo: [
          { id: 'pho1', url: 'https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo' },
          { id: 'pho2', url: 'https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo' },
          { id: 'pho3', url: 'https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo' },
          { id: 'pho4', url: 'https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo' },
          { id: 'pho5', url: 'https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo' },
        ],
        presents: [
          { url: 'https://vk.com/images/gift/1095/96.png', id: 'pre1' },
          { url: 'https://vk.com/sticker/4-418-96', id: 'pre2' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre3' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre4' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre5' },
        ],
        friends: [
          { id: 'qb_wht', firstName: 'Дмитрий', lastName: 'Wheatley', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'best', firstName: 'Лёха', lastName: 'Lurke', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'easport', firstName: 'Леголас', lastName: 'Legolas', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: '21521', firstName: 'Аркадий', lastName: 'Борода', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'bear', firstName: 'Юрий', lastName: 'Ду', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'king', firstName: 'Кагеяма', lastName: 'Тобио', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'sun', firstName: 'Хината', lastName: 'Шое', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
        ],
        subscribe: [
          { id: 'panzar1', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
          { id: 'panzar2', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
          { id: 'panzar3', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
        ],
      }
    case PUSH_USER_TREE:
      return {
        isLogin: true,
        user: {
          firstName: 'Тигр',
          lastName: 'Тигрович',
          avatar: 'https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg',
          userStatus: 'Рррраsh...',
          sity: 'Нижний Новгород',
          languages: ['Русский', 'Английский, Тигриный'],
          university: 'ННГУ им Лобачевского',
          work: 'Front-end developer',
        },
        posts: [
          { text: 'Тигриный пост one', id: '1' },
          { text: 'Тигриный пост two', id: '2' },
        ],
        photo: [
          { id: 'pho1', url: 'https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg' },
          { id: 'pho2', url: 'https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg' },
          { id: 'pho3', url: 'https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg' },
          { id: 'pho4', url: 'https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg' },
          { id: 'pho5', url: 'https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg' },
        ],
        presents: [
          { url: 'https://vk.com/images/gift/1095/96.png', id: 'pre1' },
          { url: 'https://vk.com/sticker/4-418-96', id: 'pre2' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre3' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre4' },
          { url: 'https://vk.com/sticker/4-312-96', id: 'pre5' },
        ],
        friends: [
          { id: 'qb_wht', firstName: 'Дмитрий', lastName: 'Wheatley', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'best', firstName: 'Лёха', lastName: 'Lurke', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'easport', firstName: 'Леголас', lastName: 'Legolas', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: '21521', firstName: 'Аркадий', lastName: 'Борода', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'bear', firstName: 'Юрий', lastName: 'Ду', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'king', firstName: 'Кагеяма', lastName: 'Тобио', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
          { id: 'sun', firstName: 'Хината', lastName: 'Шое', url: 'https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false' },
        ],
        subscribe: [
          { id: 'panzar1', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
          { id: 'panzar2', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
          { id: 'panzar3', firstName: 'Panzar', lastName: 'Lurke', url: 'https://sun9-30.userapi.com/impf/7cVBSGU-kyZrfZ-XS4bdGTmR7jqRa0HliJDkIg/Ojy48AbCp9I.jpg?size=50x0&quality=88&crop=1,48,200,200&sign=8c90974b100436cf868bf574af38c510&ava=1' },
        ],
      }
    default:
      return state
  }
}
export default ProfilePage_Reducer
