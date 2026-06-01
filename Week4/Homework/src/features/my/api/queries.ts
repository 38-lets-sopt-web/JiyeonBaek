import instance from '@/shared/api/instance';

import type {
  MemberListResponseDto,
  MyInfoResponseDto,
  UpdateMyInfoRequestDto,
  UpdateMyInfoResponseDto,
} from './types';

export const getMyInfo = async (userId: number) => {
  const response = await instance.get<MyInfoResponseDto>(`/api/v1/users/${userId}`);

  return response.data;
};

export const patchMyInfo = async (userId: number, data: UpdateMyInfoRequestDto) => {
  const response = await instance.patch<UpdateMyInfoResponseDto>(`/api/v1/users/${userId}`, data);

  return response.data;
};

export const getMembers = async () => {
  const response = await instance.get<MemberListResponseDto>('/api/v1/users');

  return response.data;
};
