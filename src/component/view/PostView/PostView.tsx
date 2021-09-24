// Modules
import React from 'react';
import { stateToMarkdown } from 'draft-js-export-markdown';

// Components
import { Box, IconButton } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import Text from 'src/component/base/Text';
import PostSubheading from './PostSubheading';
import { Edit } from '@material-ui/icons';

// Hooks
import { useHistory } from 'react-router';
import { useProfile } from 'src/hook/api/user';
import { useAppSelector } from 'src/hook/redux';
import { useParseJsonDraftState } from 'src/hook/effect';

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

  let markdown = '';
  const restoredState = useParseJsonDraftState(content);
  if (restoredState) {
    markdown = stateToMarkdown(restoredState.getCurrentContent());
  }

  // Handlers
  const handleEditClick = () => {
    history.push(history.location.pathname + '/edit');
  };

  return (
    <>
      <Text variant="h2">{title}</Text>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <PostSubheading authorId={author} createdAt={createdAt} />

        {/* TODO: move edit button to above post */}
        {isAuthenticated && id === author && (
          <IconButton onClick={handleEditClick}>
            <Edit />
          </IconButton>
        )}
      </Box>

      {/* TODO: fix sizing on images w/ custom renderer? or a remark plugin? */}
      <ReactMarkdown children={markdown} />
    </>
  );
};

export default PostView;
