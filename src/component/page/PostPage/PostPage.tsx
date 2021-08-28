// Modules
import React from 'react';

// Components
import Text from 'src/component/base/Text';
import CenteredLayout from 'src/component/layout/CenteredLayout';

// Hooks
import { useParams } from 'react-router-dom';
import { usePost } from 'src/hook/api/posts';

// Types
import { PostRouteParams } from './PostPage.type';

/**
 * PostPage is where the user is taken to read a post after clicking
 * post link from the list page.
 */
const PostPage: React.FC = () => {
  const { id } = useParams<PostRouteParams>();
  // get post by id;
  const { data: post } = usePost(id);
  const { title, author, content, createdAt } = post || {};

  return (
    <CenteredLayout>
      <Text variant="h2">{title}</Text>
      <Text variant="subtitle1">
        - {author}, {createdAt}
      </Text>
      <Text variant="body1">{content}</Text>
    </CenteredLayout>
  );
};

export default PostPage;
