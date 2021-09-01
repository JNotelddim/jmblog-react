import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import { ListContainer } from './ListPage.style';

// Hooks
import { usePosts } from 'src/hook/api/posts';

/**
 * ListPage lists out summarized versions of the posts returned from the
 * api. It is a public page, with some features only enabled for authenticated users.
 */
const ListPage = () => {
  const { data: posts, isLoading, isError } = usePosts({ enabled: true });

  return (
    <CenteredLayout>
      <Typography color="primary" variant="h1" gutterBottom>
        ListPage
      </Typography>
      {isLoading && <Typography color="secondary"> Loading </Typography>}
      {isError && <Typography color="error"> Error </Typography>}
      {!isLoading && !isError && posts && (
        <ListContainer>
          {posts.map(({ id, title }) => (
            <Link to={`/post/${id}`} key={id}>
              {title}
            </Link>
          ))}
        </ListContainer>
      )}
    </CenteredLayout>
  );
};

export default ListPage;
