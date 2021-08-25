import { LOGIN, LOGOUT } from 'src/const';

import { initialState, UserActionTypes, UserState } from 'src/typings/user';

const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
