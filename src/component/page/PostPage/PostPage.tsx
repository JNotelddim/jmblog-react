import React from 'react';
import { useParams } from 'react-router-dom';
import CenteredLayout from 'src/component/layout/CenteredLayout';

import { PostRouteParams } from './PostPage.type';

const PostPage: React.FC = () => {
  const { id } = useParams<PostRouteParams>();
  // get post by id;

  return <CenteredLayout>Post: {id}</CenteredLayout>;
};

export default PostPage;
