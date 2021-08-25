import { LOGIN, LOGOUT } from 'src/const';

// Exports
export interface LoginUserAction {
  type: typeof LOGIN;
  payload: User;
}
export interface LogoutUserAction {
  type: typeof LOGOUT;
}

export type UserActionTypes = LoginUserAction | LogoutUserAction;

export interface User {
  username: string;
  email: string;
  id: string;
}

export interface UserState {
  isAuthenticated: boolean;
  profile?: User;
}
