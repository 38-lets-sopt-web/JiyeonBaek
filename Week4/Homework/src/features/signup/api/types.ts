import type { BaseResponse } from '@/shared/api/types';

export interface SignUpRequestDto {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export type SignUpResponseDto = BaseResponse<null>;
