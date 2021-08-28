import React from 'react';
import { Typography } from '@material-ui/core';

import { usePosts } from 'src/hook/api/posts';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const { data: posts, isLoading, isError } = usePosts({ enabled: true });

  return (
    <CenteredLayout>
      <Typography color="primary" variant="h1" gutterBottom>
        ListPage
      </Typography>
      {isLoading && <Typography color="secondary"> Loading </Typography>}
      {isError && <Typography color="error"> Error </Typography>}
      {!isLoading &&
        !isError &&
        posts &&
        posts.map(({ id, title }) => (
          <Link to={`/post/${id}`} key={id}>
            {title}
          </Link>
        ))}
    </CenteredLayout>
  );
};

export default ListPage;
