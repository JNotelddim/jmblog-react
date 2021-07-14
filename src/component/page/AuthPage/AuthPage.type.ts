export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export type AuthPageType = typeof LOGIN | typeof SIGNUP;

export interface AuthPageProps {
  pageType: AuthPageType;
}
