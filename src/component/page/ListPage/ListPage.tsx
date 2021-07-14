import React from 'react';
import { useState } from 'react';
import useSignup from '../../../hook/useSignup';
import usePosts from '../../../hook/usePosts';

import CenteredLayout from '../../layout/CenteredLayout';

const ListPage = () => {
  const { data: posts, isLoading, isError } = usePosts();
  const { mutate } = useSignup();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <br />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button
        disabled={email === '' || password === ''}
        onClick={() => mutate({ email, password })}
      >
        Signup
      </button>
    </CenteredLayout>
  );
};

export default ListPage;
