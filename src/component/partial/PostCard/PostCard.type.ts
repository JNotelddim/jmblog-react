import { MouseEventHandler } from 'react';
import { SummarizedPost } from 'src/typings';

export interface PostCardProps {
  post: SummarizedPost;
  onClick: MouseEventHandler;
  className?: string;
}
