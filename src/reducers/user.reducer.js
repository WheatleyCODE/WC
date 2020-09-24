import userConstants from '../constants/user.constants';

const initialState = {
  name: 'Dndd',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.ADD_USER_PHOTO:
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};

export default userReducer;
