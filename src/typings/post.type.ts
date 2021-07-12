export interface Post {
  title: string;
  comments: Array<unknown>;
  content: string;
}

export type PostList = Array<Post>;
