import React from 'react';
import { useState } from 'react';

import { Typography } from '@material-ui/core';

import { useSignup, usePosts } from 'src/hook';
import CenteredLayout from 'src/component/layout/CenteredLayout';

const ListPage = () => {
  const { data: posts, isLoading, isError } = usePosts({ enabled: true });
  const { mutate } = useSignup();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
