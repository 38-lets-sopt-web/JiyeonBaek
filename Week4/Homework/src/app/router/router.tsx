import { createBrowserRouter } from 'react-router';
import { PATHS } from './paths';
import { SignupPage, MyPage } from './lazy';
import SigninPage from '@/pages/Signin/SigninPage';
import MemberSearch from '@/features/my/components/MemberSearch';
import MyInfoSearch from '@/features/my/components/MyInfoSearch';

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
    children: [
      {
        index: true,
        Component: MyInfoSearch,
      },
      {
        path: 'members',
        Component: MemberSearch,
      },
    ],
  },
]);
