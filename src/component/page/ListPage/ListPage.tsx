import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import PostCard from 'src/component/partial/PostCard';

// Styles
import { ListContainer, MenuContainer } from './ListPage.style';

// Hooks
import { usePosts } from 'src/hook/api/posts';
import { useAppSelector } from 'src/hook/redux';

// Selectors
import { selectIsAuthenticated } from 'src/redux';

/**
 * ListPage lists out summarized versions of the posts returned from the
 * api. It is a public page, with some features only enabled for authenticated users.
 */
const ListPage = () => {
  const history = useHistory();
  const { data: posts, isLoading, isError } = usePosts({ enabled: true });
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleCardClick = (postId: string) => history.push(`/post/${postId}`);

  const handleNewPostClick = () => history.push('/post/new');

  return (
    <CenteredLayout>
      <Typography color="primary" variant="h1" gutterBottom>
        ListPage
      </Typography>
      {isLoading && <Typography color="secondary"> Loading </Typography>}
      {isError && <Typography color="error"> Error </Typography>}
      {!isLoading && !isError && (
        <div>
          <MenuContainer>
            {isAuthenticated && (
              <Button onClick={handleNewPostClick}>New Post</Button>
            )}
          </MenuContainer>
          {posts && (
            <ListContainer>
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onClick={() => handleCardClick(post.id)}
                />
              ))}
            </ListContainer>
          )}
        </div>
      )}
    </CenteredLayout>
  );
};

export default ListPage;
