import type { BaseResponse } from '@/shared/api/types';

export interface MyInfoResponseData {
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export interface UpdateMyInfoRequestDto {
  name: string;
  email: string;
  age: number;
}

export interface MemberListItem {
  id: number;
  name: string;
  part: string;
}

export interface MemberListResponseData {
  users: MemberListItem[];
}

export type MyInfoResponseDto = BaseResponse<MyInfoResponseData>;
export type UpdateMyInfoResponseDto = BaseResponse<MyInfoResponseData>;
export type MemberListResponseDto = BaseResponse<MemberListResponseData>;
