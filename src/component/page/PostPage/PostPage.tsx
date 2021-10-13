// Modules
import React from 'react';

// Components
import Text from 'src/component/base/Text';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import PostView from 'src/component/view/PostView';
import PostForm from 'src/component/form/PostForm';

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
  const isNew = id === 'new';
  const { data: post, isLoading } = usePost(id, { enabled: !isNew });
  const isEditing = pathname.includes('/edit');

  // Render
  return (
    <CenteredLayout helmetProps={{ title: post?.title }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {post !== undefined && !isEditing && !isNew && (
            <PostView post={post} />
          )}
          {(isEditing || isNew) && <PostForm post={post} />}
        </>
      )}
    </CenteredLayout>
  );
};

export default PostPage;
