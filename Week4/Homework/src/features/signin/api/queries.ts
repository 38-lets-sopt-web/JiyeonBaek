import instance from '@/shared/api/instance';

import type { SignInRequestDto, SignInResponseDto } from './types';

export const postSignIn = async ({ loginId, password }: SignInRequestDto) => {
  const response = await instance.post<SignInResponseDto>('/api/v1/auth/signin', {
    loginId,
    password,
  });

  return response.data;
};
