export const PATHS = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  MYPAGE: '/mypage',
} as const;

export type Routes = (typeof PATHS)[keyof typeof PATHS];
