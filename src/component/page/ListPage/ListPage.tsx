import React from 'react';
import { Typography } from '@material-ui/core';

import { usePosts } from 'src/hook';
import CenteredLayout from 'src/component/layout/CenteredLayout';

const ListPage = () => {
  const { data: posts, isLoading, isError } = usePosts({ enabled: false });

  return (
    <CenteredLayout>
      <Typography color="primary" variant="h1">
        ListPage
      </Typography>
      {isLoading && <Typography color="secondary"> Loading </Typography>}
      {isError && <Typography color="error"> Error </Typography>}
      {!isLoading &&
        !isError &&
        posts &&
        posts.map(({ title, content }) => (
          <p>
            {title} {content}
          </p>
        ))}
    </CenteredLayout>
  );
};

export default ListPage;
