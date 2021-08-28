// Modules
import React from 'react';

// Components
import Text from 'src/component/base/Text';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import PostView from 'src/component/view/PostView';
import PostEditView from 'src/component/view/PostEditView';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { usePost } from 'src/hook/api/posts';

// Types
import { PostRouteParams } from './PostPage.type';

/**
 * PostPage is where the user is taken to read a post after clicking
 * post link from the list page.
 */
const PostPage: React.FC = () => {
  // Hooks
  const { id } = useParams<PostRouteParams>();
  const { pathname } = useLocation();
  const { data: post, isLoading } = usePost(id);

  // State
  const isEditing = pathname.includes('/edit');

  // Render
  return (
    <CenteredLayout>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && post !== undefined && !isEditing && (
        <PostView post={post} />
      )}
      {!isLoading && post !== undefined && isEditing && (
        <PostEditView post={post} />
      )}
    </CenteredLayout>
  );
};

export default PostPage;
