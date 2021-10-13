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
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  id: string;
}

export interface UserState {
  isAuthenticated: boolean;
  profile?: User;
}

export interface ProfileFormData {
  email: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
}

export interface ProfileSubmitData extends ProfileFormData {
  id: string;
}

export interface PasswordChangeData {
  oldPassword: string;
  newPassword: string;
}

export interface PasswordChangeFormData extends PasswordChangeData {
  passwordConfirmation: string;
}
