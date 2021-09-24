import { IdString, ISODateString } from '..';

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

export interface PostFormData {
  id?: string;
  title: string;
  content: string;
}

export interface PostSubmitData extends PostFormData {
  summary: string;
}
