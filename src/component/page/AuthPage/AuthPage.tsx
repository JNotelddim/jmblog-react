// Modules
import React, { useState } from 'react';

// Layouts
import CenteredLayout from 'src/component/layout/CenteredLayout';

// Hooks
import { useLogin } from 'src/hook';

// Types
import { LOGIN, SIGNUP, AuthPageProps } from './AuthPage.type';

// Consts
const prettyStringMap = {
  [LOGIN]: 'Login',
  [SIGNUP]: 'Signup',
};

// Exports
const AuthPage: React.FC<AuthPageProps> = ({ pageType }) => {
  const { mutate } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO use react-hooks-form?
  return (
    <CenteredLayout>
      <h2>{prettyStringMap[pageType]}</h2>
      <label htmlFor="email-input">Email</label>
      <input
        name="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password-input">Password</label>
      <input
        name="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <br />
      <button
        disabled={email === '' || password === ''}
        onClick={() => mutate({ email, password })}
      >
        {prettyStringMap[pageType]}
      </button>
    </CenteredLayout>
  );
};

export default AuthPage;
