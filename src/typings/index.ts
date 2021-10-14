export type IdString = string;
export type ISODateString = string;
export type StringMap = {
  [key: string]: string;
};

export interface Comment {
  id: string;
  author: IdString;
  contents: string;
  createdAt: ISODateString;
  modifiedAt: ISODateString;
  post: IdString;
}

export interface SuccessIndication {
  success: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}
export interface SignupFormData extends LoginFormData {
  username?: string;
  passwordConfirmation: string;
}

export interface LoginResponse {
  accessToken: string;
}

export * from './post';
export * from './user';
export * from './redux';
export * from './snackbar';
