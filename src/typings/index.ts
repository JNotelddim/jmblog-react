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

export interface SummarizedPost {
  id: string;
  author: IdString;
  createdAt: ISODateString;
  summary: string;
  title: string;
}

export interface Post {
  id: string;
  author: IdString;
  content: string;
  createdAt: ISODateString;
  comments: Array<IdString>;
  modifiedAt: ISODateString;
  title: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
export interface SignupFormData extends LoginFormData {
  username?: string;
  passwordConfirmation: string;
}
export interface PostEditData {
  id: string;
  modifiedAt: string;
  title?: string;
  content?: string;
}

export interface LoginResponse {
  accessToken: string;
}

export * from './user';
export * from './redux';
