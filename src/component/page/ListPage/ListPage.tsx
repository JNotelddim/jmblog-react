import React from 'react';
import usePosts from '../../../hook/usePosts';

import CenteredLayout from '../../layout/CenteredLayout';

const ListPage = () => {
  const { data: posts, isLoading, isError } = usePosts();
  console.log(posts);
  return (
    <CenteredLayout>
      ListPage
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
      {/* {!isLoading && !isError && posts.map((post) => <p>{post.toString()}</p>)} */}
    </CenteredLayout>
  );
};

export default ListPage;
