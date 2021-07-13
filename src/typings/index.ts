export type IdString = string;
export type ISODateString = string;

export interface Comment {
  _id: string;
  author: IdString;
  contents: string;
  createdAt: ISODateString;
  modifiedAt: ISODateString;
  post: IdString;
}

export interface Post {
  _id: string;
  author: IdString;
  content: string;
  createdAt: ISODateString;
  comments: Array<Comment>;
  modifiedAt: ISODateString;
  title: string;
}

export type PostList = Array<Post>;
export type CommentList = Array<Comment>;

export interface FetchError {}
