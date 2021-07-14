export type IdString = string;
export type ISODateString = string;

export interface Comment {
  id: string;
  author: IdString;
  contents: string;
  createdAt: ISODateString;
  modifiedAt: ISODateString;
  post: IdString;
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
