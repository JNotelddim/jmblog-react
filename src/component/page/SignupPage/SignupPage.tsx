// Modules
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import SignupForm from 'src/component/form/SignupForm';
import CenteredLayout from 'src/component/layout/CenteredLayout';

// Note that the styles below are from the **Login Page**!
import {
  Heading,
  Footer,
  RedirectText,
} from 'src/component/page/LoginPage/LoginPage.style';

/**
 * SignupPage is the page where a user comes to create an account.
 * After the successful account creation, they will be redirected to the /login page.
 */
const SignupPage: React.FC = () => (
  <CenteredLayout>
    <Heading>Sign up</Heading>

    <SignupForm />

    <Footer>
      <RedirectText>
        Already have an accout? <Link to={'/login'}>Login here.</Link>
      </RedirectText>
    </Footer>
  </CenteredLayout>
);

export default SignupPage;
