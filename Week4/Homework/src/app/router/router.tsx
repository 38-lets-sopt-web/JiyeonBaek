import { createBrowserRouter } from 'react-router';
import { PATHS } from './paths';
import { SignupPage, MyPage } from './lazy';
import SigninPage from '@/pages/Signin/SigninPage';

export const router = createBrowserRouter([
  {
    path: PATHS.SIGNIN,
    Component: SigninPage,
  },
  {
    path: PATHS.SIGNUP,
    Component: SignupPage,
  },
  {
    path: PATHS.MYPAGE,
    Component: MyPage,
  },
]);
