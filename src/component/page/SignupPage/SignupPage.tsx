// Modules
import React from 'react';

// Components
import SignupForm from 'src/component/form/SignupForm';
import CenteredLayout from 'src/component/layout/CenteredLayout';

// Note that the styles below are from the Login Page!
import { Heading } from 'src/component/page/LoginPage/LoginPage.style';

/**
 * SignupPage is the page where a user comes to create an account.
 * After the successful account creation, they will be redirected to the /login page.
 */
const SignupPage: React.FC = () => (
  <CenteredLayout>
    <Heading>Sign up</Heading>

    <SignupForm />
  </CenteredLayout>
);

export default SignupPage;
