import React from 'react';
import usePosts from '../../../hook/usePosts';

import CenteredLayout from '../../layout/CenteredLayout';

const ListPage = () => {
  const { data: posts, isLoading, isError } = usePosts();

  return (
    <CenteredLayout>
      ListPage
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
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
