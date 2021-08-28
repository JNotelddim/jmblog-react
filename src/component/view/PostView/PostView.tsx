// Modules
import React from 'react';

// Components
import Text from 'src/component/base/Text';

// Types
import { PostViewProps } from './PostView.type';

/**
 * PostView handles rendering a post for reading
 */
const PostView: React.FC<PostViewProps> = ({ post }) => {
  const { title, author, createdAt, content } = post;

  // TODO: if authenticated && author == this user, then show Edit button.

  return (
    <>
      <Text variant="h2">{title}</Text>
      <Text variant="subtitle1">
        - {author}, {createdAt}
      </Text>
      <Text variant="body1">{content}</Text>
    </>
  );
};

export default PostView;
