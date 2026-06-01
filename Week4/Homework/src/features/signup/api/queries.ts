import instance from '@/shared/api/instance';

import type { SignUpRequestDto, SignUpResponseDto } from './types';

export const postSignUp = async ({
  loginId,
  password,
  name,
  email,
  age,
  part,
}: SignUpRequestDto) => {
  const response = await instance.post<SignUpResponseDto>('/api/v1/auth/signup', {
    loginId,
    password,
    name,
    email,
    age,
    part,
  });

  return response.data;
};
