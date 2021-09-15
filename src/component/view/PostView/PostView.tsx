// Modules
import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

// Components
import Text from 'src/component/base/Text';

// Hooks
import { useProfile } from 'src/hook/api/user';
import { useAppSelector } from 'src/hook/redux';

// Selectors
import { selectIsAuthenticated } from 'src/redux';

// Types
import { PostViewProps } from './PostView.type';

/**
 * PostView handles rendering a post for reading
 */
const PostView: React.FC<PostViewProps> = ({ post }) => {
  // Hooks
  const history = useHistory();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { data: profile } = useProfile({ enabled: isAuthenticated });

  // State
  const { title, author, createdAt, content } = post;
  const { id } = profile || {};

  // Handlers
  const handleEditClick = () => {
    history.push(history.location.pathname + '/edit');
  };

  // TODO: render content as markdown

  return (
    <>
      <Text variant="h2">{title}</Text>
      <Text variant="subtitle1">
        - {author}, {createdAt}
      </Text>
      <Text variant="body1">{content}</Text>
      {isAuthenticated && id === author && (
        <Button onClick={handleEditClick}>Edit</Button>
      )}
    </>
  );
};

export default PostView;
