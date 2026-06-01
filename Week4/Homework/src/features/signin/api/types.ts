import type { BaseResponse } from '@/shared/api/types';

export interface SignInRequestDto {
  loginId: string;
  password: string;
}

export interface SignInResponseData {
  userId: number;
}

export type SignInResponseDto = BaseResponse<SignInResponseData>;
